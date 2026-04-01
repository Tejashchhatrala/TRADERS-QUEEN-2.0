import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul S.",
      role: "Weekly Expiry Options Buyer · Nagpur",
      text: "I used to lose ₹6,000–₹8,000 a week buying fake breakouts every Thursday morning. TQ 2.0 showed me the cloud was neutral — I stayed flat. Nifty moved 40 points both ways and came back. My capital was safe. My first month with TQ I broke even for the first time in a year."
    },
    {
      name: "Amit T.",
      role: "Salaried Options Buyer · Ahmedabad",
      text: "I work 9 to 6. I cannot watch Nifty all day. The WhatsApp alert tells me Buy CALL or Buy PUT, the Entry and SL are already calculated. I punch it into Zerodha and go back to my desk. No stress, no screen time. Finally a tool built for people like me."
    },
    {
      name: "Karan V.",
      role: "NSE F&O Trader · Surat",
      text: "I paid for a subscription indicator for 14 months. ₹18,000 gone. When the service shut down, everything vanished. I bought TQ 2.0 Zr six months ago for ₹2,999. The full source code is still on my computer. Best decision I made."
    },
    {
      name: "Deepak R.",
      role: "Nifty CE Buyer · Indore",
      text: "The Call Buyer Mode changed everything. Earlier I'd get 10 signals and sit confused. Now only Buy CE signals appear when the RSI and MACD momentum filter is teal. I trade, I exit, I move on. The clarity alone is worth the price."
    },
    {
      name: "Vikram D.",
      role: "BankNifty Scalper · Pune",
      text: "I was getting destroyed in sideways BankNifty markets—buying calls in choppy sessions and watching theta decay eat my capital. The Momentum Cloud has kept me completely flat on the worst days. Absolute lifesaver."
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#e8442a] font-bold tracking-widest uppercase text-sm mb-4">Real Traders</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Traders Who Stopped Bleeding Premium.</h2>
          <div className="flex justify-center gap-1 mb-6 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
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
              className="bg-[#111] p-8 rounded-3xl border border-[#1f1f1f] shadow-lg relative flex flex-col h-full"
            >
              <div className="absolute top-6 right-6 text-[#1f1f1f]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.439 12.5H12.5V3H21.5V12.5L19.078 21H14.017ZM5.017 21L7.439 12.5H3.5V3H12.5V12.5L10.078 21H5.017Z" />
                </svg>
              </div>
              <div className="flex gap-1 mb-4 text-[#00c9a7]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#e0e0e0] flex-1 leading-relaxed mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4 border-t border-[#1f1f1f] pt-6 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-white font-bold uppercase text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    {review.name}
                    <span className="text-[#00c9a7] text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 bg-[#00c9a7]/10 px-1.5 py-0.5 rounded border border-[#00c9a7]/20 relative group cursor-default">
                      <Star size={8} fill="currentColor" /> Verified
                      {/* Tooltip */}
                      <span className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-36 bg-[#111] text-gray-300 text-[9px] p-2 rounded border border-[#333] z-10 normal-case tracking-normal text-center shadow-xl">
                        WhatsApp review on file
                      </span>
                    </span>
                  </h4>
                  <p className="text-[#888] text-xs font-mono mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Verified Profits Section */}
      <div className="max-w-6xl mx-auto mt-32">
        <div className="text-center mb-16">
          <p className="text-[#00c9a7] font-bold tracking-widest uppercase text-sm mb-4">Results</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Profits made by traders using TQ 2.0 </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Screenshots submitted by our users from their verified broker accounts like Upstox and Zerodha showing consistent returns.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10">
          {[1,2,3,4,5,6,7,8].map((num) => (
             <div key={num} className="bg-[#111] border border-[#1f1f1f] rounded-2xl aspect-[4/5] relative overflow-hidden group">
               <img 
                 src={`/profit-${num}.jpg`}
                 alt={`Trader Profit Proof ${num}`}
                 className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 bg-[#0a0a0a]"
                 onError={(e) => {
                   e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23111'/%3E%3Crect width='398' height='498' x='1' y='1' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='10,10' rx='15' /%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='%2300c9a7'%3E[PROFIT SCREENSHOT]%3C/text%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12' fill='%23888'%3Epublic/profit-" + num + ".jpg%3C/text%3E%3Ctext x='50%25' y='62%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23555'%3E(Size: 800x1000px portrait)%3C/text%3E%3C/svg%3E";
                 }}
               />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end h-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="flex items-center gap-1.5 text-[#00c9a7] text-[10px] font-bold uppercase tracking-widest">
                   <CheckCircle2 size={12} /> Verified Source
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
