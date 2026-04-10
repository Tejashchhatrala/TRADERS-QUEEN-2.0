import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp, scaleReveal, staggerContainer, staggerItem, viewport } from '../lib/animations';

const proofImages = [
  {
    path: '/images/proof/trade-1.jpg',
    alt: 'Trade Example 1 — Nifty Buy Signal'
  },
  {
    path: '/images/proof/trade-2.jpg',
    alt: 'Trade Example 2 — Gold Sell Signal'
  },
  {
    path: '/images/proof/trade-3.jpg',
    alt: 'Trade Example 3 — BankNifty'
  }
];

export const ProofSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % proofImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length);
  };

  return (
    <section id="proof" className="py-16 md:py-24 px-6 bg-surface-elevated overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="mb-12"
        >
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
            Real Trades Taken Using This System
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong leading-tight">
            Real Trades. Real Signals. <br className="hidden md:block"/> No Editing.
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-3xl mx-auto leading-relaxed">
            Below are actual trades taken using Traders Queen 2.0.<br/>
            These are not backtests. These are real market conditions — exactly how you will see them.
          </p>
        </motion.div>

        <motion.div
          variants={scaleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mb-12 max-w-4xl mx-auto"
        >
          {/* Carousel */}
          <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden bg-surface-base border border-border-subtle shadow-xl group">
             <AnimatePresence mode="wait">
               <motion.img
                 key={currentIndex}
                 src={proofImages[currentIndex].path}
                 alt={proofImages[currentIndex].alt}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
                 className="w-full h-full object-cover"
                 loading="lazy"
               />
             </AnimatePresence>

             {/* Navigation Buttons */}
             <button
               onClick={prevSlide}
               className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white text-text-strong rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-micro cursor-pointer md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
               aria-label="Previous slide"
             >
               <ChevronLeft size={24} />
             </button>
             <button
               onClick={nextSlide}
               className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white text-text-strong rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-micro cursor-pointer md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
               aria-label="Next slide"
             >
               <ChevronRight size={24} />
             </button>

             {/* Dots */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
               {proofImages.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrentIndex(idx)}
                   className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base ${idx === currentIndex ? 'bg-brand-teal w-8' : 'bg-white/50 hover:bg-white/80'}`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
             </div>
          </div>
        </motion.div>

        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
           <motion.div variants={staggerItem} className="flex flex-col items-center p-4 bg-surface-base rounded-xl border border-border-subtle">
              <span className="text-xl font-bold text-text-strong mb-1">✔ Entry</span>
              <span className="text-sm text-text-muted">Exact Price</span>
           </motion.div>
           <motion.div variants={staggerItem} className="flex flex-col items-center p-4 bg-surface-base rounded-xl border border-border-subtle">
              <span className="text-xl font-bold text-text-strong mb-1">✔ Stop Loss</span>
              <span className="text-sm text-text-muted">Clear Invalid</span>
           </motion.div>
           <motion.div variants={staggerItem} className="flex flex-col items-center p-4 bg-surface-base rounded-xl border border-border-subtle">
              <span className="text-xl font-bold text-text-strong mb-1">✔ Target</span>
              <span className="text-sm text-text-muted">Pre-defined</span>
           </motion.div>
           <motion.div variants={staggerItem} className="flex flex-col items-center p-4 bg-surface-base rounded-xl border border-border-subtle">
              <span className="text-xl font-bold text-text-strong mb-1">✔ Market</span>
              <span className="text-sm text-text-muted">Condition Cloud</span>
           </motion.div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 text-xl font-semibold text-text-strong"
        >
          No guessing. No confusion.
        </motion.p>
      </div>
    </section>
  );
};
