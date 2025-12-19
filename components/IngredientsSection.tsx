
import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Leaf, Droplet, Sun, Zap, Info, BarChart3 } from 'lucide-react';
import { DrawUnderline } from './DrawText';

interface IngredientCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const IngredientCard = ({ icon, title, description, delay }: IngredientCardProps) => {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl h-full group hover:border-bajorines-red/40 transition-all duration-500 hover:translate-y-[-8px]">
        <div className="w-14 h-14 bg-bajorines-red/20 rounded-2xl flex items-center justify-center mb-6 text-bajorines-red group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
};

export const IngredientsSection: React.FC = () => {
  const [showNutrition, setShowNutrition] = useState(false);
  const cinematicAsset = "https://res.cloudinary.com/dp7bwqvoy/image/upload/v1766151652/Whisk_4a83b188693b1638666433ec19d544f6dr_1_qlcgqt.jpg";

  return (
    <section className="bg-black pt-32 pb-8 relative overflow-hidden" id="ingredients">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bajorines-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Visual Column */}
          <div className="lg:w-1/2 sticky top-32">
            <ScrollReveal>
              <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src={cinematicAsset} 
                  alt="Premium Cherry Selection" 
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                   <span className="text-bajorines-red font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">The Source</span>
                   <h2 className="text-white text-3xl md:text-4xl font-display font-bold leading-tight">Grown in the Heart of the Valleys.</h2>
                </div>
              </div>
            </ScrollReveal>

            {/* Nutrition Toggle Overlay */}
            <div className="absolute -bottom-8 -right-8 z-20">
              <button 
                onClick={() => setShowNutrition(!showNutrition)}
                className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl hover:scale-105 transition-transform flex flex-col items-start group"
              >
                <div className="flex items-center justify-between w-full gap-4 mb-2">
                  <div className="text-bajorines-red font-bold text-4xl">100%</div>
                  <Info size={20} className="text-gray-300 group-hover:text-bajorines-red transition-colors" />
                </div>
                <div className="text-gray-500 text-[10px] font-black tracking-[0.2em] uppercase">Raw Extract Only</div>
                
                {showNutrition && (
                  <div className="mt-6 pt-6 border-t border-gray-100 w-full animate-fade-in">
                    <div className="space-y-3">
                      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-900">
                        <span>Antioxidants</span>
                        <span className="text-bajorines-red">High</span>
                      </div>
                      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-900">
                        <span>Melatonin</span>
                        <span className="text-bajorines-red">Natural</span>
                      </div>
                      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-900">
                        <span>Sugar</span>
                        <span className="text-gray-400">0g Added</span>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:w-1/2 space-y-16">
            <div className="max-w-xl">
              <ScrollReveal>
                <span className="text-bajorines-red font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Engineered for Performance</span>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
                  What Goes Into <br/>
                  <DrawUnderline className="text-bajorines-red italic">Pure Vitality?</DrawUnderline>
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed font-light">
                  We don't hide behind labels. Our formula is nature's most potent recovery tool, stripped of synthetic noise and built on the Power of Three.
                </p>
              </ScrollReveal>
            </div>

            {/* Benefit-Driven "Power of 3" Grid */}
            <div className="grid grid-cols-1 gap-6">
              <IngredientCard 
                icon={<Sun size={28} />}
                title="Hand-Picked: Peak Ripeness"
                description="Our cherries are harvested in a precise 48-hour window when glucose and anthocyanin levels are at their absolute zenith. No fillers, no bruised fruit."
                delay={200}
              />
              <IngredientCard 
                icon={<Leaf size={28} />}
                title="Cold-Pressed: Nutrient Locking"
                description="Extracted via hydraulic pressure without heat. This expensive process ensures that every delicate enzyme and antioxidant survives from orchard to can."
                delay={300}
              />
              <IngredientCard 
                icon={<Zap size={28} />}
                title="Ionized: Rapid Hydration"
                description="Our proprietary ionization process balances glacial water with natural electrolytes for cellular-level absorption that beats standard recovery drinks."
                delay={400}
              />
            </div>

            {/* Data-Driven Comparison Graphic */}
            <ScrollReveal delay={500}>
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-[2.5rem] p-10 mt-12 overflow-hidden relative group">
                <div className="flex items-center gap-3 mb-8">
                  <BarChart3 className="text-bajorines-red" size={24} />
                  <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm">The Bio-Impact</h4>
                </div>
                
                <div className="space-y-10">
                  {/* Antioxidant Level Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                      <span className="text-gray-400">Antioxidant Potency (ORAC)</span>
                      <span className="text-bajorines-red">+320% vs Soda</span>
                    </div>
                    <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-bajorines-red rounded-full w-[92%] transition-all duration-1000 ease-out group-hover:shadow-[0_0_15px_rgba(176,0,32,0.8)]"></div>
                    </div>
                  </div>

                  {/* Absorption Rate Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                      <span className="text-gray-400">Hydration Absorption Speed</span>
                      <span className="text-bajorines-red">Rapid Flux</span>
                    </div>
                    <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-bajorines-red rounded-full w-[85%] transition-all duration-1000 ease-out delay-100 group-hover:shadow-[0_0_15px_rgba(176,0,32,0.8)]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Lab-Verified Bioavailability</p>
                </div>
                
                {/* Decorative background circle */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-bajorines-red/10 rounded-full blur-2xl group-hover:bg-bajorines-red/20 transition-colors"></div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
