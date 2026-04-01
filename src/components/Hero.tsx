import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_LINK } from './Navbar';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    // Disable 3D tilt on mobile/tablets to prevent touch-drag ghosting
    if (window.innerWidth < 1024) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 30,
      y: (clientY / innerHeight - 0.5) * 30
    });
  };

  const springConfig = { damping: 20, stiffness: 100 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="min-h-[100vh] pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden flex flex-col justify-center perspective-[1000px] bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,68,42,0.08)_0%,rgba(10,10,10,1)_60%)] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-[#1f1f1f] text-gray-300 font-bold tracking-widest uppercase text-xs mb-8 shadow-xl"
        >
          <div className="w-2 h-2 rounded-full bg-[#e8442a] animate-pulse" />
          For Nifty · BankNifty · Options Buyers · Weekly Expiry
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] tracking-tight text-white"
        >
          Tired of losing ₹10,000 every Thursday <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">buying false breakouts?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed"
        >
          I built TQ 2.0 Zr because I lost ₹4 Lakhs trading directionless markets. It's the only TradingView system with a <strong className="text-white font-medium">momentum cloud</strong> that tells you exactly when <strong className="text-[#e8442a]">NOT</strong> to trade, saving your capital from theta decay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full mb-12"
        >
           <a
            href={CHECKOUT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center bg-[#e8442a] hover:bg-[#d03d25] text-white font-bold py-4 px-8 rounded-xl text-lg md:text-xl transition-all w-full sm:w-auto shadow-[0_0_30px_rgba(232,68,42,0.3)] hover:shadow-[0_0_50px_rgba(232,68,42,0.5)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">Get TQ 2.0 — ₹2,999 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
          </a>
          <a
            href="#proof"
            className="flex items-center justify-center bg-[#111] hover:bg-[#1a1a1a] border border-[#333] text-white font-bold py-4 px-8 rounded-xl text-lg md:text-xl transition-all w-full sm:w-auto"
          >
            View Live Proof
          </a>
        </motion.div>

        {/* Social Proof Badges / Trust Bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-[15px] text-gray-400 font-medium">
          <div className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-[#00c9a7]" /> Zero Repaint</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-[#00c9a7]" /> Weekly Expiry Proof</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-[#00c9a7]" /> Full Source Code</div>
        </motion.div>
      </div>

      {/* Massive Transparent Chart Overlay */}
      <motion.div
         initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}
         className="w-full max-w-7xl mx-auto mt-16 relative z-10 perspective-[1000px]"
      >
         <div className="relative w-full aspect-[21/9] flex items-center justify-center">
            {/* Soft glow behind the chart */}
            <div className="absolute inset-0 top-[20%] left-[10%] w-[80%] h-[60%] bg-[#00c9a7]/5 blur-[100px] pointer-events-none" />
            
            <img 
              src="/hero-chart-transparent.png" 
              alt="GainzAlgo Style Transparent Chart" 
              className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,198,167,0.15)]"
              style={{ transform: `rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)` }}
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='800' viewBox='0 0 1920 800'%3E%3Crect width='1920' height='800' fill='transparent'/%3E%3Crect width='1918' height='798' x='1' y='1' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='10,10' rx='20' /%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' font-weight='bold' fill='%2300c9a7'%3E[UPLOAD TRANSPARENT CHART PNG HERE]%3C/text%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23888'%3EPath: public/hero-chart-transparent.png (Recommended Size: 1920x800px)%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23666'%3EHide chart background in TradingView, leave only candles and signals%3C/text%3E%3C/svg%3E";
              }}
            />
         </div>
         
         {/* Trusted By Strip */}
         <div className="w-full mt-12 py-8 border-t border-b border-[#1f1f1f] bg-[#0a0a0a]/50 backdrop-blur-md flex flex-col items-center">
            <p className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-6 text-center">Compatible With Your Favorite Platforms</p>
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* TradingView */}
               <div className="flex items-center gap-2 font-bold text-xl text-white">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 TradingView
               </div>
               <div className="font-bold text-xl text-blue-400 flex items-center gap-2">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.85-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.89 2.38 1.01 2.54c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.13.16 1.56.1.48-.06 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
                 WhatsApp Alerts
               </div>
               <div className="font-bold text-xl text-blue-600 flex items-center gap-2">
                 ⚡ Upstox & Zerodha
               </div>
            </div>
         </div>
      </motion.div>
    </section>
  );
};
