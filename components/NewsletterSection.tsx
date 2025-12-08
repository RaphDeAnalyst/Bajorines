import React from 'react';
import { Button } from './Button';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-bajorines-red text-white relative overflow-hidden w-full flex flex-col justify-center py-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Unlock 10% Off Your First Order
        </h2>
        <p className="text-red-100 text-lg mb-10 leading-relaxed">
          Join the Bajorines Club for exclusive access to new flavor drops, wellness tips, and members-only offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
            required
          />
          <Button variant="primary" className="bg-white text-bajorines-red hover:bg-gray-100 shadow-xl">
            Subscribe Now
          </Button>
        </form>
        
        <p className="mt-6 text-sm text-red-200/80">
          No spam, just cherries. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};