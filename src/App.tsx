import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { WhatYouGet } from './components/WhatYouGet';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Markets } from './components/Markets';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-base">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <WhatYouGet />
        <Features />
        <HowItWorks />
        <Markets />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
