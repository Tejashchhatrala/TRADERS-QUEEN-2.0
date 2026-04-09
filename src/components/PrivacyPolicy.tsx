import React, { useEffect } from 'react';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="font-display font-black text-4xl md:text-5xl text-text-strong mb-8">Privacy Policy</h1>

      <div className="prose prose-slate max-w-none text-text-muted space-y-6">
        <p>Last updated: October 26, 2024</p>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you make a purchase or contact us for support. This may include your name, email address, TradingView username, phone number, and payment information. Payment details are processed securely by our payment partners and are not stored on our servers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Process your transactions and deliver the indicator access</li>
            <li>Provide customer support via WhatsApp or email</li>
            <li>Send you important updates regarding the indicator or our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">5. Your Rights</h2>
          <p>Depending on your location, you may have rights to access, correct, or delete your personal data. If you wish to exercise these rights, please contact us using the information below.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-strong mt-8 mb-4">6. Contact Us</h2>
          <p>If there are any questions regarding this privacy policy, you may contact us via WhatsApp at +91 98797 37819 or email at chhatralatejash@gmail.com.</p>
        </section>
      </div>
    </div>
  );
};
