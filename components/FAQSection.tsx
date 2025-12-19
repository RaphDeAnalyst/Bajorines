
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
    <section className="bg-white py-32 w-full">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-500 text-lg">Everything you need to know about the Bajorines experience.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-bajorines-red transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all ${openIndex === index ? 'bg-bajorines-red text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
