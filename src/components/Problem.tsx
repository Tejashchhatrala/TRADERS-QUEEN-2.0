import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Youtube, Clock } from 'lucide-react';

export const Problem = () => {
  return (
    <section id="the-trap" className="py-16 md:py-24 px-6 bg-surface-elevated relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text-strong">
             Sound Familiar? You're Not Alone.
           </h2>
           <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto">
             Most part-time traders face these exact problems. We built this tool to solve them.
           </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface-base p-8 rounded-2xl border border-border-subtle hover:shadow-lg transition-all flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 border border-brand-red/20">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-strong">Telegram Tips Failed You</h3>
            <p className="text-text-base leading-relaxed flex-1">
              You joined paid groups, followed tips on WhatsApp and Telegram. You lost ₹5,000... ₹10,000... maybe more. The calls were wrong, the timing was bad, and nobody took responsibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface-base p-8 rounded-2xl border border-border-subtle hover:shadow-lg transition-all flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 border border-brand-red/20">
              <Youtube size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-strong">YouTube Videos Lied</h3>
            <p className="text-text-base leading-relaxed flex-1">
              Every video promises a "99% accurate indicator." You tried 50 of them. They looked perfect in the video — but in real trading, the signals changed, disappeared, or came too late.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-surface-base p-8 rounded-2xl border border-border-subtle hover:shadow-lg transition-all flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 border border-brand-teal/20">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-strong">No Time to Watch Charts</h3>
            <p className="text-text-base leading-relaxed flex-1">
              You have a job, a business, a family. You can't sit in front of a screen for 6 hours waiting for a trade. You need something that tells you when to act — and sends you an alert.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
