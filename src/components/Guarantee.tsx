import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';
import { fadeUp, scaleReveal, viewport } from '../lib/animations';

export const Guarantee = () => {
  return (
    <section id="guarantee" className="py-16 md:py-24 px-6 bg-surface-base">
      <div className="max-w-4xl mx-auto">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="bg-surface-raised border border-brand-teal/20 shadow-2xl rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-6 uppercase tracking-wider flex items-center justify-center gap-2 mx-auto w-fit relative z-10">
            <ShieldAlert size={16} />
            Zero Risk Guarantee
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong relative z-10">
            Try It. Test It. Verify It Yourself.
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 my-10 relative z-10">
            <motion.div
              variants={scaleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-4 border-brand-teal shadow-xl"
            >
              <img
                src="/images/trust/guarantee-badge.jpg"
                alt="100% No Repaint Guarantee Or Full Refund"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <div className="text-left max-w-sm">
              <p className="text-xl md:text-2xl text-text-strong font-medium mb-4">
                If you find even <strong className="text-danger-base">ONE</strong> repaint example:
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-teal text-2xl">👉</span>
                <span className="text-2xl font-bold text-text-strong">You get 100% refund</span>
              </div>
              <p className="text-text-base italic">No questions asked.</p>
            </div>
          </div>

          <p className="text-xl font-bold text-text-strong relative z-10">
            You're not trusting us.<br className="md:hidden" /> You're verifying it yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
