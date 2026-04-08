import React from 'react';
import { motion } from 'motion/react';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 bg-surface-base">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            How It Works — 3 Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto">
            You don't need to be a coding expert. If you can use TradingView, you can use this.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-surface-raised border border-border-subtle p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-6 items-start"
          >
             <div className="w-16 h-16 shrink-0 rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl font-bold font-display">
                1
             </div>
             <div>
                <h3 className="text-2xl font-bold text-text-strong mb-3">Add It to Your TradingView Chart</h3>
                <p className="text-text-base leading-relaxed text-lg">
                   After purchase, you get the code. Copy-paste it into TradingView (free account works). It takes 2 minutes. We also send you a step-by-step setup guide.
                </p>
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-surface-raised border border-border-subtle p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-6 items-start"
          >
             <div className="w-16 h-16 shrink-0 rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl font-bold font-display">
                2
             </div>
             <div>
                <h3 className="text-2xl font-bold text-text-strong mb-3">Wait for a Buy or Sell Signal</h3>
                <p className="text-text-base leading-relaxed text-lg">
                   The tool shows clear arrows on your chart — green for buy, red for sell. It also shows a colored cloud that tells you if the market is trending (good to trade) or sideways (avoid trading).
                </p>
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-surface-raised border border-border-subtle p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-6 items-start"
          >
             <div className="w-16 h-16 shrink-0 rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl font-bold font-display">
                3
             </div>
             <div>
                <h3 className="text-2xl font-bold text-text-strong mb-3">Copy the Levels & Place Your Trade</h3>
                <p className="text-text-base leading-relaxed text-lg">
                   Every signal gives you the entry price, stop loss, and target — right on the chart. Just copy these numbers into Zerodha, Groww, Angel One, or any broker. You can also set alerts so you get a phone notification when a signal appears.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
