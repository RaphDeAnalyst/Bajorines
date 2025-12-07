import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  // Using the "Splash" image for high energy impact in the Hero
  const bgImage = "https://file-service.googleusercontent.com/mg/Axh7y59h7k975k15545k49615647565";

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Slow Zoom Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-slow-zoom opacity-90"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Stronger Dark Gradient Overlay for Text Readability against the splash */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center pt-20">
        <ScrollReveal delay={100}>
          <span className="inline-block py-1.5 px-4 border border-white/30 rounded-full text-xs font-medium text-white tracking-[0.2em] uppercase mb-8 backdrop-blur-md bg-white/5">
            Premium Refreshment
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
            THE TASTE OF <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">PURE VITALITY</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed mx-auto">
            Experience the crisp, natural energy of Bajorines. Real cherry extract, zero compromise, and absolute refreshment.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400} className="flex flex-col sm:flex-row gap-4">
          <Button className="hover:scale-105 transform transition-transform">
            SHOP THE FLAVOR
          </Button>
          <Button variant="outline" className="hover:scale-105 transform transition-transform">
            OUR STORY <ArrowRight size={18} />
          </Button>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <span className="text-xs tracking-widest uppercase opacity-70">Scroll to Explore</span>
      </div>
    </section>
  );
};