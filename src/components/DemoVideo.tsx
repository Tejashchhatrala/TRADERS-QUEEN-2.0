import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';
import { fadeUp, scaleReveal, viewport } from '../lib/animations';

export const DemoVideo = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 bg-surface-base">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="mb-12"
        >
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-4 uppercase tracking-wider flex items-center justify-center gap-2 mx-auto w-fit">
            <PlayCircle size={16} />
            See Exactly How It Works (3 Min)
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
            Watch This Before You Buy
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto leading-relaxed">
            This 3-minute demo walks through adding Traders Queen 2.0 to TradingView, reading buy/sell signals, entry, stop loss, and target levels, using the sideways-market cloud, configuring alerts, and what you receive after payment.
          </p>
        </motion.div>

        <motion.div
           variants={scaleReveal}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="relative aspect-video w-full rounded-2xl overflow-hidden bg-surface-elevated border border-border-subtle shadow-2xl"
        >
           {/* Vimeo demo video embed */}
           <iframe
             width="100%"
             height="100%"
             src="https://player.vimeo.com/video/1168371693"
             title="Traders Queen 2.0 Demo Video"
             frameBorder="0"
             allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
             allowFullScreen
             className="absolute top-0 left-0 w-full h-full"
           ></iframe>
        </motion.div>

        <motion.p
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="mt-8 text-lg font-medium text-text-strong"
        >
          After watching this, you'll know exactly what you're getting. No surprises.
        </motion.p>
      </div>
    </section>
  );
};
