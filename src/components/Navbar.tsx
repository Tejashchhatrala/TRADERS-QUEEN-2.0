import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const CHECKOUT_LINK = "https://superprofile.bio/vp/69c0fe2898385800138423c6?checkout=true";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c0f]/90 backdrop-blur-md border-b border-[#1e232b]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-display font-black text-white flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-xs font-bold text-[#0a0c0f]">TQ</div>
          Traders Queen <span className="text-primary font-mono text-sm ml-1">2.0</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Start</a>
          <a href="#the-trap" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">The Trap</a>
          <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="#proof" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Open Source</a>
          <a href="#reviews" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Reviews</a>
        </div>

        <div className="hidden md:block">
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="relative group inline-block bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-all overflow-hidden shadow-[0_0_15px_rgba(8,153,129,0.4)]">
            <span className="relative z-10">Get the Code — ₹2,999</span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white rounded-md p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0c0f] border-b border-[#1e232b] px-6 py-4 flex flex-col gap-4">
          <a href="#hero" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Start</a>
          <a href="#the-trap" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">The Trap</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Features</a>
          <a href="#proof" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Open Source Proof</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Reviews</a>
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg w-full mt-2 transition-colors">
            Get the Code — ₹2,999
          </a>
        </div>
      )}
    </nav>
  );
};
