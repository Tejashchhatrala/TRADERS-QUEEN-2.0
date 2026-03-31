import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Karan V.",
      role: "NSE F&O Trader · Surat",
      text: "I paid for a subscription indicator for 14 months. ₹18,000 gone. When the service shut down, everything vanished. I bought TQ 2.0 Zr six months ago for ₹2,999. The code is still on my computer. Best decision I made."
    },
    {
      name: "Deepak R.",
      role: "Nifty CE Buyer · Indore",
      text: "The Call Buyer Mode changed everything. Earlier I'd get 10 signals and sit confused. Now only Buy CE signals appear when momentum is teal. I trade, I exit, I move on. The clarity alone is worth the price."
    },
    {
      name: "Vikram D.",
      role: "BankNifty Scalper · Pune",
      text: "I was getting destroyed in sideways BankNifty markets—buying calls in choppy sessions and watching theta decay eat my capital. The Momentum Cloud has kept me flat on the worst days. Lifesaver."
    },
    {
      name: "Ankit M.",
      role: "Part-time Options Buyer · Bengaluru",
      text: "I work a full-time job. I can't watch charts from 9:15 to 3:30. TQ 2.0 Zr sends the alert to my phone. I open Upstox, punch in the Entry and SL it calculated, and go back to work. Perfect."
    }
  ];

  return (
    <section id="reviews" className="py-24 px-6 bg-[#13161c]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Real Traders</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Traders Who Stopped Bleeding Premium.</h2>
          <div className="flex justify-center gap-1 mb-6 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0a0c0f] p-8 rounded-3xl border border-[#2a303c] shadow-lg relative"
            >
              <div className="absolute top-6 right-6 text-[#2a303c]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.439 12.5H12.5V3H21.5V12.5L19.078 21H14.017ZM5.017 21L7.439 12.5H3.5V3H12.5V12.5L10.078 21H5.017Z" />
                </svg>
              </div>
              <div className="flex gap-1 mb-4 text-emerald-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4 border-t border-[#1e232b] pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
