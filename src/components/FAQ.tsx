import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { CHECKOUT_LINK } from './Navbar';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: "new-to-trading",
      q: "I'm new to trading. Will this work for me?",
      a: "It can help beginners read structured chart levels, but it does not remove trading risk. The tool displays Buy and Sell signals with entry, stop loss, and target levels right on the chart."
    },
    {
      id: "tradingview-info",
      q: "What is TradingView? Do I need to pay for it?",
      a: "TradingView is a popular charting platform. You can use it entirely for free. Our tool is designed to run on the free version of TradingView."
    },
    {
      id: "mobile-app",
      q: "Is this a mobile app?",
      a: "No, it is an indicator that runs inside TradingView. You can use TradingView's app or website on your phone, tablet, or computer to see the signals."
    },
    {
      id: "nifty-banknifty",
      q: "I trade only Nifty/BankNifty options. Will this work?",
      a: "Yes. It includes settings for Call (CE) and Put (PE) charts, and you can review signals from the main index while trading an option chart."
    },
    {
      id: "multi-market",
      q: "I trade gold/crypto/forex. Does it work on those too?",
      a: "It is designed for TradingView charts across multiple markets, including gold, crypto, and forex. Market behavior varies, so always test settings and manage risk."
    },
    {
      id: "zero-repaint",
      q: "What does 'zero repaint' mean? Why does it matter?",
      a: "Repainting means an indicator changes its past signals to look more accurate after the fact. The indicator is built so signals on closed candles should not change. Once a signal is printed on a closed candle, it is intended to stay there."
    },
    {
      id: "pricing",
      q: "Is this a one-time payment? No monthly fees?",
      a: "Yes. ₹2,999 is a one-time payment. You get lifetime access to the full source code and no recurring charges."
    },
    {
      id: "refund-policy",
      q: "What if it doesn't work? Can I get a refund?",
      a: "Refunds are available only under our conditional zero-repaint guarantee: submit proof within 7 days of purchase showing a signal changed or disappeared after the candle closed. Send the chart link, screenshots or screen recording, symbol, timeframe, and timestamp to WhatsApp support at +91 98797 37819. Setup issues, strategy preference, market losses, or results from changing settings do not qualify."
    },
    {
      id: "coding-requirements",
      q: "I don't know coding. Can I still use this?",
      a: "Yes. You get a step-by-step setup guide for copying and pasting the code into TradingView. Setup time can vary by user."
    },
    {
      id: "telegram-comparison",
      q: "How is this different from paid Telegram groups or signal services?",
      a: "You are not waiting for someone else to send an alert. Signals are generated directly on your TradingView chart, the source code is included, and there are no monthly fees."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-surface-elevated border-y border-border-subtle">
      <div className="max-w-4xl mx-auto">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-strong">Common Questions</h2>
          <p className="text-lg text-text-base">No jargon. Straight answers.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              variants={staggerItem}
              className="bg-surface-base border border-border-subtle rounded-2xl overflow-hidden hover:border-border-strong transition-card"
            >
              <button
                id={`faq-question-${idx}`}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:bg-surface-raised transition-micro hover:bg-surface-raised"
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
        </motion.div>

        {/* Transition CTA Phase */}
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-4 text-text-strong">Avoid random entries with clearer trade conditions.</h2>
          <p className="text-lg text-text-base mb-2">Use chart-based signals with defined levels.</p>
          <p className="text-text-muted text-sm mb-8">₹2,999 one-time. Everything included. No monthly fees. 50+ traders already using it. Trading involves risk; no tool can guarantee profits or prevent losses.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-micro cursor-pointer hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
            >
              Buy Now — ₹2,999
            </a>
            <a
              href="https://wa.me/919879737819"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent hover:bg-surface-raised border border-border-strong text-text-strong font-bold py-4 px-8 rounded-xl transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              Ask Questions on WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
