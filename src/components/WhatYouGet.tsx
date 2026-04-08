import React from 'react';
import { motion } from 'motion/react';
import { Code, LineChart, Target, Bell, Globe, Infinity } from 'lucide-react';

export const WhatYouGet = () => {
  return (
    <section id="what-you-get" className="py-16 md:py-24 px-6 bg-surface-base border-y border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong leading-tight">
            What You Get for ₹2,999
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-3xl mx-auto leading-relaxed">
            Everything included. Nothing hidden. No extra charges ever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-surface-raised border border-border-subtle p-8 rounded-2xl flex flex-col items-start"
          >
             <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <Code size={24} />
             </div>
             <h3 className="text-xl font-bold text-text-strong mb-3">Full Source Code</h3>
             <p className="text-text-base text-sm leading-relaxed">
                You get the complete code — not a locked script. Read it, edit it, use it forever. It's yours like buying a book.
             </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-surface-raised border border-border-subtle p-8 rounded-2xl flex flex-col items-start"
          >
             <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <LineChart size={24} />
             </div>
             <h3 className="text-xl font-bold text-text-strong mb-3">Buy & Sell Signals</h3>
             <p className="text-text-base text-sm leading-relaxed">
                Clear arrows appear on your chart telling you when to buy and sell. No confusion. Just follow the signal.
             </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-surface-raised border border-border-subtle p-8 rounded-2xl flex flex-col items-start"
          >
             <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <Target size={24} />
             </div>
             <h3 className="text-xl font-bold text-text-strong mb-3">Automatic Levels</h3>
             <p className="text-text-base text-sm leading-relaxed">
                Every signal shows exactly where to enter, set your stop loss, and place your target. Just copy these numbers.
             </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="bg-surface-raised border border-border-subtle p-8 rounded-2xl flex flex-col items-start"
          >
             <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <Bell size={24} />
             </div>
             <h3 className="text-xl font-bold text-text-strong mb-3">Phone & Email Alerts</h3>
             <p className="text-text-base text-sm leading-relaxed">
                Set up alerts once. Get a notification on your phone and email when a signal appears. No need to watch charts.
             </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="bg-surface-raised border border-border-subtle p-8 rounded-2xl flex flex-col items-start"
          >
             <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <Globe size={24} />
             </div>
             <h3 className="text-xl font-bold text-text-strong mb-3">Works on Everything</h3>
             <p className="text-text-base text-sm leading-relaxed">
                One tool for all markets. Nifty options, gold, Bitcoin, or Reliance shares — the same indicator works on all.
             </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             className="bg-surface-raised border border-border-subtle p-8 rounded-2xl flex flex-col items-start"
          >
             <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <Infinity size={24} />
             </div>
             <h3 className="text-xl font-bold text-text-strong mb-3">Lifetime Access</h3>
             <p className="text-text-base text-sm leading-relaxed">
                Pay ₹2,999 once. No renewal, no subscription, no hidden charges. Use it for 10 years — it's yours forever.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
