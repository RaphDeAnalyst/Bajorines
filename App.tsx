import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Lifestyle } from './components/Lifestyle';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { StickyScrollLayout } from './components/StickyScrollLayout';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-neutral-100 font-sans text-gray-900 selection:bg-bajorines-red selection:text-white">
        <Header />
        <CartDrawer />
        
        <main>
          <StickyScrollLayout>
            {/* Card 1: Hero */}
            <div className="w-full h-full">
              <Hero />
            </div>
            
            {/* Card 2: Features */}
            <div className="w-full h-full bg-white flex flex-col justify-center min-h-screen">
              <Features />
            </div>

            {/* Card 3: Product Showcase */}
            <div className="w-full h-full bg-bajorines-dark flex flex-col justify-center min-h-screen">
              <ProductShowcase />
            </div>
            
            {/* Card 4: Lifestyle */}
            <div className="w-full h-full bg-bajorines-dark flex flex-col justify-center min-h-screen">
              <Lifestyle />
            </div>

            {/* Card 5: Footer */}
            <div className="w-full h-full bg-white flex flex-col justify-center min-h-screen">
              <Footer />
            </div>
          </StickyScrollLayout>
        </main>
      </div>
    </CartProvider>
  );
};

export default App;