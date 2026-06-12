import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay slider every 8 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#F5F2ED] relative overflow-hidden">
      
      {/* Elegantly shaped faint graphics */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[#C5A059]/10 pointer-events-none hidden lg:block">
        <Quote className="w-80 h-80 stroke-[0.5]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading Pairings */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 text-[#C5A059] justify-center">
            <span className="h-[1px] w-6 bg-[#C5A059]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold">Ulasan Ikhlas Pelanggan</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Apa Kata <span className="italic text-[#C5A059]">Keluarga &amp; Pengantin?</span>
          </h2>
          <div className="w-16 h-[1px] mx-auto bg-[#C5A059] mt-6" />
        </div>

        {/* Carousel Container */}
        <div className="bg-white border border-[#C5A059]/25 rounded-sm p-8 md:p-16 relative shadow-lg max-w-4xl mx-auto">
          
          <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-[#F5F2ED] border border-[#C5A059]/30 px-3 py-1 rounded-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[9px] tracking-widest font-sans font-bold text-[#1A1A1A] uppercase">Ulasan Disahkan</span>
          </div>

          <div className="space-y-8 text-center md:text-left min-h-[300px] flex flex-col justify-between">
            
            {/* Quote body text */}
            <div className="space-y-6">
              
              {/* Rating representation */}
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#C5A059]">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>

              {/* Comments */}
              <p className="font-serif text-lg md:text-2xl text-[#1A1A1A] leading-relaxed italic md:pr-12">
                &ldquo;{activeTestimonial.comment}&rdquo;
              </p>

            </div>

            {/* Profile footer and metadata */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#C5A059]/10 pt-8 mt-4">
              
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                {/* Avatar circle */}
                <div className="w-16 h-16 rounded-full border border-[#C5A059]/40 overflow-hidden bg-zinc-100">
                  <img src={activeTestimonial.image} alt={activeTestimonial.name} className="w-full h-full object-cover" />
                </div>
                
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1A1A1A] leading-tight">{activeTestimonial.name}</h4>
                  <p className="font-sans text-xs text-zinc-500 font-light mt-0.5">{activeTestimonial.role} &bull; Tarikh: {activeTestimonial.eventDate}</p>
                </div>
              </div>

              {/* Tag bubble */}
              <div>
                <span className="text-[9px] tracking-widest font-sans font-bold text-[#C5A059] uppercase bg-[#F5F2ED] border border-[#C5A059]/35 py-1.5 px-3.5 rounded-sm">
                  {activeTestimonial.tag}
                </span>
              </div>

            </div>

          </div>

          {/* Nav Controls Buttons */}
          <div className="absolute right-4 bottom-4 md:right-12 md:bottom-12 flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-sm border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F5F2ED] transition-colors"
              title="Slaid Terdahulu"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-sm border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F5F2ED] transition-colors"
              title="Slaid Berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-[2px] transition-all ${
                idx === activeIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-[#C5A059]/30'
              }`}
              title={`Slaid ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
