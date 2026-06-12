import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Star, MapPin, CheckCircle2 } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1920",
    title: "Akad Nikah & Resepsi Elegan",
    caption: "Dewan Majlis Mewah yang Bergaya"
  },
  {
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1920",
    title: "Percutian Keluarga Damai",
    caption: "Modern Tropical Villa Selesa"
  },
  {
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1920",
    title: "Detik Keraian Laman Malam",
    caption: "Limpahan Pentas Cahaya Syahdu"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const triggerScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0a09]">
      
      {/* Cinematic Slideshow Background */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === currentSlide ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 6s ease-out, opacity 1.8s ease-in-out'
          }}
        />
      ))}

      {/* High-Contrast Luxury Matte Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/80 via-transparent to-[#0c0a09]/40" />

      {/* Radial Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-radial from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Content Coordinates */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center pt-28 pb-16 z-10 flex flex-col items-center">
        
        {/* Dynamic Indicator Badge */}
        <div className="mb-6 inline-flex items-center gap-2 text-[#C5A059] bg-[#1A1A1A]/40 backdrop-blur-md border border-[#C5A059]/30 px-4 py-2 uppercase tracking-[0.25em] font-sans text-[10px] font-bold rounded-sm">
          <span className="h-[1px] w-6 bg-[#C5A059]"></span>
          <span>Satu Lokasi Eksklusif Pokok Sena</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05] mb-6 max-w-5xl">
          Raikan Moment <br />
          Indah Anda <span className="italic text-[#C5A059]">Dengan Mudah.</span>
        </h1>

        {/* Elegant Subheadline */}
        <p className="font-sans text-sm md:text-base lg:text-lg text-gold-100/90 leading-relaxed max-w-2xl mb-12 font-light">
          Daripada penginapan yang selesa sehingga pakej perkahwinan lengkap, semuanya tersedia dalam satu lokasi eksklusif dikelilingi alam hijau bersahaja di <span className="text-[#C5A059] font-medium font-serif italic text-base">Pokok Sena, Kedah.</span>
        </p>

        {/* Double Conversion CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <a
            href="https://wa.me/60194411934?text=Salam%20Admin%20RR%20Homestay.%20Saya%20tertarik%20melihat%20website%20premium%20pakej%20kalian.%20Boleh%20saya%20bertanya%20mengenai%20kekosongan%20tarikh%20untuk%20majlis%20/%20homestay?"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-[#C5A059] hover:bg-white hover:text-[#1A1A1A] text-white font-sans font-bold text-xs tracking-widest uppercase rounded-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <span>Tempah via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => triggerScroll('events')}
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white hover:border-[#C5A059] hover:text-[#C5A059] font-sans font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-300"
          >
            Lihat Pakej
          </button>
        </div>

        {/* Social Proof Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full pt-10 border-t border-white/10 max-w-4xl">
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#C5A059] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
              ))}
            </div>
            <p className="font-sans text-xs text-white/50 uppercase tracking-widest leading-none mb-1">Pilihan Utama</p>
            <p className="font-serif italic text-sm text-[#C5A059]">Keluarga &amp; Pengantin</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
              <span className="font-serif font-light text-xl text-white">100+ Majlis</span>
            </div>
            <p className="font-sans text-xs text-white/50 uppercase tracking-widest leading-none mb-1">Selesai Berjaya</p>
            <p className="font-serif italic text-sm text-[#C5A059]">Penuh Kegembiraan</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-5 h-5 text-[#C5A059]" />
              <span className="font-serif font-light text-lg text-white">Kedah, Pokok Sena</span>
            </div>
            <p className="font-sans text-xs text-white/50 uppercase tracking-widest leading-none mb-1">Lokasi Strategik</p>
            <p className="font-serif italic text-sm text-[#C5A059]">Tenang &amp; Damai</p>
          </div>

        </div>

      </div>

      {/* Decorative Slide Caption (current scene descriptor) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden md:block">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 text-center font-sans">
          Paparan Eksklusif: <span className="text-[#C5A059] font-bold">{HERO_SLIDES[currentSlide].title}</span>
        </p>
      </div>

    </div>
  );
}
