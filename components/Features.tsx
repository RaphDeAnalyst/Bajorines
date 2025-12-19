
import React from 'react';
import { Leaf, Zap, Droplet } from 'lucide-react';
import { Feature } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Clean Energy: No Crash",
      description: "100% raw cherry extract provides a steady surge of vitality without the synthetic jitters or mid-day slump of caffeine.",
      iconName: 'Leaf',
    },
    {
      id: 2,
      title: "Rapid Recovery: Recharged",
      description: "Naturally occurring electrolytes and anthocyanins speed up muscle repair and significantly reduce post-active fatigue.",
      iconName: 'Zap',
    },
    {
      id: 3,
      title: "Pure Focus: Zero Sugar",
      description: "Sustain your mental clarity with nature's complex sugars and zero artificial sweeteners. High-performance hydration.",
      iconName: 'Droplet',
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Leaf': return <Leaf size={32} className="text-bajorines-red" />;
      case 'Zap': return <Zap size={32} className="text-bajorines-red" />;
      case 'Droplet': return <Droplet size={32} className="text-bajorines-red" />;
      default: return null;
    }
  };

  return (
    <section className="bg-white w-full py-24 md:py-32" id="benefits">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <ScrollReveal>
             <span className="text-bajorines-red font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Engineered by nature</span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">Designed for the High-Performer.</h2>
             <p className="text-gray-500 text-lg font-light">We stripped away the noise to leave only what your body needs to excel.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <ScrollReveal key={feature.id}>
              <div 
                className="flex flex-col items-center text-center p-8 md:p-10 rounded-[3rem] bg-gray-50/50 hover:bg-white border border-transparent hover:border-bajorines-red/10 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(176,0,32,0.1)] group h-full"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-bajorines-pink/40 transition-all duration-500">
                  {getIcon(feature.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-lg">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
