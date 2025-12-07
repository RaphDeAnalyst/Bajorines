import React, { useRef, useState, useCallback } from 'react';
import { Button } from './Button';
import { Plus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useCart } from '../context/CartContext';

export const ProductShowcase: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  // Using the "Clean Bottle on Black" image. 
  // We switched the section to dark mode so this image blends perfectly.
  const productImage = "https://file-service.googleusercontent.com/mg/Axh7y59a72k1s343p2x7p3w458s438x47";

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    setRotation({ x: -y, y: x });
  }, []);

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleAddToCart = () => {
    addItem({
      id: 'bajorines-cherry-12pk',
      name: 'Bajorines Premium Cherry (12-Pack)',
      price: 24.00,
      image: productImage
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-bajorines-dark to-black overflow-hidden relative" id="shop">
      {/* Background radial gradient to highlight the product */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bajorines-red/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1 space-y-8">
            <ScrollReveal>
              <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-none">
                Crisp. Clean. <br/>
                <span className="text-bajorines-red">Unmistakably Cherry.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-lg text-gray-400 leading-relaxed">
                Bajorines isn't just a drink; it's a statement. Crafted for those who demand flavor without the fuss. Our unique cold-press process preserves the delicate antioxidants found in fresh cherries.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-4 border-t border-gray-800 pt-8">
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Calories</span>
                  <span className="text-white text-lg">15 kcal</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Sugar</span>
                  <span className="text-white text-lg">0g</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Carbohydrates</span>
                  <span className="text-white text-lg">4g</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="pt-6">
                 <div className="flex items-center gap-4 mb-6">
                   <span className="text-4xl font-bold text-white">$24.00</span>
                   <span className="text-sm text-gray-500">/ 12-pack</span>
                 </div>
                 <Button 
                   fullWidth 
                   className="max-w-md py-4 text-lg shadow-red-900/30"
                   onClick={handleAddToCart}
                 >
                   ADD TO CART <Plus size={20} />
                 </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Image Container */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center perspective-1000">
             <ScrollReveal className="w-full flex justify-center">
                <div 
                  className="relative w-full max-w-lg transition-transform duration-100 ease-out cursor-pointer group"
                  style={{ perspective: '1000px' }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  ref={containerRef}
                >
                  <div 
                    className="relative transition-transform duration-100 ease-out"
                    style={{ 
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                      transformStyle: 'preserve-3d' 
                    }}
                  >
                    {/* Glowing effect behind can */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-bajorines-red/30 rounded-full blur-3xl -z-10 group-hover:bg-bajorines-red/40 transition-colors duration-500"></div>
                    
                    <img 
                      src={productImage} 
                      alt="Bajorines Premium Cherry Drink" 
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      style={{ transform: 'translateZ(20px)' }}
                    />
                    
                    {/* Floating Badge */}
                    <div 
                      className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full p-4 w-24 h-24 flex items-center justify-center flex-col transform translate-z-50 animate-float"
                      style={{ transform: 'translateZ(60px)' }}
                    >
                      <span className="text-2xl font-bold text-bajorines-red">New</span>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">Flavor</span>
                    </div>
                  </div>
                </div>
             </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};