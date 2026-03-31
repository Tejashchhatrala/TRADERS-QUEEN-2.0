import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, TrendingUp, Crosshair } from 'lucide-react';

export const ChartCarousel = () => {
  const proofs = [
    {
      title: "1. The Sideways Market Identified",
      desc: "Notice how the MACD Momentum Cloud turns neutral (grey) during this choppy 3-hour period. While standard indicators fired fake 'Buy' and 'Sell' signals, TQ 2.0 Zr stayed silent. It literally blocks you from entering a directionless market.",
      icon: <ShieldAlert className="text-[#00c9a7] mb-4" size={32} />,
      img: "/proof-1.jpg",
      reverse: false
    },
    {
      title: "2. Call-Only Filter in Action",
      desc: "If you only trade CALLs, you don't want to be distracted by bearish setups. By enabling 'Call Buyer Mode', the system mutes all PUT signals. You only see valid bullish entries when the momentum cloud confirms the trend.",
      icon: <TrendingUp className="text-[#00c9a7] mb-4" size={32} />,
      img: "/proof-2.jpg",
      reverse: true
    },
    {
      title: "3. Automatic Entry & Risk Calculation",
      desc: "The second a valid signal is confirmed on candle close, TQ 2.0 prints the exact Entry Price, Stop Loss, and your 3 Take Profit targets directly on the chart. No manual calculations required—just punch the numbers and execute.",
      icon: <Crosshair className="text-[#00c9a7] mb-4" size={32} />,
      img: "/proof-3.jpg",
      reverse: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#e8442a] font-bold tracking-widest uppercase text-sm mb-4">See It For Yourself</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            See It Live Before You <span className="text-[#00c9a7]">Buy.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real signals on closed bars. No repainting. 
            Here is exactly how TQ 2.0 protects your capital in real time.
          </p>
        </div>

        <div className="space-y-32">
          {proofs.map((proof, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${proof.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                {proof.icon}
                <h3 className="text-3xl font-bold text-white mb-6">{proof.title}</h3>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  {proof.desc}
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden border border-[#333] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#111] aspect-[4/3] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#00c9a7]/5" />
                  <img 
                    src={proof.img} 
                    alt={proof.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='20' font-weight='bold' fill='%2300c9a7'%3E[ADD ${proof.img.replace('/','')} HERE]%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
