import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I actually know it doesn't repaint?",
      a: "Because you get the full open-source Pine Script code. You can literally open the code and see that we use `barmerge.lookahead_off` and base all signals on confirmed closed bars (e.g., `close[1]`). The math is transparent. It is technically impossible for the signal to move once the bar closes."
    },
    {
      q: "I'm an Option Buyer. Will this help me in sideways markets?",
      a: "Yes. This is the core reason TQ 2.0 Zr was built. The MACD Momentum Cloud sits in the background. If the cloud is flat/neutral, the indicator is telling you to stay out of the market. It prevents you from taking trades where theta decay will eat your premium."
    },
    {
      q: "I only want to buy Calls (CE). Can it filter Puts?",
      a: "Yes. The indicator includes a Call Buyer Mode and a Put Buyer Mode. If you turn on Call Buyer Mode, all bearish 'Buy PUT' signals vanish from your screen. You will only see setups relevant to your specific strategy."
    },
    {
      q: "Can I use it on the free TradingView plan?",
      a: "Absolutely. TQ 2.0 Zr uses standard Pine Script v6 arrays and calculations. It works perfectly on the basic, free tier of TradingView."
    },
    {
      q: "When will I get the source code?",
      a: "The full `.pine` file will be delivered to your email inbox automatically within 2 hours of your payment."
    },
    {
      q: "What is the refund policy?",
      a: "We have a strictly verifiable guarantee: If the indicator repaints on a confirmed closed bar even once, show us the screenshot and we will refund your ₹2,999 in full. We put this in writing because the architecture makes repainting technically impossible."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#0a0c0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Full Transparency.</h2>
          <p className="text-gray-400">Everything you want to know before committing.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#13161c] border border-[#1e232b] rounded-2xl overflow-hidden hover:border-[#2a303c] transition-colors"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-white font-bold pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-[#1e232b] pt-4 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
