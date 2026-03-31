import React from 'react';
import { motion } from 'motion/react';
import { Cloud, BarChart2, Hash, Zap, Target, Activity } from 'lucide-react';

export const Features = () => {
  // Reordered specifically to match Indian ICP priority from the brief
  const features = [
    {
      icon: <Cloud size={28} />,
      title: "Stay out of choppy markets",
      subtitle: "MACD Momentum Filter",
      desc: "Our #1 capital-saving feature. A dynamic cloud sits in the background of your chart to tell you when NOT to trade. Teal for calls, red for puts, neutral to stay flat."
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Ignore the noise, trade one direction",
      subtitle: "Call Only / Put Only Modes",
      desc: "Only buy CALL options? Turn on Call Buyer Mode and only bullish setups appear. Filter out all irrelevant noise so you can make decisions faster."
    },
    {
      icon: <Target size={28} />,
      title: "Never guess your Stop Loss again",
      subtitle: "Entry, SL & Targets on Chart",
      desc: "Everything is on the chart the moment a signal fires. TQ 2.0 calculates your exact Entry, Stop Loss, and TP1/TP2/TP3 automatically. No manual math."
    },
    {
      icon: <Zap size={28} />,
      title: "Get the exact trade on WhatsApp",
      subtitle: "Instant Native Alerts",
      desc: "You don't need to watch the chart all day. Connect TradingView's native alerts to WhatsApp via webhook, automate it in Zapier, or get phone notifications."
    },
    {
      icon: <Activity size={28} />,
      title: "Filter out the fake price spikes",
      subtitle: "Heikin Ashi Signal Engine",
      desc: "Signal calculations run on Heikin Ashi candles to filter noise effectively. But your chart continues to display regular Japanese candlesticks, so everything looks normal."
    },
    {
      icon: <Hash size={28} />,
      title: "Confirm trades across timeframes",
      subtitle: "Multi-Timeframe Logic",
      desc: "Want Nifty50 signals while watching a BankNifty chart? Or 15m trend data on your 1m scalping chart? One toggle enables multi-timeframe confirmation."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <p className="text-[#e8442a] font-bold tracking-widest uppercase text-sm mb-4">The Full System</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Every Signal Comes With a<br className="hidden md:block"/> Complete Trade Plan.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            No manual math. No second-guessing. A comprehensive trading system designed specifically for the realities of the Indian market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#111] p-8 rounded-3xl border border-[#1f1f1f] hover:border-[#e8442a]/50 transition-all group shadow-lg flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-[#1a1a1a] border border-[#333] rounded-2xl flex items-center justify-center mb-6 text-[#00c9a7] group-hover:scale-110 group-hover:bg-[#00c9a7] group-hover:text-black transition-all duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">{feature.title}</h3>
              <p className="text-[11px] font-mono text-[#00c9a7] mb-4 uppercase tracking-wider bg-[#00c9a7]/10 inline-block px-2 py-0.5 rounded border border-[#00c9a7]/20 mr-auto">{feature.subtitle}</p>
              <p className="text-[#e0e0e0] text-sm leading-relaxed flex-1">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
