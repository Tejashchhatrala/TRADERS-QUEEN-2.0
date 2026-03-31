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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-black text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#e8442a] flex items-center justify-center text-xs font-bold text-white">TQ</div>
            Traders Queen <span className="text-[#e8442a] font-mono text-sm ml-1 bg-[#e8442a]/10 px-1.5 py-0.5 rounded">2.0</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#hero" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Start</a>
            <a href="#the-trap" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">The Traps</a>
            <a href="#sideways-filter" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Weekly Expiry</a>
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#proof" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Open Source</a>
            <a href="#reviews" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Reviews</a>
            <a href="#faq" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="hidden lg:block">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="relative group inline-block bg-[#e8442a] hover:bg-[#d03d25] text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-all overflow-hidden shadow-[0_0_15px_rgba(232,68,42,0.4)]">
              <span className="relative z-10">Get the Code — ₹2,999</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white rounded-md p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-b border-[#1f1f1f] px-6 py-4 flex flex-col gap-4 shadow-xl">
            <a href="#hero" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Start</a>
            <a href="#the-trap" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">The Traps</a>
            <a href="#sideways-filter" onClick={() => setIsOpen(false)} className="text-gray-300 py-2 text-[#e8442a] font-bold">Weekly Expiry Guide</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Features</a>
            <a href="#proof" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Open Source Proof</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Reviews</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-[#e8442a] hover:bg-[#d03d25] text-white font-bold py-3 px-6 rounded-lg w-full mt-2 transition-colors">
              Get the Code — ₹2,999
            </a>
          </div>
        )}
      </nav>

      {/* Sticky Mobile CTA Bar (Bottom) */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-[#1f1f1f] p-4 flex items-center justify-between transition-transform duration-300 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="text-white font-bold text-sm">₹2,999 Once.<br/><span className="text-gray-400 text-xs font-normal">Yours Forever.</span></div>
         <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#e8442a] text-white font-bold py-2.5 px-6 rounded-lg text-sm shadow-[0_0_15px_rgba(232,68,42,0.4)]">
           Buy Now →
         </a>
      </div>
    </>
  );
};
