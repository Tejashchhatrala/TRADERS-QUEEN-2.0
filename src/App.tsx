import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { 
  Menu, X, CheckCircle2, XCircle, Lock, Unlock, 
  TrendingUp, BarChart2, Cloud, CandlestickChart, 
  Globe, Bell, ShieldCheck, Mail, CreditCard, Play, MessageCircle, ChevronLeft, ChevronRight, ChevronDown,
  EyeOff, RefreshCw, Layers
} from 'lucide-react';

// Using dynamically imported screenshots from the folder
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
const WHATSAPP_LINK = "https://wa.me/919879737819";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1e232b]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-display font-bold text-white flex items-center gap-2">
           <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-display text-white text-sm font-bold shadow-[0_0_15px_rgba(8,153,129,0.5)]">TQ</div>
           <span className="hidden sm:inline">Traders Queen 2.0</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How It Works</a>
          <a href="#what-you-get" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">What You Get</a>
          <a href="#reviews" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Reviews</a>
          <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:block">
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(8,153,129,0.3)] hover:shadow-[0_0_30px_rgba(8,153,129,0.5)]">
            Get TQ 2.0 — ₹2,999
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
        <div className="md:hidden bg-[#0A0A0F] border-b border-[#1e232b] px-6 py-4 flex flex-col gap-4 absolute w-full">
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">How It Works</a>
          <a href="#what-you-get" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">What You Get</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Reviews</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg w-full mt-2 transition-all shadow-[0_0_20px_rgba(8,153,129,0.3)]">
            Get TQ 2.0 — ₹2,999
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center relative bg-[#0A0F1E] overflow-hidden">
      {/* Background Texture - Subtle Candlestick Pattern / Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{
             backgroundImage: `
               linear-gradient(to right, #ffffff 1px, transparent 1px),
               linear-gradient(to bottom, #ffffff 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px',
           }}>
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-danger/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white"
          >
            Finally. An Indicator That Tells You <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">When to Buy, What to Buy,</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">and When to Stay Out.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed font-body"
          >
            Traders Queen 2.0 is a complete signal system for Nifty & BankNifty options buyers.
            Buy CALL or Buy PUT signals. Auto Entry, SL & 3 TPs. A Momentum Cloud that keeps you flat on sideways days.
            <br/><br/>
            <span className="text-white font-medium">One-time ₹2,999. Full source code. Yours forever.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(8,153,129,0.4)] hover:shadow-[0_0_40px_rgba(8,153,129,0.6)] w-full sm:w-auto">
              Get TQ 2.0 — ₹2,999
            </a>
            <a href="#how-it-works" className="inline-flex justify-center items-center bg-transparent hover:bg-white/5 text-white border border-white/20 font-bold py-4 px-8 rounded-xl text-lg md:text-xl transition-all w-full sm:w-auto group">
              Watch It Work First <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-gray-400 font-medium"
          >
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-primary"/> Works on Nifty · BankNifty · Gold</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-primary"/> TradingView Pine Script v6</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-primary"/> Zero Repaint — Verified in Code</span>
            <span className="hidden lg:inline text-gray-600">|</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-primary"/> Zerodha · Upstox · AngelOne Compatible</span>
          </motion.div>
        </motion.div>

        {/* Right Visual - Placeholder for Chart Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
          className="relative w-full aspect-video lg:aspect-[4/3] rounded-2xl border border-[#1e232b] bg-[#111827] shadow-2xl overflow-hidden group perspective-[1000px] flex items-center justify-center"
        >
          {screenshots.length > 0 ? (
            <img src={screenshots[0].src} alt="TQ 2.0 Chart Interface" className="w-full h-full object-cover rounded-xl" />
          ) : (
            <div className="text-center p-8">
               <BarChart2 size={64} className="mx-auto text-primary/50 mb-4" />
               <p className="text-gray-400 font-mono text-sm max-w-sm mx-auto">
                 [Upload hero screenshot to src/assets/screenshots] <br/>
                 Show clean TradingView chart with Buy CALL / Buy PUT labels, teal/red momentum cloud, and TP lines.
               </p>
            </div>
          )}

          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

const PainSection = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0C0F] relative border-b border-[#1e232b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Real Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">You're Not a Bad Trader.<br className="hidden md:block"/> You're Using the Wrong Tool.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pain 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111827] border border-[#1F2937] p-8 rounded-2xl hover:border-danger/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-danger/10 text-danger rounded-xl flex items-center justify-center mb-6 group-hover:bg-danger group-hover:text-white transition-colors">
              <RefreshCw size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">You Enter. The Signal Disappears.</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              You saw a perfect Buy signal. You entered. Candle closed against you. You checked the chart — the signal had moved. It was never really there. This is called repainting. 90% of indicators sold in India do this.
            </p>
          </motion.div>

          {/* Pain 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#111827] border border-[#1F2937] p-8 rounded-2xl hover:border-gray-500/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-gray-800 text-gray-300 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
              <Lock size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">You Own Nothing.</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Locked invite-only code. ₹999/month. The day the seller shuts down — and they do — your access is gone. You paid ₹18,000 and own zero.
            </p>
          </motion.div>

          {/* Pain 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#111827] border border-[#1F2937] p-8 rounded-2xl hover:border-yellow-500/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
              <Layers size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">You Bleed Premium in Sideways Markets.</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              BankNifty chops sideways for 2 hours. You buy a CALL. Theta kills it. There was no signal to skip it — your indicator just kept firing. Premium gone.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-white font-medium">TQ 2.0 was built to solve all three. Here's how.</p>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureRow = ({ title, copy, align = "left", imagePlaceholder, imageIdx = 0 }: { title: string, copy: React.ReactNode, align?: "left"|"right", imagePlaceholder: string, imageIdx?: number }) => {
  const isLeft = align === "left";

  return (
    <div className="py-16 border-b border-[#1e232b]/50 last:border-0">
      <div className={`max-w-7xl mx-auto flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 aspect-video bg-[#111827] rounded-2xl border border-[#1F2937] overflow-hidden flex items-center justify-center relative shadow-2xl"
        >
          {screenshots.length > imageIdx ? (
             <img src={screenshots[imageIdx].src} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-6 opacity-60">
               <p className="text-gray-400 font-mono text-sm">[Upload screenshot to src/assets/screenshots]</p>
               <p className="text-gray-500 font-mono text-xs mt-2">{imagePlaceholder}</p>
            </div>
          )}
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
          <div className="text-lg text-gray-400 leading-relaxed space-y-4">
            {copy}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProductDemo = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0A0C0F]">
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">How TQ 2.0 Works</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">One Chart. Everything You Need to Trade.</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <FeatureRow
          align="left"
          title="Buy CALL / Buy PUT Signals"
          imagePlaceholder="Show chart with green 'Buy CALL' and red 'Buy PUT' labels"
          imageIdx={0}
          copy={<p>The moment a candle closes, TQ 2.0 tells you exactly what to do. Not a vague arrow — a clear label. <strong className="text-white">Buy CALL</strong> when the market is going up. <strong className="text-white">Buy PUT</strong> when it's going down. Confirmed at bar close. Permanent. Never moves.</p>}
        />

        <FeatureRow
          align="right"
          title="Automatic Entry, SL & 3 Take Profits"
          imagePlaceholder="Chart zoomed in showing Entry line, SL line, TP1/TP2/TP3 lines"
          imageIdx={1}
          copy={<p>The moment the signal fires, your entire trade plan is drawn on the chart. Entry price. Stop loss. TP1 for fast booking. TP2 for trend continuation. TP3 for the full move. Copy the numbers into Zerodha or Upstox. Walk away. No math. No guessing.</p>}
        />

        <FeatureRow
          align="left"
          title="Momentum Cloud (The Sideways Filter)"
          imagePlaceholder="Chart showing the teal cloud vs red cloud vs flat/dark background"
          imageIdx={2}
          copy={
            <>
              <p>This is the feature that protects your capital. A dynamic cloud behind your chart turns teal in bullish momentum, red in bearish, and dark/neutral in sideways.</p>
              <p>If the cloud is neutral — don't trade. One glance saves you from buying premium in a choppy market and watching it go to zero.</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium">🔵 Teal = Buy CALL</span>
                <span className="px-3 py-1 bg-danger/10 border border-danger/30 rounded-full text-sm text-danger font-medium">🔴 Red = Buy PUT</span>
                <span className="px-3 py-1 bg-[#1F2937] border border-gray-600 rounded-full text-sm text-gray-400 font-medium">⚫ Flat = Stay Out</span>
              </div>
            </>
          }
        />

        <FeatureRow
          align="right"
          title="Call Buyer Mode / Put Buyer Mode"
          imagePlaceholder="Settings panel showing the mode toggle"
          imageIdx={3}
          copy={<p>If you only trade CALL options, switch to Call Buyer Mode. Every PUT signal disappears. Your chart shows only what's relevant to you. Less noise. Faster decisions. Less time second-guessing.</p>}
        />

        <FeatureRow
          align="left"
          title="Alerts to Your Phone (WhatsApp/Notification)"
          imagePlaceholder="Phone mockup showing a WhatsApp alert notification"
          imageIdx={4}
          copy={<p>You have a job. A business. A life. You can't watch charts from 9:15 to 3:30. Set up TQ 2.0's alerts once — every signal arrives on your phone at bar close. Open Upstox, punch in the levels, go back to work.</p>}
        />
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-24 px-6 bg-[#0D1117] border-y border-[#1e232b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why You Can Actually Trust This One</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left bg-[#111827] p-8 rounded-2xl border border-[#1F2937]"
          >
            <Unlock className="text-primary mb-6 mx-auto md:mx-0" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">The Source Code Is Yours</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Not invite-only. Not locked on a TradingView server. The full .pine file lands in your inbox. Open it in any text editor. Read every line. Verify every claim yourself.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left bg-[#111827] p-8 rounded-2xl border border-[#1F2937]"
          >
            <ShieldCheck className="text-primary mb-6 mx-auto md:mx-0" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Zero Repaint Is Provable</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              The indicator uses `barmerge.lookahead_off` and confirmed prior-bar data. Any Pine Script developer can verify this in under 5 minutes. We show you the code section that proves it.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-left bg-[#111827] p-8 rounded-2xl border border-[#1F2937]"
          >
            <CreditCard className="text-primary mb-6 mx-auto md:mx-0" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">One Payment. Works Forever.</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              ₹2,999 once. Even if we shut down tomorrow, your code lives on your computer. Not our server. Use it in 2025, 2027, 2030 — same code, no renewal, no expiry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0C0F]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From Zero to Live Trade in 5 Minutes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#111827] border border-[#1F2937] p-8 rounded-2xl relative overflow-hidden group">
            <div className="text-7xl font-display font-bold text-primary/40 absolute -top-4 -right-2 group-hover:text-primary/60 transition-colors duration-500">01</div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10 mt-8">Download</h3>
            <p className="text-gray-400 relative z-10">Pay ₹2,999 securely. The full `.pine` source code is emailed to you within 2 hours.</p>
          </div>
          <div className="bg-[#111827] border border-[#1F2937] p-8 rounded-2xl relative overflow-hidden group">
            <div className="text-7xl font-display font-bold text-primary/40 absolute -top-4 -right-2 group-hover:text-primary/60 transition-colors duration-500">02</div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10 mt-8">Copy & Paste</h3>
            <p className="text-gray-400 relative z-10">Open TradingView's Pine Editor. Paste the code. Click 'Add to Chart'.</p>
          </div>
          <div className="bg-[#111827] border border-[#1F2937] p-8 rounded-2xl relative overflow-hidden group">
            <div className="text-7xl font-display font-bold text-primary/40 absolute -top-4 -right-2 group-hover:text-primary/60 transition-colors duration-500">03</div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10 mt-8">Trade</h3>
            <p className="text-gray-400 relative z-10">Wait for a Buy CALL/PUT label on a closed candle. Follow the Entry and SL lines.</p>
          </div>
        </div>

        <p className="text-center text-gray-400 text-lg">
          The Hindi setup video walks you through every single click.
        </p>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Karan V.",
      role: "NSE F&O Trader · Surat",
      quote: "I paid for a subscription-based indicator for 14 months. ₹18,000 gone. The code was never mine. When the service shut down, everything disappeared. I bought Traders Queen 2.0 ZR six months ago for ₹2,999. The code is still on my computer. It still works. Best decision I made as a trader.",
      initials: "KV",
      color: "bg-blue-600"
    },
    {
      name: "Deepak R.",
      role: "Nifty CE Buyer · Indore",
      quote: "The Call Buyer Mode changed everything for me. Earlier I would get 10 signals and sit confused about which one to take. Now only Buy CALL signals appear. I trade, I exit, I move on. The clarity alone is worth the price.",
      initials: "DR",
      color: "bg-purple-600"
    },
    {
      name: "Priya S.",
      role: "Intraday Trader · Ahmedabad",
      quote: "I'm not a coder. But I opened the .pine file just to see what was inside. I could actually follow the logic. That alone gave me more confidence in my trades than any black box indicator ever could. This is how indicators should be sold.",
      initials: "PS",
      color: "bg-pink-600"
    },
    {
      name: "Ankit M.",
      role: "Part-time Options Buyer · Bengaluru",
      quote: "I work a full-time job. I cannot watch charts from 9:15 to 3:30. TQ 2.0 ZR sends the alert to my phone, I open Upstox, I punch in the Entry and SL it already calculated, and I go back to work. That workflow is worth more than any number of signals.",
      initials: "AM",
      color: "bg-green-600"
    },
    {
      name: "Vikram D.",
      role: "BankNifty Scalper · Pune",
      quote: "I was getting destroyed in sideways BankNifty markets — buying calls in choppy sessions and watching premium decay eat my capital. The Momentum Cloud is the feature I didn't know I needed. It has kept me flat on the worst days.",
      initials: "VD",
      color: "bg-orange-600"
    }
  ];

  return (
    <section id="reviews" className="py-24 px-6 bg-[#0D1117] border-y border-[#1e232b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Real Traders. Real Accounts. Real Cities.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {reviews.map((review, idx) => (
            <div key={idx} className={`bg-[#111827] border border-[#1F2937] p-8 rounded-2xl ${idx === 0 ? 'md:col-span-2' : ''}`}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-500 text-lg">★★★★★</div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-bold">
                  <CheckCircle2 size={12} /> Verified Purchase
                </div>
              </div>
              <p className={`text-gray-300 italic leading-relaxed mb-8 ${idx === 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.color}`}>
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingComparison = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0C0F]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            ₹2,999 Once. <br className="hidden md:block"/>Or ₹23,976 Every Two Years for Nothing.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Competitor */}
          <div className="bg-[#111827] border border-danger/20 rounded-3xl p-8 opacity-80 filter grayscale-[30%]">
            <h3 className="text-2xl font-bold text-gray-300 mb-2">Typical Subscription Indicator</h3>
            <div className="text-4xl font-bold text-gray-500 mb-8 line-through decoration-danger">₹23,976 <span className="text-lg font-normal">/ 2 yrs</span></div>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3"><XCircle className="text-danger shrink-0"/> ₹999/month recurring</li>
              <li className="flex items-center gap-3"><XCircle className="text-danger shrink-0"/> Locked invite-only code</li>
              <li className="flex items-center gap-3"><XCircle className="text-danger shrink-0"/> Zero proof of no repainting</li>
              <li className="flex items-center gap-3"><XCircle className="text-danger shrink-0"/> Works if seller disappears? <strong className="ml-auto text-white">NO</strong></li>
              <li className="flex items-center gap-3"><XCircle className="text-danger shrink-0"/> Signals verified in code? <strong className="ml-auto text-white">NO</strong></li>
            </ul>
          </div>

          {/* TQ 2.0 */}
          <div className="bg-gradient-to-br from-[#089981]/10 to-[#111827] border border-primary shadow-[0_0_40px_rgba(8,153,129,0.15)] rounded-3xl p-10 relative z-10 transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Recommended</div>
            <h3 className="text-2xl font-bold text-white mb-2">Traders Queen 2.0 ZR</h3>
            <div className="text-5xl font-bold text-white mb-8">₹2,999 <span className="text-lg font-normal text-primary">Forever</span></div>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary shrink-0"/> Pay once, never again</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary shrink-0"/> Full raw source code (.pine)</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary shrink-0"/> Provable zero-repaint logic</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary shrink-0"/> Works if seller disappears? <strong className="ml-auto text-primary">YES</strong></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary shrink-0"/> Signals verified in code? <strong className="ml-auto text-primary">YES</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCTA = () => {
  return (
    <section className="py-24 px-6 bg-[#0D1117] border-y border-[#1e232b]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#111827] border border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(8,153,129,0.1)] relative overflow-hidden text-center md:text-left">
          {/* Subtle glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="border-b border-[#1F2937] pb-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Traders Queen 2.0 Zero Repaint</h2>
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 mb-2">
              <span className="text-5xl font-bold text-white">₹2,999</span>
              <span className="text-xl text-gray-500 line-through">₹5,999</span>
            </div>
            <p className="text-primary font-medium text-lg">One Time · No Renewal · Yours Forever</p>
          </div>

          <ul className="space-y-4 text-gray-300 mb-10 text-lg text-left">
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Complete Pine Script source code (.pine file)</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Zero Repaint — verified in code</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Auto Entry · SL · TP1 · TP2 · TP3 on every signal</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Call Buyer / Put Buyer / Standard Mode</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Momentum Cloud (sideways market filter)</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Nifty · BankNifty · Gold · Stocks</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Alerts → WhatsApp / Phone</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Hindi setup video</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> 30-day WhatsApp support</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1"/> Free updates if Pine Script version changes</li>
          </ul>

          <div className="text-center">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-5 px-10 rounded-xl text-2xl transition-all shadow-[0_0_30px_rgba(8,153,129,0.4)] hover:shadow-[0_0_50px_rgba(8,153,129,0.6)] w-full mb-4">
              Get TQ 2.0 — ₹2,999
            </a>
            <p className="text-gray-400 text-sm mb-6">Pay via UPI · GPay · PhonePe · Razorpay · Cards</p>

            <div className="inline-flex items-center gap-2 bg-[#1F2937] border border-gray-700 px-4 py-3 rounded-lg text-gray-300 text-sm font-medium">
              <Lock size={16} className="text-primary"/> 7-day repaint guarantee or full refund. No questions asked.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "I trade using my phone. Will it work?",
      a: "Yes. TradingView's mobile app supports all indicators including TQ 2.0. You can view signals, receive alerts, and track your Entry/SL/TP levels on your phone."
    },
    {
      q: "I'm a beginner. Is this for me?",
      a: "If you know how to buy a CALL or PUT option in Zerodha or Upstox, TQ 2.0 gives you everything else — the signal, the entry price, the stop loss, and three targets. You don't need to understand Pine Script. The Hindi setup video takes 5 minutes."
    },
    {
      q: "How do I actually know it doesn't repaint?",
      a: "You don't have to take our word for it. Open the .pine file the moment it arrives. The indicator is built using `request.security()` with `barmerge.lookahead_off` and prior-bar data. Any Pine Script developer will confirm in under five minutes that this architecture makes repainting technically impossible on confirmed bars."
    },
    {
      q: "Does it work on Nifty, BankNifty, stocks, and MCX?",
      a: "Yes. TQ 2.0 ZR works on any instrument available on TradingView. It has been specifically tested on Indian market instruments."
    },
    {
      q: "Will I get updates if TradingView releases a new Pine Script version?",
      a: "Yes. If TradingView releases a Pine Script update that requires code changes, or if a critical bug is found, you receive the updated code at no additional charge."
    },
    {
      q: "Does it work on the free TradingView plan?",
      a: "Yes. TQ 2.0 ZR works on TradingView's free plan. You do not need a paid TradingView subscription to use it."
    },
    {
      q: "A competitor is selling a similar indicator for ₹499/month. Why should I pay ₹2,999?",
      a: "₹499/month is ₹5,988/year. Over two years that is ₹11,976 — and you own nothing. If the seller shuts down, your access disappears. Traders Queen 2.0 ZR is ₹2,999 once. You own the code permanently."
    },
    {
      q: "What is the refund policy?",
      a: "One condition: if TQ 2.0 ZR repaints on a confirmed closed bar even once, show us a screenshot and we will refund you in full. We have never issued one. Because we deliver a digital file immediately upon payment, we do not offer refunds for change of mind."
    },
    {
      q: "Can I resell the code after I buy it?",
      a: "No. The licence is for personal use only. Redistribution, resale, or sharing of the code in any form is strictly prohibited and is subject to legal action under Indian copyright law."
    },
    {
      q: "What kind of support is included?",
      a: "30 days of WhatsApp support after purchase. For any setup questions, configuration help, or troubleshooting, message us directly."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#0A0C0F]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Everything You Want to Know Before You Buy.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} name="faq-accordion" className="group bg-[#111827] border border-[#1F2937] rounded-2xl overflow-hidden">
              <summary className="flex justify-between items-center font-bold text-lg md:text-xl cursor-pointer list-none p-6 text-white hover:text-primary transition-colors [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                {faq.q}
                <ChevronDown className="text-gray-500 group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" size={24} />
              </summary>
              <div className="px-6 pb-6 text-gray-400 text-lg leading-relaxed border-t border-[#1F2937] pt-4 bg-[#0A0C0F]/50">
                {faq.a.split('`').map((part, i) => 
                  i % 2 === 1 ? <code key={i} className="bg-primary/10 px-1.5 py-0.5 rounded text-sm font-mono text-primary font-bold">{part}</code> : part
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-32 px-6 bg-[#0D1117] text-center border-t border-[#1e232b]">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
        Stop Paying for Fake Signals.<br/>
        Get One Indicator That Works. Forever.
      </h2>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-5 px-10 rounded-xl text-2xl transition-all shadow-[0_0_30px_rgba(8,153,129,0.4)] hover:shadow-[0_0_50px_rgba(8,153,129,0.6)] w-full sm:w-auto">
          Get TQ 2.0 — ₹2,999
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-5 px-10 rounded-xl text-xl transition-all w-full sm:w-auto">
          <MessageCircle size={24} /> Contact via WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#050608] py-16 px-6 border-t border-[#1e232b]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <div className="text-2xl font-display font-bold text-white mb-2">Traders Queen 2.0 Zero Repaint</div>
          <p className="text-gray-500">Professional tools. Honest terms. Open code.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <h4 className="text-white font-bold mb-6">Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <MessageCircle size={16} /> WhatsApp Support
                </a>
              </li>
              <li>
                <span className="text-gray-500">zerorepaint.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1e232b] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="text-sm text-gray-600">
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
    <div className="min-h-screen bg-[#0A0A0F] text-[#e8eaed] font-body selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <PainSection />
      <ProductDemo />
      <StepsSection />
      <TrustSection />
      <ReviewsSection />
      <PricingComparison />
      <PricingCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
