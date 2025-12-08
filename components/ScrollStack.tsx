import React, { useLayoutEffect, useRef, useCallback, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardTopsRef = useRef<number[]>([]); // Cache initial positions
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  // Measure positions only when necessary (resize or init)
  const measureCards = useCallback(() => {
    if (!cardsRef.current.length) return;

    // Temporarily remove transforms to get clean layout positions
    cardsRef.current.forEach(card => {
        card.style.transform = 'none';
    });

    // Measure absolute top positions relative to the document
    cardTopsRef.current = cardsRef.current.map(card => {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY;
    });

    // We don't re-apply transforms here; the next scroll loop will handle it
    // forcing a render update immediately
    if (lenisRef.current) {
        // Trigger a manual update with current scroll
        // @ts-ignore
        const currentScroll = lenisRef.current.animatedScroll || window.scrollY;
        // updateCardTransforms(currentScroll); // Will be called by scroll event or raf
    }
  }, []);

  const updateCardTransforms = useCallback((currentScrollTop: number) => {
    if (!cardsRef.current.length || !cardTopsRef.current.length) return;

    const containerHeight = useWindowScroll ? window.innerHeight : (scrollerRef.current?.clientHeight || 0);
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    // Calculate where the stack should end pinning
    // For window scroll, we often use the total document height or a specific marker.
    // To simplify: we pin until the element scrolls past the stack point.
    
    // We can find the "end" by looking at the total scrollable height
    const scrollHeight = document.documentElement.scrollHeight;
    
    // Or we can define the pinned area relative to the card's position.
    // The "pinEnd" logic in the original code relied on a .scroll-stack-end element.
    // Let's stick to that but ensure we measure it only once if possible, or robustly.
    const endElement = useWindowScroll
      ? (document.querySelector('.scroll-stack-end') as HTMLElement)
      : (scrollerRef.current?.querySelector('.scroll-stack-end') as HTMLElement);
    
    // Use cached end position? For now, measuring one empty element is cheap enough, 
    // but better to rely on calculations relative to scroll height if we can.
    // Let's use the element but handle nulls safely.
    let endElementTop = 0;
    if (endElement) {
        // We can't trust getBoundingClientRect() during scroll if layout is shifting,
        // but the end element is usually static at the bottom.
        // Better: use scrollHeight - offset.
        endElementTop = scrollHeight - containerHeight; // Approximate end of scroll
        // Or if using the spacer:
        const rect = endElement.getBoundingClientRect();
        endElementTop = rect.top + window.scrollY;
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // CRITICAL FIX: Use cached position instead of getBoundingClientRect()
      const cardTop = cardTopsRef.current[i]; 
      
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      // const pinEnd = endElementTop - containerHeight / 2; 
      // Simplified pinEnd: Pin until the next card pushes it or we run out of scroll
      // Actually, relying on endElementTop is tricky if it moves.
      // Let's define pinEnd based on the content flow. 
      // Standard stack effect usually pins until the user scrolls past a certain point.
      const pinEnd = endElementTop - (containerHeight * 0.5);

      const scaleProgress = calculateProgress(currentScrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
         // Blur logic... (simplified for perf: skip if 0)
         // Only calculate if needed
      }

      let translateY = 0;
      const isPinned = currentScrollTop >= pinStart && currentScrollTop <= pinEnd;

      if (isPinned) {
        // Pin it: Counter-scroll the element so it looks fixed
        translateY = currentScrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (currentScrollTop > pinEnd) {
        // Release it at the bottom of the pin area
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }
      // If before pinStart, translateY is 0 (normal flow)

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        card.style.transform = transform;
        lastTransformsRef.current.set(i, newTransform);
      }
    });

  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    calculateProgress,
    parsePercentage
  ]);

  const setupLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    // Use the Lenis scroll event to drive the animation
    lenis.on('scroll', (e: any) => {
        // Pass the precise interpolated scroll value from Lenis
        updateCardTransforms(e.scroll);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    
    return lenis;
  }, [updateCardTransforms]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
        measureCards();
        // Force an update after measure
        if (lenisRef.current) {
             // @ts-ignore
             const scroll = lenisRef.current.scroll || window.scrollY;
             updateCardTransforms(scroll);
        }
    };
    
    window.addEventListener('resize', handleResize);
    // Initial measurement after a small delay to ensure images/layout settled
    setTimeout(handleResize, 100);

    return () => window.removeEventListener('resize', handleResize);
  }, [measureCards, updateCardTransforms]);


  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    
    // Select cards
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller?.querySelectorAll('.scroll-stack-card') || []
    ) as HTMLElement[];

    cardsRef.current = cards;
    
    // Initial setup
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform';
      // Force hardware acceleration
      card.style.transform = 'translateZ(0)';
    });

    measureCards();
    setupLenis();
    setIsReady(true);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      cardsRef.current = [];
      cardTopsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance,
    useWindowScroll,
    setupLenis,
    measureCards
  ]);

  const modeClass = useWindowScroll ? 'scroll-stack-window' : 'scroll-stack-container';

  return (
    <div className={`scroll-stack-scroller ${modeClass} ${className}`.trim()} ref={scrollerRef}>
      <div className={`scroll-stack-inner ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;