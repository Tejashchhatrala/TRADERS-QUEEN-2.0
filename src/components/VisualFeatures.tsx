import React from 'react';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

const visualFeatures = [
  {
    image: '/images/features/buy-signal.jpg',
    title: '🟢 Buy Signal',
    desc: 'Green arrow — Buy signal on chart'
  },
  {
    image: '/images/features/sell-signal.jpg',
    title: '🔴 Sell Signal',
    desc: 'Red arrow — Sell signal'
  },
  {
    image: '/images/features/cloud.jpg',
    title: '☁️ Market Cloud',
    desc: 'Grey = Avoid | Colored = Trade'
  },
  {
    image: '/images/features/levels.jpg',
    title: '📊 Entry, SL, Target',
    desc: 'Exact levels displayed on chart'
  }
];

export const VisualFeatures = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-surface-elevated">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {visualFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-base rounded-2xl overflow-hidden border border-border-subtle shadow-md group"
            >
              <div className="aspect-[5/3] w-full overflow-hidden bg-surface-raised relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 border-t border-border-subtle">
                <h3 className="text-xl font-bold text-text-strong mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-base">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
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
