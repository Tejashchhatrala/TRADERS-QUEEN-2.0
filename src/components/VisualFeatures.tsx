import React from 'react';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations';

const visualFeatures = [
  {
    image: '/images/features/buy-signal.jpg',
    title: '🟢 Buy Signal',
    desc: 'Green arrow — Buy signal on chart',
    market: 'Nifty, Bank Nifty, Gold, and other TradingView markets',
    signal: 'A green buy arrow and supportive cloud direction.',
    solves: 'Helps traders spot long opportunities quickly instead of scanning multiple indicators.'
  },
  {
    image: '/images/features/sell-signal.jpg',
    title: '🔴 Sell Signal',
    desc: 'Red arrow — Sell signal',
    market: 'Nifty, Bank Nifty, Gold, and other TradingView markets',
    signal: 'A red sell arrow when downside conditions appear.',
    solves: 'Clarifies when to avoid long bias or plan a short-side setup.'
  },
  {
    image: '/images/features/cloud.jpg',
    title: '☁️ Market Cloud',
    desc: 'Grey = Avoid | Colored = Trade',
    market: 'Works across supported chart markets',
    signal: 'Color-coded market cloud for trend or avoid zones.',
    solves: 'Filters noisy sideways areas so traders are not forced into every candle.'
  },
  {
    image: '/images/features/levels.jpg',
    title: '📊 Entry, SL, Target',
    desc: 'Exact levels displayed on chart',
    market: 'Index, option, and commodity charts',
    signal: 'Entry, stop loss, and target labels printed directly on the chart.',
    solves: 'Turns a signal into a structured plan with risk and exits visible upfront.'
  }
];

export const VisualFeatures = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-surface-elevated">
      <div className="max-w-6xl mx-auto">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-4 uppercase tracking-wider flex items-center justify-center gap-2 mx-auto w-fit">
            <Eye size={16} />
            What You See on Your Chart
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            Simple Visuals. Clear Decisions.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {visualFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="bg-surface-base rounded-2xl overflow-hidden border border-border-subtle shadow-md group hover:shadow-xl hover:border-border-strong transition-card cursor-pointer"
            >
              <div className="aspect-[5/3] w-full overflow-hidden bg-surface-raised relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-[opacity] duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 border-t border-border-subtle">
                <h3 className="text-xl font-bold text-text-strong mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-base">{feature.desc}</p>
                <div className="mt-4 space-y-2 rounded-xl bg-surface-raised p-4 text-sm leading-relaxed text-text-base">
                  <p><span className="font-bold text-text-strong">Market:</span> {feature.market}</p>
                  <p><span className="font-bold text-text-strong">Notice:</span> {feature.signal}</p>
                  <p><span className="font-bold text-text-strong">Solves:</span> {feature.solves}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="text-center max-w-2xl mx-auto"
        >
          <p className="text-2xl font-bold text-text-strong">
            No indicators clutter.
          </p>
          <p className="text-xl font-medium text-text-base mt-2">
            No confusion. Just clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
