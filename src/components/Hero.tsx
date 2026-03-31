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

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        <motion.div style={{ opacity }} className="text-center sm:text-left mt-0 lg:mt-0 order-2 lg:order-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] border border-[#1f1f1f] text-gray-300 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-6 lg:mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#e8442a] animate-pulse" />
            For Nifty · BankNifty · Options Buyers · Weekly Expiry
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-[1.1] tracking-tight text-white"
          >
            Tired of losing ₹10,000 every Thursday <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">buying false breakouts?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-xl text-gray-400 mb-8 lg:mb-10 max-w-xl leading-relaxed"
          >
            I built TQ 2.0 Zr because I lost ₹4 Lakhs trading directionless markets. It's the only TradingView system with a <strong className="text-white font-medium">momentum cloud</strong> that tells you exactly when <strong className="text-[#e8442a]">NOT</strong> to trade, saving your capital from theta decay.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-8 lg:mb-10"
          >
             <a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center bg-[#e8442a] hover:bg-[#d03d25] text-white font-bold py-4 px-6 md:px-8 rounded-xl text-lg md:text-xl transition-all w-full sm:w-auto shadow-[0_0_30px_rgba(232,68,42,0.3)] hover:shadow-[0_0_50px_rgba(232,68,42,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">Get TQ 2.0 — Start Trading Smarter — ₹2,999 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            </a>
          </motion.div>

          {/* Social Proof Badges / Trust Bar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 text-sm md:text-[13px] text-gray-400 font-medium">
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Zero Repaint</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Weekly Expiry Proof</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Entry/SL/3TPs Drawn</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Sideways Filter</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Full Source Code</div>
          </motion.div>
        </motion.div>

        {/* Hero Image / Screenshot */}
        <motion.div
           className="relative flex flex-col items-center w-full mt-10 lg:mt-0 order-1 lg:order-2"
        >
          {/* Main Screenshot Grid Item */}
          <div className="w-full relative block h-[250px] sm:h-[400px] lg:h-[450px] xl:h-[500px] perspective-[1000px] mb-8">
            <motion.div 
              className="w-full h-full relative"
              style={{ rotateX: mouseY, rotateY: mouseX, transformStyle: "preserve-3d" }}
            >
               <div className="absolute inset-0 top-[10%] left-[5%] w-[90%] h-[80%] bg-[#e8442a]/10 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(232,68,42,0.1)]" style={{ transform: 'translateZ(-30px)' }} />
               
               <img 
                 src="/hero.png" 
                 alt="Traders Queen Indicator Dashboard" 
                 className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-[#1f1f1f] bg-[#0a0a0a]"
                 style={{ transform: 'translateZ(20px)' }}
                 onError={(e) => {
                   // Fallback placeholder
                   e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%230a0a0a'/%3E%3Crect width='798' height='598' x='1' y='1' fill='none' stroke='%231f1f1f' stroke-width='2' rx='15' /%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='20' font-weight='bold' fill='%23e8442a'%3E[HERO SCREENSHOT HERE]%3C/text%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='14' fill='%23888'%3EPlace 'hero.png' inside 'public' folder%3C/text%3E%3C/svg%3E";
                 }}
               />
            </motion.div>
          </div>

          {/* Hindi Video Mockup/Placeholder under image */}
          <div className="w-full relative aspect-video bg-[#111] rounded-2xl border border-[#333] shadow-2xl flex flex-col items-center justify-center text-center p-6 overflow-hidden">
             <div className="absolute inset-0 bg-[#e8442a]/5 animate-pulse" />
             <div className="w-16 h-16 rounded-full bg-[#e8442a] bg-opacity-20 flex items-center justify-center mb-4 text-[#e8442a] border border-[#e8442a]/50 relative z-10 backdrop-blur-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
             </div>
             <p className="text-white font-bold text-lg md:text-xl relative z-10">[EMBED 7-MIN HINDI DEMO VIDEO HERE]</p>
             <p className="text-gray-400 text-sm mt-2 max-w-sm relative z-10">Show a live chart recording of TQ 2.0 saving capital in a choppy Nifty session.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
