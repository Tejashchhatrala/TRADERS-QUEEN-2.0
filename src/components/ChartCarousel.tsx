import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart2 } from 'lucide-react';

const screenshotModules = import.meta.glob('../assets/screenshots/*.{png,jpg,jpeg,webp}', { eager: true });
const screenshots = Object.entries(screenshotModules).map(([path, module]: [string, any]) => {
  const filename = path.split('/').pop() || '';
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  const caption = nameWithoutExt.replace(/^[0-9.\-_]+/, '').trim();
  return {
    src: module.default,
    caption: caption || 'Traders Queen 2.0 ZR Chart'
  };
});

export const ChartCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasMultipleImages = screenshots.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <section className="py-24 px-6 bg-[#13161c] border-y border-[#1e232b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">See It For Yourself</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Proof Before You <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Pay.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every screenshot is exactly what you see live—calculated on closed bars. Zero repainting. 
            Notice the momentum cloud keeping you safe in sideways chop, and the instant targets.
          </p>
        </div>

        {screenshots.length > 0 && (
          <div className="md:hidden text-center mb-6">
            <span className="inline-block bg-[#0a0c0f] text-white px-5 py-2 rounded-full font-bold shadow-lg text-sm border border-[#2a303c] uppercase tracking-wide">
              {screenshots[currentIndex].caption}
            </span>
          </div>
        )}

        <div className="bg-[#0a0c0f] p-4 md:p-6 rounded-3xl border border-[#2a303c] mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div
            className="aspect-video bg-[#1a1e24] rounded-2xl flex items-center justify-center border border-[#1e232b] relative overflow-hidden group shadow-inner"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {screenshots.length === 0 ? (
              <>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="text-center z-10 p-6 flex flex-col items-center">
                  <BarChart2 size={64} className="text-[#3a404c] mb-6" />
                  <p className="text-gray-400 font-mono text-sm max-w-md mx-auto border border-[#3a404c] bg-[#13161c] px-4 py-3 rounded-lg shadow-lg">
                    [Place your screenshot PNGs in src/assets/screenshots folder to populate the carousel]
                  </p>
                </div>
              </>
            ) : (
              <>
                {screenshots.map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="hidden md:block absolute top-6 left-6 text-left z-20 pointer-events-none">
                       <span className="inline-block bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-xl font-bold font-mono shadow-xl border border-white/10 uppercase tracking-widest text-sm">
                         {item.caption}
                       </span>
                    </div>
                  </div>
                ))}

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 md:p-4 rounded-full opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 z-20 hover:scale-110 shadow-lg border border-white/10"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 md:p-4 rounded-full opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 z-20 hover:scale-110 shadow-lg border border-white/10"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-3 z-20 bg-black/50 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/5 shadow-lg">
                      {screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all ${
                            idx === currentIndex ? 'bg-primary w-6 h-2' : 'bg-white/60 hover:bg-white w-2 h-2'
                          }`}
                          aria-label={`Go to screenshot ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          {hasMultipleImages && screenshots.length > 0 && (
            <div className="md:hidden flex justify-center items-center gap-3 mt-6">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#13161c] transition-all ${
                    idx === currentIndex ? 'bg-primary w-6 h-2.5' : 'bg-[#2a303c] hover:bg-[#3a404c] w-2.5 h-2.5'
                  }`}
                  aria-label={`Go to screenshot ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
