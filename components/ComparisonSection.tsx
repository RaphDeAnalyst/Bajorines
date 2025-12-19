
import React from 'react';
import { Check, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ComparisonSection: React.FC = () => {
  const rows = [
    { label: "100% Raw Cherry Extract", bajorines: true, others: false },
    { label: "Zero Added Cane Sugar", bajorines: true, others: false },
    { label: "Naturally Occurring Melatonin", bajorines: true, others: false },
    { label: "Cold-Pressed (Never Heated)", bajorines: true, others: false },
    { label: "Ionic Electrolyte Boost", bajorines: true, others: "Maybe" },
    { label: "Synthetic Dyes & Colors", bajorines: false, others: true },
  ];

  return (
    <section className="bg-black py-32 w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-bajorines-red font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Gold Standard</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">How we stack up.</h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 border-b border-white/10 pb-8 mb-8 text-center items-end">
            <div className="text-left text-gray-500 font-bold uppercase tracking-widest text-[10px]">Feature</div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-bajorines-red font-display text-2xl font-bold">Bajorines</span>
            </div>
            <div className="text-gray-500 font-display text-xl font-medium opacity-50">Leading Brands</div>
          </div>

          <div className="space-y-2">
            {rows.map((row, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="grid grid-cols-3 py-6 border-b border-white/5 items-center text-center group hover:bg-white/[0.02] transition-colors rounded-xl px-4">
                  <div className="text-left text-gray-300 font-medium md:text-lg">{row.label}</div>
                  <div className="flex justify-center">
                    {row.bajorines ? (
                      <div className="w-8 h-8 rounded-full bg-bajorines-red/20 flex items-center justify-center text-bajorines-red shadow-[0_0_15px_rgba(176,0,32,0.3)]">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-500">
                        <X size={20} />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.others === true ? (
                      <div className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-600">
                        <Check size={18} />
                      </div>
                    ) : row.others === "Maybe" ? (
                        <span className="text-gray-600 text-xs font-bold uppercase tracking-tighter">Varies</span>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-gray-700">
                        <X size={18} />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-gray-500 text-sm italic">Based on independent nutritional analysis of top 5 sparkling beverage brands 2024.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
