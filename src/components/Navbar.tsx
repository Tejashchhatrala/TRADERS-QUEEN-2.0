import React, { useState, useEffect } from 'react';
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

  return (
    <>
      {/* Skip to content link — visible only on keyboard focus for a11y */}
      <a
        href="#main-content"
        className="fixed top-0 left-1/2 -translate-x-1/2 z-[60] bg-brand-red text-white font-bold py-3 px-6 rounded-b-lg text-sm -translate-y-full focus:translate-y-0 transition-transform duration-200 outline-none shadow-lg"
      >
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-base/90 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-black text-text-strong flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-red flex items-center justify-center text-xs font-bold text-white">TQ</div>
            Traders Queen <span className="text-brand-red font-sans text-sm ml-1 bg-brand-red/10 px-1.5 py-0.5 rounded">2.0</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#hero" className="text-sm font-medium text-text-muted hover:text-text-strong transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:text-white">Start</a>
            <a href="#the-trap" className="text-sm font-medium text-text-muted hover:text-text-strong transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:text-white">The Traps</a>
            <a href="#sideways-filter" className="text-sm font-medium text-text-muted hover:text-text-strong transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:text-white">Weekly Expiry</a>
            <a href="#features" className="text-sm font-medium text-text-muted hover:text-text-strong transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:text-white">Features</a>
            <a href="#proof" className="text-sm font-medium text-text-muted hover:text-text-strong transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:text-white">Your Code</a>
            <a href="#reviews" className="text-sm font-medium text-text-muted hover:text-text-strong transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:text-white">Reviews</a>
            <a href="#faq" className="text-sm font-medium text-text-muted hover:text-text-strong transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:text-white">FAQ</a>
          </div>

          <div className="hidden lg:block">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="relative group inline-block bg-brand-red hover:bg-brand-red-hover text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-all overflow-hidden shadow-[0_0_15px_var(--color-brand-red)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base">
              <span className="relative z-10">Get TQ 2.0 — Start Trading Smarter — ₹2,999</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isOpen}
            className="lg:hidden text-text-strong rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red transition-colors hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-surface-base border-b border-border-subtle px-6 py-4 flex flex-col gap-4 shadow-xl">
            <a href="#hero" onClick={() => setIsOpen(false)} className="text-text-base py-2">Start</a>
            <a href="#the-trap" onClick={() => setIsOpen(false)} className="text-text-base py-2">The Traps</a>
            <a href="#sideways-filter" onClick={() => setIsOpen(false)} className="text-text-base py-2 text-brand-red font-bold">Weekly Expiry Guide</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-text-base py-2">Features</a>
            <a href="#proof" onClick={() => setIsOpen(false)} className="text-text-base py-2">Verify It</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="text-text-base py-2">Reviews</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-text-base py-2">FAQ</a>
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3 px-6 rounded-lg w-full mt-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base">
              Get TQ 2.0 — Start Trading Smarter — ₹2,999
            </a>
          </div>
        )}
      </nav>

      {/* Sticky Mobile CTA Bar (Bottom) */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-border-subtle p-4 flex items-center justify-between transition-transform duration-300 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="text-white font-bold text-sm">₹2,999 Once.<br/><span className="text-text-muted text-xs font-normal">Yours Forever.</span></div>
         <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white font-bold py-2.5 px-6 rounded-lg text-sm shadow-[0_0_15px_var(--color-brand-red)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-black">
           Buy Now →
         </a>
      </div>
    </>
  );
};
