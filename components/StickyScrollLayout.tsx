import React, { useRef, useEffect, ReactNode } from 'react';

interface StickyScrollLayoutProps {
  children: ReactNode;
}

export const StickyScrollLayout: React.FC<StickyScrollLayoutProps> = ({ children }) => {
  const sections = React.Children.toArray(children);

  return (
    <div className="relative w-full bg-black scroll-smooth snap-y snap-mandatory h-screen overflow-y-auto">
      {sections.map((child, index) => (
        <StickySection key={index} index={index} total={sections.length}>
          {child}
        </StickySection>
      ))}
    </div>
  );
};

const StickySection: React.FC<{ children: ReactNode; index: number; total: number }> = ({ children, index, total }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Determine alignment based on section position
  // The last section (Footer) goes to the bottom. Others are centered.
  const isLast = index === total - 1;
  const alignmentClass = isLast ? 'justify-end pb-0' : 'justify-center';

  useEffect(() => {
    // We only animate the sections that are NOT the last one.
    // The last section just slides on top and sits there.
    if (index === total - 1) return;

    let rafId: number;

    const updateTransform = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const el = sectionRef.current;
      const nextEl = el.nextElementSibling as HTMLElement;

      if (!nextEl) return;

      const rect = nextEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const nextTop = rect.top;

      // Logic: As the next element enters from the bottom (nextTop < windowHeight),
      // we scale down the current element slightly to create depth.
      
      // Calculate how far up the next slide has moved (0 = just entered bottom, 1 = reached top)
      if (nextTop <= windowHeight) {
        // Map nextTop from windowHeight -> 0 to progress 0 -> 1
        // We clamp it so it doesn't go crazy if overscrolled
        const rawProgress = 1 - (nextTop / windowHeight); 
        const progress = Math.max(0, Math.min(1, rawProgress));
        
        // Scale from 1.0 down to 0.90
        const scale = 1 - (progress * 0.1); 
        
        // Darken slightly from 1.0 brightness to 0.5
        const brightness = 1 - (progress * 0.5);
        
        // Add Blur effect as requested
        const blur = progress * 10; // 0px to 10px blur
        
        contentRef.current.style.transform = `scale(${scale})`;
        contentRef.current.style.filter = `brightness(${brightness}) blur(${blur}px)`;
      } else {
        // Reset if not interacting
        contentRef.current.style.transform = `scale(1)`;
        contentRef.current.style.filter = `brightness(1) blur(0px)`;
      }
    };

    const handleScroll = () => {
       rafId = requestAnimationFrame(updateTransform);
    };
    
    // In this implementation, the parent .relative wrapper in StickyScrollLayout handles the scroll
    const scrollContainer = sectionRef.current?.parentElement;
    
    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('resize', handleScroll);
    
    return () => {
      if (scrollContainer) scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [index, total]);

  return (
    <div 
      ref={sectionRef}
      className="sticky top-0 w-full min-h-screen snap-start shrink-0"
      style={{ zIndex: index + 1 }}
    >
      <div 
        ref={contentRef}
        className={`relative w-full h-full min-h-screen origin-top transition-transform duration-75 ease-linear will-change-transform shadow-[0_-10px_40px_rgba(0,0,0,0.5)] bg-inherit flex flex-col ${alignmentClass}`}
        style={{
            // Create the card look: Rounded top corners for all except Hero (index 0)
            borderRadius: index > 0 ? '40px 40px 0 0' : '0',
            overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
};