
import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowRight, Flame } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { InfiniteTicker } from './InfiniteTicker';
import { LiquidWave } from './LiquidWave';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroAsset = "https://res.cloudinary.com/dp7bwqvoy/image/upload/v1766151662/Create_a_dynamic_202512061927-ezgif.com-gif-to-webp-converter_lrfhvv.webp";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col bg-black">
      {/* Parallax GIF Background */}
      <div 
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img 
          src={heroAsset} 
          alt="Bajorines Bottle Splash" 
          className="w-full h-full object-cover brightness-[0.5] scale-105"
        />
      </div>

      {/* Radial Gradient for Text Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_70%)] z-10 pointer-events-none"></div>
      
      {/* Linear Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-10"></div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center container mx-auto px-6 text-center">
        <ScrollReveal delay={0.2}>
          <div className="inline-flex items-center gap-2 py-2.5 px-8 border border-white/30 rounded-full text-[12px] font-black text-white tracking-[0.4em] uppercase mb-10 backdrop-blur-xl bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-bajorines-red/50 transition-colors group cursor-default">
            <Flame size={14} className="text-bajorines-red animate-pulse" />
            EXPERIENCE THE SURGE
          </div>
        </ScrollReveal>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold text-white mb-6 leading-[0.9] tracking-tighter drop-shadow-2xl">
          BAJORINES
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-200 to-red-500 animate-pulse bg-[length:200%_auto]">
            VITALITY
          </span>
        </h1>
        
        <ScrollReveal delay={0.4}>
          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed mx-auto drop-shadow-2xl">
            100% cold-pressed cherry extract. Zero sugar. Electrolyte boosted. The modern standard for high-performance hydration.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button 
              onClick={() => scrollToSection('shop')}
              className="shadow-red-900/50 min-w-[240px] h-16 text-lg"
            >
              GET BAJORINES
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('ingredients')}
              className="backdrop-blur-sm min-w-[240px] h-16 text-lg"
            >
              OUR SOURCE <ArrowRight size={18} />
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
              Limited Offer: Buy 2 Cases, Get 1 Free
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-40">
        <InfiniteTicker />
      </div>

      {/* Liquid Transition to next section */}
      <LiquidWave color="fill-white" />
    </section>
  );
};
