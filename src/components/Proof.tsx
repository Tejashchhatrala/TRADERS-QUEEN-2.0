import React from 'react';
import { motion } from 'motion/react';
import { FileCode2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Proof = () => {
  return (
    <section id="proof" className="py-24 md:py-32 px-6 bg-[#0a0c0f] border-b border-[#1e232b]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13161c] border border-[#2a303c] text-white font-bold tracking-widest uppercase text-xs mb-6 mx-auto">
            <ShieldCheck size={16} className="text-emerald-500" />
            Zero Repaint Guarantee
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            We Don't Ask for Trust.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">We Hand You the Code.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every seller claims "Zero Repaint". We actually prove it. You get the full untampered Pine Script `.pine` file. Open it. Read it freely. Math doesn't lie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="bg-[#13161c] rounded-3xl p-8 border border-[#1e232b] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileCode2 size={120} />
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Why Open Source Protects You</h3>
             <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-500/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-emerald-500" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Verify `barmerge.lookahead_off`</h4>
                    <p className="text-gray-400 text-sm">Look directly at line 14. We enforce absolute strict bar closing so history cannot be rewritten.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-500/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-emerald-500" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">No Server Dependency</h4>
                    <p className="text-gray-400 text-sm">TradingView invite-only scripts can be revoked at any time. When you own the code on your desktop, no one can take it away.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-500/10 p-1.5 rounded-full"><CheckCircle2 size={24} className="text-emerald-500" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">One-Time Payment</h4>
                    <p className="text-gray-400 text-sm">Pay ₹2,999 once. Never hear from us again. The system is yours forever.</p>
                  </div>
                </li>
             </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#0a0c0f] rounded-3xl border border-[#2a303c] overflow-hidden shadow-2xl"
          >
             {/* Simple Comparison Table */}
             <div className="p-6 md:p-8 bg-[#13161c] border-b border-[#2a303c]">
               <h3 className="text-2xl font-bold text-white text-center">Do The Math</h3>
             </div>
             
             <div className="divide-y divide-[#1e232b]">
               <div className="grid grid-cols-5 p-6 bg-[#0a0c0f] items-center">
                 <div className="col-span-2 text-gray-400 font-bold uppercase tracking-wider text-xs">Feature</div>
                 <div className="col-span-1 text-center text-gray-500 text-sm font-bold opacity-50">Subcriptions</div>
                 <div className="col-span-2 text-center text-primary font-bold bg-primary/10 py-1.5 rounded text-sm border border-primary/20">TQ 2.0 Zr</div>
               </div>
               
               <div className="grid grid-cols-5 p-6 hover:bg-[#13161c] transition-colors items-center">
                 <div className="col-span-2 text-white font-medium">Cost (2 Years)</div>
                 <div className="col-span-1 text-center text-gray-500 font-mono">₹23,976</div>
                 <div className="col-span-2 text-center text-emerald-400 font-mono font-bold text-lg">₹2,999</div>
               </div>

               <div className="grid grid-cols-5 p-6 hover:bg-[#13161c] transition-colors items-center">
                 <div className="col-span-2 text-white font-medium">Code Access</div>
                 <div className="col-span-1 text-center text-danger font-medium text-sm">Black Box</div>
                 <div className="col-span-2 text-center text-white font-medium text-sm">100% Yours</div>
               </div>

               <div className="grid grid-cols-5 p-6 hover:bg-[#13161c] transition-colors items-center">
                 <div className="col-span-2 text-white font-medium">If Seller Closes</div>
                 <div className="col-span-1 text-center text-danger font-medium text-sm">You Lose Access</div>
                 <div className="col-span-2 text-center text-white font-medium text-sm">Still Works</div>
               </div>
               
               <div className="grid grid-cols-5 p-6 hover:bg-[#13161c] transition-colors items-center">
                 <div className="col-span-2 text-white font-medium">Repaint Check</div>
                 <div className="col-span-1 text-center text-danger font-medium text-sm">Impossible</div>
                 <div className="col-span-2 text-center text-emerald-400 font-medium text-sm">Verifiable</div>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
