import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Leaf, Droplet, Sun, Zap } from 'lucide-react';
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
  const cinematicAsset = "https://res.cloudinary.com/dp7bwqvoy/image/upload/v1766151652/Whisk_4a83b188693b1638666433ec19d544f6dr_1_qlcgqt.jpg";

  return (
    <section className="bg-black py-24 relative overflow-hidden" id="ingredients">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 relative">
            <ScrollReveal>
              <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src={cinematicAsset} 
                  alt="Premium Cherry Selection" 
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                   <span className="text-bajorines-red font-bold tracking-[0.3em] uppercase text-xs mb-2 block">Our Secret</span>
                   <h2 className="text-white text-3xl font-display font-bold">Grown in the Heart of the Valleys.</h2>
                </div>
              </div>
            </ScrollReveal>

            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl animate-float hidden md:block">
              <div className="text-bajorines-red font-bold text-4xl mb-1">100%</div>
              <div className="text-gray-500 text-xs font-bold tracking-widest uppercase">Pure Extract</div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="max-w-xl">
              <ScrollReveal>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  What Goes Into <br/>
                  <DrawUnderline className="text-bajorines-red italic">Pure Vitality?</DrawUnderline>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We don't hide behind labels. Our formula is as transparent as our process. Three primary pillars of health, condensed into one extraordinary drink.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <IngredientCard 
                icon={<Sun size={28} />}
                title="Montmorency Cherries"
                description="Cold-pressed within 24 hours of harvest to lock in potent anthocyanins and natural melatonin."
                delay={200}
              />
              <IngredientCard 
                icon={<Droplet size={28} />}
                title="Glacier Water"
                description="Filtered through volcanic rock to ensure a crisp, pH-balanced base that refreshes every cell."
                delay={300}
              />
              <IngredientCard 
                icon={<Zap size={28} />}
                title="Ionic Electrolytes"
                description="Potassium, magnesium, and sodium in their most bioavailable form for instant hydration."
                delay={400}
              />
              <IngredientCard 
                icon={<Leaf size={28} />}
                title="Zero Added Sugars"
                description="Sweetened only by the natural fruit fructose found in our premium cherry harvests."
                delay={500}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};