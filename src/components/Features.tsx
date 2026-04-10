import React from 'react';
import { motion } from 'motion/react';
import { Activity, Target, Zap, TrendingUp, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations';

export const Features = () => {
  const features = [
    {
      icon: <TrendingUp size={28} />,
      title: "Clear Buy & Sell Signals",
      desc: "Green arrow = Buy. Red arrow = Sell. No confusion, no guessing. The signal appears and stays — it never changes after the fact."
    },
    {
      icon: <Activity size={28} />,
      title: "Avoid Sideways Markets",
      desc: "A colored cloud on the chart tells you if the market is trending or sideways. When the cloud is grey — don't trade. Saves you from choppy markets."
    },
    {
      icon: <Target size={28} />,
      title: "Entry, Stop Loss & Target",
      desc: "Every signal shows you exactly where to enter, where to set your stop loss, and where your profit target is. Built right in."
    },
    {
      icon: <Zap size={28} />,
      title: "Works on Options Trading",
      desc: "Trading Nifty or BankNifty options? The tool automatically adjusts for Call (CE) and Put (PE) charts. Take signals from the main index."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Zero Repaint Signals",
      desc: "Many indicators secretly change past signals to look accurate. This one doesn't. Once a signal appears, it stays."
    },
    {
      icon: <MonitorSmartphone size={28} />,
      title: "No App Needed",
      desc: "Works directly on TradingView (free account is enough). No software to install. Works on phone, tablet, and computer."
    }
  ];

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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            Everything This Tool Does for You
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto leading-relaxed px-4">
            Built by a real trader for real trading. Simple to use, powerful in results.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="bg-surface-base p-8 rounded-2xl border border-border-subtle hover:shadow-lg hover:border-border-strong transition-card group flex flex-col h-full cursor-pointer"
            >
              <div className="w-14 h-14 bg-surface-elevated border border-border-strong rounded-xl flex items-center justify-center mb-6 text-text-strong group-hover:bg-brand-teal group-hover:text-white group-hover:border-brand-teal transition-micro">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-strong">{feature.title}</h3>
              <p className="text-text-base text-sm leading-relaxed flex-1">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
