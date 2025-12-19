import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const StaggeredText: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(' ');
  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <span 
          key={i} 
          className="inline-block animate-fade-in opacity-0" 
          style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
};

export const Hero: React.FC = () => {
  const heroAsset = "https://file-service.googleusercontent.com/mg/Axh7y59h7k975k15545k49615647565";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background with Zoom and Pan effect */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroAsset} 
          alt="Bajorines Cherry Splash" 
          className="w-full h-full object-cover animate-slow-zoom brightness-75"
        />
      </div>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center">
        <ScrollReveal delay={100}>
          <span className="inline-block py-2 px-6 border border-white/20 rounded-full text-[10px] font-bold text-white tracking-[0.3em] uppercase mb-8 backdrop-blur-md bg-white/5">
            Crafted for Perfection
          </span>
        </ScrollReveal>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          <StaggeredText text="THE TASTE OF" /><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500 inline-block mt-2 animate-float">
            PURE VITALITY
          </span>
        </h1>
        
        <ScrollReveal delay={800}>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed mx-auto drop-shadow-md">
            Experience the crisp, natural energy of Bajorines. Real cherry extract, zero compromise, and absolute refreshment.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={1000} className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Button 
            onClick={() => scrollToSection('shop')}
            className="shadow-red-900/50"
          >
            SHOP THE FLAVOR
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('ingredients')}
            className="backdrop-blur-sm"
          >
            DISCOVER PURE SOURCE <ArrowRight size={18} />
          </Button>
        </ScrollReveal>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white font-bold">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};