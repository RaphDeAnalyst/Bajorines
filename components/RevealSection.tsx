import React, { useEffect, useRef, useState } from 'react';

export const RevealSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealScale, setRevealScale] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the viewport the section is (0 to 1)
      const scrollProgress = 1 - (rect.top / windowHeight);
      const clampedProgress = Math.max(0, Math.min(1.5, scrollProgress));
      
      // Map progress to a scale (0% to 150% radius)
      setRevealScale(clampedProgress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-[150vh] bg-black overflow-hidden flex items-start"
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        {/* Background Base */}
        <div className="absolute inset-0 bg-bajorines-dark flex flex-col items-center justify-center text-center px-6">
           <h2 className="text-white/20 font-display text-7xl md:text-9xl font-bold tracking-tighter uppercase select-none">
             Pure Liquid
           </h2>
        </div>

        {/* Revealed Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out flex items-center justify-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1518013391915-e487594966a8?auto=format&fit=crop&q=80&w=2000')",
            clipPath: `circle(${revealScale}% at 50% 50%)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-6 max-w-2xl">
            <h3 className="font-display text-4xl md:text-6xl text-white font-bold mb-6">
              The Essence of Every Drop
            </h3>
            <p className="text-red-100 text-lg md:text-xl font-light">
              We capture the fleeting perfection of a mid-summer harvest, preserved in its most vibrant state.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};