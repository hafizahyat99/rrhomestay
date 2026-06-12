import { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data';
import { ZoomIn, X, ChevronLeft, ChevronRight, Image } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Section Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 inline-flex items-center gap-2 text-[#C5A059] justify-center">
            <span className="h-[1px] w-6 bg-[#C5A059]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold">Galeri Keindahan</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1A1A1A] tracking-tight mb-6">
            Eksplorasi Sudut &amp; <span className="italic text-[#C5A059]">Seni Bina RR</span>
          </h2>
          <div className="w-16 h-[1px] mx-auto bg-[#C5A059] mb-6" />
          <p className="font-sans text-xs md:text-sm text-[#4A4A4A] leading-relaxed font-light max-w-2xl mx-auto">
            Sorotan kualiti hiasan pelamin, susun atur dewan acara kami yang selesa, katering berkualiti tinggi, serta kebersihan unit homestay kami yang terjaga rapi.
          </p>
        </div>

        {/* Categories Filtering Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-3xl mx-auto">
          {[
            { id: 'all', label: 'Semua Gambar' },
            { id: 'pelamin', label: 'Pelamin & Hiasan' },
            { id: 'dewan', label: 'Dewan Acara' },
            { id: 'homestay', label: 'Suasana Homestay' },
            { id: 'katering', label: 'Katering Sajian' },
            { id: 'majlis', label: 'Suasana Majlis' }
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => {
                setActiveFilter(chip.id);
                setLightboxIndex(null); // Clear selected index if filters change
              }}
              className={`px-5 py-2.5 text-[11px] font-sans font-bold tracking-widest uppercase rounded-sm transition-all duration-300 border ${
                activeFilter === chip.id
                  ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-md font-bold'
                  : 'bg-transparent border-[#C5A059]/30 text-[#4A4A4A] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid with scale zoom animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-80 rounded-sm overflow-hidden border border-gold-200/20 bg-zinc-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image element */}
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
              />

              {/* Hover Dark Gold Shade Coating */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-950/80 via-gold-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Zoom indicators */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 text-gold-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gold-900 hover:text-white">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Text label details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                <span className="text-[9px] tracking-widest text-gold-300 font-sans uppercase font-bold block mb-1">{item.category}</span>
                <h4 className="font-serif text-lg font-bold text-white leading-tight mb-1">{item.title}</h4>
                <p className="font-sans text-[11px] text-gold-100/80 font-light leading-snug line-clamp-1">{item.subtitle}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Visual Cue */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs text-zinc-400 font-light flex items-center justify-center gap-2">
            <Image className="w-4 h-4 text-gold-400" />
            <span>Klik gambar untuk melihat paparan imej penuh beresolusi tinggi.</span>
          </p>
        </div>

      </div>

      {/* LIGHTBOX SLIDESHOW MODAL OVERLAY */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 bg-[#0c0a09]/95 z-50 flex flex-col items-center justify-center p-4">
          
          {/* Lightbox Header Controls */}
          <div className="absolute top-4 inset-x-0 px-6 flex items-center justify-between text-white z-50">
            <div>
              <p className="font-sans text-[10px] tracking-widest text-gold-400 font-semibold uppercase">RR GALERI PREMIUM</p>
              <h5 className="font-serif text-base leading-none mt-1 text-white/90">{filteredItems[lightboxIndex].title}</h5>
            </div>
            
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              title="Close Image"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Picture Box */}
          <div className="relative max-w-5xl w-full h-[70vh] flex items-center justify-center">
            
            {/* Left Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 md:-left-16 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main view frame */}
            <img
              src={filteredItems[lightboxIndex].url}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-sm select-none animate-luxury-fade-in border border-white/10 shadow-2xl"
            />

            {/* Right Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 md:-right-16 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Info Card Desk at Bottom */}
          <div className="text-center text-white mt-6 max-w-xl z-10">
            <span className="text-[10px] tracking-wider font-sans font-bold text-gold-400 uppercase p-1 px-2.5 bg-white/10 rounded-full">
              {filteredItems[lightboxIndex].category}
            </span>
            <p className="font-serif text-lg font-bold text-white mt-3.5">{filteredItems[lightboxIndex].title}</p>
            <p className="font-sans text-xs text-white/60 font-light mt-1.5 leading-relaxed">{filteredItems[lightboxIndex].subtitle}</p>
            <p className="font-sans text-[10px] text-white/30 tracking-widest uppercase mt-6 font-bold">
              Imej {lightboxIndex + 1} daripada {filteredItems.length}
            </p>
          </div>

        </div>
      )}

    </section>
  );
}
