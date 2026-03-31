import React from 'react';
import { motion } from 'motion/react';
import { CloudOff, XCircle, Lock } from 'lucide-react';

export const Problem = () => {
  return (
    <section id="the-trap" className="py-24 md:py-32 px-6 bg-[#0a0c0f] relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-danger/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-danger font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Why Option Buyers Lose Capital</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            You Didn't Make a Bad Trade.<br/>
            <span className="text-gray-400">You Got Played By the Market & Tools.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Most Indian retail traders are losing their capital because of three massive lies sold to them daily.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Trap 1: Sideways Market / Theta Decay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#13161c] p-8 md:p-10 rounded-3xl border border-[#1e232b] hover:border-gray-500/30 transition-all flex flex-col h-full shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center text-gray-400 mb-8 border border-gray-700">
              <CloudOff size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Sideways Trap (Theta)</h3>
            <p className="text-gray-400 leading-relaxed flex-1">
              Basic indicators fire "Buy" and "Sell" signals all day long during choppy markets. You enter a trade, the market goes nowhere, and <strong className="text-white">Theta decay eats your premium</strong>. You lost money not because the trend was wrong, but because there was no trend at all.
            </p>
          </motion.div>

          {/* Trap 2: Repainting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#13161c] p-8 md:p-10 rounded-3xl border border-[#1e232b] hover:border-danger/30 transition-all flex flex-col h-full shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-danger/5 to-transparent pointer-events-none" />
            <div className="w-16 h-16 rounded-2xl bg-danger/10 flex items-center justify-center text-danger mb-8 border border-danger/20 relative z-10">
              <XCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">The Ghost Signal (Repaint)</h3>
            <p className="text-gray-400 leading-relaxed flex-1 relative z-10">
              You enter a trade on a perfect Buy signal. The candle closes against you. You check the chart, and <strong className="text-danger">the signal vanished.</strong> It rewrote its own history to look 100% accurate on the seller's screenshot. You are trading against a lying chart.
            </p>
          </motion.div>

          {/* Trap 3: The Black Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#13161c] p-8 md:p-10 rounded-3xl border border-[#1e232b] hover:border-primary/30 transition-all flex flex-col h-full shadow-lg relative"
          >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none rounded-3xl" />
            <div className="w-16 h-16 rounded-2xl bg-[#0a0c0f] flex items-center justify-center text-gray-500 mb-8 border border-[#2a303c] relative z-10 shadow-inner">
              <Lock size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">The Subscription Anchor</h3>
            <p className="text-gray-400 leading-relaxed flex-1 relative z-10">
              You pay ₹1,499/month for an "invite-only" script. You can't see the code, and you can't verify if it repaints. You pay ₹18,000 a year for a tool you don't own. When the seller turns off the server, your access is instantly gone.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
