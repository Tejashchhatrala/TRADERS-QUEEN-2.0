import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations';

const markets = [
  { name: "Nifty 50", sub: "Index" },
  { name: "BankNifty", sub: "Index" },
  { name: "Gold", sub: "Commodity" },
  { name: "Silver", sub: "Commodity" },
  { name: "Bitcoin", sub: "Crypto" },
  { name: "Ethereum", sub: "Crypto" },
  { name: "Crude Oil", sub: "Commodity" },
  { name: "Any TradingView Asset", sub: "Forex, Stocks, and more" }
];

export const Markets = () => {
  return (
    <section id="markets" className="py-16 md:py-24 px-6 bg-surface-base">
      <div className="max-w-5xl mx-auto">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            Works on Every Market
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto leading-relaxed">
            One tool. One payment. Every chart.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {markets.map((market, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="bg-surface-base border border-border-subtle p-6 rounded-2xl text-center hover:border-brand-teal hover:shadow-md transition-card cursor-pointer"
            >
              <h3 className="text-lg font-bold text-text-strong mb-1">{market.name}</h3>
              <p className="text-text-muted text-sm">{market.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
