import React from 'react';
import { motion } from 'motion/react';
import { Activity, ShieldOff, Equal } from 'lucide-react';

export const SidewaysFilter = () => {
  return (
    <section id="sideways-filter" className="py-16 md:py-24 px-6 bg-[#0d0d0d] border-y border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            The Feature That Saves More Capital<br className="hidden md:block" />
            <span className="text-brand-teal">Than Any Signal.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Most indicators tell you when to enter. None of them tell you when to stay out.
          </p>
          <div className="bg-surface-raised border border-border-subtle rounded-2xl p-6 md:p-8 mt-8 text-left max-w-4xl mx-auto relative overflow-hidden shadow-xl hover:border-border-strong transition-colors">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-teal" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-teal/5 blur-[60px] pointer-events-none" />
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed relative z-10 italic">
              "Based on Nifty50 data from Jan–Dec 2024, 65% of sessions are choppy or range-bound. On a typical Thursday expiry, when option premiums decay from ₹80 to ₹18 in 3 hours, the TQ cloud glows neutral. You are not given a signal. While others watched ₹8,000 evaporate in theta decay, our users stayed flat. They kept their capital."
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Teal Block */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-surface-raised border border-brand-teal/30 p-8 rounded-2xl shadow-[0_10px_30px_var(--color-brand-teal)]/10 flex flex-col items-center text-center"
          >
             <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal mb-6">
                <Activity size={32} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">🔵 Teal Cloud</h3>
             <p className="text-brand-teal font-bold mb-4">Strong directional momentum.</p>
             <p className="text-text-muted text-sm leading-relaxed">CALL bias confirmed. Enter long trades with confidence.</p>
          </motion.div>

          {/* Red Block */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-surface-raised border border-brand-red/30 p-8 rounded-2xl shadow-[0_10px_30px_var(--color-brand-red)]/10 flex flex-col items-center text-center"
          >
             <div className="w-16 h-16 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red mb-6">
                <Activity size={32} className="rotate-180" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">🔴 Red Cloud</h3>
             <p className="text-brand-red font-bold mb-4">Bearish momentum confirmed.</p>
             <p className="text-text-muted text-sm leading-relaxed">PUT bias confirmed. Enter short trades securely.</p>
          </motion.div>

          {/* Neutral Block */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-surface-raised border border-gray-600/30 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)] pointer-events-none" />
             <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 mb-6 relative z-10">
                <Equal size={32} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2 relative z-10">⚫ Neutral / Mixed</h3>
             <p className="text-gray-400 font-bold mb-4 relative z-10">Market going nowhere.</p>
             <p className="text-gray-500 text-sm leading-relaxed relative z-10">Stay flat. Save your capital from theta decay.</p>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="text-center mt-12"
        >
           <p className="text-2xl font-bold text-gray-300">One glance. No guessing. No theta bleed.</p>
        </motion.div>
      </div>
    </section>
  );
};
