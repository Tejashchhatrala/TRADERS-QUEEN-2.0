import React, { useEffect } from 'react';

export const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="font-display font-black text-4xl md:text-5xl text-text-strong mb-8">Refund Policy</h1>

      <div className="prose prose-slate max-w-none text-text-muted space-y-6">
        <p>Last updated: June 16, 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">1. Digital Products Nature</h2>
          <p>Traders Queen 2.0 Zero Repaint is a digital product providing an open-source TradingView indicator. Due to the nature of digital goods and the immediate delivery of the source code upon purchase, it is impossible to "return" the product once access has been granted.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">2. Conditional Zero-Repaint Guarantee</h2>
          <p>Because source code access is delivered immediately, refunds are not offered for general change-of-mind reasons. The only refund condition is our zero-repaint guarantee: you qualify for a refund if you can show that a Traders Queen 2.0 signal changed, moved, or disappeared after the relevant candle had already closed.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">3. Evidence Required</h2>
          <p>To review a repaint claim, you must provide enough evidence for us to reproduce and verify the issue. Please include your order details, TradingView chart link, screenshots or a screen recording, the symbol, timeframe, indicator settings used, and the exact candle timestamp where the closed-candle signal changed.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">4. Claim Window and Contact Method</h2>
          <p>Refund claims under the zero-repaint guarantee must be submitted within 7 days of purchase. Send your claim to support via WhatsApp at +91 98797 37819 so our team can review the evidence and respond.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">5. What Does Not Qualify</h2>
          <p>Refunds are not available for setup difficulties, inability to use TradingView, changing your mind, preference for a different strategy, market losses, missed trades, profitability expectations, or signals that differ because you changed markets, timeframes, inputs, chart type, or indicator settings. Live candles can update before closing; that is not considered repainting.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">6. Support Commitment</h2>
          <p>If you encounter technical issues with setup or operation on TradingView, please contact us on WhatsApp at +91 98797 37819. We will help you install, configure, and understand the indicator, even when the issue does not qualify for a refund.</p>
        </section>
      </div>
    </div>
  );
};
