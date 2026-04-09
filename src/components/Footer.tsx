import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-surface-elevated pt-16 pb-24 lg:pb-10 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-12 border-b border-border-subtle">
           <div className="md:col-span-1">
             <h2 className="text-xl font-bold text-text-strong mb-2">ZeroRepaint</h2>
             <p className="text-text-muted text-sm leading-relaxed mb-6">
               Traders Queen 2.0 — the only TradingView indicator that gives you full source code, zero repaint, and lifetime access for one payment.
             </p>
           </div>
           
           <div>
             <h3 className="font-bold text-text-strong mb-4">Quick Links</h3>
             <ul className="space-y-2 text-text-muted text-sm">
               <li><a href="/#features" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">Features</a></li>
               <li><a href="/#how-it-works" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">How It Works</a></li>
               <li><a href="/#reviews" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">Testimonials</a></li>
               <li><a href="/#pricing" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">Pricing</a></li>
               <li><a href="/#faq" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">FAQ</a></li>
             </ul>
           </div>

           <div>
             <h3 className="font-bold text-text-strong mb-4">Contact</h3>
             <ul className="space-y-2 text-text-muted text-sm">
               <li>
                 <a href="https://wa.me/919879737819" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">
                   WhatsApp: +91 98797 37819
                 </a>
               </li>
               <li>
                 <a href="mailto:chhatralatejash@gmail.com" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">
                   chhatralatejash@gmail.com
                 </a>
               </li>
             </ul>
           </div>

           <div>
             <h3 className="font-bold text-text-strong mb-4">Legal</h3>
             <ul className="space-y-2 text-text-muted text-sm">
               <li><a href="/?page=terms" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">Terms of Service</a></li>
               <li><a href="/?page=privacy" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">Privacy Policy</a></li>
               <li><a href="/?page=refund" className="hover:text-brand-teal transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated">Refund Policy</a></li>
             </ul>
           </div>
        </div>

        <div className="text-[11px] text-text-muted leading-relaxed text-justify mb-8">
          <strong>Risk Disclaimer:</strong> Trading in stocks, options, futures, forex, and cryptocurrencies involves substantial risk of loss and is not suitable for every investor. Past performance is not indicative of future results. This indicator is a technical analysis tool — it does not guarantee profits. You are solely responsible for your trading decisions. Only trade with money you can afford to lose. The creator is not a SEBI-registered advisor.
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <div>
             © 2026 ZeroRepaint.in — All rights reserved.
          </div>
          <div>
             Built by Tejas @ SarvottamAI
          </div>
        </div>
      </div>
    </footer>
  );
};
