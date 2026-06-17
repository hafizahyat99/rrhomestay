import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Shield, Heart } from 'lucide-react';

export default function Closing() {
  const triggerScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="closing" className="relative bg-[#0c0a09] text-[#F5F2ED] font-sans">
      
      {/* 1. SCARCITY & CLOSING BANNER SCREEN */}
      <div 
        className="relative py-24 md:py-32 overflow-hidden border-b border-[#C5A059]/20"
        style={{
          backgroundImage: "linear-gradient(rgba(12, 10, 9, 0.92), rgba(12, 10, 9, 0.97)), url('https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&q=80&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center z-10 space-y-8 flex flex-col items-center">
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/80 border border-red-500/20 rounded-sm text-red-300 font-sans text-[10px] uppercase font-bold tracking-widest animate-pulse">
            Slot Hujung Minggu &amp; Cuti Sekolah Terhad!
          </span>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Tempah Tarikh Majlis Anda <br />
            <span className="text-[#C5A059] italic font-normal">
              Sebelum Terlambat
            </span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-stone-300 leading-relaxed max-w-2xl font-light">
            Tarikh cuti sekolah, hujung minggu panjang, dan musim cuti perayaan mempunyai permintaan yang amat tinggi di Pokok Sena, Kedah. Elakkan kekecewaan—hubungi kami sekarang!
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/60194411934?text=Salam%20Admin%20RR%20Homestay.%20Saya%20terbaca%20scarcity%20slot%20di%20laman%20web%20anda.%20Boleh%20saya%20sembang%20mengenai%20kekosongan%20tarikh%2520pilihan%2520saya?"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-[#C5A059] hover:bg-[#b08b47] text-white font-sans font-bold text-xs text-center tracking-widest uppercase rounded-sm shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white animate-bounce" />
              <span>Semak Kekosongan Tarikh Sekarang</span>
            </a>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-[#8E8B85] font-sans font-bold">
            Sembang Pantas • Percuma Sebutharga PDF • Khidmat Mesra
          </p>

        </div>
      </div>

      {/* 2. CONTACT HUB, TRAVEL INSIGHTS, MAP INTEGRATION */}
      <div className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Info Side Column */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div>
              <span className="text-[10px] tracking-widest font-sans font-bold text-[#C5A059] uppercase block mb-2">RR LOKASI HUB</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-white">RR Homestay &amp; Eventspace Kedah</h3>
              <div className="w-12 h-[1px] bg-[#C5A059] mt-4" />
            </div>

            {/* Micro Details Grid */}
            <div className="space-y-6 text-xs md:text-sm text-stone-300 font-light">
              
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif font-bold text-white text-sm">Alamat Rasmi:</p>
                  <p className="mt-1 leading-relaxed">
                    <strong>RR HOMESTAY &amp; EVENTSPACE</strong><br />
                    Kampung Tualang<br />
                    06400 Pokok Sena, Kedah Darul Aman, Malaysia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif font-bold text-white text-sm">Hubungan Jualan / Tempahan:</p>
                  <p className="mt-1 flex flex-col">
                    <a href="tel:+60194411934" className="hover:text-[#C5A059] font-mono transition-colors">+60 19-441 1934  (Admin &amp; Tempahan)</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif font-bold text-white text-sm">Waktu Pengoperasian Pejabat / Site Visit:</p>
                  <p className="mt-1">
                    Isnin - Ahad: 9:00 Pagi - 7:00 Malam <br />
                    <span className="text-[#C5A059] text-[11px] italic font-normal">*Melawat tapak dinasihatkan membuat temujanji slot via whatsapp terdahulu.</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif font-bold text-white text-sm">E-mel Pertanyaan:</p>
                  <p className="mt-1 font-mono hover:text-[#C5A059] transition-colors">
                    <a href="mailto:hi@rrhomestay.com">hi@rrhomestay.com</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Social handles */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#8E8B85] mb-4">Ikuti Perkembangan Di Media Sosial:</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100067088268790"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-sm border border-[#C5A059]/30 flex items-center justify-center text-stone-300 hover:bg-[#C5A059] hover:text-white transition-all duration-300"
                  title="Facebook RR Kedah"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/hafiz_ahyat"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-sm border border-[#C5A059]/30 flex items-center justify-center text-stone-300 hover:bg-[#C5A059] hover:text-white transition-all duration-300"
                  title="Instagram RR Kedah"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Google Map embed section */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-sm overflow-hidden border border-[#C5A059]/30 shadow-2xl relative h-[380px] bg-zinc-800">
         {/* Google Maps iFrame */}

              <iframe
                title="Situs Lokasi RR Homestay Pokok Sena Kedah"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3400504780516!2d100.47120839999999!3d6.113912999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b4f503631b491%3A0x1f0c55cf68a2a299!2sRR%20Homestay%20%26%20Eventspace%20Tualang%20D&#39;%20Pokok%20Sena!5e0!3m2!1sms!2smy!4v1718645000000!5m2!1sms!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             />
            </div>

            {/* Travel instruction text card */}
            <div className="mt-4 p-5 rounded-sm bg-[#1a1a1a]/40 border border-[#C5A059]/20 text-xs leading-relaxed text-stone-300 font-light text-left font-sans">
              📍 <strong className="text-white font-semibold">Petunjuk Arah Tambahan:</strong> Kedudukan kami amat strategik di tepi jalan utama Pendang Ke Pokok Sena - Kuala Nerang. Mempunyai mercu tanda berdekatan Pejabat Penghulu Kampung Tualang &amp; Masjid Al- Anwar Kampung Tualang, memudahkan tetamu luar negeri mencari lokasi dengan perisian Waze &amp; Google Maps secara tepat.
            </div>
          </div>

        </div>
      </div>

      {/* 3. STRICT CORPORATE FOOTER SECTION */}
      <div className="py-12 bg-[#080706] border-t border-white/5 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Brand alignment and sitemaps */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div 
              onClick={triggerScrollToTop}
              className="w-12 h-12 rounded-sm border border-[#C5A059]/40 bg-[#1A1A1A] font-serif font-light text-[#C5A059] text-base flex items-center justify-center cursor-pointer hover:bg-[#C5A059] hover:text-white transition-colors"
            >
              RR
            </div>
            <div>
              <p className="font-serif font-light tracking-wider text-white text-sm">RR HOMESTAY &amp; EVENTSPACE</p>
              <p className="text-[10px] text-stone-500 font-sans mt-0.5 tracking-wider uppercase">&copy; 2026 RR Kedah Hospitality Group. Hak Cipta Terpelihara.</p>
            </div>
          </div>

          {/* Right sitemaps links */}
          <div className="flex items-center gap-6 text-[#A3A3A3] text-xs">
            <button onClick={triggerScrollToTop} className="hover:text-white transition-colors cursor-pointer">Kembali ke Atas</button>
            <span>&bull;</span>
            <a href="https://wa.me/60194411934" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Dasar Privasi</a>
            <span>&bull;</span>
            
            {/* Local business compliance seal */}
            <div className="bg-zinc-950 border border-[#C5A059]/10 px-2 py-1 rounded-sm text-[8px] text-[#C5A059] font-bold uppercase tracking-widest flex items-center gap-1">
              <Shield className="w-2.5 h-2.5 text-[#C5A059]" />
              <span>Sijil SSL Selamat</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
