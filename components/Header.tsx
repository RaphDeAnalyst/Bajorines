
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();

  const navItems: NavItem[] = [
    { label: 'Benefits', href: '#features' },
    { label: 'Shop', href: '#shop' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'Journal', href: '#blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-2xl border-b border-white/5 py-3' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className={`font-display text-2xl font-black tracking-tight transition-colors duration-500 text-white group-hover:text-bajorines-red`}>
            BAJORINES
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-bajorines-red text-white/80 hover:text-white`}
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
            {isScrolled && (
              <Button 
                variant="primary" 
                className="py-2 px-5 text-[10px] animate-fade-in tracking-widest font-black"
                onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SHOP NOW <ArrowRight size={12} />
              </Button>
            )}
            
            <button 
              onClick={toggleCart}
              className={`p-2.5 rounded-full transition-all relative group text-white bg-white/5 hover:bg-white/10 border border-white/5`}
            >
              <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-bajorines-red text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl py-10 px-8 flex flex-col gap-6 md:hidden animate-fade-in border-t border-white/5 h-screen">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-4xl font-display font-bold text-white border-b border-white/5 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-8">
             <Button fullWidth className="py-5 text-lg" onClick={() => { setIsMobileMenuOpen(false); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }); }}>
               SHOP BAJORINES
             </Button>
             <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                toggleCart();
              }}
              className="flex items-center justify-center gap-2 text-white/50 font-bold uppercase tracking-widest text-xs py-4"
            >
              <ShoppingBag size={16} />
              Your Bag ({itemCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
