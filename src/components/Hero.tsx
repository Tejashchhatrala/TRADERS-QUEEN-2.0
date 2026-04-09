import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_LINK } from './Navbar';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[90vh] pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden flex flex-col justify-center bg-surface-base"
    >
      {/* Soft minimal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated to-surface-base pointer-events-none" />
      
      {/* Clean Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-border-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-strong) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at top, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black 40%, transparent 80%)'
        }}
      />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-raised border border-border-subtle text-text-base font-medium tracking-wide text-sm mb-8 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-brand-teal" />
          Used by 50+ traders across India — Zero complaints
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-text-strong"
        >
          A Trading Tool That <br/>
          <span className="text-brand-teal">Actually Works.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-text-base mb-10 max-w-2xl leading-relaxed"
        >
          Traders Queen 2.0 is a TradingView tool that shows you exactly when to buy and sell — on stocks, gold, crypto, or options. No Monthly Fees. No Fake Signals. You Own It Forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mb-12"
        >
           <a
            href={CHECKOUT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all w-full sm:w-auto shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
          >
            <span className="flex items-center gap-2">Buy Now — ₹2,999 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
          </a>
          <a
            href="/#features"
            className="flex items-center justify-center bg-surface-raised hover:bg-surface-elevated border border-border-strong text-text-strong font-medium py-4 px-8 rounded-xl text-lg transition-all w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
          >
            See What's Included
          </a>
        </motion.div>

        {/* Minimal Stats Bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm md:text-base text-text-base font-medium">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-text-strong">50+</span>
            <span className="text-text-muted">Traders Using It</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-text-strong">0</span>
            <span className="text-text-muted">Complaints So Far</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-brand-teal">Full Code</span>
            <span className="text-text-muted">You Own It Forever</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-text-strong">₹2,999</span>
            <span className="text-text-muted">One-Time, No Renewal</span>
          </div>
        </motion.div>
      </div>

      {/* Clean Chart Display */}
      <motion.div
         initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
         className="w-full max-w-6xl mx-auto mt-16 relative z-10"
      >
         <div className="relative w-full aspect-[16/9] md:aspect-[21/9] flex items-center justify-center bg-surface-raised border border-border-subtle rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/hero-chart-transparent.png" 
              alt="Traders Queen 2.0 Chart Interface"
              className="absolute inset-0 w-full h-full object-cover md:object-contain"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='800' viewBox='0 0 1920 800'%3E%3Crect width='1920' height='800' fill='%23f9fafb'/%3E%3Crect width='1918' height='798' x='1' y='1' fill='none' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='10,10' rx='20' /%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' font-weight='bold' fill='%23089981'%3E[ADD MINIMAL CHART SCREENSHOT HERE]%3C/text%3E%3C/svg%3E";
              }}
            />
         </div>
      </motion.div>
    </section>
  );
};
