import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Lifestyle } from './components/Lifestyle';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-bajorines-red selection:text-white">
        <Header />
        <CartDrawer />
        <main>
          <Hero />
          
          {/* Features Section */}
          <ScrollReveal>
            <Features />
          </ScrollReveal>

          <ProductShowcase />
          
          <ScrollReveal>
            <Lifestyle />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;