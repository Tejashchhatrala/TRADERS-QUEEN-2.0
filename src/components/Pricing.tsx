import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, FileCode2 } from 'lucide-react';
import { CHECKOUT_LINK } from './Navbar';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-6 bg-surface-base">

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Pricing Comparison Table */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">
              How Much Does It Actually Cost?
            </h2>
            <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto leading-relaxed">
              Compare what you're spending now vs. what this costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-surface-elevated border border-border-subtle p-8 rounded-2xl flex flex-col items-center text-center">
               <h3 className="text-lg font-bold text-text-strong mb-2">Telegram Signal Group</h3>
               <p className="text-2xl font-bold text-text-muted mb-1">₹1,000–2,000<span className="text-sm font-normal">/mo</span></p>
               <p className="text-text-muted text-sm">₹12,000–24,000/year</p>
            </div>

            <div className="bg-surface-elevated border border-border-subtle p-8 rounded-2xl flex flex-col items-center text-center">
               <h3 className="text-lg font-bold text-text-strong mb-2">Paid Indicator (Monthly)</h3>
               <p className="text-2xl font-bold text-text-muted mb-1">₹500–1,500<span className="text-sm font-normal">/mo</span></p>
               <p className="text-text-muted text-sm">₹6,000–18,000/year</p>
            </div>

            <div className="bg-surface-raised border-2 border-brand-teal p-8 rounded-2xl flex flex-col items-center text-center relative shadow-lg">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  One-Time Payment
               </div>
               <h3 className="text-lg font-bold text-brand-teal mb-2">Traders Queen 2.0</h3>
               <p className="text-3xl font-bold text-text-strong mb-1">₹2,999</p>
               <p className="text-text-muted text-sm">total — forever</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto bg-surface-raised border border-border-subtle rounded-3xl p-8 md:p-12 shadow-xl mb-24"
        >
           <div className="text-center border-b border-border-subtle pb-8 mb-8">
             <h3 className="text-2xl md:text-3xl font-bold text-text-strong mb-4">Traders Queen 2.0 — Complete Package</h3>
             <div className="flex items-center justify-center gap-4 mb-4">
               <span className="text-2xl text-text-muted line-through font-medium">₹12,999</span>
               <span className="text-5xl font-bold text-text-strong">₹2,999</span>
             </div>
             <p className="text-brand-teal font-medium">Pay once. No renewal. No hidden charges.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
             {[
               "Complete indicator code (you own it)",
               "Buy & sell signals on chart",
               "Entry, stop loss & target levels",
               "Phone & email alerts",
               "Works on stocks, gold, crypto, options",
               "MACD cloud to avoid sideways markets",
               "Option trading mode (CE/PE auto-detect)",
               "Step-by-step setup guide",
               "Lifetime access — no expiry",
               "Free updates forever"
             ].map((item, idx) => (
               <div key={idx} className="flex items-start gap-3">
                 <CheckCircle2 size={20} className="text-brand-teal shrink-0 mt-0.5" />
                 <span className="text-text-base text-sm">{item}</span>
               </div>
             ))}
           </div>

           <div className="text-center">
             <a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-raised mb-4"
            >
              Buy Now — ₹2,999
            </a>
            <p className="text-text-muted text-sm">100% money back if you prove it repaints</p>
           </div>
        </motion.div>

        {/* Founder Bio Block */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto bg-surface-base rounded-3xl p-8 md:p-12 border border-border-subtle flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-32 h-32 shrink-0 rounded-full bg-surface-elevated border-4 border-border-subtle overflow-hidden flex items-center justify-center relative shadow-inner">
            {/* Fallback image if photo is missing */}
            <div className="absolute inset-0 bg-surface-elevated flex items-center justify-center">
              <span className="text-4xl">🧑‍💻</span>
            </div>
            <img
              src="/tejas.jpg"
              alt="Tejas - Founder"
              className="w-full h-full object-cover relative z-10"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-strong mb-2">Who Made This? A Real Trader.</h3>
            <p className="text-text-base leading-relaxed mb-4">
              Hi, I'm Tejas. I'm an AI expert and an active trader. I trade gold and Nifty options in India — with my own money, every day.
            </p>
            <p className="text-text-base leading-relaxed mb-6">
              I tried over 100 indicators from YouTube. I joined Telegram groups and paid for tips. I lost more than ₹10,000 on bad signals. Every indicator was either fake, locked, or charged monthly fees. So I used my AI skills and built my own indicator. Now I'm sharing it with the full code.
            </p>

            <div className="bg-surface-elevated p-4 rounded-xl border border-border-subtle inline-block">
               <div className="flex items-center gap-2 mb-2">
                 <FileCode2 size={18} className="text-brand-teal" />
                 <span className="font-bold text-text-strong text-sm">Verified Certifications</span>
               </div>
               <ul className="text-xs text-text-muted space-y-1">
                 <li>• Google Certified AI Professional</li>
                 <li>• Microsoft Certified AI Engineer</li>
                 <li>• Oracle Certified Professional</li>
                 <li>• Anthropic Certified AI Expert</li>
               </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
