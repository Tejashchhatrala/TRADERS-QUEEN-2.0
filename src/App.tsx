import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { SidewaysFilter } from './components/SidewaysFilter';
import { Features } from './components/Features';
import { ChartCarousel } from './components/ChartCarousel';
import { Proof } from './components/Proof';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <SidewaysFilter />
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
