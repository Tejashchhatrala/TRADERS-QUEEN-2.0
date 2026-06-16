import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { fadeUp, scaleReveal, viewport } from '../lib/animations';

const testimonialsImages = [
  {
    path: '/images/testimonials/whatsapp-1.jpg',
    alt: 'User testimonial screenshot from a trader message',
    market: 'Market discussed by the user in their message',
    signal: 'Real customer feedback about using the Traders Queen 2.0 setup.',
    solves: 'Shows social proof from users who wanted clearer chart guidance.',
    type: 'User testimonial'
  },
  {
    path: '/images/testimonials/whatsapp-2.jpg',
    alt: 'Second user testimonial screenshot from a trader message',
    market: 'Market discussed by the user in their message',
    signal: 'Follow-up feedback about signals, levels, or ease of use.',
    solves: 'Helps visitors understand how traders describe the tool after trying it.',
    type: 'User testimonial'
  },
  {
    path: '/images/testimonials/whatsapp-3.jpg',
    alt: 'Third user testimonial screenshot from a trader message',
    market: 'Market discussed by the user in their message',
    signal: 'A saved chat screenshot showing user-reported experience.',
    solves: 'Adds context that these are testimonials, not guaranteed trade results.',
    type: 'User testimonial'
  }
];

export const TestimonialsNew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsImages.length) % testimonialsImages.length);
  };

  return (
    <section id="reviews" className="py-16 md:py-24 px-6 bg-surface-elevated overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="mb-12"
        >
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-4 uppercase tracking-wider flex items-center justify-center gap-2 mx-auto w-fit">
            <MessageSquare size={16} />
            User Message Screenshots
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong leading-tight">
            Feedback Shared by Traders Using This
          </h2>
        </motion.div>

        <motion.div
          variants={scaleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mb-12 max-w-[400px] mx-auto"
        >
          {/* Carousel */}
          <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-surface-base border-4 border-border-strong shadow-2xl group">
             <AnimatePresence mode="wait">
               <motion.img
                 key={currentIndex}
                 src={testimonialsImages[currentIndex].path}
                 alt={testimonialsImages[currentIndex].alt}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.05 }}
                 transition={{ duration: 0.3 }}
                 className="w-full h-full object-cover"
                 loading="lazy"
               />
             </AnimatePresence>

             {/* Navigation Buttons */}
             <button
               onClick={prevSlide}
               className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-text-strong rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
               aria-label="Previous slide"
             >
               <ChevronLeft size={20} />
             </button>
             <button
               onClick={nextSlide}
               className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-text-strong rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
               aria-label="Next slide"
             >
               <ChevronRight size={20} />
             </button>

             {/* Dots */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
               {testimonialsImages.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrentIndex(idx)}
                   className={`w-2 h-2 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base ${idx === currentIndex ? 'bg-brand-teal w-6' : 'bg-text-muted hover:bg-text-strong'}`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
             </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`testimonial-caption-${currentIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-4 rounded-2xl border border-border-subtle bg-surface-base p-5 text-left shadow-md"
            >
              <span className="mb-3 inline-block rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-teal">{testimonialsImages[currentIndex].type}</span>
              <p className="text-sm leading-relaxed text-text-base md:text-base"><span className="font-bold text-text-strong">Market:</span> {testimonialsImages[currentIndex].market}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-base md:text-base"><span className="font-bold text-text-strong">Notice:</span> {testimonialsImages[currentIndex].signal}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-base md:text-base"><span className="font-bold text-text-strong">Solves:</span> {testimonialsImages[currentIndex].solves}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.p
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewport}
           className="mt-8 text-xl font-bold text-text-strong"
        >
          These screenshots show messages shared by users. <br/> Individual experiences vary, and trading involves risk.
        </motion.p>
      </div>
    </section>
  );
};
