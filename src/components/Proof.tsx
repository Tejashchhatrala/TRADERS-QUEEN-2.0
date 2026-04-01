import React from 'react';
import { motion } from 'motion/react';
import { FileCode2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Proof = () => {
  return (
    <section id="proof" className="py-16 md:py-24 lg:py-32 px-6 bg-surface-base border-b border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-raised border border-border-strong text-white font-bold tracking-widest uppercase text-xs mb-6 mx-auto">
            <ShieldCheck size={16} className="text-brand-teal" />
            Zero Repaint Guarantee
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            We Don't Ask for Trust.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-red">We Hand You the Code.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Every seller claims "Zero Repaint". We actually prove it. You get the full untampered Pine Script `.pine` file. Open it. Read it freely. Math doesn't lie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="bg-surface-raised rounded-3xl p-8 border border-border-subtle shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileCode2 size={120} />
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Why Owning the Full Code Protects You</h3>
             <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-teal/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-brand-teal" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Verify `barmerge.lookahead_off`</h4>
                    <p className="text-text-base text-sm">Look directly at line 14. We enforce absolute strict bar closing so history cannot be rewritten.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-teal/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-brand-teal" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">No Server Dependency</h4>
                    <p className="text-text-base text-sm">TradingView invite-only scripts can be revoked at any time. When you own the code on your desktop, no one can take it away.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-teal/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-brand-teal" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">One-Time Payment</h4>
                    <p className="text-text-base text-sm">Pay ₹2,999 once. Never hear from us again. The system is yours forever.</p>
                  </div>
                </li>
             </ul>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="bg-surface-base rounded-3xl border border-border-subtle shadow-2xl p-6 md:p-10 flex flex-col justify-center"
          >
             <h3 className="text-2xl font-bold text-white mb-6">Our One Condition:</h3>
             <p className="text-text-base leading-relaxed mb-6">
               If TQ 2.0 ZR repaints on a confirmed closed bar even once — show us the screenshot and we will refund you in full. We have never issued one. Look at the code itself: the architecture makes it technically impossible.
             </p>
             <p className="text-text-base font-bold">
               But we put this in writing because you deserve to buy without risk.
             </p>
          </motion.div>
        </div>

        {/* Founder Bio Block */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto bg-surface-raised rounded-3xl p-8 md:p-12 mb-20 border border-border-subtle shadow-2xl flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-32 h-32 shrink-0 rounded-full bg-surface-elevated border-4 border-border-subtle overflow-hidden flex items-center justify-center relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            {/* Fallback image if photo is missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface-base flex items-center justify-center">
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
            <h3 className="text-2xl font-bold text-white mb-2">A Message From The Creator</h3>
            <p className="text-brand-teal font-bold text-sm mb-4 uppercase tracking-wider">Built by Tejas — F&O Trader since 2019, Ahmedabad</p>
            <p className="text-gray-300 leading-relaxed mb-6 italic text-lg">
              "I didn't build TQ 2.0 to sell it. I built it because I lost ₹4 Lakhs buying fake breakouts and bleeding theta in sideways markets. I was tired of subscription tools that hid their code and fired false signals. If you want to talk to a real person before trusting this system with your capital, message my personal WhatsApp."
            </p>
            <a href="https://wa.me/919879737819" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-red font-bold hover:underline">
              Message me on WhatsApp →
            </a>
          </div>
        </motion.div>

        {/* Urgency Alert */}
        <div className="max-w-3xl mx-auto mb-10 bg-brand-red/10 border border-brand-red/30 rounded-2xl p-4 md:p-5 text-center shadow-[0_0_30px_var(--color-brand-red)]/10">
          <p className="text-brand-red font-bold text-sm md:text-base leading-relaxed">
            <span className="inline-block mr-2 animate-pulse">⚠️</span>
            NOTICE: TQ 2.0 Zr is updated for FREE for all existing buyers when Pine Script v7 releases.<br className="hidden md:block"/> 
            <span className="text-white font-medium">Price may increase significantly after the v7 update. Lock in your lifetime code today.</span>
          </p>
        </div>

        {/* 2-Column Pricing Table */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-surface-raised border border-border-subtle rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
           <div className="p-6 md:p-8 bg-surface-elevated border-b border-border-strong">
             <h3 className="text-2xl font-bold text-white text-center">Do The Math</h3>
           </div>
           
           <div className="relative">
             <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-surface-raised to-transparent pointer-events-none z-10 sm:hidden" />
             <div className="divide-y divide-border-subtle overflow-x-auto relative z-0">
               <div className="min-w-[500px]">
               {/* 2 Columns Desktop Grid */}
               <div className="grid grid-cols-3 p-6 bg-surface-base items-center">
                 <div className="col-span-1 text-text-subtle font-bold uppercase tracking-wider text-xs">Feature</div>
                 <div className="col-span-1 text-center text-text-muted text-sm font-bold opacity-70">Subscription<br/>Indicator</div>
                 <div className="col-span-1 text-center text-brand-red font-bold bg-brand-red/10 py-2.5 rounded-lg text-sm border border-brand-red/20 mx-2">Traders Queen<br/>2.0 ZR</div>
               </div>
               
               <div className="grid grid-cols-3 p-6 hover:bg-surface-elevated transition-colors items-center">
                 <div className="col-span-1 text-white font-medium">Cost</div>
                 <div className="col-span-1 text-center text-text-muted font-mono">₹23,976 / 2 yrs</div>
                 <div className="col-span-1 text-center text-brand-teal font-mono font-bold text-lg">₹2,999 once</div>
               </div>

               <div className="grid grid-cols-3 p-6 bg-surface-elevated border-y border-border-strong items-center relative shadow-inner">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal" />
                 <div className="col-span-1 text-white font-bold text-lg">Code Ownership</div>
                 <div className="col-span-1 text-center text-text-subtle font-bold uppercase tracking-widest text-sm">Never (Rented)</div>
                 <div className="col-span-1 text-center text-brand-teal font-bold text-lg uppercase tracking-widest bg-brand-teal/10 py-1 rounded inline-block mx-4">Forever (Yours)</div>
               </div>

               <div className="grid grid-cols-3 p-6 hover:bg-surface-elevated transition-colors items-center">
                 <div className="col-span-1 text-white font-medium">Recoverable?</div>
                 <div className="col-span-1 text-center text-text-muted text-sm">No</div>
                 <div className="col-span-1 text-center text-brand-teal font-bold text-sm">Yes (one-time)</div>
               </div>
               
               <div className="grid grid-cols-3 p-6 hover:bg-surface-elevated transition-colors items-center">
                 <div className="col-span-1 text-white font-medium">Sideways Protection</div>
                 <div className="col-span-1 text-center text-text-muted text-sm">None</div>
                 <div className="col-span-1 text-center text-white font-bold text-sm">Momentum Cloud</div>
               </div>
             </div>
           </div>
           </div>
        </motion.div>
        
        <p className="text-center text-text-muted max-w-2xl mx-auto mt-6 text-sm italic">
          "The average Indian retail options buyer loses ₹8,000–₹15,000 in a single sideways session. TQ 2.0 ZR costs ₹2,999. The Momentum Cloud pays for itself the first time it keeps you flat."
        </p>

      </div>
    </section>
  );
};
