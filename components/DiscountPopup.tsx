import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './Button';

export const DiscountPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('bajorines-popup-dismissed');
      if (!dismissed) setIsOpen(true);
    }, 3500); // Slightly delayed for a better user experience
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setIsOpen(false);
    localStorage.setItem('bajorines-popup-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 pointer-events-none">
          {/* Soft Blurred Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-md pointer-events-auto"
            onClick={dismiss}
          />

          {/* Centered Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.3
            }}
            className="relative w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] pointer-events-auto flex flex-col md:flex-row h-auto min-h-[400px] md:min-h-[500px]"
          >
            {/* Close Button */}
            <button 
              onClick={dismiss}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-20 md:text-gray-400 text-white"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            {/* Left Pane (Visual) */}
            <div className="md:w-5/12 bg-bajorines-red flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
              {/* Background Graphic/Texture */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay opacity-30 scale-110"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/20">
                   <span className="text-4xl">🍒</span>
                </div>
                <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tighter uppercase mb-2">
                  10% OFF
                </h2>
                <p className="text-white/90 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                  Your First Sip
                </p>
              </div>
              
              {/* Bottom Decoration */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Pane (Form) */}
            <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center bg-white">
              <div className="max-w-md mx-auto w-full">
                <span className="text-bajorines-red font-bold text-xs tracking-widest uppercase mb-3 block">Welcome to the club</span>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Join the Club
                </h3>
                <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed font-light">
                  Get exclusive access to new flavor drops, limited editions, and health insights from our founders.
                </p>
                
                <form 
                  className="space-y-4" 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    // Simulate submission
                    dismiss(); 
                    alert("Welcome! Check your email for your 10% discount code.");
                  }}
                >
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-bajorines-red/20 focus:bg-white text-gray-900 placeholder:text-gray-400 transition-all text-base"
                      required
                    />
                  </div>
                  <Button 
                    fullWidth 
                    className="py-4 md:py-5 text-base font-bold tracking-widest shadow-xl shadow-red-900/20"
                  >
                    UNLOCK DISCOUNT
                  </Button>
                </form>
                
                <p className="mt-8 text-center md:text-left text-xs text-gray-400">
                  By joining, you agree to our <a href="#" className="underline hover:text-gray-600">Privacy Policy</a> and <a href="#" className="underline hover:text-gray-600">Terms</a>. No spam, only vitality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};