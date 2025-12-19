
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is there any added sugar?",
      answer: "Absolutely not. Bajorines is 100% fruit-derived. The subtle sweetness comes entirely from the natural fructose of our cold-pressed Montmorency cherries."
    },
    {
      question: "When is the best time to drink Bajorines?",
      answer: "While it's great anytime, we recommend drinking it post-workout for recovery or 30 minutes before bed to take advantage of the naturally occurring melatonin for deeper rest."
    },
    {
      question: "How long does shipping take?",
      answer: "We ship all orders within 24 hours. Depending on your location, you can expect your delivery within 2-4 business days. Subscription orders are prioritized."
    },
    {
      question: "What is your return policy?",
      answer: "We stand by our product with a 30-day Taste Guarantee. If you're not completely vibrant after your first case, contact us for a full refund."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 w-full border-t border-gray-100" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-bajorines-red font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Information</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-500 text-lg md:text-xl font-light">Everything you need to know about the Bajorines experience.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="divide-y divide-gray-100 border-y border-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left transition-all hover:px-2"
                >
                  <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-bajorines-red transition-colors pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 p-3 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-bajorines-red text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-600'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 pb-10' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Removed delay={200} and tightened margin to mt-12 */}
        <ScrollReveal>
          <div className="mt-12 p-10 bg-gray-50 rounded-[3rem] text-center">
            <h3 className="text-gray-900 font-bold text-xl mb-2">Still have questions?</h3>
            <p className="text-gray-500 mb-6 font-light">We're here to help you on your journey to vitality.</p>
            <a href="mailto:support@bajorines.com" className="inline-flex items-center gap-2 text-bajorines-red font-black uppercase tracking-widest text-xs hover:gap-3 transition-all">
              Contact Support <Plus size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
