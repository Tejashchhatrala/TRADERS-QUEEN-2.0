import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export const CHECKOUT_LINK = "https://superprofile.bio/vp/69c0fe2898385800138423c6?checkout=true";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile sticky bar after scrolling down 300px
      if (window.scrollY > 300) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Skip to content link — visible only on keyboard focus for a11y */}
      <a
        href="#main-content"
        className="fixed top-0 left-1/2 -translate-x-1/2 z-[60] bg-brand-teal text-white font-bold py-3 px-6 rounded-b-lg text-sm -translate-y-full focus:translate-y-0 transition-transform duration-200 outline-none shadow-lg"
      >
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-base/90 backdrop-blur-md border-b border-border-subtle transition-[box-shadow] duration-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-teal flex items-center justify-center text-xs font-bold text-white shrink-0">TQ</div>
            <div className="flex flex-col">
              <div className="text-xl font-display font-black text-text-strong leading-none flex items-center">
                Traders Queen <span className="text-brand-teal font-sans text-sm ml-1 bg-brand-teal/10 px-1.5 py-0.5 rounded">2.0</span>
              </div>
              <span className="block text-[10px] font-sans font-medium text-text-muted leading-none mt-1 tracking-wide uppercase">Premium TradingView Indicator</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="/#hero" className="text-sm font-medium text-text-muted hover:text-text-strong transition-micro rounded-md px-2 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:text-text-strong">Home</a>
            <a href="/#features" className="text-sm font-medium text-text-muted hover:text-text-strong transition-micro rounded-md px-2 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:text-text-strong">Features</a>
            <a href="/#how-it-works" className="text-sm font-medium text-text-muted hover:text-text-strong transition-micro rounded-md px-2 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:text-text-strong">How It Works</a>
            <a href="/#pricing" className="text-sm font-medium text-text-muted hover:text-text-strong transition-micro rounded-md px-2 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:text-text-strong">Pricing</a>
            <a href="/#reviews" className="text-sm font-medium text-text-muted hover:text-text-strong transition-micro rounded-md px-2 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:text-text-strong">Reviews</a>
            <a href="/#faq" className="text-sm font-medium text-text-muted hover:text-text-strong transition-micro rounded-md px-2 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:text-text-strong">FAQ</a>
          </div>

          <div className="hidden lg:block">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="relative group inline-block bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-micro cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base hover:shadow-md">
              <span className="relative z-10">Buy Now — ₹2,999</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isOpen}
            className="lg:hidden text-text-strong rounded-md p-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal transition-micro hover:bg-black/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden bg-surface-base border-b border-border-subtle px-6 flex flex-col gap-2 shadow-xl overflow-hidden transition-all duration-250 ease-out ${
            isOpen ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0 border-b-0'
          }`}
        >
            <a href="/#hero" onClick={() => setIsOpen(false)} className="text-text-base py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-strong transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">Home</a>
            <a href="/#features" onClick={() => setIsOpen(false)} className="text-text-base py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-strong transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">Features</a>
            <a href="/#how-it-works" onClick={() => setIsOpen(false)} className="text-text-base py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-strong transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">How It Works</a>
            <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-text-base py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-strong transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">Pricing</a>
            <a href="/#reviews" onClick={() => setIsOpen(false)} className="text-text-base py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-strong transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">Reviews</a>
            <a href="/#faq" onClick={() => setIsOpen(false)} className="text-text-base py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-strong transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">FAQ</a>
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-3 px-6 rounded-lg w-full mt-2 transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base">
              Buy Now — ₹2,999
            </a>
        </div>
      </nav>

      {/* Sticky Mobile CTA Bar (Bottom) */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border-subtle p-4 flex items-center justify-between transition-[transform,opacity] duration-300 ease-out shadow-[0_-10px_30px_rgba(0,0,0,0.08)] ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
         <div className="text-text-strong font-bold text-sm">₹2,999 Once.<br/><span className="text-text-muted text-xs font-normal">Yours Forever.</span></div>
         <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-2.5 px-6 rounded-lg text-sm cursor-pointer transition-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white">
           Buy Now →
         </a>
      </div>
    </>
  );
};
