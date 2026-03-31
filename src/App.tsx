import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { ChartCarousel } from './components/ChartCarousel';
import { Proof } from './components/Proof';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-body bg-[#0a0c0f] text-white min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <ChartCarousel />
        <Proof />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
