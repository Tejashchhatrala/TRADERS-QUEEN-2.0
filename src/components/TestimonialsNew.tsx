import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const testimonialsImages = [
  {
    path: '/images/testimonials/whatsapp-1.jpg',
    alt: 'User testimonial 1'
  },
  {
    path: '/images/testimonials/whatsapp-2.jpg',
    alt: 'User testimonial 2'
  },
  {
    path: '/images/testimonials/whatsapp-3.jpg',
    alt: 'User testimonial 3'
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
    <section id="testimonials" className="py-16 md:py-24 px-6 bg-surface-elevated overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-4 uppercase tracking-wider flex items-center justify-center gap-2 mx-auto w-fit">
            <MessageSquare size={16} />
            Screenshots from Real Users
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-strong leading-tight">
            Real Feedback from Traders Using This
          </h2>
        </motion.div>

        <div className="relative mb-12 max-w-[400px] mx-auto">
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
               className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-text-strong rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all"
               aria-label="Previous slide"
             >
               <ChevronLeft size={20} />
             </button>
             <button
               onClick={nextSlide}
               className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-text-strong rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all"
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
                   className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-teal w-6' : 'bg-text-muted hover:bg-text-strong'}`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
             </div>
          </div>
        </div>

        <motion.p
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-8 text-xl font-bold text-text-strong"
        >
          These are actual messages from users. <br/> No scripts. No fake reviews.
        </motion.p>
      </div>
    </section>
  );
};
