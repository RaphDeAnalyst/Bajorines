import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  // Using the high-energy splash image to act as the "GIF" background
  const heroAsset = "https://file-service.googleusercontent.com/mg/Axh7y59h7k975k15545k49615647565";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* A. Background Integration: Fullscreen asset using <img> tag */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroAsset} 
          alt="Bajorines Cherry Splash" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      {/* B. Readability Layer: Dark overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* C. Text and CTA Placement: Centered on top of overlay */}
      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center">
        <ScrollReveal delay={100}>
          <span className="inline-block py-2 px-6 border border-white/30 rounded-full text-xs font-bold text-white tracking-[0.2em] uppercase mb-8 backdrop-blur-md bg-white/10">
            Premium Refreshment
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
            THE TASTE OF <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500">PURE VITALITY</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl font-light leading-relaxed mx-auto drop-shadow-md">
            Experience the crisp, natural energy of Bajorines. Real cherry extract, zero compromise, and absolute refreshment.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400} className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Button 
            onClick={() => scrollToSection('shop')}
            className="hover:scale-105 transform transition-transform shadow-red-900/50"
          >
            SHOP THE FLAVOR
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('about')}
            className="hover:scale-105 transform transition-transform backdrop-blur-sm"
          >
            OUR STORY <ArrowRight size={18} />
          </Button>
        </ScrollReveal>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-white/70">
        <span className="text-xs tracking-widest uppercase opacity-80">Scroll to Explore</span>
      </div>
    </section>
  );
};