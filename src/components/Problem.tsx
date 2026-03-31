import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, XCircle, Lock, ArrowLeftRight } from 'lucide-react';

export const Problem = () => {
  return (
    <section id="the-trap" className="py-16 md:py-24 lg:py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8442a]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-[#e8442a] font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Why Most Traders Keep Losing</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            You Didn't Make a Bad Trade.<br/>
            <span className="text-gray-400">Your Indicator Made It For You.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Most Indian retail traders are losing their capital because of four massive traps built into standard indicators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
           {/* Trap 1: Sideways Market Trap (NEW) */}
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#111] p-8 md:p-10 rounded-3xl border border-[#1f1f1f] hover:border-[#888]/30 transition-all flex flex-col h-full shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-gray-400 mb-8 border border-[#1f1f1f]">
              <ArrowLeftRight size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Sideways Market Trap</h3>
            <p className="text-[#e0e0e0] leading-relaxed flex-1">
              You bought a CALL. The indicator gave a Buy signal. The market moved 30 points... and came back. Your premium went from ₹80 to ₹18. The indicator wasn't wrong — it just had no way to tell you the market was going nowhere. <strong className="text-white">You paid for directionless premium decay.</strong> TQ 2.0 ZR's Momentum Cloud exists to prevent exactly this.
            </p>
          </motion.div>

          {/* Trap 2: Repainting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111] p-8 md:p-10 rounded-3xl border border-[#1f1f1f] hover:border-[#e84242]/30 transition-all flex flex-col h-full shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#e84242]/5 to-transparent pointer-events-none" />
            <div className="w-16 h-16 rounded-2xl bg-[#e84242]/10 flex items-center justify-center text-[#e84242] mb-8 border border-[#e84242]/20 relative z-10">
              <XCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">The Repainting Trap</h3>
            <p className="text-[#e0e0e0] leading-relaxed flex-1 relative z-10">
              A signal appears on a live candle. You enter the trade. The candle closes against you. You check the chart — the signal has moved or disappeared entirely. On the seller's screenshot, it shows up perfectly at the right place. You never knew it was never really there.
            </p>
          </motion.div>

          {/* Trap 3: The Black Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#111] p-8 md:p-10 rounded-3xl border border-[#1f1f1f] hover:border-gray-500/30 transition-all flex flex-col h-full shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-gray-500 mb-8 border border-[#1f1f1f] shadow-inner">
              <Lock size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Black Box Trap</h3>
            <p className="text-[#e0e0e0] leading-relaxed flex-1">
              The code is locked. You get a TradingView "invite-only" link — you cannot see inside, cannot verify anything, cannot even check if the zero-repaint claim is true. The day the seller shuts down, stops their subscription, or disappears, your access is gone. You owned nothing.
            </p>
          </motion.div>

          {/* Trap 4: Subscriptions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#111] p-8 md:p-10 rounded-3xl border border-[#1f1f1f] hover:border-[#e8442a]/30 transition-all flex flex-col h-full shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-[#e8442a] mb-8 border border-[#1f1f1f] shadow-inner">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Subscription Trap</h3>
            <p className="text-[#e0e0e0] leading-relaxed flex-1">
              ₹999/month. ₹1,999/month. That is ₹12,000 to ₹24,000 per year — for a rented tool with no code, no proof, and no permanence. Over two years: ₹24,000 to ₹48,000 gone. And you have nothing to show for it that you actually own.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
