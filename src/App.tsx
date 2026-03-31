import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Menu, X, CheckCircle2, XCircle, Lock, Unlock, 
  TrendingUp, BarChart2, Cloud, CandlestickChart, 
  Globe, Bell, ShieldCheck, Mail, CreditCard, Play, MessageCircle, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

const screenshotModules = import.meta.glob('./assets/screenshots/*.{png,jpg,jpeg,webp}', { eager: true });
const screenshots = Object.entries(screenshotModules).map(([path, module]: [string, any]) => {
  const filename = path.split('/').pop() || '';
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  const caption = nameWithoutExt.replace(/^[0-9.\-_]+/, '').trim();
  return {
    src: module.default,
    caption: caption || 'Traders Queen 2.0 ZR Chart'
  };
});

const CHECKOUT_LINK = "https://superprofile.bio/vp/69c0fe2898385800138423c6?checkout=true";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c0f]/90 backdrop-blur-md border-b border-[#1e232b]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-display font-bold text-white">Traders Queen 2.0 Zero Repaint</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#why-tq-2" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Why TQ 2.0 ZR</a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How It Works</a>
          <a href="#what-you-get" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">What You Get</a>
          <a href="#reviews" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Reviews</a>
          <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:block">
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors">
            Get the Code — ₹2,999
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0c0f] border-b border-[#1e232b] px-6 py-4 flex flex-col gap-4">
          <a href="#why-tq-2" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Why TQ 2.0 ZR</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">How It Works</a>
          <a href="#what-you-get" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">What You Get</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Reviews</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg w-full mt-2 transition-colors">
            Get the Code — ₹2,999
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax effect for 3D illustration
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 40,
      y: (clientY / innerHeight - 0.5) * 40
    });
  };

  const springConfig = { damping: 20, stiffness: 100 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen pt-40 pb-20 px-6 relative overflow-hidden flex flex-col justify-center perspective-[1000px]"
    >
      {/* Deep Space Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,153,129,0.05)_0%,rgba(10,12,15,1)_100%)] pointer-events-none"></div>

      {/* Abstract Glowing 3D Orbs/Nodes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-primary/20 blur-[150px] pointer-events-none mix-blend-screen"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[5%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-danger/10 blur-[150px] pointer-events-none mix-blend-screen"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Technical Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13161c] border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-8 shadow-[0_0_20px_rgba(8,153,129,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            Pine Script v6 Verified
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white"
          >
            They Showed You a Perfect Chart.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-danger to-red-400">That Chart Was Lying.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted mb-10 max-w-2xl leading-relaxed"
          >
            90% of indicators sold in the Indian market repaint. They rewrite their own history. <strong className="text-white font-medium">Traders Queen 2.0 Zero Repaint doesn't.</strong>
            <br/><br/>
            We prove it: the complete source code is yours to open, read, and verify. One payment. No black box.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start"
          >
            <a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl text-xl transition-all w-full sm:w-auto shadow-[0_0_30px_rgba(8,153,129,0.3)] hover:shadow-[0_0_50px_rgba(8,153,129,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">Get Full Source Code <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/></span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"></div>
            </a>
            <div className="text-left text-sm text-muted py-2 flex flex-col justify-center">
              <span className="text-white font-bold block mb-1">₹2,999 One-Time</span>
              <span>Delivered instantly</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
          >
            <div className="flex items-center gap-2">
               <ShieldCheck size={16} className="text-primary" /> 100% Zero-Repaint Verified
            </div>
            <div className="flex items-center gap-2">
               <Unlock size={16} className="text-primary" /> Full .pine File
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Abstract UI Illustration */}
        <motion.div
          className="relative hidden lg:block h-[600px] w-full"
          style={{
            rotateX: mouseY,
            rotateY: mouseX,
            transformStyle: "preserve-3d"
          }}
        >
          {/* Base Platform */}
          <div className="absolute inset-0 top-[20%] left-[10%] w-[80%] h-[60%] bg-[#13161c]/80 backdrop-blur-xl border border-[#1e232b] rounded-3xl shadow-2xl" style={{ transform: 'translateZ(-50px)' }}></div>

          {/* Main "Chart" Glass Panel */}
          <div className="absolute inset-0 top-[10%] left-[5%] w-[90%] h-[80%] bg-[#1a1e24]/60 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col" style={{ transform: 'translateZ(0px)' }}>
            {/* Mock Header */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-danger/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-primary/80"></div>
              <div className="ml-4 px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-muted">TQ_2.0_ZR_Source.pine</div>
            </div>
            {/* Mock Code Lines */}
            <div className="p-6 space-y-3 flex-1 opacity-60">
              <div className="w-3/4 h-3 bg-primary/20 rounded"></div>
              <div className="w-1/2 h-3 bg-white/10 rounded ml-4"></div>
              <div className="w-5/6 h-3 bg-white/10 rounded ml-4"></div>
              <div className="w-2/3 h-3 bg-white/10 rounded"></div>
              <div className="w-1/3 h-3 bg-danger/20 rounded ml-4 mt-6"></div>
              <div className="w-1/2 h-3 bg-white/10 rounded ml-8"></div>
            </div>
          </div>

          {/* Floating "Signal" Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[-5%] bg-[#0a0c0f] border border-primary/30 p-4 rounded-xl shadow-xl flex items-center gap-4"
            style={{ transform: 'translateZ(50px)' }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="text-xs text-muted mb-1">Confirmed Signal</div>
              <div className="text-white font-bold text-sm">BUY CALL @ 48200</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] left-[-10%] bg-[#0a0c0f] border border-[#1e232b] p-4 rounded-xl shadow-xl flex items-center gap-4"
            style={{ transform: 'translateZ(80px)' }}
          >
            <div className="w-2 h-10 rounded-full bg-gradient-to-b from-primary to-transparent"></div>
            <div>
              <div className="text-white font-bold text-sm mb-1 font-mono">barmerge.lookahead_off</div>
              <div className="text-xs text-primary">Zero Repaint Lock Active</div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-muted rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-muted rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialProof = () => (
  <div className="bg-[#13161c] py-5 border-y border-[#1e232b]">
    <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
      <span className="text-yellow-500 tracking-widest text-lg">★★★★★</span>
      <span className="hidden md:inline text-[#2a303c]">|</span>
      <span>Trusted by active traders across Nifty · BankNifty · Equities · Crypto</span>
      <span className="hidden md:inline text-[#2a303c]">|</span>
      <span>Pine Script v6 · TradingView</span>
      <span className="hidden md:inline text-[#2a303c]">|</span>
      <span>Zero-repaint verified in source code</span>
    </div>
  </div>
);

const Problem = () => {
  return (
    <section id="why-tq-2" className="py-32 px-6 bg-[#0a0c0f] relative">
      {/* Visual connection line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-danger/20 to-transparent z-0 hidden md:block"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-danger font-bold tracking-widest uppercase text-sm mb-4">The Repainting Epidemic</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">You Didn't Make a Bad Trade.<br/>Your Chart Lied to You.</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Every time a signal vanishes after you lose money, it's not a glitch. It's built into the system. It's called repainting, and it's how most indicators fake perfect backtests.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {/* Scroll Story 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 order-2 md:order-1 relative group w-full">
              {/* Abstract Visual */}
              <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-[#13161c] border border-[#1e232b] overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-danger/5 to-transparent"></div>
                {/* Visualizing "Disappearing Signal" */}
                <motion.div
                  animate={{ opacity: [1, 1, 0, 0, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-danger/20 flex items-center justify-center text-danger border border-danger/50 shadow-[0_0_30px_rgba(242,54,69,0.3)] absolute top-1/3 right-1/3"
                >
                  BUY
                </motion.div>
                <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 80 Q 25 20, 50 50 T 100 20" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="5,5" className="text-white" />
                  <path d="M0 80 Q 25 80, 50 50 T 100 80" stroke="#f23645" fill="none" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="w-16 h-16 rounded-2xl bg-danger/10 flex items-center justify-center text-danger mb-6">
                <XCircle size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">The Disappearing Signal</h3>
              <p className="text-xl text-muted leading-relaxed">
                You enter on a signal. The market moves against you. You check the chart—<strong className="text-white">the signal is gone.</strong> It rewrote its own history to look perfect on a screenshot. You are trading a ghost.
              </p>
            </div>
          </motion.div>

          {/* Scroll Story 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 relative">
              <div className="w-16 h-16 rounded-2xl bg-[#2a303c]/30 flex items-center justify-center text-gray-400 mb-6">
                <Lock size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">The Black Box Trap</h3>
              <p className="text-xl text-muted leading-relaxed">
                "Invite-only" scripts mean you cannot read the code. You cannot verify their claims. When the seller disappears or shuts down their server, your access is revoked. You own absolutely nothing.
              </p>
            </div>
            <div className="flex-1 relative w-full">
              {/* Abstract Visual */}
              <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-[#13161c] border border-[#1e232b] overflow-hidden relative flex items-center justify-center">
                <div className="w-32 h-32 bg-[#0a0c0f] border border-[#2a303c] rounded-xl flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                  <Lock className="text-[#2a303c]" size={48} />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-xl border border-dashed border-gray-600/30"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent mb-6">
            <div className="px-6 py-2 bg-[#0a0c0f] rounded-full text-sm font-bold tracking-widest uppercase text-primary">The Alternative</div>
          </div>
          <p className="text-3xl md:text-4xl font-display font-bold text-white max-w-3xl mx-auto leading-tight">
            We built TQ 2.0 Zero Repaint to break this exact cycle. No hidden code. No monthly fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Solution = () => (
  <section className="py-24 px-6 bg-[#f5f4f1] text-[#1a1a1a] relative overflow-hidden">
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Solution</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">Radical Transparency.</h2>
        <p className="text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
          We don't sell a black box. We hand you the raw Pine Script v6 source code.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { num: "01", title: "Open Source Code", desc: "The complete .pine file is yours. Read it, understand it, verify it." },
          { num: "02", title: "One-Time ₹2,999", desc: "No subscriptions. No renewals. If we disappear, your code still works." },
          { num: "03", title: "Provable Zero Repaint", desc: "Built with request.security() and confirmed prior-bar data. Technically impossible to repaint." }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-[#e5e4e1] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <div className="text-6xl font-display font-bold text-[#e0ded8] mb-8 group-hover:text-primary transition-colors">{item.num}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-[#4a4a4a] text-lg leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ChartProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasMultipleImages = screenshots.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <section className="py-24 px-6 bg-[#0a0c0f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">See It For Yourself</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Every Market Condition</h2>
        </div>

        {/* Mobile-only caption above the image */}
        {screenshots.length > 0 && (
          <div className="md:hidden text-center mb-6">
            <span className="inline-block bg-[#13161c] text-white px-5 py-2 rounded-full font-bold shadow-lg text-sm border border-[#2a303c] uppercase tracking-wide">
              {screenshots[currentIndex].caption}
            </span>
          </div>
        )}

        <div className="bg-[#13161c] p-4 rounded-2xl border border-[#1e232b] mb-10 shadow-2xl">
          <div
            className="aspect-video bg-[#1a1e24] rounded-xl flex items-center justify-center border border-[#2a303c] relative overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {screenshots.length === 0 ? (
              <>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3a404c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="text-center z-10 p-6">
                  <BarChart2 size={48} className="mx-auto text-[#4a5568] mb-4" />
                  <p className="text-gray-400 font-mono text-sm max-w-md mx-auto">[Add 16:9 PNG screenshots in src/assets/screenshots folder]</p>
                  <p className="text-gray-500 font-mono text-xs mt-4">Showing Buy CALL, Entry, SL, and TP1/TP2/TP3 lines</p>
                </div>
              </>
            ) : (
              <>
                {screenshots.map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="hidden md:block absolute top-4 left-4 right-4 text-center z-20 pointer-events-none">
                       <span className="inline-block bg-black/70 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold shadow-lg text-lg border border-white/10 uppercase tracking-wide">
                         {item.caption}
                       </span>
                    </div>
                  </div>
                ))}

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-opacity z-20"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-opacity z-20"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 items-center gap-2 z-20 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`w-2 h-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-black/30 transition-all ${
                            idx === currentIndex ? 'bg-primary w-4' : 'bg-white/50 hover:bg-white/80'
                          }`}
                          aria-label={`Go to screenshot ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile-only pagination below the image */}
          {hasMultipleImages && screenshots.length > 0 && (
            <div className="md:hidden flex justify-center items-center gap-2 mt-6">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-[#13161c] transition-all ${
                    idx === currentIndex ? 'bg-primary w-5' : 'bg-[#2a303c] hover:bg-[#3a404c]'
                  }`}
                  aria-label={`Go to screenshot ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <p className="text-xl text-muted max-w-4xl mx-auto text-center leading-relaxed">
          Traders Queen 2.0 Zero Repaint isn't just a trend indicator. It's a comprehensive trading system designed for the realities of the Indian market. Whether you're navigating choppy <strong>sideways filters</strong>, trading across <strong>multiple markets and asset classes</strong>, engaging in <strong>Option buying or selling</strong>, or switching between <strong>different time frames</strong>, the logic adapts. Every chart screenshot you see above showcases the exact performance you get in live markets.
        </p>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <TrendingUp size={28} />,
      title: "Auto Risk Engine",
      subtitle: "Entry, SL & 3x Take Profits",
      desc: "Instant level generation calculated via ATR the millisecond a signal fires. Know your exact risk before you trade."
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Options Buyer Modes",
      subtitle: "Call Only / Put Only",
      desc: "Filter out noise. See only bullish setups if you're a CE buyer. Keep your chart ruthlessly clean."
    },
    {
      icon: <Cloud size={28} />,
      title: "Momentum Cloud",
      subtitle: "Visual Trend Filter",
      desc: "A glowing background cloud visually dictates MACD momentum. Blue for calls, red for puts, neutral to stay flat."
    },
    {
      icon: <CandlestickChart size={28} />,
      title: "Heikin Ashi Engine",
      subtitle: "Standard Display",
      desc: "Calculates signals using smoothed Heikin Ashi data, but plots on your standard Japanese candlestick chart."
    },
    {
      icon: <Globe size={28} />,
      title: "Multi-Timeframe",
      subtitle: "External Data Support",
      desc: "Overlay 15m trend data on a 1m scalping chart. View Nifty signals while watching BankNifty."
    },
    {
      icon: <Bell size={28} />,
      title: "Webhook Automations",
      subtitle: "Instant Notifications",
      desc: "Native TradingView JSON alerts ready for WhatsApp, Telegram, Zapier, or direct broker API execution."
    }
  ];

  return (
    <section id="what-you-get" className="py-24 px-6 bg-[#0a0c0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Pro-Grade Features</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Engineered for Execution.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#13161c] p-8 rounded-3xl border border-[#1e232b] hover:border-primary/50 transition-all group shadow-lg"
            >
              <div className="w-14 h-14 bg-[#1a1e24] border border-[#2a303c] rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">{feature.title}</h3>
              <p className="text-xs font-mono text-primary mb-4 uppercase tracking-wider">{feature.subtitle}</p>
              <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-[#13161c] relative border-y border-[#1e232b]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Execution Framework</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Systematic Trading in 3 Steps.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Animated Connecting Path (Desktop) */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-px bg-[#2a303c] z-0">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start group"
          >
            {/* Visual Icon */}
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="w-32 h-32 bg-[#0a0c0f] border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(8,153,129,0.3)] relative z-10">
                <motion.div
                  className="w-16 h-8 bg-primary/20 rounded border border-primary flex items-center justify-center text-primary font-bold text-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  BUY
                </motion.div>
              </div>
            </div>
            <div className="text-primary font-mono font-bold text-sm mb-4">STEP 01</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Wait for Confirmation</h3>
            <p className="text-muted leading-relaxed">
              A clear label appears. The candle closes. The signal locks in permanently. No repainting, no second-guessing.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start group"
          >
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-[#3b82f6]/10 rounded-full blur-2xl group-hover:bg-[#3b82f6]/20 transition-colors"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <div className="w-32 h-32 bg-[#0a0c0f] border-2 border-[#2a303c] rounded-full flex items-center justify-center relative z-10 overflow-hidden">
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3b82f6]/40 to-transparent"
                  animate={{ height: ['30%', '70%', '30%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <Cloud className="text-[#3b82f6] relative z-10" size={40} />
              </div>
            </div>
            <div className="text-gray-400 font-mono font-bold text-sm mb-4">STEP 02</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Filter with Momentum</h3>
            <p className="text-muted leading-relaxed">
              Check the background cloud. Is it teal for calls? Red for puts? If momentum disagrees, you stay flat and protect capital.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start group"
          >
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              />
              <div className="w-32 h-32 bg-[#0a0c0f] border-2 border-[#2a303c] rounded-full flex flex-col items-center justify-center relative z-10 gap-2">
                <div className="w-16 h-1 bg-yellow-500 rounded"></div>
                <div className="w-16 h-1 bg-white/20 rounded"></div>
                <div className="w-16 h-1 bg-white/20 rounded"></div>
                <div className="w-16 h-1 bg-danger rounded"></div>
              </div>
            </div>
            <div className="text-gray-400 font-mono font-bold text-sm mb-4">STEP 03</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Execute the Plan</h3>
            <p className="text-muted leading-relaxed">
              Copy the auto-generated Entry, Stop Loss, and Take Profit levels to your broker. Walk away. Let the system work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="reviews" className="py-24 px-6 bg-[#f5f4f1] text-[#1a1a1a]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">What Traders Say</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Traders. Real Results. Real Names.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Featured Testimonial */}
        <div className="md:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#e5e4e1]">
          <div className="text-yellow-500 tracking-widest mb-6 text-xl">★★★★★</div>
          <p className="text-xl md:text-3xl text-[#1a1a1a] italic mb-8 leading-relaxed font-medium">
            "I paid for a subscription-based indicator for 14 months. ₹18,000 gone. The code was never mine. When the service shut down, everything disappeared. I bought Traders Queen 2.0 ZR six months ago for ₹2,999. The code is still on my computer. It still works. Best decision I made as a trader."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center text-xl font-bold text-[#7a8390]">K</div>
            <div>
              <p className="font-bold text-lg">Karan V.</p>
              <p className="text-[#7a8390]">NSE F&O Trader · Surat</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#e5e4e1]">
          <div className="text-yellow-500 tracking-widest mb-4">★★★★★</div>
          <p className="text-lg text-[#4a4a4a] italic mb-8 leading-relaxed">
            "The Call Buyer Mode changed everything for me. Earlier I would get 10 signals and sit confused about which one to take. Now only Buy CALL signals appear. I trade, I exit, I move on. The clarity alone is worth the price."
          </p>
          <div>
            <p className="font-bold text-lg">Deepak R.</p>
            <p className="text-[#7a8390]">Nifty CE Buyer · Indore</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#e5e4e1]">
          <div className="text-yellow-500 tracking-widest mb-4">★★★★★</div>
          <p className="text-lg text-[#4a4a4a] italic mb-8 leading-relaxed">
            "I'm not a coder. But I opened the .pine file just to see what was inside. I could actually follow the logic. That alone gave me more confidence in my trades than any black box indicator ever could. This is how indicators should be sold."
          </p>
          <div>
            <p className="font-bold text-lg">Priya S.</p>
            <p className="text-[#7a8390]">Intraday Trader · Ahmedabad</p>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#e5e4e1]">
          <div className="text-yellow-500 tracking-widest mb-4">★★★★★</div>
          <p className="text-lg text-[#4a4a4a] italic mb-8 leading-relaxed">
            "I work a full-time job. I cannot watch charts from 9:15 to 3:30. TQ 2.0 ZR sends the alert to my phone, I open Upstox, I punch in the Entry and SL it already calculated, and I go back to work. That workflow is worth more than any number of signals."
          </p>
          <div>
            <p className="font-bold text-lg">Ankit M.</p>
            <p className="text-[#7a8390]">Part-time Options Buyer · Bengaluru</p>
          </div>
        </div>

        {/* Testimonial 5 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#e5e4e1]">
          <div className="text-yellow-500 tracking-widest mb-4">★★★★★</div>
          <p className="text-lg text-[#4a4a4a] italic mb-8 leading-relaxed">
            "I was getting destroyed in sideways BankNifty markets — buying calls in choppy sessions and watching premium decay eat my capital. The Momentum Cloud is the feature I didn't know I needed. It has kept me flat on the worst days."
          </p>
          <div>
            <p className="font-bold text-lg">Vikram D.</p>
            <p className="text-[#7a8390]">BankNifty Scalper · Pune</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-24 px-6 bg-[#0a0c0f] relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Math is Simple</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Stop Renting. Start Owning.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* The Old Way */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#13161c] border border-danger/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-danger/40 transition-colors"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-danger/5 rounded-full blur-3xl group-hover:bg-danger/10 transition-colors"></div>
          <div className="text-danger font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2"><XCircle size={16}/> The Old Way</div>
          <h3 className="text-3xl font-bold text-white mb-2">Subscription Trap</h3>
          <div className="text-5xl font-display font-bold text-muted mb-8 line-through decoration-danger decoration-4">₹23,976<span className="text-lg text-gray-500 font-body">/2 yrs</span></div>

          <ul className="space-y-6 text-lg text-gray-400">
            <li className="flex items-center gap-4"><X size={24} className="text-danger shrink-0" /> Pay every single month</li>
            <li className="flex items-center gap-4"><X size={24} className="text-danger shrink-0" /> Black box "invite-only" code</li>
            <li className="flex items-center gap-4"><X size={24} className="text-danger shrink-0" /> Zero proof against repainting</li>
            <li className="flex items-center gap-4"><X size={24} className="text-danger shrink-0" /> Access gone if seller quits</li>
          </ul>
        </motion.div>

        {/* The TQ 2.0 Way */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#089981]/20 to-[#13161c] border border-primary/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(8,153,129,0.15)] hover:shadow-[0_0_80px_rgba(8,153,129,0.25)] transition-shadow"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
          <div className="text-primary font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2"><CheckCircle2 size={16}/> Traders Queen 2.0</div>
          <h3 className="text-3xl font-bold text-white mb-2">Lifetime Ownership</h3>
          <div className="text-5xl font-display font-bold text-white mb-8">₹2,999<span className="text-lg text-primary font-body ml-2">Forever</span></div>

          <ul className="space-y-6 text-lg text-gray-200 relative z-10">
            <li className="flex items-center gap-4"><CheckCircle2 size={24} className="text-primary shrink-0" /> Pay exactly once</li>
            <li className="flex items-center gap-4"><CheckCircle2 size={24} className="text-primary shrink-0" /> Full .pine source code provided</li>
            <li className="flex items-center gap-4"><CheckCircle2 size={24} className="text-primary shrink-0" /> Provable zero repaint logic</li>
            <li className="flex items-center gap-4"><CheckCircle2 size={24} className="text-primary shrink-0" /> Code lives on your machine</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const Offer = () => (
  <section className="py-24 px-6 bg-[#0a0c0f] relative overflow-hidden border-y border-[#1e232b]">
    {/* Animated Background Elements */}
    <motion.div 
      className="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-[10%] left-[5%] w-[40%] h-[30%] rounded-full bg-danger/5 blur-[100px] pointer-events-none"
      animate={{ 
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">What You Get Today</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-10">Traders Queen 2.0 Zero Repaint — Lifetime Code License</h2>
        <div className="inline-block bg-[#13161c] border border-primary/30 rounded-3xl p-10 mb-12 shadow-[0_0_50px_rgba(8,153,129,0.15)]">
          <div className="text-6xl md:text-8xl font-bold text-white mb-6">₹2,999</div>
          <p className="text-xl md:text-2xl text-primary font-medium">One Time · No Renewal · No Subscription · Yours Forever</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-[#13161c] p-8 rounded-2xl border border-[#1e232b]">
          <h3 className="text-2xl font-bold text-white mb-8">The indicator:</h3>
          <ul className="space-y-5 text-gray-300">
            <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">Complete Pine Script source code — the full .pine file</span></li>
            <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">Zero repaint architecture — verified in code, not just claimed</span></li>
            <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">Automatic Entry, Stop Loss, TP1, TP2, TP3 on every signal</span></li>
            <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">Call Buyer Mode / Put Buyer Mode / Standard Mode</span></li>
            <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">Heikin Ashi calculation with regular candle display</span></li>
            <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">External symbol and higher timeframe support</span></li>
            <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">MACD Momentum Cloud</span></li>
            <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">JSON alert system for WhatsApp, Zapier, and N8N webhooks</span></li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <div className="bg-[#13161c] p-8 rounded-2xl border border-[#1e232b]">
            <h3 className="text-2xl font-bold text-white mb-6">What's also included:</h3>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">Hindi setup video — add to chart in under 5 minutes</span></li>
              <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">30-day WhatsApp support</span></li>
              <li className="flex items-start gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" size={24} /> <span className="leading-relaxed">Free code updates if Pine Script changes</span></li>
            </ul>
          </div>

          <div className="bg-[#13161c] p-8 rounded-2xl border border-danger/20">
            <h3 className="text-2xl font-bold text-white mb-6">What you will never see:</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-4"><XCircle className="text-danger shrink-0 mt-1" size={20} /> Monthly charges</li>
              <li className="flex items-start gap-4"><XCircle className="text-danger shrink-0 mt-1" size={20} /> Renewal reminders</li>
              <li className="flex items-start gap-4"><XCircle className="text-danger shrink-0 mt-1" size={20} /> Access walls</li>
              <li className="flex items-start gap-4"><XCircle className="text-danger shrink-0 mt-1" size={20} /> Code hidden behind a TradingView invite</li>
              <li className="flex items-start gap-4"><XCircle className="text-danger shrink-0 mt-1" size={20} /> "Price increases in 24 hours" pressure</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#13161c] border border-[#1e232b] rounded-3xl p-8 md:p-10 mb-16 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
        <ShieldCheck size={80} className="text-primary shrink-0" />
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">Our one condition:</h4>
          <p className="text-gray-300 text-lg leading-relaxed">If TQ 2.0 ZR repaints on a confirmed closed bar even once — show us the screenshot and we will refund you in full. We have never issued one. The architecture makes it technically impossible. But we put this in writing because you deserve to buy without risk.</p>
        </div>
      </div>

      <div className="text-center">
        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-6 px-12 rounded-2xl text-2xl md:text-3xl transition-colors mb-6 w-full md:w-auto shadow-xl shadow-primary/20">
          Get the Full Code — ₹2,999
        </a>
        <p className="text-gray-400 mb-4 text-lg">Delivered to your inbox within 2 hours of payment.</p>
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <Lock size={16} /> Razorpay · UPI · GPay · PhonePe · Net Banking · Cards
        </p>
      </div>
    </div>
  </section>
);

const Steps = () => (
  <section className="py-24 px-6 bg-[#f5f4f1] text-[#1a1a1a]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">3 Steps to Your Code</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="text-center md:text-left">
          <div className="w-20 h-20 bg-white border border-[#e5e4e1] rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto md:mx-0 shadow-sm">
            <CreditCard size={36} />
          </div>
          <h3 className="text-2xl font-bold mb-4">1. Complete Payment</h3>
          <p className="text-[#4a4a4a] text-lg leading-relaxed">Pay ₹2,999 once via Razorpay, UPI, GPay, PhonePe, net banking, or card. Secure payment processing. Takes under 60 seconds.</p>
        </div>

        <div className="text-center md:text-left">
          <div className="w-20 h-20 bg-white border border-[#e5e4e1] rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto md:mx-0 shadow-sm">
            <Mail size={36} />
          </div>
          <h3 className="text-2xl font-bold mb-4">2. Receive the File</h3>
          <p className="text-[#4a4a4a] text-lg leading-relaxed">Within 2 hours, the complete .pine file arrives in your email inbox. No waiting. No manual approval. No follow-up required.</p>
        </div>

        <div className="text-center md:text-left">
          <div className="w-20 h-20 bg-white border border-[#e5e4e1] rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto md:mx-0 shadow-sm">
            <TrendingUp size={36} />
          </div>
          <h3 className="text-2xl font-bold mb-4">3. Add to TradingView and Trade</h3>
          <p className="text-[#4a4a4a] text-lg leading-relaxed">Open TradingView → Pine Script Editor → paste the code → add to chart. The Hindi setup video walks you through every click. You will be live in under 5 minutes.</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      q: "How do I actually know it doesn't repaint?",
      a: "You don't have to take our word for it. Open the .pine file the moment it arrives. The indicator is built using `request.security()` with `barmerge.lookahead_off` and prior-bar data (`expr[1]`). Any Pine Script developer will confirm in under five minutes that this architecture makes repainting technically impossible on confirmed bars. We show you the mechanism rather than asking for trust."
    },
    {
      q: "I'm not a coder. Can I still use this?",
      a: "Yes. You paste the code into TradingView's Pine Script Editor exactly once — that takes less than two minutes. After that, TQ 2.0 ZR works exactly like any other TradingView indicator. The Hindi video guide walks you through every step from start to finish. No coding knowledge required at any point after setup."
    },
    {
      q: "Does it work on Nifty, BankNifty, stocks, and MCX?",
      a: "Yes. TQ 2.0 ZR works on any instrument available on TradingView — NSE Futures, Nifty options, BankNifty options, equities, MCX commodities, and crypto. It has been specifically tested on Indian market instruments."
    },
    {
      q: "Will I get updates if TradingView releases a new Pine Script version?",
      a: "Yes. If TradingView releases a Pine Script update that requires code changes, or if a critical bug is found, you receive the updated code at no additional charge. Your one-time payment covers all future updates."
    },
    {
      q: "Does it work on the free TradingView plan?",
      a: "Yes. TQ 2.0 ZR works on TradingView's free plan. You do not need a paid TradingView subscription to use it."
    },
    {
      q: "Can I use it on the TradingView mobile app?",
      a: "Yes. TradingView's mobile app supports custom indicators added via the Pine Script editor. Once added on desktop, it will appear in your mobile chart view as well."
    },
    {
      q: "A competitor is selling a similar indicator for ₹499/month. Why should I pay ₹2,999?",
      a: "₹499/month is ₹5,988/year. Over two years that is ₹11,976 — and you own nothing. If the seller shuts down, your access disappears. If you want to verify their zero-repaint claim, you cannot — the code is locked.\n\nTraders Queen 2.0 ZR is ₹2,999 once. You own the code permanently. You can verify every claim. The math is yours to calculate."
    },
    {
      q: "What is the refund policy?",
      a: "One condition: if TQ 2.0 ZR repaints on a confirmed closed bar even once, show us a screenshot and we will refund you in full. We have never issued one. The architecture makes it technically impossible. Beyond that, because we deliver a digital file immediately upon payment, we do not offer refunds for change of mind — the same way you cannot return a software licence once downloaded."
    },
    {
      q: "Can I resell the code after I buy it?",
      a: "No. The licence is for personal use only. Redistribution, resale, or sharing of the code in any form is strictly prohibited and is subject to legal action under Indian copyright law. This is clearly stated in the licence document delivered with your purchase."
    },
    {
      q: "Is there a discount available?",
      a: "No. The price is ₹2,999, and it will not change. This is not a negotiation — it is a product with genuine value at a price that is already significantly lower than two months of any subscription alternative. When you are ready, the price will be the same."
    },
    {
      q: "What kind of support is included?",
      a: "30 days of WhatsApp support after purchase. For any setup questions, configuration help, or troubleshooting, message us directly. Response within 24 hours on trading days."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#f5f4f1] text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Common Questions</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Want to Know Before You Buy.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} name="faq-accordion" className="group border-b border-[#e5e4e1] last:border-0">
              <summary className="flex justify-between items-center font-bold text-xl md:text-2xl cursor-pointer list-none py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="text-[#7a8390] group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" size={24} />
              </summary>
              <p className="text-[#4a4a4a] text-lg whitespace-pre-line leading-relaxed pb-8 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a.split('`').map((part, i) => 
                  i % 2 === 1 ? <code key={i} className="bg-[#e8e6df] px-1.5 py-0.5 rounded text-sm font-mono text-primary font-bold">{part}</code> : part
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-32 px-6 bg-[#0a0c0f] text-center border-t border-[#1e232b]">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
        You Can Keep Paying ₹999 Every Month for a Locked Tool You Cannot Verify and Do Not Own.
      </h2>
      <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Or you can pay ₹2,999 once, receive the complete source code, verify every claim yourself, and never pay again.<br/><br/>
        <span className="text-white font-medium">The code will be on your computer whether we exist tomorrow or not. That is the only kind of ownership that actually protects you.</span>
      </p>
      
      <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-6 px-12 rounded-2xl text-2xl md:text-3xl transition-colors mb-12 shadow-xl shadow-primary/20 w-full md:w-auto">
        Get the Full Code — ₹2,999
      </a>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300 mb-16 text-lg">
        <div className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={24}/> 7-day repaint guarantee — or full refund</div>
        <div className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={24}/> Works instantly inside TradingView</div>
        <div className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={24}/> Full source code — open and verify</div>
      </div>

      <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-bold text-lg">
        <Play size={24} /> Not ready to buy? Watch the Hindi setup video first →
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#050608] py-16 px-6 border-t border-[#1e232b]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <div className="text-2xl font-display font-bold text-white mb-2">Traders Queen 2.0 Zero Repaint</div>
          <p className="text-muted">Professional tools. Honest terms. Open code.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <h4 className="text-white font-bold mb-6">Links</h4>
            <ul className="space-y-4 text-muted">
              <li><a href="#why-tq-2" className="hover:text-primary transition-colors">Why TQ 2.0</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#what-you-get" className="hover:text-primary transition-colors">What You Get</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-muted">
              <li>
                <a
                  href="https://wa.me/919879737819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  Contact on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1e232b] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="text-sm text-muted">
          <p className="mb-1">© 2024 zerorepaint.in. All rights reserved.</p>
          <p>Personal use licence only. Redistribution prohibited.</p>
        </div>
        
        <div className="text-xs text-[#4a5568] max-w-3xl text-left md:text-right leading-relaxed">
          ⚠️ Risk Disclaimer: Trading in financial markets involves substantial risk of loss. Traders Queen 2.0 ZR is a decision-support tool and does not constitute financial advice. Past signal performance does not guarantee future results. Trade only with capital you can afford to lose. You are solely responsible for your trading decisions.
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0c0f] text-[#e8eaed] font-body selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <ChartProof />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <Offer />
      <Steps />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
