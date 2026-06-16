import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp, scaleReveal, staggerContainer, staggerItem, viewport } from '../lib/animations';

const proofImages = [
  {
    path: '/images/proof/trade-1.jpg',
    alt: 'Trade example on Bank Nifty index showing a buy signal with entry, stop loss, and three target levels',
    market: 'Bank Nifty Index',
    timeframe: '3-minute chart',
    signal: 'Buy setup with entry, stop loss, target levels, and bullish market cloud.',
    type: 'Trade example',
    caption: 'Shows how a defined long setup replaces guesswork by marking the entry, invalidation area, and profit targets before the move is managed.'
  },
  {
    path: '/images/proof/trade-2.jpg',
    alt: 'Trade example on Bank Nifty call option showing a sell signal with entry, stop loss, and target levels',
    market: 'Bank Nifty 55700 Call Option',
    timeframe: '3-minute chart',
    signal: 'Sell setup after momentum slows, with stop loss above and staged targets below.',
    type: 'Trade example',
    caption: 'Highlights the option-mode levels traders should notice so exits and risk are planned instead of reacting emotionally.'
  },
  {
    path: '/images/proof/trade-3.jpg',
    alt: 'Trade example on Gold Spot U.S. Dollar showing buy and sell signals with entry, stop loss, and target levels',
    market: 'XAUUSD / Gold Spot',
    timeframe: '3-minute chart',
    signal: 'Fresh buy signal with entry, stop loss, targets, and cloud color shift.',
    type: 'Trade example',
    caption: 'Demonstrates the same visual rules on gold, helping visitors see trend direction, risk level, and target zones without indicator clutter.'
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
            Chart Examples from This System
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong leading-tight">
            Example Setups. Chart-Based Signals. <br className="hidden md:block"/> Shown As Captured.
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-3xl mx-auto leading-relaxed">
            Below are examples of Traders Queen 2.0 signals captured on TradingView charts.<br/>
            They show the type of entries, stop loss areas, targets, and market-condition context the tool displays. Trading involves risk, and examples are not a promise of future results.
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

          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${currentIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-4 rounded-2xl border border-border-subtle bg-surface-base p-5 text-left shadow-md"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-teal">{proofImages[currentIndex].type}</span>
                <span className="rounded-full bg-surface-raised px-3 py-1 text-xs font-semibold text-text-base">{proofImages[currentIndex].market}</span>
                <span className="rounded-full bg-surface-raised px-3 py-1 text-xs font-semibold text-text-base">{proofImages[currentIndex].timeframe}</span>
              </div>
              <p className="text-sm font-bold text-text-strong md:text-base">Notice: {proofImages[currentIndex].signal}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-base md:text-base">Problem solved: {proofImages[currentIndex].caption}</p>
            </motion.div>
          </AnimatePresence>
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
              <span className="text-sm text-text-muted">Displayed Level</span>
           </motion.div>
           <motion.div variants={staggerItem} className="flex flex-col items-center p-4 bg-surface-base rounded-xl border border-border-subtle">
              <span className="text-xl font-bold text-text-strong mb-1">✔ Stop Loss</span>
              <span className="text-sm text-text-muted">Invalidation Level</span>
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
          Use defined levels instead of random entries.
        </motion.p>
      </div>
    </section>
  );
};
