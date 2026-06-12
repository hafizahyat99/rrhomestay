import { useState, useEffect } from 'react';
import { MessageSquarePlus, X, HelpCircle, Heart, Bell } from 'lucide-react';

export default function StickyWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Trigger a soft micro-attention banner after 5 seconds to prompt guest engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const PRESETS = [
    { text: "Boleh semak kekosongan tarikh?", tag: "Tarikh" },
    { text: "Apakah harga pakej perkahwinan lengkap?", tag: "Wedding Pakej" },
    { text: "Bagaimana caranya membuat temu janji lawatan tapak dewan?", tag: "Site Visit" }
  ];

  const getCustomWhatsAppLink = (message: string) => {
    const text = `Salam Admin RR Homestay & Eventspace. ${message}`;
    return `https://wa.me/60194411934?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* 1. Welcoming Floating Chat Card Popup Panel */}
      {isOpen && (
        <div className="w-[320px] bg-[#FAF6EE] rounded-lg shadow-2xl border-2 border-gold-400 overflow-hidden text-left animate-luxury-fade-in flex flex-col group gold-glow">
          
          {/* Card Brand Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-800 to-[#128C7E] text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-emerald-100 hover:text-white transition-colors"
              title="Tutup Sembang"
            >
              <X className="w-4.5 h-4.5" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-gold-200 border border-white/20 select-none relative">
                <span className="font-display font-extrabold text-sm">RR</span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-850 animate-pulse" />
              </div>
              <div>
                <h5 className="font-display font-bold text-sm text-white leading-tight">Pegawai Perunding RR</h5>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Sedia Membantu (Online)
                </p>
              </div>
            </div>
          </div>

          {/* Chat Bubble Body Area */}
          <div className="p-5 space-y-4 max-h-[350px] overflow-y-auto">
            
            <div className="bg-white p-3 rounded-lg border border-gold-200/55 shadow-sm text-xs text-zinc-700 leading-normal">
              👋 Salam Sejahtera! Saya sedia menjawab sebarang soalan anda mengenai tarikh, pakej kahwin, katering, atau bilik inap. Sila pilih soalan anda di bawah:
            </div>

            {/* Quick Presets Conversion Buttons */}
            <div className="space-y-2 pt-1">
              <p className="text-[9px] text-[#A6A29C] font-semibold tracking-wider uppercase">PILIHAN PERTANYAAN CEPAT:</p>
              {PRESETS.map((preset, idx) => (
                <a
                  key={idx}
                  href={getCustomWhatsAppLink(preset.text)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block p-2.5 bg-white hover:bg-gold-50 border border-gold-300 rounded-sm text-[11px] text-[#2C2A29] hover:text-gold-900 font-semibold transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="pr-2">{preset.text}</span>
                  <span className="text-[8px] bg-gold-200 px-1.5 py-0.5 rounded-full font-bold uppercase text-gold-800 scale-90 group-hover:bg-gold-900 group-hover:text-gold-100 transition-colors">
                    {preset.tag}
                  </span>
                </a>
              ))}
            </div>

          </div>

          {/* General direct chat fallback footer */}
          <div className="p-3 bg-white border-t border-gold-300">
            <a
              href="https://wa.me/60194411934?text=Salam%20Admin%20RR%20Homestay.%20Saya%20ingin%20berkomunikasi%25"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-[#128C7E] hover:bg-[#075e54] text-white font-sans font-bold text-center text-[11px] uppercase tracking-wider rounded-md transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white animate-pulse" />
              <span>Sembang Manual Di WhatsApp</span>
            </a>
          </div>

        </div>
      )}

      {/* 2. Micro Notification Alert bubble above the button */}
      {showNotification && !isOpen && (
        <div className="bg-gold-900 border border-gold-400 text-gold-100 rounded-sm p-3 shadow-xl max-w-[240px] text-xs text-left leading-normal animate-bounce flex items-start gap-2.5 relative">
          <button
            onClick={(e) => { e.stopPropagation(); setShowNotification(false); }}
            className="absolute top-1 right-1 text-gold-300 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
          
          <Bell className="w-4.5 h-4.5 text-gold-300 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-display font-semibold leading-tight">Admin Perunding Sedia!</p>
            <p className="text-[10px] text-gold-200/90 font-light mt-0.5">Semak tarikh perkahwinan pilihan anda.</p>
          </div>
        </div>
      )}

      {/* 3. Main Circular Floating Action Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-2xl outline-none border-2 border-white hover:scale-110 active:scale-95 transition-transform duration-300 group cursor-pointer"
        title="Buka Chat WhatsApp"
      >
        <span className="sr-only">Runding Tempahan</span>
        
        {/* Soft floating background pulse decoration */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 -z-10 animate-ping group-hover:animate-none" />
        
        <MessageSquarePlus className="w-6 h-6 transition-transform group-hover:rotate-6" />
      </button>

    </div>
  );
}
