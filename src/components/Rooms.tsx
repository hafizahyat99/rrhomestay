import { useState } from 'react';
import { ACCOMMODATIONS, Accommodation } from '../data';
import { Users, BedDouble, Bath, Wind, Wifi, Check, Sparkles, X, Heart } from 'lucide-react';

export default function Rooms() {
  const [selectedSuite, setSelectedSuite] = useState<Accommodation | null>(null);

  const getWhatsAppLink = (suite: Accommodation) => {
    const text = `Salam Admin RR. Saya berminat untuk menempah penginapan *${suite.name}* (${suite.tag}) bagi bermula RM${suite.price}/malam. Boleh saya semak ketersediaan tarikh?`;
    return `https://wa.me/60194411934?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rooms" className="py-24 md:py-32 bg-white relative">
      
      {/* Background Graphic Lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 text-[#C5A059] justify-center">
            <span className="h-[1px] w-6 bg-[#C5A059]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold">Penginapan Mewah</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1A1A1A] tracking-tight mb-6">
            Pilihan Suite &amp; <span className="italic text-[#C5A059]">Homestay Selesa</span>
          </h2>
          <div className="w-16 h-[1px] mx-auto bg-[#C5A059] mb-6" />
          <p className="font-sans text-xs md:text-sm text-[#4A4A4A] leading-relaxed font-light max-w-2xl mx-auto">
            Setiap katil dan sudut bilik direka dengan teliti menggunakan tona warna bumi yang damai untuk keselesaan tidur yang maksimum bagi pengantin mahupun sekeluarga besar tetamu terhormat.
          </p>
        </div>

        {/* Accommodation Premium Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {ACCOMMODATIONS.map((suite) => (
            <div
              key={suite.id}
              className="bg-[#FCFAF6] border border-gold-200/30 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-gold-800/10 hover:-translate-y-2 group"
            >
              
              {/* Product Visual Container */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-zinc-100">
                <img
                  src={suite.image}
                  alt={suite.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                />
                
                {/* Visual Gold Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-750" />

                {/* Left/Right Badges */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1A1A1A] border border-[#C5A059]/40 text-gold-200 text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-sm">
                    {suite.tag}
                  </span>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-[#C5A059]">
                  <p className="font-sans text-[9px] text-[#8E8B85] uppercase tracking-widest font-bold leading-none">Mulai</p>
                  <p className="font-serif font-bold text-[#1A1A1A] text-lg leading-tight">RM {suite.price}<span className="text-[10px] font-normal text-zinc-400 font-sans">/malam</span></p>
                </div>
              </div>

              {/* Product Description details */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                
                <div>
                  {/* Meta Specs Line */}
                  <div className="flex items-center gap-4 text-[10px] font-sans font-bold text-[#C5A059] uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 stroke-1.5" />
                      {suite.pax} Tetamu
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/40" />
                    <span>{suite.rooms} Bilik Tidur</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-light text-[#1A1A1A] mb-4 group-hover:text-[#C5A059] transition-colors duration-300">
                    {suite.name}
                  </h3>

                  {/* Short blurb */}
                  <p className="font-sans text-xs md:text-sm text-[#575452] line-clamp-3 mb-8 leading-relaxed font-light">
                    {suite.description}
                  </p>

                  {/* Iconized bullet features (Top 3) */}
                  <div className="border-t border-[#C5A059]/25 pt-6 mb-8">
                    <p className="text-[10px] font-bold text-[#1A1A1A] tracking-widest uppercase mb-3">Spesifikasi Unit:</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-xs text-zinc-600">
                        <Wind className="w-4 h-4 text-[#C5A059]" />
                        <span>{suite.airconds} Aircond</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-600">
                        <Bath className="w-4 h-4 text-[#C5A059]" />
                        <span>{suite.baths} Mandi</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-600">
                        <Wifi className="w-4 h-4 text-[#C5A059]" />
                        <span>WiFi Kelajuan Tinggi</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-600">
                        <BedDouble className="w-4 h-4 text-[#C5A059]" />
                        <span>Sofa &amp; Smart TV</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Double Interactive Buttons */}
                <div className="flex items-center gap-3 mt-4">
                  
                  {/* Open details modal */}
                  <button
                    onClick={() => setSelectedSuite(suite)}
                    className="flex-1 py-3 text-center border border-[#1A1A1A] hover:bg-[#F5F2ED] text-[#1A1A1A] font-sans font-bold text-[11px] tracking-widest uppercase rounded-sm transition-colors duration-300"
                  >
                    Amenities
                  </button>

                  {/* Quick Whatsapp Booking */}
                  <a
                    href={getWhatsAppLink(suite)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-sans font-bold text-[11px] text-center tracking-widest uppercase rounded-sm transition-colors duration-300 flex items-center justify-center gap-1 group-hover:shadow-md"
                  >
                    <span>Tempah Bilik</span>
                  </a>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Note on weddings */}
        <div className="mt-16 p-6 rounded-sm bg-[#F5F2ED] text-center max-w-2xl mx-auto border border-[#C5A059]/30">
          <p className="font-sans text-xs text-[#8E8B85] leading-relaxed font-medium">
            💡 <strong className="text-[#1A1A1A]">Nota Tambahan:</strong> Semua unit homestay sedia ditempah sekali gus sebagai sebahagian daripada sewaan pakej rumah kahwin / dewan bagi diskaun sehingga 15%.
          </p>
        </div>

      </div>

      {/* Pop-up Luxury Amenities Modal Drawer */}
      {selectedSuite && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300">
          <div className="bg-[#F5F2ED] max-w-xl w-full rounded-sm overflow-hidden shadow-2xl relative border border-[#C5A059] animate-luxury-fade-in max-h-[90vh] flex flex-col justify-between">
            
            {/* Header with Close */}
            <div className="p-6 border-b border-[#C5A059]/30 bg-[#1A1A1A] text-[#F5F2ED] flex items-center justify-between">
              <div>
                <span className="text-[9px] tracking-widest font-sans uppercase text-[#C5A059] font-bold">{selectedSuite.tag}</span>
                <h4 className="font-serif text-2xl font-light leading-none mt-1">{selectedSuite.name}</h4>
              </div>
              <button
                onClick={() => setSelectedSuite(null)}
                className="p-2 text-gold-100 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable description & details */}
            <div className="p-8 overflow-y-auto flex-grow gap-6 space-y-6">
              
              <div className="rounded-sm overflow-hidden aspect-video bg-zinc-200 border border-gold-200">
                <img src={selectedSuite.image} alt={selectedSuite.name} className="w-full h-full object-cover" />
              </div>

              <div>
                <h5 className="font-display font-semibold text-zinc-800 text-sm tracking-wide uppercase mb-2">Penerangan Suite</h5>
                <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed font-light">{selectedSuite.description}</p>
              </div>

              <div>
                <h5 className="font-display font-semibold text-zinc-800 text-sm tracking-wide uppercase mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span>Kelengkapan &amp; Kemudahan Premium</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSuite.amenities.map((item, id) => (
                    <div key={id} className="flex items-start gap-2.5 text-xs text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#C5A059]/20 flex items-center justify-between">
                <div>
                  <p className="text-[10px] tracking-widest text-[#8E8B85] uppercase">Harga Penginapan</p>
                  <p className="font-serif font-bold text-2xl text-[#1A1A1A] leading-none mt-1">RM {selectedSuite.price}<span className="text-xs font-normal text-zinc-500 font-sans">/malam</span></p>
                </div>
                <span className="text-[10px] bg-gold-100 text-[#C5A059] py-1 px-2.5 rounded-sm font-semibold tracking-wider font-sans uppercase">WiFi &amp; Aircond Penuh</span>
              </div>

            </div>

            {/* Form actions */}
            <div className="p-6 bg-[#F5F2ED] border-t border-[#C5A059]/20 flex gap-3">
              <button
                onClick={() => setSelectedSuite(null)}
                className="flex-1 py-3 text-center border border-[#1A1A1A] hover:bg-white text-[#1A1A1A] font-sans font-bold text-[11px] tracking-widest uppercase rounded-sm transition-colors"
              >
                Kembali
              </button>
              <a
                href={getWhatsAppLink(selectedSuite)}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-sans font-bold text-[11px] text-center tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-white animate-pulse" />
                <span>Bincang Tarikh</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
