import React from 'react';
import { motion } from 'motion/react';
import { Cloud, BarChart2, Hash, Zap, Target, Activity } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Target size={28} />,
      title: "Auto Risk Entry Engine",
      subtitle: "Entry, SL & Targets on Chart",
      desc: "Instant level generation calculated via ATR the millisecond a signal fires. Know your exact risk before you trade. Don't guess where to put your SL."
    },
    {
      icon: <Cloud size={28} />,
      title: "Momentum Cloud Filter",
      subtitle: "Avoid Sideways Chop",
      desc: "A background cloud visually dictates momentum. Teal for trend (Buy CE), Red for puts (Buy PE), neutral to stay flat. Don't bleed theta in chop."
    },
    {
      icon: <BarChart2 size={28} />,
      title: "CE/PE Mode Filters",
      subtitle: "Call Only / Put Only",
      desc: "Filter out opposite side noise. See only bullish setups if you're a CE buyer. Keep your chart ruthlessly clean for faster execution."
    },
    {
      icon: <Activity size={28} />,
      title: "Heikin Ashi Engine",
      subtitle: "Smoothed Signals, Standard Polish",
      desc: "Calculates trends using smoothed Heikin Ashi data, but plots safely on your standard Japanese candlestick chart for visual familiarity."
    },
    {
      icon: <Hash size={28} />,
      title: "Multi-Timeframe Logic",
      subtitle: "Higher Timeframe Overlay",
      desc: "Want true trend? Overlay 15m trend data directly on a 1m scalping chart. View Nifty signals while watching BankNifty options."
    },
    {
      icon: <Zap size={28} />,
      title: "Webhook Automations",
      subtitle: "Instant Notifications",
      desc: "Connect native TradingView JSON alerts to WhatsApp, Telegram, Zapier, or direct broker API execution (Zerodha/Upstox/AngelOne)."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-[#0a0c0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Pro-Grade Tools</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Engineered to Secure Capital.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Everything you need built directly into one indicator so you never have to second-guess a trade plan again.
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
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#13161c] p-8 rounded-3xl border border-[#1e232b] hover:border-primary/50 transition-all group shadow-lg flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-[#1a1e24] border border-[#2a303c] rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">{feature.title}</h3>
              <p className="text-[11px] font-mono text-primary mb-4 uppercase tracking-wider bg-primary/10 inline-block px-2 py-0.5 rounded border border-primary/20 mr-auto">{feature.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
