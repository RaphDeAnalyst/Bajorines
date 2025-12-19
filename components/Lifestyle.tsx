
import React from 'react';
import { Testimonial } from '../types';
import { CheckCircle2, Instagram, Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Lifestyle: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Endurance Athlete",
      text: "Bajorines is a non-negotiable part of my post-marathon recovery. The clean tartness hits different after 26 miles.",
      image: "https://i.pravatar.cc/150?u=alex1"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Tech Lead",
      text: "Finally, a drink that doesn't rely on synthetic caffeine to keep me sharp. I swap my 3pm coffee for a cold Bajorines.",
      image: "https://i.pravatar.cc/150?u=sarah2"
    }
  ];

  return (
    <section className="py-32 bg-bajorines-dark text-white overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        
        {/* Lifestyle Grid */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-4">
                  <Instagram size={18} className="text-bajorines-red" />
                  <span className="text-bajorines-red font-black tracking-[0.4em] uppercase text-xs">#SipTheMoment</span>
                </div>
                <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Community First.</h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                  Join the movement of thousands of high-performers who chose nature over synthetics. Tag us <span className="text-white font-bold underline decoration-bajorines-red">@Bajorines</span> for a chance to be featured.
                </p>
              </ScrollReveal>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-bajorines-red text-bajorines-red" />)}
              </div>
              <p className="text-white font-bold text-sm tracking-widest uppercase">4.9/5 Average Rating</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[600px] md:h-[800px]">
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-[2.5rem] group border border-white/5 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" alt="Athlete Drinking" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white/60 mb-2 block">Featured Performance</span>
                <p className="text-white font-bold text-xl">Recovery in the Wild</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] group border border-white/5">
              <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800" alt="Gym Workout" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] group border border-white/5">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" alt="Outdoor Active" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-[2.5rem] group border border-white/5">
               <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200" alt="Modern Lifestyle" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.id} delay={idx * 150}>
              <div className="bg-white/5 p-12 rounded-[3rem] backdrop-blur-xl border border-white/10 hover:border-bajorines-red/30 transition-all duration-500 hover:translate-y-[-10px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-bajorines-red/5 rounded-full blur-3xl -z-10 group-hover:bg-bajorines-red/10 transition-colors"></div>
                
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-bajorines-red text-bajorines-red" />)}
                </div>
                
                <p className="text-xl md:text-2xl font-light text-gray-200 mb-10 leading-relaxed">"{t.text}"</p>
                
                <div className="flex items-center gap-5">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-bajorines-red shadow-lg shadow-red-900/20" />
                  <div>
                    <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-lg">{t.name}</h4>
                        <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                            <CheckCircle2 size={10} /> Verified Buyer
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
