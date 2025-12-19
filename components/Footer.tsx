
import React from 'react';
import { Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const handlePlaceholderClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    alert(`The ${page} page is currently being updated for our new launch.`);
  };

  const handleSocialClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-white pt-20 pb-10 w-full relative z-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="font-display text-3xl font-bold text-bajorines-red mb-6">BAJORINES</h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Redefining refreshment with the power of nature. Cold-pressed cherries, electrolyte boosted, and engineered for high-performance recovery.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, label: "Instagram", url: 'https://instagram.com/bajorines' },
                { icon: <Twitter size={20} />, label: "Twitter", url: 'https://twitter.com/bajorines' },
                { icon: <Facebook size={20} />, label: "Facebook", url: 'https://facebook.com/bajorines' }
              ].map((social) => (
                <button 
                  key={social.label}
                  onClick={(e) => handleSocialClick(e, social.url)}
                  className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-bajorines-red hover:bg-red-50 hover:scale-110 transition-all duration-300"
                  aria-label={`Visit our ${social.label}`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
            <div>
              <h4 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-xs">Explore</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#shop" className="hover:text-bajorines-red transition-colors flex items-center gap-1">Shop <ExternalLink size={10} /></a></li>
                <li><a href="#about" className="hover:text-bajorines-red transition-colors">Our Community</a></li>
                <li><a href="#ingredients" className="hover:text-bajorines-red transition-colors">Quality Control</a></li>
                <li><a href="#blog" className="hover:text-bajorines-red transition-colors">The Journal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#faq" className="hover:text-bajorines-red transition-colors">FAQ</a></li>
                <li><a href="mailto:hello@bajorines.com" className="hover:text-bajorines-red transition-colors">Contact Us</a></li>
                <li><a href="#" onClick={(e) => handlePlaceholderClick(e, 'Wholesale')} className="hover:text-bajorines-red transition-colors">Wholesale</a></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h4 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#privacy" onClick={(e) => handlePlaceholderClick(e, 'Privacy Policy')} className="hover:text-bajorines-red transition-colors">Privacy</a></li>
                <li><a href="#terms" onClick={(e) => handlePlaceholderClick(e, 'Terms of Service')} className="hover:text-bajorines-red transition-colors">Terms</a></li>
                <li><a href="#shipping" onClick={(e) => handlePlaceholderClick(e, 'Shipping Policy')} className="hover:text-bajorines-red transition-colors">Shipping</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Bajorines Beverage Co. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-300">
             <span>Crafted with Purpose</span>
             <span>Cold-Pressed Daily</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
