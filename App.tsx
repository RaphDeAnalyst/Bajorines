import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Lifestyle } from './components/Lifestyle';
import { BlogSection } from './components/BlogSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="bg-black font-sans text-gray-900 selection:bg-bajorines-red selection:text-white min-h-screen">
        <Header />
        <CartDrawer />
        
        <main className="w-full">
          <div className="bg-black"><Hero /></div>
          <div className="bg-white"><Features /></div>
          <div className="bg-black"><ProductShowcase /></div>
          <div className="bg-bajorines-dark"><Lifestyle /></div>
          <div className="bg-gray-50"><BlogSection /></div>
          <div className="bg-bajorines-red"><NewsletterSection /></div>
          <div className="bg-white"><Footer /></div>
        </main>
      </div>
    </CartProvider>
  );
};

export default App;