import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
  return (
    <section className="pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#067a67]/10 blur-[120px] pointer-events-none"
        animate={{ 
          x: [0, -40, 0], 
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Background subtle chart pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#089981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-6">For Nifty · BankNifty · Options Buyers · TradingView</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          They Showed You a Perfect Chart.<br/>
          <span className="text-danger">That Chart Was Lying.</span>
        </h1>
        <p className="text-xl text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
          90% of indicators sold in the Indian market repaint — they rewrite their own history after the candle closes to look accurate. Traders Queen 2.0 Zero Repaint doesn't. And we'll prove it: the complete source code is yours to open, read, and verify. One payment. No subscription. No black box.
        </p>
        
        <div className="mb-8">
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl text-xl transition-colors w-full md:w-auto shadow-lg shadow-primary/20">
            Get the Full Source Code — ₹2,999
          </a>
          <p className="text-sm text-muted mt-4">Delivered to your inbox within 2 hours · No subscription · No renewal · Yours forever</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted mb-16">
          <div className="flex items-center gap-2">
             <Lock size={16} /> Secure payment via Razorpay · UPI · GPay · PhonePe · Cards
          </div>
          <div className="flex items-center gap-2">
             <Unlock size={16} /> Full .pine file delivered to email · Not invite-only · Not locked
          </div>
        </div>

        <div className="bg-[#13161c] border border-[#1e232b] p-8 rounded-2xl text-left max-w-3xl mx-auto relative shadow-xl">
          <div className="absolute -top-6 -left-4 text-6xl text-primary opacity-20 font-display font-bold">"</div>
          <p className="text-xl italic mb-6 text-gray-300 leading-relaxed relative z-10">
            I paid ₹18,000 across 14 months for a locked indicator. When the service shut down, everything was gone. I bought Traders Queen 2.0 ZR for ₹2,999. The code is still on my computer. It still works.
          </p>
          <p className="font-bold text-white text-lg">— Karan V., NSE F&O Trader · Surat</p>
        </div>
      </div>
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

const Problem = () => (
  <section id="why-tq-2" className="py-24 px-6 bg-[#0a0c0f]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-danger font-bold tracking-widest uppercase text-sm mb-4">Why Most Traders Keep Losing</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">You Didn't Make a Bad Trade.<br/>Your Indicator Made It For You.</h2>
        <div className="text-lg text-muted max-w-3xl mx-auto space-y-6 text-left md:text-center leading-relaxed">
          <p>Here is what happened the last time you lost on a signal.</p>
          <p>You saw the setup. It looked clean. You entered the trade. It went wrong. You opened the chart afterward to understand what happened — and the signal had moved. Or it was just gone. The chart looked like you had made an obvious mistake that no serious trader would make.</p>
          <p>But you didn't make that mistake. <strong className="text-white font-semibold">The indicator rewrote its own history after the candle closed.</strong> This is called repainting — and it is not a glitch. It is how most indicators in this market are built. The backtest looks perfect because the signals are allowed to move backward to wherever they "should" have appeared. You are trading against a chart that is lying to you in real time.</p>
          <p>And it gets worse.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-[#13161c] p-8 rounded-2xl border border-[#1e232b] hover:border-danger/30 transition-colors">
          <XCircle className="text-danger mb-6" size={36} />
          <h3 className="text-xl font-bold mb-4 text-white">The Repainting Trap</h3>
          <p className="text-muted leading-relaxed">A signal appears on a live candle. You enter the trade. The candle closes against you. You check the chart — the signal has moved or disappeared entirely. On the seller's screenshot, it shows up perfectly at the right place. You never knew it was never really there.</p>
        </div>
        <div className="bg-[#13161c] p-8 rounded-2xl border border-[#1e232b] hover:border-danger/30 transition-colors">
          <Lock className="text-danger mb-6" size={36} />
          <h3 className="text-xl font-bold mb-4 text-white">The Black Box Trap</h3>
          <p className="text-muted leading-relaxed">The code is locked. You get a TradingView "invite-only" link — you cannot see inside, cannot verify anything, cannot even check if the zero-repaint claim is true. The day the seller shuts down, stops their subscription, or disappears, your access is gone. You owned nothing.</p>
        </div>
        <div className="bg-[#13161c] p-8 rounded-2xl border border-[#1e232b] hover:border-danger/30 transition-colors">
          <TrendingUp className="text-danger mb-6" size={36} />
          <h3 className="text-xl font-bold mb-4 text-white">The Subscription Trap</h3>
          <p className="text-muted leading-relaxed">₹999/month. ₹1,999/month. That is ₹12,000 to ₹24,000 per year — for a rented tool with no code, no proof, and no permanence. Over two years: ₹24,000 to ₹48,000 gone. And you have nothing to show for it that you actually own.</p>
        </div>
      </div>

      <p className="text-center text-2xl font-bold text-white max-w-3xl mx-auto">
        We built Traders Queen 2.0 Zero Repaint because we were tired of it too. And we do none of this.
      </p>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 px-6 bg-[#f5f4f1] text-[#1a1a1a]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Difference</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">One Indicator. Open Code. Yours Forever.</h2>
        <p className="text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
          Traders Queen 2.0 Zero Repaint is a professionally built Pine Script v6 indicator for TradingView. It gives you the complete source code — every single line — so you can open the file, read the logic, and confirm every claim we make before you place a single live trade.
          <br/><br/>
          This is not a pitch. It is a technical fact you can verify yourself the moment you receive the file.
        </p>
      </div>

      <div className="space-y-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="text-7xl font-display font-bold text-[#e0ded8] leading-none shrink-0">01</div>
          <div>
            <h3 className="text-3xl font-bold mb-4">You Get the Full Pine Script Source Code</h3>
            <p className="text-[#4a4a4a] text-lg leading-relaxed">The complete .pine file. In your hands. Not locked on a TradingView server. Not hidden behind a subscription. You can read it, understand it, and verify that signals run on confirmed closed-bar data — because that is exactly what the code shows. This is what real ownership looks like.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="text-7xl font-display font-bold text-[#e0ded8] leading-none shrink-0">02</div>
          <div>
            <h3 className="text-3xl font-bold mb-4">One Payment of ₹2,999. Yours Forever.</h3>
            <p className="text-[#4a4a4a] text-lg leading-relaxed">Pay once. Use forever. No renewal reminder. No plan expiry. No access wall. If we shut down tomorrow, your code still works — because it lives on your computer, not our server. The math is simple: ₹999/month for two years is ₹23,976. Traders Queen 2.0 ZR is ₹2,999. Once.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="text-7xl font-display font-bold text-[#e0ded8] leading-none shrink-0">03</div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Zero Repaint. Provable Right Now, Before You Pay.</h3>
            <p className="text-[#4a4a4a] text-lg mb-4 leading-relaxed">We don't ask you to trust us. We show you the code. The indicator uses <code className="bg-[#e8e6df] px-2 py-1 rounded text-sm font-mono text-primary font-bold">barmerge.lookahead_off</code> and confirmed prior-bar data (<code className="bg-[#e8e6df] px-2 py-1 rounded text-sm font-mono text-primary font-bold">expr[1]</code>) throughout its entire signal chain. Any Pine Script developer can verify this in under five minutes. The signal you see at bar close is the signal that stays — today, tomorrow, and six months from now.</p>
          </div>
        </div>
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
                    <div className="absolute top-4 left-4 right-4 text-center z-20 pointer-events-none">
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

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
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
        </div>

        <p className="text-xl text-muted max-w-4xl mx-auto text-center leading-relaxed">
          Traders Queen 2.0 Zero Repaint isn't just a trend indicator. It's a comprehensive trading system designed for the realities of the Indian market. Whether you're navigating choppy <strong>sideways filters</strong>, trading across <strong>multiple markets and asset classes</strong>, engaging in <strong>Option buying or selling</strong>, or switching between <strong>different time frames</strong>, the logic adapts. Every chart screenshot you see above showcases the exact performance you get in live markets.
        </p>
      </div>
    </section>
  );
};

const Features = () => (
  <section id="what-you-get" className="py-24 px-6 bg-[#f5f4f1] text-[#1a1a1a]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Full System</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Every Signal Comes With a Complete Trade Plan.</h2>
        <p className="text-xl text-[#4a4a4a]">No manual math. No second-guessing. Everything is on the chart the moment a signal fires.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5e4e1] hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-[#e6f5f2] rounded-xl flex items-center justify-center mb-6 text-primary">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Automatic Entry, Stop Loss & Three Take Profits</h3>
          <p className="text-sm font-semibold text-primary mb-4 italic">Know your full risk before you touch a button.</p>
          <p className="text-[#4a4a4a] text-sm mb-6 leading-relaxed">The moment a confirmed Buy CALL or Buy PUT signal fires, TQ 2.0 ZR draws your exact entry price, your stop loss level, and three take-profit targets at 1R, 2R, and 3R — calculated automatically from your ATR settings.</p>
          <ul className="text-sm text-[#4a4a4a] space-y-2 font-mono bg-[#f8f8f8] p-4 rounded-lg border border-[#f0f0f0]">
            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary"></div><span className="font-bold">TP1</span> — Fast partial booking</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary"></div><span className="font-bold">TP2</span> — Trend continuation</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary"></div><span className="font-bold">TP3</span> — Full move capture</li>
          </ul>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5e4e1] hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-[#e6f5f2] rounded-xl flex items-center justify-center mb-6 text-primary">
            <BarChart2 size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Call Buyer Mode & Put Buyer Mode</h3>
          <p className="text-sm font-semibold text-primary mb-4 italic">See only what's relevant to how you trade.</p>
          <p className="text-[#4a4a4a] text-sm leading-relaxed">If you only buy CALL options, switch to Call Buyer Mode — only bullish signals labeled "Buy CALL" appear. If you only buy PUTs, Put Buyer Mode filters every bearish setup labeled "Buy PUT." Every irrelevant signal is removed from your screen. You make the decision faster. You waste less premium on the wrong direction.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5e4e1] hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-[#e6f5f2] rounded-xl flex items-center justify-center mb-6 text-primary">
            <Cloud size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">MACD Momentum Cloud</h3>
          <p className="text-sm font-semibold text-primary mb-4 italic">Know when not to trade.</p>
          <p className="text-[#4a4a4a] text-sm mb-6 leading-relaxed">A dynamic cloud sits in the background of your chart. When MACD momentum is bullish, the cloud turns teal. When bearish, it turns red. When the market is going nowhere, the cloud tells you to stay flat and protect your capital.</p>
          <ul className="text-sm text-[#4a4a4a] space-y-2 font-mono bg-[#f8f8f8] p-4 rounded-lg border border-[#f0f0f0]">
            <li className="flex items-center gap-2">🔵 Teal → Buy CALL bias</li>
            <li className="flex items-center gap-2">🔴 Red → Buy PUT bias</li>
            <li className="flex items-center gap-2">⚫ Neutral → Stay flat</li>
          </ul>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5e4e1] hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-[#e6f5f2] rounded-xl flex items-center justify-center mb-6 text-primary">
            <CandlestickChart size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Heikin Ashi Logic, Regular Candle Display</h3>
          <p className="text-sm font-semibold text-primary mb-4 italic">Smoother signals. Normal-looking charts.</p>
          <p className="text-[#4a4a4a] text-sm leading-relaxed">Signal calculations run on Heikin Ashi candles — which filter out noise and false signals more effectively than standard candles. But your chart continues to display regular Japanese candlesticks, so everything looks and feels normal to you.</p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5e4e1] hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-[#e6f5f2] rounded-xl flex items-center justify-center mb-6 text-primary">
            <Globe size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">External Symbol & Higher Timeframe Support</h3>
          <p className="text-sm font-semibold text-primary mb-4 italic">Use Nifty structure to trade BankNifty.</p>
          <p className="text-[#4a4a4a] text-sm leading-relaxed">Want Nifty50 signals while watching a BankNifty chart? Want higher timeframe trend confirmation displayed on your intraday scalping chart? One toggle enables it. Multi-timeframe analysis built in — no workarounds, no extra indicators.</p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5e4e1] hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-[#e6f5f2] rounded-xl flex items-center justify-center mb-6 text-primary">
            <Bell size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Instant Alerts — Signal Comes to You</h3>
          <p className="text-sm font-semibold text-primary mb-4 italic">You don't need to watch the chart all day.</p>
          <p className="text-[#4a4a4a] text-sm leading-relaxed">Every confirmed signal fires an instant alert through TradingView's native alert system. Connect it to WhatsApp via webhook, automate it through Zapier or N8N, or receive it as a phone notification. The signal arrives at bar close — confirmed, permanent, and ready to act on.</p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-6 bg-[#0a0c0f]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The 3-Step Routine</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Chart. See Signal. Execute Trade.</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-[#1e232b] z-0"></div>
        
        {/* Step 1 */}
        <div className="flex-1 relative z-10 text-center md:text-left">
          <div className="w-24 h-24 mx-auto md:mx-0 bg-[#13161c] border-2 border-primary rounded-full flex items-center justify-center text-4xl font-display font-bold text-white mb-8 shadow-[0_0_30px_rgba(8,153,129,0.2)]">1</div>
          <h3 className="text-2xl font-bold mb-4 text-white">Wait for the Signal</h3>
          <p className="text-muted leading-relaxed">A "Buy CALL" or "Buy PUT" label appears on your chart. This signal is confirmed at bar close — meaning the candle has fully closed and the signal is permanent. It will not move. It will not disappear. You can act on it with confidence.</p>
        </div>

        {/* Step 2 */}
        <div className="flex-1 relative z-10 text-center md:text-left">
          <div className="w-24 h-24 mx-auto md:mx-0 bg-[#13161c] border-2 border-[#2a303c] rounded-full flex items-center justify-center text-4xl font-display font-bold text-white mb-8">2</div>
          <h3 className="text-2xl font-bold mb-4 text-white">Check the Cloud</h3>
          <p className="text-muted leading-relaxed">Before entering, glance at the Momentum Cloud in the background. If you are considering a CALL, the cloud should be teal. If it is red or neutral, stay flat — the momentum is not with you. This one check eliminates most bad trades before they happen.</p>
        </div>

        {/* Step 3 */}
        <div className="flex-1 relative z-10 text-center md:text-left">
          <div className="w-24 h-24 mx-auto md:mx-0 bg-[#13161c] border-2 border-[#2a303c] rounded-full flex items-center justify-center text-4xl font-display font-bold text-white mb-8">3</div>
          <h3 className="text-2xl font-bold mb-4 text-white">Copy Levels and Execute</h3>
          <p className="text-muted leading-relaxed">TQ 2.0 ZR has already drawn your Entry, SL, and all three TP levels. Copy them directly into your broker terminal — Zerodha, Upstox, Groww, AngelOne. Set your targets and stop. Walk away. No emotions. No screen-watching. Just execution.</p>
        </div>
      </div>
    </div>
  </section>
);

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
  <section className="py-24 px-6 bg-[#0a0c0f]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Do the Math</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">₹2,999 Once. Or ₹23,976 Every Two Years for Something You'll Never Own.</h2>
      </div>

      <div className="overflow-x-auto pb-4">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr>
              <th className="p-6 border-b border-[#1e232b]"></th>
              <th className="p-6 border-b border-[#1e232b] text-muted font-bold text-xl w-1/3">Subscription Indicator</th>
              <th className="p-6 border-b border-primary text-primary font-bold text-xl bg-[#089981]/10 rounded-t-2xl w-1/3">Traders Queen 2.0 ZR</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            <tr>
              <td className="p-6 border-b border-[#1e232b] font-bold text-white">Year 1 cost</td>
              <td className="p-6 border-b border-[#1e232b] text-muted">₹11,988 <span className="text-sm font-normal">(at ₹999/mo)</span></td>
              <td className="p-6 border-b border-[#1e232b] text-white font-bold bg-[#089981]/5">₹2,999</td>
            </tr>
            <tr>
              <td className="p-6 border-b border-[#1e232b] font-bold text-white">Year 2 cost</td>
              <td className="p-6 border-b border-[#1e232b] text-muted">₹11,988 additional</td>
              <td className="p-6 border-b border-[#1e232b] text-white font-bold bg-[#089981]/5">₹0</td>
            </tr>
            <tr>
              <td className="p-6 border-b border-[#1e232b] font-bold text-white">Total at 2 years</td>
              <td className="p-6 border-b border-[#1e232b] text-danger font-bold text-xl">₹23,976</td>
              <td className="p-6 border-b border-[#1e232b] text-primary font-bold text-xl bg-[#089981]/5">₹2,999</td>
            </tr>
            <tr>
              <td className="p-6 border-b border-[#1e232b] font-bold text-white">Code ownership</td>
              <td className="p-6 border-b border-[#1e232b] text-muted"><div className="flex items-center gap-3"><XCircle size={20} className="text-danger shrink-0"/> Never</div></td>
              <td className="p-6 border-b border-[#1e232b] text-white bg-[#089981]/5"><div className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0"/> Forever</div></td>
            </tr>
            <tr>
              <td className="p-6 border-b border-[#1e232b] font-bold text-white">Works if seller shuts down</td>
              <td className="p-6 border-b border-[#1e232b] text-muted"><div className="flex items-center gap-3"><XCircle size={20} className="text-danger shrink-0"/> Gone</div></td>
              <td className="p-6 border-b border-[#1e232b] text-white bg-[#089981]/5"><div className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0"/> Still works</div></td>
            </tr>
            <tr>
              <td className="p-6 border-b border-[#1e232b] font-bold text-white">Repaint verifiable</td>
              <td className="p-6 border-b border-[#1e232b] text-muted"><div className="flex items-center gap-3"><XCircle size={20} className="text-danger shrink-0"/> Black box</div></td>
              <td className="p-6 border-b border-[#1e232b] text-white bg-[#089981]/5"><div className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0"/> Open source</div></td>
            </tr>
            <tr>
              <td className="p-6 border-b border-[#1e232b] font-bold text-white">One-time payment</td>
              <td className="p-6 border-b border-[#1e232b] text-muted"><div className="flex items-center gap-3"><XCircle size={20} className="text-danger shrink-0"/> Monthly forever</div></td>
              <td className="p-6 border-b border-[#1e232b] text-white bg-[#089981]/5 rounded-b-2xl"><div className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0"/> Pay once</div></td>
            </tr>
          </tbody>
        </table>
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

const ExitIntentPopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="bg-[#13161c] border border-danger/50 rounded-2xl p-8 max-w-lg w-full relative shadow-[0_0_50px_rgba(242,54,69,0.2)] text-center animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-danger"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        <h2 id="popup-title" className="text-3xl font-display font-bold text-white mb-4">Wait! Don't Leave Empty-Handed.</h2>
        <p className="text-gray-300 mb-6 text-lg">
          Every day you trade with a repainting indicator is a day you risk your capital. 
          <span className="text-danger font-bold block mt-2">Over 2,400 traders have already switched to TQ 2.0 ZR.</span>
        </p>
        <div className="bg-danger/10 border border-danger/20 rounded-xl p-4 mb-6">
          <p className="text-danger font-bold text-lg mb-1">🔥 Special Offer: Get 20% OFF today!</p>
          <p className="text-sm text-gray-400">Use code <span className="text-white font-mono font-bold bg-[#2a303c] px-2 py-1 rounded">TQ20</span> at checkout.</p>
        </div>
        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-danger hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-colors w-full shadow-lg shadow-danger/20">
          Claim My Discount Now
        </a>
        <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:text-gray-300 underline underline-offset-4">
          No thanks, I prefer losing money to repainting indicators.
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenPopup) {
        setShowExitPopup(true);
        setHasSeenPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasSeenPopup]);

  return (
    <div className="min-h-screen bg-[#0a0c0f] text-[#e8eaed] font-body selection:bg-primary/30 selection:text-white">
      <ExitIntentPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />
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
