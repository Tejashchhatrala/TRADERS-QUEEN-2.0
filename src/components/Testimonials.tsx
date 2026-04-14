import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const STARS = [0, 1, 2, 3, 4];

export const Testimonials = () => {
  const reviews = [
    {
      name: "Karan M.",
      role: "Part-time Trader · Mumbai",
      text: "I was paying ₹1,500/month for a signal group. Lost ₹15,000 in 3 months. This tool cost me ₹2,999 once — and I've been profitable since. Best investment I made for trading.",
      initial: "K"
    },
    {
      name: "Deepak S.",
      role: "Gold Trader · Delhi",
      text: "I trade gold after my shop closes at 8 PM. The cloud feature tells me when to avoid trading. Earlier I used to lose money in sideways market. Now I only trade when the tool says it's trending.",
      initial: "D"
    },
    {
      name: "Priya R.",
      role: "Crypto Trader · Bangalore",
      text: "I was skeptical — another indicator? But the fact that they give the actual code convinced me. I've been using it on Bitcoin for 2 months. Very consistent. I check signals on my phone during lunch break.",
      initial: "P"
    },
    {
      name: "Ankit P.",
      role: "Nifty Options · Ahmedabad",
      text: "I don't have time to watch 2 charts. This tool takes signals from Nifty but I apply it on my option chart. I just get an alert on my phone, check the levels, and place the trade. Takes 2 minutes.",
      initial: "A"
    },
    {
      name: "Vikram T.",
      role: "Part-time Trader · Pune",
      text: "I tried YouTube indicators, Telegram groups, and paid tips — lost close to ₹50,000 total. This tool brought discipline back. Simple signals, clear levels. I trade only 1-2 times a day now and I'm doing much better.",
      initial: "V"
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 px-6 bg-surface-base border-y border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong">Real People. Real Stories.</h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto leading-relaxed">
            Part-time traders just like you — using this tool every day.
          </p>
          <div className="flex justify-center gap-1 mt-6 text-yellow-500">
            {STARS.map((i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
              <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface-raised p-8 rounded-2xl border border-border-subtle hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {STARS.map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-text-base flex-1 leading-relaxed mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4 border-t border-border-subtle pt-6 mt-auto">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal font-bold text-lg">
                  {review.initial}
                </div>
                <div>
                  <h4 className="text-text-strong font-bold text-sm">
                    {review.name}
                  </h4>
                  <p className="text-text-muted text-xs mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
