
import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowRight, Flame, Star } from 'lucide-react';
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
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <img 
          src={heroAsset} 
          alt="Bajorines Bottle Splash" 
          className="w-full h-full object-cover brightness-[0.45] scale-105"
        />
      </div>

      {/* Radial Gradient for Text Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,0,32,0.15)_0%,rgba(0,0,0,0)_70%)] z-10 pointer-events-none"></div>
      
      {/* Linear Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60 z-10"></div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center container mx-auto px-6 text-center pt-20">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="inline-flex items-center gap-2 py-2 px-6 border border-white/20 rounded-full text-[10px] font-black text-white tracking-[0.3em] uppercase backdrop-blur-md bg-white/5 group cursor-default">
              <Flame size={12} className="text-bajorines-red animate-pulse" />
              RESTOCK ALERT: 1,500 CASES REMAINING
            </div>
            
            {/* Social Proof Above Fold */}
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/5">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-black" alt="User" />
                ))}
              </div>
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-bajorines-red text-bajorines-red" />)}
                  <span className="text-white text-[10px] font-black ml-1">4.9/5</span>
                </div>
                <span className="text-white/60 text-[9px] uppercase font-bold tracking-widest">Trusted by 12,000+ High-Performers</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <h1 className="font-display text-7xl md:text-9xl lg:text-[11rem] font-bold text-white mb-6 leading-[0.85] tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          BAJORINES
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-200 to-red-600 animate-pulse bg-[length:200%_auto]">
            VITALITY
          </span>
        </h1>
        
        <ScrollReveal delay={0.4}>
          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed mx-auto drop-shadow-lg">
            100% cold-pressed cherry extract. Zero added sugar. Electrolyte boosted. <span className="text-white font-semibold">Recovery redefined.</span>
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-xl">
            <Button 
              onClick={() => scrollToSection('shop')}
              className="shadow-red-900/40 min-w-[260px] h-18 text-xl"
            >
              SHOP NOW <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('features')}
              className="backdrop-blur-md min-w-[260px] h-18 text-xl"
            >
              THE BENEFITS
            </Button>
          </div>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mt-4">
            Free Priority Shipping on Subscription Orders
          </p>
        </ScrollReveal>
      </div>

      <div className="relative z-40">
        <InfiniteTicker />
      </div>

      <LiquidWave color="fill-white" />
    </section>
  );
};
