import React from 'react';
import { motion } from 'motion/react';

export const Markets = () => {
  const markets = [
    { name: "Nifty 50", sub: "Index & Options" },
    { name: "BankNifty", sub: "Index & Options" },
    { name: "Gold / XAUUSD", sub: "MCX & International" },
    { name: "Crypto", sub: "Bitcoin, Ethereum & more" },
    { name: "Forex", sub: "All major pairs" },
    { name: "Crude Oil", sub: "MCX & WTI" },
    { name: "Stocks", sub: "Reliance, TCS, any stock" },
    { name: "Silver & Commodities", sub: "Silver, Copper & more" }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-surface-elevated">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            One Tool. Every Market.
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto">
            If it's on TradingView, this indicator works on it. You buy once — use it on everything.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {markets.map((market, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-surface-base border border-border-subtle p-6 rounded-2xl text-center hover:border-brand-teal hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-text-strong mb-1">{market.name}</h3>
              <p className="text-text-muted text-sm">{market.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
