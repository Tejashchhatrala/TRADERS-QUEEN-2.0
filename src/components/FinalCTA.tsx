import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, MessageCircle, CheckCircle2 } from 'lucide-react';
import { fadeUp, viewport } from '../lib/animations';

export const FinalCTA = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 px-6 bg-surface-base relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-text-strong tracking-tight">
            Plan Entries with Clear Levels. <br className="md:hidden" /> Trade with More Structure.
          </h2>

          <p className="text-xl md:text-2xl text-text-base mb-10 max-w-2xl mx-auto">
            You don't need another cluttered chart. <br /> You need buy, sell, stop loss, and target levels that are easy to review.
          </p>
        </motion.div>

        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="bg-surface-raised border border-brand-teal/20 p-6 md:p-8 rounded-3xl shadow-lg max-w-3xl mx-auto mb-8 text-left"
        >
          <div className="text-center mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal mb-3">Simple setup</p>
            <h3 className="text-2xl md:text-3xl font-bold text-text-strong mb-3">What happens after you buy?</h3>
            <p className="text-text-base max-w-2xl mx-auto">
              Get the TradingView script and clear setup steps quickly, then start using it on your chart without a complicated onboarding process.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2">
            {[
              'Pay ₹2,999 securely.',
              'Receive the Pine Script/source code and setup instructions.',
              'Open TradingView on your device.',
              'Paste the script or follow the provided setup guide.',
              'Add alerts if you want TradingView notifications.',
              'Message WhatsApp support if you get stuck.',
            ].map((step, index) => (
              <li key={step} className="flex gap-3 rounded-2xl bg-surface-base/80 border border-brand-teal/10 p-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 text-sm font-bold text-brand-teal">
                  {index + 1}
                </span>
                <span className="flex items-start gap-2 text-text-strong font-medium">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="bg-surface-raised border border-brand-teal/20 p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl mx-auto mb-10"
        >
          <ul className="space-y-4 text-left max-w-sm mx-auto mb-8">
            <li className="flex items-center gap-3 text-lg font-medium text-text-strong">
              <span className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm">✔</span>
              Chart-based alerts
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-text-strong">
              <span className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm">✔</span>
              Clear rules and levels
            </li>
            <li className="flex items-center gap-3 text-lg font-medium text-text-strong">
              <span className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm">✔</span>
              No monthly fees
            </li>
          </ul>

          <div className="text-4xl md:text-5xl font-bold text-text-strong mb-2">₹2,999</div>
          <div className="text-text-base font-medium mb-8">One-Time Payment. Source Code Included.</div>

          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <a
              href="https://superprofile.bio/vp/69c0fe2898385800138423c6?checkout=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-micro cursor-pointer shadow-lg hover:shadow-xl"
            >
              <ShoppingCart size={20} />
              Buy Now
            </a>

            <a
              href="https://wa.me/919879737819"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/50 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-micro cursor-pointer hover:shadow-md"
            >
              <MessageCircle size={20} />
              Ask Questions on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
