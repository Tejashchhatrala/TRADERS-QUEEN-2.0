import React from 'react';
import { motion } from 'motion/react';
import { FileCode2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Proof = () => {
  return (
    <section id="proof" className="py-24 md:py-32 px-6 bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] border border-[#333] text-white font-bold tracking-widest uppercase text-xs mb-6 mx-auto">
            <ShieldCheck size={16} className="text-[#00c9a7]" />
            Zero Repaint Guarantee
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            We Don't Ask for Trust.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c9a7] to-[#e8442a]">We Hand You the Code.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every seller claims "Zero Repaint". We actually prove it. You get the full untampered Pine Script `.pine` file. Open it. Read it freely. Math doesn't lie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="bg-[#111] rounded-3xl p-8 border border-[#1f1f1f] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileCode2 size={120} />
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Why Open Source Protects You</h3>
             <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#00c9a7]/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-[#00c9a7]" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Verify `barmerge.lookahead_off`</h4>
                    <p className="text-[#e0e0e0] text-sm">Look directly at line 14. We enforce absolute strict bar closing so history cannot be rewritten.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#00c9a7]/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-[#00c9a7]" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">No Server Dependency</h4>
                    <p className="text-[#e0e0e0] text-sm">TradingView invite-only scripts can be revoked at any time. When you own the code on your desktop, no one can take it away.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#00c9a7]/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-[#00c9a7]" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">One-Time Payment</h4>
                    <p className="text-[#e0e0e0] text-sm">Pay ₹2,999 once. Never hear from us again. The system is yours forever.</p>
                  </div>
                </li>
             </ul>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="bg-[#0a0a0a] rounded-3xl border border-[#1f1f1f] shadow-2xl p-6 md:p-10 flex flex-col justify-center"
          >
             <h3 className="text-2xl font-bold text-white mb-6">Our One Condition:</h3>
             <p className="text-[#e0e0e0] leading-relaxed mb-6">
               If TQ 2.0 ZR repaints on a confirmed closed bar even once — show us the screenshot and we will refund you in full. We have never issued one. Look at the code itself: the architecture makes it technically impossible.
             </p>
             <p className="text-[#e0e0e0] font-bold">
               But we put this in writing because you deserve to buy without risk.
             </p>
          </motion.div>
        </div>

        {/* 3-Column Pricing Table */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[#111] border border-[#1f1f1f] rounded-3xl overflow-hidden shadow-2xl"
        >
           <div className="p-6 md:p-8 bg-[#1a1a1a] border-b border-[#333]">
             <h3 className="text-2xl font-bold text-white text-center">Do The Math</h3>
           </div>
           
           <div className="divide-y divide-[#1f1f1f] overflow-x-auto">
             <div className="min-w-[700px]">
               {/* 3 Columns Desktop Grid */}
               <div className="grid grid-cols-4 p-6 bg-[#0a0a0a] items-center">
                 <div className="col-span-1 text-gray-500 font-bold uppercase tracking-wider text-xs">Feature</div>
                 <div className="col-span-1 text-center text-gray-500 text-sm font-bold opacity-70">Subscription<br/>Indicator</div>
                 <div className="col-span-1 text-center text-[#e8442a] font-bold bg-[#e8442a]/10 py-2 rounded text-sm border border-[#e8442a]/20 shadow-[0_0_15px_rgba(232,68,42,0.15)] mx-2">Traders Queen<br/>2.0 ZR</div>
                 <div className="col-span-1 text-center text-[#e84242] text-sm font-bold">1 Bad Sideways<br/>Trade</div>
               </div>
               
               <div className="grid grid-cols-4 p-6 hover:bg-[#151515] transition-colors items-center">
                 <div className="col-span-1 text-white font-medium">Cost</div>
                 <div className="col-span-1 text-center text-gray-400 font-mono">₹23,976 / 2 yrs</div>
                 <div className="col-span-1 text-center text-[#00c9a7] font-mono font-bold text-lg">₹2,999 once</div>
                 <div className="col-span-1 text-center text-[#e84242] font-mono">₹5,000–₹15,000<br/><span className="text-[10px] text-gray-500">(one session)</span></div>
               </div>

               <div className="grid grid-cols-4 p-6 hover:bg-[#151515] transition-colors items-center">
                 <div className="col-span-1 text-white font-medium">What you get</div>
                 <div className="col-span-1 text-center text-gray-400 text-sm">Rented access</div>
                 <div className="col-span-1 text-center text-white font-bold text-sm">Code you own</div>
                 <div className="col-span-1 text-center text-[#e84242] font-medium text-sm">Nothing —<br/>premium gone</div>
               </div>

               <div className="grid grid-cols-4 p-6 hover:bg-[#151515] transition-colors items-center">
                 <div className="col-span-1 text-white font-medium">Recoverable?</div>
                 <div className="col-span-1 text-center text-gray-400 text-sm">No</div>
                 <div className="col-span-1 text-center text-[#00c9a7] font-bold text-sm">Yes (one-time)</div>
                 <div className="col-span-1 text-center text-[#e84242] font-medium text-sm">No</div>
               </div>
               
               <div className="grid grid-cols-4 p-6 hover:bg-[#151515] transition-colors items-center">
                 <div className="col-span-1 text-white font-medium">Sideways Protection</div>
                 <div className="col-span-1 text-center text-gray-400 text-sm">None</div>
                 <div className="col-span-1 text-center text-white font-bold text-sm">Momentum Cloud</div>
                 <div className="col-span-1 text-center text-[#e84242] font-medium text-sm">None</div>
               </div>
             </div>
           </div>
        </motion.div>
        
        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-6 text-sm italic">
          "The average Indian retail options buyer loses ₹8,000–₹15,000 in a single sideways session. TQ 2.0 ZR costs ₹2,999. The Momentum Cloud pays for itself the first time it keeps you flat."
        </p>

      </div>
    </section>
  );
};
