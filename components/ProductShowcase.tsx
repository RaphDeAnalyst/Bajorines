
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Button } from './Button';
import { Plus, CheckCircle2, ArrowRight, Truck, ShieldCheck, Lock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useCart } from '../context/CartContext';

type BundleSize = 12 | 24 | 48;

export const ProductShowcase: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [bundleSize, setBundleSize] = useState<BundleSize>(12);
  const [isSubscription, setIsSubscription] = useState(false);
  const [revealScale, setRevealScale] = useState(10);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { addItem } = useCart();

  const productImage = "https://res.cloudinary.com/dp7bwqvoy/image/upload/v1766151654/Whisk_20fae4733d70c93be17443a9c16d2ca3dr_1_cu3u3s.jpg";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = 1 - (rect.top / window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1.5, progress));
      setRevealScale(clampedProgress * 80 + 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Price calculation based on bundle size and subscription
   * 12 Pack: $24.00 ($2.00 / bottle)
   * 24 Pack: $44.00 ($1.83 / bottle)
   * 48 Pack: $79.20 ($1.65 / bottle) - Optimized for bulk value
   */
  const calculatePrice = (size: BundleSize, sub: boolean) => {
    let base = 24.00;
    if (size === 24) base = 44.00;
    if (size === 48) base = 79.20;
    return sub ? base * 0.85 : base;
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setRotation({ x: -y, y: x });
    setGlarePos({ x: ((e.clientX - left) / width) * 100, y: ((e.clientY - top) / height) * 100 });
  }, []);

  const handleAddToCart = () => {
    addItem({
      id: `bajorines-cherry-${bundleSize}pk${isSubscription ? '-sub' : ''}`,
      name: `Bajorines Premium Cherry (${bundleSize}-Pack)${isSubscription ? ' - Subscription' : ''}`,
      price: calculatePrice(bundleSize, isSubscription),
      image: productImage
    });
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black relative overflow-hidden" id="shop">
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-300 ease-out flex items-center justify-center overflow-hidden"
        style={{ 
          clipPath: `circle(${revealScale}% at 50% 50%)`,
        }}
      >
        <h2 className="text-white font-display text-[25vw] font-black tracking-tighter uppercase leading-none select-none opacity-5 whitespace-nowrap">
          LIQUID VITALITY
        </h2>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-bajorines-red/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="lg:w-[45%] order-2 lg:order-1 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <span className="text-bajorines-red font-black tracking-[0.4em] uppercase text-xs">Unmistakably Cherry</span>
                <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1] tracking-tighter">
                  Crisp. <br/>
                  Clean. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Refreshing.</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="space-y-8">
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg font-light">
                  Capturing the fleeting perfection of a mid-summer harvest. No shortcuts, just pure Montmorency cherries.
                </p>

                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2.5rem] backdrop-blur-2xl">
                    <h3 className="text-white text-xs font-black tracking-widest mb-6 flex items-center gap-2 opacity-60">
                        SELECT PACK SIZE
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-3 mb-8">
                    {[12, 24, 48].map((size) => (
                        <button
                        key={size}
                        onClick={() => setBundleSize(size as BundleSize)}
                        className={`relative py-5 rounded-2xl border-2 transition-all flex flex-col items-center gap-0.5 overflow-hidden group/btn ${
                            bundleSize === size 
                            ? 'border-bajorines-red bg-bajorines-red/20 text-white' 
                            : 'border-white/5 text-gray-500 hover:border-white/20 hover:bg-white/5'
                        }`}
                        >
                        <span className="text-2xl font-black leading-none">{size}</span>
                        <span className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-2">Pack</span>
                        
                        {/* Price Per Bottle Logic */}
                        <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                          bundleSize === size ? 'bg-bajorines-red text-white' : 'bg-white/5 text-gray-400'
                        }`}>
                          ${(calculatePrice(size as BundleSize, false) / size).toFixed(2)} <span className="text-[8px] opacity-70">/ bottle</span>
                        </div>

                        {size === 48 && (
                            <span className="absolute top-0 right-0 bg-bajorines-red text-white text-[7px] font-black px-1.5 py-0.5 rounded-bl-lg">BEST VALUE</span>
                        )}
                        </button>
                    ))}
                    </div>

                    <div className="space-y-3">
                        <button 
                            onClick={() => setIsSubscription(false)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${!isSubscription ? 'border-white/20 bg-white/10' : 'border-white/5 opacity-50 hover:opacity-100 hover:border-white/20'}`}
                        >
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${!isSubscription ? 'border-bajorines-red' : 'border-gray-700'}`}>
                                  {!isSubscription && <div className="w-2 h-2 bg-bajorines-red rounded-full" />}
                              </div>
                              <span className="text-white text-sm font-bold">Single Purchase</span>
                            </div>
                            <span className="text-white font-bold">
                              ${calculatePrice(bundleSize, false).toFixed(2)}
                            </span>
                        </button>

                        <button 
                            onClick={() => setIsSubscription(true)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${isSubscription ? 'border-bajorines-red bg-bajorines-red/20' : 'border-white/5 opacity-50 hover:opacity-100 hover:border-white/20'}`}
                        >
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${isSubscription ? 'border-bajorines-red' : 'border-gray-700'}`}>
                                  {isSubscription && <div className="w-2 h-2 bg-bajorines-red rounded-full" />}
                              </div>
                              <div className="text-left">
                                  <span className="text-white text-sm font-bold block">Subscribe & Save 15%</span>
                                  <span className="text-bajorines-red text-[8px] font-black uppercase tracking-widest">Ships every 30 days</span>
                              </div>
                            </div>
                            <span className="text-white font-bold">
                              ${calculatePrice(bundleSize, true).toFixed(2)}
                            </span>
                        </button>
                    </div>
                </div>

                <div className="pt-2">
                   <Button 
                     fullWidth 
                     className="py-6 text-lg shadow-2xl shadow-red-900/30 group uppercase tracking-widest"
                     onClick={handleAddToCart}
                   >
                     ADD TO BAG <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                   </Button>
                   
                   {/* Optimized De-Risk Trust Signals */}
                   <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 justify-center lg:justify-start">
                      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-500">
                         <Truck size={14} className="text-bajorines-red" /> FREE SHIPPING ($50+)
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-500">
                         <ShieldCheck size={14} className="text-bajorines-red" /> SATISFACTION GUARANTEE
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-500">
                         <Lock size={14} className="text-bajorines-red" /> SECURE CHECKOUT
                      </div>
                   </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-[55%] order-1 lg:order-2 flex justify-center perspective-2000 py-6 md:py-12">
             <ScrollReveal className="w-full flex justify-center">
                <div 
                  className="relative w-full max-w-xl transition-transform duration-100 ease-out cursor-pointer group"
                  style={{ perspective: '2000px' }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setRotation({ x: 0, y: 0 })}
                  ref={containerRef}
                >
                  <div 
                    className="relative transition-transform duration-300 ease-out animate-float"
                    style={{ 
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                      transformStyle: 'preserve-3d' 
                    }}
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)` }}
                    ></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-bajorines-red/20 rounded-full blur-[120px] -z-10 group-hover:bg-bajorines-red/40 transition-colors duration-700 animate-pulse"></div>
                    
                    <img 
                      src={productImage} 
                      alt="Bajorines Premium Cherry Drink" 
                      className="w-full h-auto object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.8)] relative z-10 scale-125 mix-blend-screen"
                      style={{ transform: 'translateZ(100px)' }}
                    />
                    
                    <div className="absolute top-0 -right-4 bg-black/40 backdrop-blur-3xl border border-white/10 p-5 rounded-[2rem] z-30 transform translateZ(180px) shadow-2xl hidden md:block group-hover:border-bajorines-red/30 transition-colors">
                        <div className="text-[9px] font-black text-bajorines-red uppercase tracking-widest mb-2 border-b border-bajorines-red/20 pb-1">Raw Benefits</div>
                        <div className="space-y-1">
                          <div className="text-white text-xs font-bold">+ High Antioxidants</div>
                          <div className="text-white text-xs font-bold">+ 0g Added Sugar</div>
                          <div className="text-white text-xs font-bold">+ Ionic Electrolytes</div>
                        </div>
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
