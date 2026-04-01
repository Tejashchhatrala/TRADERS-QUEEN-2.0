import React from 'react';
import { CHECKOUT_LINK } from './Navbar';
import { CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-24 lg:pb-10 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 pb-16 border-b border-border-subtle">
           <div>
             <h2 className="text-3xl font-bold text-white mb-4">Stop Renting.<br/>Start Owning.</h2>
             <p className="text-text-muted max-w-sm mb-6">
                You can keep paying ₹999/mo for locked tools that repaint, or you can pay ₹2,999 once and own the exact math to avoid sideways markets.
             </p>
             <div className="flex items-center gap-4 text-sm text-text-subtle font-mono">
               <span>Razorpay</span> • <span>UPI</span> • <span>Cards</span>
             </div>
           </div>
           
           <div className="flex flex-col md:items-end w-full">
              {/* Added Google fonts specifically in public/index.html but we style this with standard font classes assuming the CSS variable applies Noto Sans Devanagari */}
              <p className="text-brand-teal font-bold mb-4 text-center md:text-right w-full text-[15px] sm:text-lg drop-shadow-md">
                 हर signal bar close पर confirm होता है। Repaint technically impossible है।<br className="hidden sm:block" /> 
                 <span className="text-white">Code आपके computer पर रहेगा — हमेशा के लिए।</span>
              </p>

              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-center bg-brand-red hover:bg-[#d03d25] text-white font-bold py-4 px-10 rounded-xl text-xl transition-all w-full sm:w-auto shadow-[0_0_30px_var(--color-brand-red)]/30 hover:shadow-[0_0_50px_var(--color-brand-red)]/50 overflow-hidden"
              >
                <span className="relative z-10">Get the Full Code — ₹2,999</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
              </a>
              
              <div className="flex flex-col gap-2 mt-6 text-sm text-text-muted items-center md:items-end w-full">
                 <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-teal" /> 2 hours email delivery</div>
                 <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-teal" /> Hindi setup video included</div>
                 <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-teal" /> 30-day WhatsApp support</div>
                 <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-teal" /> Repaints? Full refund. No questions.</div>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-subtle">
          <div className="flex items-center gap-2">
             <div className="w-5 h-5 rounded bg-brand-red flex items-center justify-center text-[10px] font-bold text-white">TQ</div>
             <span className="font-bold text-white tracking-widest uppercase">Traders Queen 2.0</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/919879737819" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors font-bold text-text-muted rounded-md px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red">WhatsApp Support</a>
            <a href="#" className="hover:text-white transition-colors rounded-md px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors rounded-md px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red">Privacy Policy</a>
          </div>

          <div>
             © {new Date().getFullYear()} zerorepaint.in
          </div>
        </div>

        <div className="mt-12 text-[11px] text-text-subtle leading-relaxed text-justify bg-surface-base p-4 rounded-xl border border-border-subtle">
          ⚠️ <strong>Risk Disclaimer:</strong> Trading in financial markets involves substantial risk of loss. Traders Queen 2.0 ZR is a decision-support and technical analysis tool. It does not constitute financial advice. Past signal performance on any chart does not guarantee future results. Trade only with capital you can afford to lose. You are solely responsible for your own trading decisions.
        </div>
      </div>
    </footer>
  );
};
