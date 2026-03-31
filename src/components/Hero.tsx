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
      className="min-h-[100vh] pt-32 pb-20 px-6 relative overflow-hidden flex flex-col justify-center perspective-[1000px] bg-[#0a0a0a]"
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
        
        <motion.div style={{ opacity }} className="text-left mt-8 lg:mt-0">
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
            Buy CALL. Buy PUT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Stop Bleeding Premium.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-xl text-gray-400 mb-8 lg:mb-10 max-w-xl leading-relaxed"
          >
            The only TradingView indicator built specifically for Indian options buyers — with a <strong className="text-white font-medium">sideways market filter</strong> that tells you exactly when NOT to trade, so theta decay never destroys your capital again.
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
              <span className="relative z-10 flex items-center gap-2">Get Full Source Code — ₹2,999 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            </a>
          </motion.div>

          {/* Social Proof Badges / Trust Bar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 text-sm md:text-[13px] text-gray-400 font-medium">
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Zero Repaint</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Weekly Expiry Proof</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Entry/SL/3TPs Drawn</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Sideways Filter</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#00c9a7]" /> Full Open Code</div>
          </motion.div>
        </motion.div>

        {/* 3D Visual Simulator omitted to save space, but keeping structure so layout remains identical to previous design */}
        <motion.div
          className="relative hidden lg:block h-[500px] xl:h-[600px] w-full mt-10 lg:mt-0"
          style={{ rotateX: mouseY, rotateY: mouseX, transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 top-[15%] left-[5%] w-[90%] h-[70%] bg-[#111]/80 backdrop-blur-xl border border-[#1f1f1f] rounded-3xl shadow-2xl" style={{ transform: 'translateZ(-20px)' }} />

          {/* Main Chart Simulator Panel */}
          <div className="absolute inset-0 top-[5%] left-[0%] w-[100%] h-[80%] bg-[#111] border border-[#1f1f1f] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
            <div className="h-10 border-b border-[#1f1f1f] bg-[#0a0a0a] flex items-center px-4 gap-4">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-[#e84242]"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-[#00c9a7]"></div>
               </div>
               <div className="text-xs font-mono text-gray-500">NIFTY50 • 5m • TQ 2.0</div>
            </div>
            
            <div className="flex-1 relative p-6 bg-[#0a0a0a]">
              {/* Fake Chart Element representation */}
               <motion.div className="w-full flex items-center justify-between mb-8 border-b border-[#00c9a7]/30 pb-1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }}>
                 <span className="text-[10px] text-[#00c9a7] font-mono bg-[#00c9a7]/10 px-2 py-0.5 rounded">TP3 : 24,150.00</span>
               </motion.div>
               <motion.div className="w-full flex items-center justify-between mb-8 border-b border-[#00c9a7]/30 pb-1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, delay: 0.5, repeat: Infinity }}>
                 <span className="text-[10px] text-[#00c9a7] font-mono bg-[#00c9a7]/10 px-2 py-0.5 rounded">TP2 : 24,100.00</span>
               </motion.div>
               <div className="w-full flex items-center justify-between mb-8 border-b border-[#00c9a7]/30 pb-1">
                 <span className="text-[10px] text-[#00c9a7] font-mono bg-[#00c9a7]/10 px-2 py-0.5 rounded">TP1 : 24,050.00</span>
               </div>
               <div className="w-full flex items-center justify-between mb-12 border-b-2 border-dashed border-white/50 pb-1">
                 <span className="text-[10px] text-white font-mono bg-white/10 px-2 py-0.5 rounded">ENTRY: 23,980.00</span>
               </div>
               <div className="w-full flex items-center justify-between border-b border-[#e84242]/50 pb-1">
                 <span className="text-[10px] text-[#e84242] font-mono bg-[#e84242]/10 px-2 py-0.5 rounded">STOP LOSS: 23,940.00</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
