import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-10 pb-10 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="font-display text-2xl font-bold text-bajorines-red mb-4">BAJORINES</h3>
            <p className="text-gray-500 mb-6">
              Redefining refreshment with the power of nature. Stay vibrant, stay hydrated.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-bajorines-red hover:bg-red-50 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-bajorines-red hover:bg-red-50 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-bajorines-red hover:bg-red-50 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-bajorines-red transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-bajorines-red transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-bajorines-red transition-colors">Ingredients</a></li>
                <li><a href="#" className="hover:text-bajorines-red transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-bajorines-red transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-bajorines-red transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-bajorines-red transition-colors">Shipping</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <h4 className="font-bold text-gray-900 mb-4">Join the Club</h4>
            <p className="text-sm text-gray-500 mb-4">Get 10% off your first order.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-bajorines-red w-full"
              />
              <Button className="whitespace-nowrap px-6">Sign Up</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Bajorines. All rights reserved.
        </div>
      </div>
    </footer>
  );
};