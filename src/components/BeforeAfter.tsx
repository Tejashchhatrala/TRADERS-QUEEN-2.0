import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, scaleReveal, viewport } from '../lib/animations';

export const BeforeAfter = () => {
  const beforeItems = [
    "Watching charts for hours",
    "Random entries",
    "Missed trades",
    "Losses from sideways market",
    "Following others blindly"
  ];

  const afterItems = [
    "Alerts tell you when to act",
    "Clear entry, SL & target",
    "1–2 focused trades per day",
    "Avoid bad market conditions",
    "Full control over your trades"
  ];

  return (
    <section id="before-after" className="py-16 md:py-24 px-6 bg-surface-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
            What Changes After You Start Using This
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            From Confusion <ArrowRight className="inline-block mx-2 text-brand-teal" size={36}/> To Clarity
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center">
          {/* Comparison Cards */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">
            {/* Before Card */}
            <motion.div
               variants={fadeLeft}
               initial="hidden"
               whileInView="visible"
               viewport={viewport}
               className="flex-1 bg-surface-raised border border-danger-base/30 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6 text-danger-base">
                <XCircle size={28} />
                <h3 className="text-2xl font-bold">BEFORE</h3>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-base">
                    <span className="text-danger-base mt-1">✗</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After Card */}
            <motion.div
               variants={fadeRight}
               initial="hidden"
               whileInView="visible"
               viewport={viewport}
               className="flex-1 bg-surface-raised border border-brand-teal/30 rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6 text-brand-teal">
                <CheckCircle2 size={28} />
                <h3 className="text-2xl font-bold">AFTER</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {afterItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-strong font-medium">
                    <span className="text-brand-teal mt-1">✔</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Lifestyle Image */}
          <motion.div
             variants={scaleReveal}
             initial="hidden"
             whileInView="visible"
             viewport={viewport}
             className="w-full lg:w-1/2 aspect-[5/3] rounded-2xl overflow-hidden border border-border-subtle shadow-lg"
          >
            <img
              src="/images/lifestyle/trader-phone.jpg"
              alt="Trader checking signal on phone"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="text-center"
        >
          <p className="text-2xl font-bold text-text-strong">
            This is not about more trades.
          </p>
          <p className="text-xl text-brand-teal font-medium mt-2">
            It's about better trades.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
