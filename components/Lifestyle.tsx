import React from 'react';
import { Testimonial } from '../types';

export const Lifestyle: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Fitness Instructor",
      text: "Bajorines is my go-to post-workout refresher. The flavor is intense without being sickly sweet.",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Creative Director",
      text: "The aesthetic of the can caught my eye, but the taste kept me coming back. Pure cherry bliss.",
      image: "https://picsum.photos/100/100?random=2"
    }
  ];

  return (
    <section className="py-24 bg-bajorines-dark text-white" id="about">
      <div className="container mx-auto px-6">
        
        {/* Lifestyle Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">#SIPTHEMOMENT</h2>
            <p className="text-gray-400">Join the movement. Tag us @Bajorines.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
              <img src="https://picsum.photos/800/800?random=10" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img src="https://picsum.photos/400/400?random=11" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img src="https://picsum.photos/400/400?random=12" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-2xl group">
               <img src="https://picsum.photos/800/400?random=13" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-bajorines-red/50 transition-colors">
              <p className="text-lg italic text-gray-300 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-bajorines-red" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
