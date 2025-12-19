import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-10"></div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center container mx-auto px-6 text-center">
        <ScrollReveal delay={0.2}>
          <span className="inline-block py-2 px-6 border border-white/20 rounded-full text-[10px] font-bold text-white tracking-[0.3em] uppercase mb-8 backdrop-blur-md bg-white/5 shadow-lg">
            Experience the Surge
          </span>
        </ScrollReveal>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[1] tracking-tighter">
          BAJORINES
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500 animate-pulse">
            VITALITY
          </span>
        </h1>
        
        <ScrollReveal delay={0.4}>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed mx-auto drop-shadow-xl">
            100% cold-pressed cherry extract. Zero sugar. Electrolyte boosted. The modern standard for high-performance hydration.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Button 
            onClick={() => scrollToSection('shop')}
            className="shadow-red-900/50 min-w-[200px] h-16"
          >
            GET BAJORINES
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('ingredients')}
            className="backdrop-blur-sm min-w-[200px] h-16"
          >
            OUR SOURCE <ArrowRight size={18} />
          </Button>
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