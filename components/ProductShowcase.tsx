import React, { useRef, useState, useCallback } from 'react';
import { Button } from './Button';
import { Plus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useCart } from '../context/CartContext';

export const ProductShowcase: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const productImage = "https://res.cloudinary.com/dp7bwqvoy/image/upload/v1766151654/Whisk_20fae4733d70c93be17443a9c16d2ca3dr_1_cu3u3s.jpg";

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    const glareX = ((e.clientX - left) / width) * 100;
    const glareY = ((e.clientY - top) / height) * 100;

    setRotation({ x: -y, y: x });
    setGlarePos({ x: glareX, y: glareY });
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
    <section className="py-32 bg-gradient-to-b from-black to-bajorines-dark relative" id="shop">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bajorines-red/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 order-2 lg:order-1 space-y-8">
            <ScrollReveal>
              <h2 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight">
                Crisp. Clean. <br/>
                <span className="text-bajorines-red">Unmistakably <br/>Cherry.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Bajorines isn't just a drink; it's a statement. Crafted for those who demand flavor without the fuss. Our unique cold-press process preserves the delicate antioxidants found in fresh cherries.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-4 border-t border-gray-800 pt-8 max-w-lg">
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Calories</span>
                  <span className="text-white text-xl">15 kcal</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Sugar</span>
                  <span className="text-white text-xl">0g</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Carbohydrates</span>
                  <span className="text-white text-xl">4g</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="pt-6">
                 <div className="flex items-center gap-4 mb-6">
                   <span className="text-5xl font-bold text-white">$24.00</span>
                   <span className="text-sm text-gray-500 uppercase tracking-widest">/ 12-pack</span>
                 </div>
                 <Button 
                   fullWidth 
                   className="max-w-md py-5 text-xl shadow-red-900/40"
                   onClick={handleAddToCart}
                 >
                   ADD TO CART <Plus size={24} />
                 </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center perspective-2000 py-12">
             <ScrollReveal className="w-full flex justify-center">
                <div 
                  className="relative w-full max-w-2xl transition-transform duration-100 ease-out cursor-pointer group"
                  style={{ perspective: '2000px' }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  ref={containerRef}
                >
                  <div 
                    className="relative transition-transform duration-100 ease-out animate-float overflow-hidden rounded-[2.5rem]"
                    style={{ 
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                      transformStyle: 'preserve-3d' 
                    }}
                  >
                    {/* Interactive Glare Overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                      }}
                    ></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-bajorines-red/30 rounded-full blur-3xl -z-10 group-hover:bg-bajorines-red/50 transition-colors duration-700 animate-pulse"></div>
                    
                    <img 
                      src={productImage} 
                      alt="Bajorines Premium Cherry Drink" 
                      className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] relative z-10"
                      style={{ transform: 'translateZ(50px)' }}
                    />
                    
                    <div 
                      className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full w-28 h-28 flex items-center justify-center flex-col transform z-20"
                      style={{ transform: 'translateZ(100px)' }}
                    >
                      <span className="text-3xl font-bold text-bajorines-red">New</span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Premium</span>
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