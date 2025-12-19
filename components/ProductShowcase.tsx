
import React, { useRef, useState, useCallback } from 'react';
import { Button } from './Button';
import { Plus, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useCart } from '../context/CartContext';

type BundleSize = 12 | 24 | 48;

export const ProductShowcase: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [bundleSize, setBundleSize] = useState<BundleSize>(12);
  const [isSubscription, setIsSubscription] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const productImage = "https://res.cloudinary.com/dp7bwqvoy/image/upload/v1766151654/Whisk_20fae4733d70c93be17443a9c16d2ca3dr_1_cu3u3s.jpg";

  const getPrice = () => {
    let base = 24.00;
    if (bundleSize === 24) base = 44.00;
    if (bundleSize === 48) base = 82.00;
    return isSubscription ? base * 0.85 : base;
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    setRotation({ x: -y, y: x });
    setGlarePos({ x: ((e.clientX - left) / width) * 100, y: ((e.clientY - top) / height) * 100 });
  }, []);

  const handleAddToCart = () => {
    addItem({
      id: `bajorines-cherry-${bundleSize}pk${isSubscription ? '-sub' : ''}`,
      name: `Bajorines Premium Cherry (${bundleSize}-Pack)${isSubscription ? ' - Subscription' : ''}`,
      price: getPrice(),
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
              <div className="space-y-6">
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                  Nature's most potent recovery tool, delivered in a sleek, 100% recyclable vessel. Choose your vitality level below.
                </p>

                {/* Bundle Selection */}
                <div className="grid grid-cols-3 gap-3 max-w-md">
                  {[12, 24, 48].map((size) => (
                    <button
                      key={size}
                      onClick={() => setBundleSize(size as BundleSize)}
                      className={`py-4 px-2 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${
                        bundleSize === size 
                          ? 'border-bajorines-red bg-bajorines-red/10 text-white' 
                          : 'border-white/10 text-gray-500 hover:border-white/30'
                      }`}
                    >
                      <span className="text-lg font-bold">{size}</span>
                      <span className="text-[10px] uppercase font-black tracking-widest">Pack</span>
                      {size === 48 && <span className="text-[9px] bg-bajorines-red text-white px-1.5 py-0.5 rounded-full absolute -top-2">Best Value</span>}
                    </button>
                  ))}
                </div>

                {/* Purchase Type */}
                <div className="space-y-3">
                  <button 
                    onClick={() => setIsSubscription(false)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${!isSubscription ? 'border-white/40 bg-white/5' : 'border-white/10 opacity-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${!isSubscription ? 'border-bajorines-red' : 'border-gray-600'}`}>
                        {!isSubscription && <div className="w-2.5 h-2.5 bg-bajorines-red rounded-full" />}
                      </div>
                      <span className="text-white font-bold">One-time purchase</span>
                    </div>
                    <span className="text-white font-bold">${getPrice().toFixed(2)}</span>
                  </button>

                  <button 
                    onClick={() => setIsSubscription(true)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${isSubscription ? 'border-bajorines-red bg-bajorines-red/10' : 'border-white/10 opacity-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSubscription ? 'border-bajorines-red' : 'border-gray-600'}`}>
                        {isSubscription && <div className="w-2.5 h-2.5 bg-bajorines-red rounded-full" />}
                      </div>
                      <div className="text-left">
                        <span className="text-white font-bold block">Subscribe & Save 15%</span>
                        <span className="text-bajorines-red text-[10px] font-bold uppercase tracking-widest">Ships every 30 days</span>
                      </div>
                    </div>
                    <span className="text-white font-bold">${getPrice().toFixed(2)}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="pt-6">
                 <Button 
                   fullWidth 
                   className="max-w-md py-5 text-xl shadow-red-900/40"
                   onClick={handleAddToCart}
                 >
                   ADD TO CART <Plus size={24} />
                 </Button>
                 <div className="flex items-center gap-6 mt-6 text-gray-500">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                       <CheckCircle2 size={14} className="text-green-500" /> Free Shipping
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                       <CheckCircle2 size={14} className="text-green-500" /> Cancel Anytime
                    </div>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center perspective-2000 py-12">
             <ScrollReveal className="w-full flex justify-center">
                <div 
                  className="relative w-full max-w-2xl transition-transform duration-100 ease-out cursor-pointer group"
                  style={{ perspective: '2000px' }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setRotation({ x: 0, y: 0 })}
                  ref={containerRef}
                >
                  <div 
                    className="relative transition-transform duration-100 ease-out animate-float overflow-hidden rounded-[2.5rem]"
                    style={{ 
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                      transformStyle: 'preserve-3d' 
                    }}
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)` }}
                    ></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-bajorines-red/30 rounded-full blur-3xl -z-10 group-hover:bg-bajorines-red/50 transition-colors duration-700 animate-pulse"></div>
                    
                    <img 
                      src={productImage} 
                      alt="Bajorines Premium Cherry Drink" 
                      className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] relative z-10"
                      style={{ transform: 'translateZ(50px)' }}
                    />
                  </div>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
