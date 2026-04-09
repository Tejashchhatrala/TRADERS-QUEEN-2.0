import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

const trustItems = [
  {
    image: '/images/trust/code-preview.jpg',
    title: 'Full Source Code Included',
    desc: 'Full TradingView Pine Script Code — Editable & Visible'
  },
  {
    image: '/images/trust/no-repaint.jpg',
    title: 'Zero Repaint',
    desc: 'Signal stays fixed — No manipulation'
  },
  {
    image: '/images/trust/tradingview.jpg',
    title: 'Works on Free TradingView',
    desc: 'Runs on TradingView — No software needed'
  },
  {
    image: '/images/trust/no-login.jpg',
    title: 'No Login / No Dependency',
    desc: 'No app. No account. You own it.'
  }
];

export const TrustStack = () => {
  return (
    <section id="trust" className="py-16 md:py-24 px-6 bg-surface-elevated">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-4 uppercase tracking-wider flex items-center justify-center gap-2 mx-auto w-fit">
            <ShieldCheck size={16} />
            Why This Is Different
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            Built for Transparency — Not Marketing
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto leading-relaxed">
            Most tools hide everything. This one doesn't.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-base rounded-2xl overflow-hidden border border-border-subtle shadow-md group hover:shadow-xl transition-all"
            >
              <div className="aspect-[5/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-strong mb-2 flex items-center gap-2">
                  <span className="text-brand-teal">✔</span> {item.title}
                </h3>
                <p className="text-text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center bg-surface-raised border border-border-subtle p-8 rounded-2xl max-w-2xl mx-auto"
        >
          <p className="text-2xl font-bold text-text-strong mb-2">
            This is not a black box.
          </p>
          <p className="text-lg text-text-base">
            You see everything. You control everything.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
