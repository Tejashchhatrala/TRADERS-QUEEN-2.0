import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Youtube, Clock } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations';

export const Problem = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-surface-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            Why Most Traders Lose Money
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto leading-relaxed">
            It's not your fault. The industry is designed to make you dependent on others.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={staggerItem} className="bg-surface-base p-8 rounded-2xl border border-border-subtle hover:shadow-lg hover:border-border-strong transition-card flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 border border-brand-red/20">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-text-strong">Signal Groups</h3>
            <p className="text-text-base text-sm leading-relaxed flex-1">You wait for someone to send you a message. Late entries. Missed exits. Delayed reactions. You lose money following people who don't even trade with real money.</p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-surface-base p-8 rounded-2xl border border-border-subtle hover:shadow-lg hover:border-border-strong transition-card flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 border border-brand-red/20">
              <Youtube size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-text-strong">YouTube "Gurus"</h3>
            <p className="text-text-base text-sm leading-relaxed flex-1">Backtested results that look perfect — but never work live. They show you what already happened. When you trade live, it all falls apart.</p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-surface-base p-8 rounded-2xl border border-border-subtle hover:shadow-lg hover:border-border-strong transition-card flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 border border-brand-teal/20">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-text-strong">Wasting Time</h3>
            <p className="text-text-base text-sm leading-relaxed flex-1">Hours staring at charts. No clear entry. No stop loss. No target. Just confusion and guessing.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
