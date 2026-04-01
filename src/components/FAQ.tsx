import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "I'm an Option Buyer. Will this help me in sideways markets?",
      a: "Yes. This is the core reason TQ 2.0 Zr was built. The MACD Momentum Cloud sits in the background. If the cloud is neutral (⚫), the indicator is telling you the market is choppy and directionless. You stay out."
    },
    {
      q: "Does it work on weekly expiry Thursday and Wednesday trades?",
      a: "Yes. TQ 2.0 ZR works on any timeframe — 5-minute, 15-minute, or hourly charts for Thursday Nifty and Wednesday BankNifty expiry. The Momentum Cloud is especially useful on expiry days to identify whether directional premium is worth buying at all or if theta decay is imminent."
    },
    {
      q: "I trade from Zerodha or Upstox on mobile. Will this work?",
      a: "Yes. TradingView works on mobile. TQ 2.0 ZR sends alerts directly to your phone via TradingView's native alert system. Open the alert, copy the Entry/SL/TP levels into your Zerodha terminal, and you're done — no chart-watching required."
    },
    {
      q: "How do I actually know it doesn't repaint?",
      a: "Because you get the full source code. You can literally print the code and see that we enforce absolute strict bar closing. It is technically impossible for the signal to move once the bar closes."
    },
    {
      q: "I only want to buy CE options. Can it hide PE signals?",
      a: "Yes. The indicator includes a Call Buyer Mode and a Put Buyer Mode. If you turn on Call Mode, all bearish 'Buy PUT' signals vanish from your chart."
    },
    {
      q: "When will I get the source code?",
      a: "The full `.pine` script configuration file will be delivered to your email inbox automatically within 2 hours of payment success."
    },
    {
      q: "What is the refund policy?",
      a: "If the indicator repaints on a confirmed closed bar even once, show us the screenshot and we will refund your ₹2,999 full without any deductions. We can guarantee this because the architecture makes repainting impossible."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-surface-base border-y border-border-subtle">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2 text-white">Full Transparency.</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface-raised border border-border-subtle rounded-2xl overflow-hidden hover:border-border-strong transition-colors"
            >
              <button
                id={`faq-question-${idx}`}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:bg-surface-elevated transition-colors hover:bg-surface-elevated"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-white font-bold pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`text-brand-red transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                  aria-hidden="true"
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
                    <div 
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className="px-6 pb-6 text-text-base leading-relaxed border-t border-border-subtle pt-4 mt-2"
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Transition CTA Phase */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mt-16 bg-surface-raised p-8 md:p-10 rounded-3xl border border-border-subtle shadow-xl max-w-2xl mx-auto"
        >
          <p className="text-xl text-white font-bold mb-2">Still unsure about something?</p>
          <p className="text-text-muted mb-6 text-sm">Don't risk your capital until you are 100% confident.</p>
          <a href="https://wa.me/919879737819" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-transparent hover:bg-brand-red/10 border border-brand-red text-brand-red font-bold py-3 px-8 rounded-xl transition-all group w-full sm:w-auto">
            Message us on WhatsApp before you buy <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
