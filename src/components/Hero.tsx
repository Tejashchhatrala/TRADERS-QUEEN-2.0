import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { TrendingUp, ShieldCheck, Unlock, ChevronRight } from 'lucide-react';
import { CHECKOUT_LINK } from './Navbar';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
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
      className="min-h-[100vh] pt-32 pb-20 px-6 relative overflow-hidden flex flex-col justify-center perspective-[1000px] bg-[#0a0c0f]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,153,129,0.15)_0%,rgba(10,12,15,1)_60%)] pointer-events-none" />
      
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
        
        <motion.div style={{ opacity }} className="text-left mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13161c] border border-primary/30 text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-6 lg:mb-8 shadow-[0_0_15px_rgba(8,153,129,0.2)]"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Designed for Nifty & BankNifty Option Buyers
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-[1.1] tracking-tight text-white"
          >
            Stop Bleeding Premium in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Sideways Markets.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-xl text-gray-400 mb-8 lg:mb-10 max-w-xl leading-relaxed"
          >
            90% of indicators just yell "Buy/Sell" and let you die in the chop. 
            <strong className="text-white font-medium ml-1">TQ 2.0 Zr gives you the exact Entry, Stop Loss, and Take Profit levels</strong> — and filters out the noise.
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            Oh, and it never rewrites history. Verify it yourself with the full open source code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-8 lg:mb-10"
          >
             <a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 md:px-8 rounded-xl text-lg md:text-xl transition-all w-full sm:w-auto shadow-[0_0_30px_rgba(8,153,129,0.3)] hover:shadow-[0_0_50px_rgba(8,153,129,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">Get Full Code & Strategy <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            </a>
            <div className="text-center sm:text-left text-sm text-gray-400 py-2 w-full sm:w-auto">
              <span className="text-white font-bold block mb-1 text-base">₹2,999 One-Time</span>
              <span>Delivered instantly via email</span>
            </div>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-primary" /> 100% Zero-Repaint</div>
            <div className="flex items-center gap-2"><Unlock size={16} className="text-primary" /> Full Source Code</div>
            <div className="flex items-center gap-2"><TrendingUp size={16} className="text-primary" /> Built for Option Scalpers</div>
          </motion.div>
        </motion.div>

        {/* 3D Visual showing the "Trade Plan" in action */}
        <motion.div
          className="relative hidden lg:block h-[500px] xl:h-[600px] w-full mt-10 lg:mt-0"
          style={{ rotateX: mouseY, rotateY: mouseX, transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 top-[15%] left-[5%] w-[90%] h-[70%] bg-[#13161c]/80 backdrop-blur-xl border border-[#1e232b] rounded-3xl shadow-2xl" style={{ transform: 'translateZ(-20px)' }} />

          {/* Main Chart Simulator Panel */}
          <div className="absolute inset-0 top-[5%] left-[0%] w-[100%] h-[80%] bg-[#1a1e24] border border-[#2a303c] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
            <div className="h-10 border-b border-[#2a303c] bg-[#13161c] flex items-center px-4 gap-4">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-danger"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-primary"></div>
               </div>
               <div className="text-xs font-mono text-gray-400">NIFTY50 • 5m • TQ 2.0</div>
            </div>
            
            <div className="flex-1 relative p-6 bg-[#0a0c0f]">
              {/* Fake Candles */}
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,...')]"></div>
              {/* Horizontal Lines for Trade Plan */}
               <motion.div className="w-full flex items-center justify-between mb-8 border-b border-primary/30 pb-1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }}>
                 <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">TP3 : 24,150.00</span>
               </motion.div>
               <motion.div className="w-full flex items-center justify-between mb-8 border-b border-primary/30 pb-1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, delay: 0.5, repeat: Infinity }}>
                 <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">TP2 : 24,100.00</span>
               </motion.div>
               <div className="w-full flex items-center justify-between mb-8 border-b border-primary/30 pb-1">
                 <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">TP1 : 24,050.00</span>
               </div>
               <div className="w-full flex items-center justify-between mb-12 border-b-2 border-dashed border-white/50 pb-1">
                 <span className="text-[10px] text-white font-mono bg-white/10 px-2 py-0.5 rounded">ENTRY: 23,980.00</span>
               </div>
               <div className="w-full flex items-center justify-between border-b border-danger/50 pb-1">
                 <span className="text-[10px] text-danger font-mono bg-danger/10 px-2 py-0.5 rounded">STOP LOSS: 23,940.00</span>
               </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[35%] right-[-10%] bg-[#0a0c0f] border border-primary/40 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3 z-20"
            style={{ transform: 'translateZ(60px)' }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><TrendingUp size={20} /></div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">Momentum Confirmed</div>
              <div className="text-white font-bold text-sm">BUY CALL</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
