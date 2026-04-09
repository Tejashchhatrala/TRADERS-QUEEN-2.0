import React, { useEffect } from 'react';

export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="font-display font-black text-4xl md:text-5xl text-text-strong mb-8">Terms of Service</h1>

      <div className="prose prose-slate max-w-none text-text-muted space-y-6">
        <p>Last updated: October 26, 2024</p>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to Traders Queen 2.0 Zero Repaint ("we", "our", or "us"). By accessing or using our TradingView indicator and website (zerorepaint.in), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">2. Intellectual Property</h2>
          <p>Upon purchase, you are granted a non-exclusive, non-transferable license to use the Traders Queen 2.0 indicator for personal trading purposes. While you receive access to the source code, you are strictly prohibited from redistributing, reselling, or sharing the indicator or its source code with third parties.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">3. Disclaimer of Liability</h2>
          <p>The Traders Queen 2.0 indicator is a technical analysis tool provided for educational and informational purposes only. It does not constitute financial advice. We are not SEBI-registered advisors. Trading involves substantial risk, and past performance is not indicative of future results. We shall not be held liable for any financial losses incurred while using our indicator.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">4. User Responsibilities</h2>
          <p>You are solely responsible for your own trading decisions and the risk associated with them. You agree to use the indicator in compliance with all applicable local, state, national, and international laws, rules, and regulations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">5. Modifications to Service</h2>
          <p>We reserve the right to modify or discontinue, temporarily or permanently, the service or any part of it with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">6. Contact Information</h2>
          <p>For any questions regarding these Terms of Service, please contact us via WhatsApp at +91 98797 37819.</p>
        </section>
      </div>
    </div>
  );
};
