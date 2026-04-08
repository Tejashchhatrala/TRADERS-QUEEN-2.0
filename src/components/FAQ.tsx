import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { CHECKOUT_LINK } from './Navbar';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "I'm new to trading. Will this work for me?",
      a: "Yes. You don't need years of experience or coding knowledge. The tool gives you clear Buy and Sell signals with exact entry, stop loss, and target levels right on the chart."
    },
    {
      q: "What is TradingView? Do I need to pay for it?",
      a: "TradingView is a popular charting platform. You can use it entirely for free. Our tool works perfectly on the free version of TradingView."
    },
    {
      q: "Is this a mobile app?",
      a: "No, it is an indicator that runs inside TradingView. You can use TradingView's app or website on your phone, tablet, or computer to see the signals."
    },
    {
      q: "I trade only Nifty/BankNifty options. Will this work?",
      a: "Yes! It automatically adjusts for Call (CE) and Put (PE) charts. You can even take signals from the main index while trading the option chart."
    },
    {
      q: "I trade gold/crypto/forex. Does it work on those too?",
      a: "Yes. One tool for all markets. If the chart is available on TradingView, this indicator works on it."
    },
    {
      q: "What does 'zero repaint' mean? Why does it matter?",
      a: "Repainting means an indicator changes its past signals to look more accurate after the fact. Our tool never repaints. Once a signal is printed on a closed candle, it stays there forever."
    },
    {
      q: "Is this a one-time payment? No monthly fees?",
      a: "Yes. ₹2,999 is a one-time payment. You get lifetime access to the full source code and no recurring charges."
    },
    {
      q: "What if it doesn't work? Can I get a refund?",
      a: "We offer a 100% money-back guarantee if you can prove the indicator repaints on a closed bar. We are that confident in our math."
    },
    {
      q: "I don't know coding. Can I still use this?",
      a: "Absolutely. You get a step-by-step setup guide. It just takes copying and pasting the text into TradingView. Takes 2 minutes."
    },
    {
      q: "How is this different from paid Telegram groups or signal services?",
      a: "You aren't relying on someone else's timing or internet connection. You get the signals live on your own chart, and you own the code forever. No monthly fees, no missed WhatsApp messages."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-surface-elevated border-y border-border-subtle">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-strong">Common Questions</h2>
          <p className="text-lg text-text-base">No jargon. Straight answers.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface-base border border-border-subtle rounded-2xl overflow-hidden hover:border-border-strong transition-colors"
            >
              <button
                id={`faq-question-${idx}`}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:bg-surface-raised transition-colors hover:bg-surface-raised"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-text-strong font-bold pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`text-brand-teal transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
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
           className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-4 text-text-strong">Stop Losing Money on Bad Signals.</h2>
          <p className="text-lg text-text-base mb-2">Start Trading with a Tool That Works.</p>
          <p className="text-text-muted text-sm mb-8">₹2,999 one-time. Everything included. No monthly fees. 50+ traders already using it — zero complaints.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
            >
              Buy Now — ₹2,999
            </a>
            <a
              href="https://wa.me/919879737819"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent hover:bg-surface-raised border border-border-strong text-text-strong font-bold py-4 px-8 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              Ask Questions on WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
