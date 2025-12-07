import React from 'react';
import { Leaf, Zap, Droplet } from 'lucide-react';
import { Feature } from '../types';

export const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "100% Natural Ingredients",
      description: "Sourced directly from premium orchards. No artificial preservatives or colors.",
      iconName: 'Leaf',
    },
    {
      id: 2,
      title: "Electrolyte Boost",
      description: "Naturally charged with potassium and magnesium to keep you hydrated and active.",
      iconName: 'Zap',
    },
    {
      id: 3,
      title: "Zero Added Sugar",
      description: "Sweetened by nature. Enjoy the guilt-free taste of pure cherry essence.",
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
    <section className="py-24 bg-white" id="ingredients">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-bajorines-pink/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-bajorines-pink flex items-center justify-center mb-6 shadow-sm">
                {getIcon(feature.iconName)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
