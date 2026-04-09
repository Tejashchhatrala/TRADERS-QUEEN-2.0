import React, { useEffect } from 'react';

export const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="font-display font-black text-4xl md:text-5xl text-text-strong mb-8">Refund Policy</h1>

      <div className="prose prose-slate max-w-none text-text-muted space-y-6">
        <p>Last updated: October 26, 2024</p>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">1. Digital Products Nature</h2>
          <p>Traders Queen 2.0 Zero Repaint is a digital product providing an open-source TradingView indicator. Due to the nature of digital goods and the immediate delivery of the source code upon purchase, it is impossible to "return" the product once access has been granted.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">2. No Refunds Policy</h2>
          <p>Therefore, we maintain a strict <strong>No Refunds</strong> policy. All sales are final. Once a purchase is made and the indicator/source code access is provided, we cannot issue a refund under any circumstances.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">3. Pre-Purchase Consideration</h2>
          <p>We highly recommend that you carefully review all the features, benefits, and disclaimers presented on our website before making a purchase. Please ensure that this technical analysis tool aligns with your trading style and needs.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">4. Support Guarantee</h2>
          <p>While we do not offer refunds, we are fully committed to ensuring the indicator functions as described. If you encounter any technical issues with the setup or operation of the indicator on TradingView, we provide dedicated support to help resolve these issues.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">5. Contact Support</h2>
          <p>If you need assistance with your purchase, please contact our support team via WhatsApp at +91 98797 37819.</p>
        </section>
      </div>
    </div>
  );
};
