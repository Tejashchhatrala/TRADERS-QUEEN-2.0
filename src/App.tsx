import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofSection } from './components/ProofSection';
import { DemoVideo } from './components/DemoVideo';
import { TrustStack } from './components/TrustStack';
import { BeforeAfter } from './components/BeforeAfter';
import { TestimonialsNew } from './components/TestimonialsNew';
import { Guarantee } from './components/Guarantee';
import { VisualFeatures } from './components/VisualFeatures';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { RefundPolicy } from './components/RefundPolicy';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    // Basic router based on URL parameters
    const checkUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get('page');
      setCurrentPage(page || '');
    };

    checkUrl();

    // Listen for history changes if we want to handle browser back/forward natively
    // (though anchor clicks that reload or change ?page will trigger full re-renders)
    window.addEventListener('popstate', checkUrl);
    return () => window.removeEventListener('popstate', checkUrl);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsOfService />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'refund':
        return <RefundPolicy />;
      default:
        return (
          <>
            <Hero />
            <ProofSection />
            <DemoVideo />
            <TrustStack />
            <BeforeAfter />
            <TestimonialsNew />
            <Guarantee />
            <VisualFeatures />
            <FinalCTA />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface-base">
      <Navbar />
      <main id="main-content" className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
