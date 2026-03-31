import React from 'react';
import { CHECKOUT_LINK } from './Navbar';

export const Footer = () => {
  return (
    <footer className="bg-[#050608] pt-20 pb-10 px-6 border-t border-[#1e232b]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 pb-16 border-b border-[#1e232b]">
           <div>
             <h2 className="text-3xl font-bold text-white mb-4">Stop Renting.<br/>Start Owning.</h2>
             <p className="text-gray-400 max-w-sm mb-6">
                You can keep paying ₹999/mo for locked tools that repaint, or you can pay ₹2,999 once and own the exact math to avoid sideways markets.
             </p>
             <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
               <span>Razorpay</span> • <span>UPI</span> • <span>Cards</span>
             </div>
           </div>
           
           <div className="flex flex-col md:items-end">
              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-xl text-xl transition-all w-full sm:w-auto shadow-[0_0_30px_rgba(8,153,129,0.3)] hover:shadow-[0_0_50px_rgba(8,153,129,0.5)] overflow-hidden"
              >
                <span className="relative z-10">Get the Full Code — ₹2,999</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
              </a>
              <p className="text-gray-500 mt-4 text-sm">7-day repaint guarantee • Instant delivery</p>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
             <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-[10px] font-bold text-[#0a0c0f]">TQ</div>
             <span className="font-bold text-white tracking-widest uppercase">Traders Queen 2.0</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://wa.me/919879737819" className="hover:text-primary transition-colors">WhatsApp Support</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

          <div>
             © {new Date().getFullYear()} zerorepaint.in
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-600 leading-relaxed text-justify bg-[#0a0c0f] p-4 rounded-xl border border-[#1e232b]">
          ⚠️ <strong>Risk Disclaimer:</strong> Trading in financial markets involves substantial risk of loss. Traders Queen 2.0 ZR is a decision-support and technical analysis tool. It does not constitute financial advice. Past signal performance on any chart does not guarantee future results. Trade only with capital you can afford to lose. You are solely responsible for your own trading decisions.
        </div>
      </div>
    </footer>
  );
};
