import React, { useRef, useEffect, ReactNode } from 'react';

interface StickyScrollLayoutProps {
  children: ReactNode;
}

export const StickyScrollLayout: React.FC<StickyScrollLayoutProps> = ({ children }) => {
  const sections = React.Children.toArray(children);

  return (
    <div className="relative w-full bg-black">
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

  useEffect(() => {
    // We only need animation logic for sections that get covered by the next one.
    // The last section never gets covered, so we skip it.
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

      // Logic: As the next element enters from the bottom and moves up,
      // we scale down the current element to create depth.
      
      // Only animate if the next element is currently entering the viewport
      if (nextTop <= windowHeight && nextTop >= 0) {
        // Calculate progress: 0 when next element is at bottom, 1 when at top
        const progress = 1 - (nextTop / windowHeight); 
        
        // Scale from 1.0 down to 0.95
        const scale = 1 - (progress * 0.05); 
        
        // Fade from 1.0 down to 0.8
        const opacity = 1 - (progress * 0.2);

        contentRef.current.style.transform = `scale(${scale})`;
        contentRef.current.style.opacity = `${opacity}`;
      } else if (nextTop < 0) {
        // Fully covered
        contentRef.current.style.transform = `scale(0.95)`;
        contentRef.current.style.opacity = `0.8`;
      } else {
        // Not yet covered
        contentRef.current.style.transform = `scale(1)`;
        contentRef.current.style.opacity = `1`;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateTransform);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    updateTransform();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [index, total]);

  return (
    <div 
      ref={sectionRef}
      className="sticky top-0 w-full min-h-screen"
      style={{ zIndex: index + 1 }}
    >
      <div 
        ref={contentRef}
        className="relative w-full h-full origin-top transition-transform duration-75 ease-linear will-change-transform shadow-[0_-5px_30px_rgba(0,0,0,0.3)]"
        style={{
            // Add card-like rounded corners to all sections except the first one (Hero)
            borderRadius: index > 0 ? '40px 40px 0 0' : '0',
            overflow: 'hidden',
            // Ensure full height coverage
            minHeight: '100vh' 
        }}
      >
        {children}
      </div>
    </div>
  );
};