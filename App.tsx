
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { IngredientsSection } from './components/IngredientsSection';
import { ProductShowcase } from './components/ProductShowcase';
import { ComparisonSection } from './components/ComparisonSection';
import { Lifestyle } from './components/Lifestyle';
import { FAQSection } from './components/FAQSection';
import { BlogSection } from './components/BlogSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { DiscountPopup } from './components/DiscountPopup';
import Lenis from 'lenis';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <div className="bg-black font-sans text-gray-900 selection:bg-bajorines-red selection:text-white min-h-screen">
        <Header />
        <CartDrawer />
        <DiscountPopup />
        
        <main className="w-full">
          <Hero />
          
          <div id="features" className="bg-white">
            <Features />
          </div>
          
          <div id="shop" className="bg-black">
            <ProductShowcase />
          </div>
          
          <div id="ingredients" className="bg-black">
            <IngredientsSection />
          </div>
          
          <div id="comparison" className="bg-black">
            <ComparisonSection />
          </div>
          
          <div id="about" className="bg-bajorines-dark">
            <Lifestyle />
          </div>
          
          <div id="faq" className="bg-white">
            <FAQSection />
          </div>
          
          <div id="blog" className="bg-gray-50">
            <BlogSection />
          </div>
          
          <div id="newsletter" className="bg-bajorines-red">
            <NewsletterSection />
          </div>

          <Footer />
        </main>
      </div>
    </CartProvider>
  );
};

export default App;
