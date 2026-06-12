import { useState, useEffect } from 'react';
import { EVENT_PACKAGES, ACCOMMODATIONS, EventPackage } from '../data';
import { Check, Heart, Calendar, Users, Calculator, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function EventSpace() {
  // Calculator States
  const [selectedPackageId, setSelectedPackageId] = useState<string>('wedding_gold');
  const [guestCount, setGuestCount] = useState<number>(500);
  const [stayNights, setStayNights] = useState<number>(1);
  
  // Accommodation selections
  const [includeStudio, setIncludeStudio] = useState<boolean>(true);
  const [includeSuperior, setIncludeSuperior] = useState<boolean>(false);
  const [includeFamily, setIncludeFamily] = useState<boolean>(true);

  // Calculation Results
  const [packageBase, setPackageBase] = useState<number>(25000);
  const [extraCateringCost, setExtraCateringCost] = useState<number>(0);
  const [accommodationCost, setAccommodationCost] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(25000);

  // Synchronize pricing factors based on selected package ID
  useEffect(() => {
    let base = 25000;
    let threshold = 500;
    let ratePerHead = 15;

    if (selectedPackageId === 'wedding_gold') {
      base = 25000;
      threshold = 500;
      ratePerHead = 15;
      if (guestCount < 100) setGuestCount(500); // reset minimum to a sensible size for weddings
    } else if (selectedPackageId === 'nikah_sweet') {
      base = 5500;
      threshold = 100;
      ratePerHead = 18;
    } else if (selectedPackageId === 'seminar_corp') {
      base = 1500;
      threshold = 30;
      ratePerHead = 45;
    } else {
      base = 0;
      threshold = 0;
      ratePerHead = 0;
    }

    setPackageBase(base);

    // Calculate extra guests
    if (guestCount > threshold && threshold > 0) {
      setExtraCateringCost((guestCount - threshold) * ratePerHead);
    } else {
      setExtraCateringCost(0);
    }
  }, [selectedPackageId, guestCount]);

  // Calculate accommodation costs based on stays & selection
  useEffect(() => {
    let nightRate = 0;
    if (includeStudio) nightRate += 150;
    if (includeSuperior) nightRate += 200;
    if (includeFamily) nightRate += 350;

    let totalAccom = nightRate * stayNights;

    // Apply special package discounts (e.g. Platinum includes family, Nikah includes studio)
    if (selectedPackageId === 'wedding_gold' && includeFamily && stayNights >= 1) {
      // Free 1 night of family homestay (worth 350)
      totalAccom = Math.max(0, totalAccom - 350);
    } else if (selectedPackageId === 'nikah_sweet' && includeStudio && stayNights >= 1) {
      // Free 1 night of studio suite (worth 150)
      totalAccom = Math.max(0, totalAccom - 150);
    }

    setAccommodationCost(totalAccom);
  }, [includeStudio, includeSuperior, includeFamily, stayNights, selectedPackageId]);

  // Combined Total
  useEffect(() => {
    setTotalCost(packageBase + extraCateringCost + accommodationCost);
  }, [packageBase, extraCateringCost, accommodationCost]);

  const getWhatsAppProposal = () => {
    const selectedPkg = EVENT_PACKAGES.find(p => p.id === selectedPackageId);
    const packageName = selectedPkg ? selectedPkg.name : "Sewa Kosong Tapak";
    
    const accomsMatched = [];
    if (includeStudio) accomsMatched.push("Studio Luxe Suite");
    if (includeSuperior) accomsMatched.push("Superior Twin Suite");
    if (includeFamily) accomsMatched.push("Homestay Keluarga (3 Bilik)");
    const accomsString = accomsMatched.length > 0 ? accomsMatched.join(", ") : "Tiada Tempahan Penginapan";

    const text = `Salam Pengurus Majlis RR. Saya telah menyusun kalkulator anggaran bajet di website premium anda:

📋 *MAKLUMAT MAJLIS:*
• Pakej Banner: *${packageName}*
• Bilangan Jemputan: *${guestCount} Tetamu*
• Tempoh Penginapan: *${stayNights} Malam*
• Penginapan Pilihan: *${accomsString}*

💰 *ANGGARAN BAJET SISTEM:*
• Pakej Asas Sewa + Katering: RM ${packageBase.toLocaleString()}
• Caj Lebih Guest (Katering): RM ${extraCateringCost.toLocaleString()}
• Kos Homestay & Bilik Suite: RM ${accommodationCost.toLocaleString()}
• *ANGGARAN KESELURUHANNYA:* *RM ${totalCost.toLocaleString()}*

Bolehkah saya membuat temu janji untuk melawat dewan (site visit) di Pokok Sena, Kedah pada hujung minggu dan bincang pengubahsuaian menu katering?`;

    return `https://wa.me/60194411934?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="events" className="py-24 md:py-32 bg-[#F5F2ED] relative">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="mb-4 inline-flex items-center gap-2 text-[#C5A059] justify-center">
            <span className="h-[1px] w-6 bg-[#C5A059]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold">Destinasi Impian Perkahwinan</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1A1A1A] tracking-tight leading-tight mb-6">
            Majlis Impian Anda <span className="italic text-[#C5A059]">Bermula Di Sini</span>
          </h2>
          <div className="w-16 h-[1px] mx-auto bg-[#C5A059] mb-6" />
          <p className="font-sans text-xs md:text-sm text-[#4A4A4A] leading-relaxed font-light max-w-2xl mx-auto">
            Sesuai untuk melangsungkan pelbagai acara gilang-gemilang. Kami menawarkan pakej hiasan dewan kahwin lengkap bertema, sistem audio visual moden, dan katering masakan asli Kedah yang lazat untuk menjamu semua kenalan rapat anda.
          </p>
        </div>

        {/* Dynamic Package Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 mb-28">
          {EVENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-gold-200/40 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:border-gold-300"
            >
              <div>
                {/* Package Head Photo */}
                <div className="relative h-56 overflow-hidden bg-zinc-100">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 block" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-sans text-[10px] tracking-widest text-gold-200 uppercase font-bold leading-none mb-1">{pkg.subtitle}</p>
                    <h3 className="font-serif text-xl font-bold text-white tracking-wide">{pkg.name}</h3>
                  </div>
                </div>

                {/* Package Key Specs */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between py-2 border-b border-gold-100 mb-6 bg-gold-50/50 px-3 rounded-sm">
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-sans font-medium">Kapasiti Ideal:</span>
                    <span className="text-xs text-gold-900 font-display font-extrabold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {pkg.capacity}
                    </span>
                  </div>

                  {/* Feature Lists */}
                  <div className="space-y-3.5">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-xs text-zinc-600 leading-relaxed font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking & Price Tag footer */}
              <div className="p-6 md:p-8 bg-[#FAF8F5] border-t border-[#C5A059]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-widest leading-none">Harga Anggaran</span>
                  <span className="font-serif font-bold text-[#1A1A1A] text-base md:text-lg">{pkg.priceEstimate}</span>
                </div>
                
                <a
                  href={`https://wa.me/60194411934?text=Salam%20Admin%20RR.%20Saya%20tertarik%20dengan%20Pakej%20Perkahwinan%20*${pkg.name}*.%20Boleh%20kami%20bincang%20untuk%20majlis%20kami?`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-sans font-bold text-xs text-center tracking-widest uppercase rounded-sm transition-all duration-300 block hover:shadow-md"
                >
                  Rujuk Pakej Di WhatsApp
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* INTERACTIVE BUDGET PLANNER WIDGET */}
        <div id="planner" className="bg-[#FAF8F5] rounded-sm border border-[#C5A059] overflow-hidden shadow-2xl relative">
          
          {/* Subtle watermark background */}
          <div className="absolute top-0 right-0 p-8 text-[#C5A059] opacity-10 pointer-events-none hidden md:block">
            <Calculator className="w-40 h-40 stroke-[0.5]" />
          </div>

          {/* Form Header */}
          <div className="p-8 md:p-12 bg-[#1A1A1A] text-white border-b border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 bg-[#C5A059]/15 hover:bg-[#C5A059]/20 text-[#C5A059] text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm border border-[#C5A059]/30 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
                <span>Teknologi Anggaran Pintar</span>
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-light tracking-tight">Kalkulator Perancang &amp; Anggaran Bajet RR</h3>
              <p className="font-sans text-stone-300 text-xs font-light mt-2 max-w-xl">
                Sesuaikan kombinasi pakej acara perkahwinan, bilangan hari penginapan keluarga, serta jumlah tetamu mengikut belanjawan realistik anda.
              </p>
            </div>
            
            <div className="flex-shrink-0 bg-white/5 backdrop-blur-md p-4 rounded-sm border border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-[#C5A059] uppercase tracking-widest font-bold">Anggaran Bebas</p>
                <p className="text-xs text-stone-200">Ketelusan Harga 100%</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Columns */}
            <div className="lg:col-span-7 p-8 md:p-12 space-y-8 bg-white border-r border-gold-200/40">
              
              {/* Step 1: Select Event Package */}
              <div>
                <p className="text-xs font-bold text-zinc-800 tracking-wider uppercase mb-3.5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold-900 text-gold-100 text-[10px] flex items-center justify-center font-bold">1</span>
                  <span>PILIH PAKEJ ACARA / PERKAHWINAN:</span>
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'wedding_gold', name: 'Platinum Wedding', desc: 'Resepsis 500pax' },
                    { id: 'nikah_sweet', name: 'Ikatan Suci', desc: 'Nikah Kasual 100pax' },
                    { id: 'seminar_corp', name: 'Seminar & Corporate', desc: 'Bengkel Kerja 30pax' }
                  ].map((item) => (
                    <label
                      key={item.id}
                      onClick={() => setSelectedPackageId(item.id)}
                      className={`block cursor-pointer p-4 rounded-sm border text-center transition-all duration-300 ${
                        selectedPackageId === item.id
                          ? 'border-gold-500 bg-gold-50/70 text-gold-900 ring-1 ring-gold-400 font-semibold'
                          : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="planner_package"
                        value={item.id}
                        checked={selectedPackageId === item.id}
                        onChange={() => {}}
                        className="sr-only"
                      />
                      <span className="block text-xs uppercase tracking-wide font-black leading-none mb-1">{item.name}</span>
                      <span className="block text-[10px] font-light font-sans text-zinc-500">{item.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Guest Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-zinc-800 tracking-wider uppercase flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-gold-900 text-gold-100 text-[10px] flex items-center justify-center font-bold">2</span>
                    <span>JUMLAH DINANTI-NANTI JEMPUTAN TETAMU:</span>
                  </p>
                  <span className="px-3 py-1 bg-gold-100 text-gold-900 font-display font-extrabold text-sm tracking-wide rounded-sm border border-gold-300">
                    {guestCount} Pax
                  </span>
                </div>
                
                <input
                  type="range"
                  min={selectedPackageId === 'wedding_gold' ? "400" : selectedPackageId === 'nikah_sweet' ? "50" : "15"}
                  max={selectedPackageId === 'wedding_gold' ? "1200" : selectedPackageId === 'nikah_sweet' ? "300" : "150"}
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gold-200 rounded-lg appearance-none cursor-pointer accent-gold-700"
                />

                <div className="flex items-center justify-between text-[10px] text-zinc-400 font-sans tracking-wide">
                  <span>Min: {selectedPackageId === 'wedding_gold' ? "400" : selectedPackageId === 'nikah_sweet' ? "50" : "15"} Pax</span>
                  {selectedPackageId === 'wedding_gold' && (
                    <span className="text-gold-700 font-semibold text-center italic bg-gold-100/40 p-1.5 rounded-sm">
                      *Percuma katering sehinga 500 pax pertama, seterusnya RM15/pax tambahan.
                    </span>
                  )}
                  {selectedPackageId === 'nikah_sweet' && (
                    <span className="text-gold-700 font-semibold text-center italic bg-gold-100/40 p-1.5 rounded-sm">
                      *Percuma katering sehingga 100 pax pertama, seterusnya RM18/pax tambahan.
                    </span>
                  )}
                  <span>Max: {selectedPackageId === 'wedding_gold' ? "1,200" : selectedPackageId === 'nikah_sweet' ? "300" : "150"} Pax</span>
                </div>
              </div>

              {/* Step 3: Accommodation Nights */}
              <div>
                <p className="text-xs font-bold text-zinc-800 tracking-wider uppercase mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold-900 text-gold-100 text-[10px] flex items-center justify-center font-bold">3</span>
                  <span>KEPERLUAN HOMESTAY &amp; BILIK KELUARGA (MALAM):</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Night choices */}
                  <div className="space-y-2">
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Durasi Penginapan:</p>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setStayNights(val)}
                          className={`flex-1 py-2 text-xs font-extrabold rounded-sm border ${
                            stayNights === val
                              ? 'bg-gold-900 border-gold-900 text-white'
                              : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                          }`}
                        >
                          {val} Malam
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Room selections checkbox */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Pilihan Kamar:</p>

                    <label className="flex items-center gap-2.5 text-xs text-zinc-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeStudio}
                        onChange={(e) => setIncludeStudio(e.target.checked)}
                        className="rounded border-zinc-300 text-gold-700 focus:ring-gold-500 h-4.5 w-4.5"
                      />
                      <span>Studio Luxe Suite (+RM150)</span>
                    </label>

                    <label className="flex items-center gap-2.5 text-xs text-zinc-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeSuperior}
                        onChange={(e) => setIncludeSuperior(e.target.checked)}
                        className="rounded border-zinc-300 text-gold-700 focus:ring-gold-500 h-4.5 w-4.5"
                      />
                      <span>Superior Suite (+RM200)</span>
                    </label>

                    <label className="flex items-center gap-2.5 text-xs text-zinc-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeFamily}
                        onChange={(e) => setIncludeFamily(e.target.checked)}
                        className="rounded border-zinc-300 text-gold-700 focus:ring-gold-500 h-4.5 w-4.5"
                      />
                      <span>Homestay Keluarga (+RM350)</span>
                    </label>
                  </div>

                </div>

                {/* Promotional alerts */}
                {selectedPackageId === 'wedding_gold' && includeFamily && (
                  <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-sm flex items-start gap-2 text-[10px] leading-relaxed">
                    <AlertCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Promo Rezeki! Pakej *Platinum Wedding* merangkumi 1 Malam Percuma untuk *Homestay Keluarga* (Diskaun RM350 telah dilaraskan dalam bil).</span>
                  </div>
                )}
                {selectedPackageId === 'nikah_sweet' && includeStudio && (
                  <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-sm flex items-start gap-2 text-[10px] leading-relaxed">
                    <AlertCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Promo Rezeki! Pakej *Ikatan Suci* merangkumi 1 Malam Percuma untuk *Studio Luxe Suite* (Diskaun RM150 telah dilaraskan dalam bil).</span>
                  </div>
                )}

              </div>

            </div>

            {/* Calculations Bill Layout */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-[#F5F2ED] border-t lg:border-t-0 lg:border-l border-[#C5A059]/30 flex flex-col justify-between">
              
              <div>
                <p className="text-xs font-bold text-[#1A1A1A] tracking-wider uppercase mb-6 pb-2 border-b border-[#C5A059]/30">
                  SEBUTHARGA SEBENTAR (RINGKASAN):
                </p>

                <div className="space-y-4 text-xs font-sans">
                  
                  <div className="flex items-center justify-between text-[#4A4A4A]">
                    <span>
                      Sewa &amp; Hiasan Pakej Asas:
                    </span>
                    <span className="font-mono font-bold text-[#1A1A1A]">
                      RM {packageBase.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[#4A4A4A]">
                    <span>
                      Catering Lebih ({guestCount} Pax):
                    </span>
                    <span className="font-mono font-bold text-[#1A1A1A]">
                      + RM {extraCateringCost.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[#4A4A4A]">
                    <span>
                      Penginapan Suami &amp; Tetamu ({stayNights} Malam):
                    </span>
                    <span className="font-mono font-bold text-[#1A1A1A]">
                      + RM {accommodationCost.toLocaleString()}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-[#C5A059]/30 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-500 font-bold mb-1">JUMLAH KASAR ANGGARAN</p>
                      <p className="font-sans text-[10px] text-stone-400 leading-none">Sudut rundingan boleh diubahsuai</p>
                    </div>
                    <span className="font-serif font-bold text-3xl text-[#1A1A1A] leading-none">
                      RM {totalCost.toLocaleString()}*
                    </span>
                  </div>

                </div>

                <div className="mt-8 p-4 bg-white/70 backdrop-blur-sm rounded-sm border border-[#C5A059]/20 text-[10px] text-stone-500 leading-normal font-sans italic">
                  *Nota: Nilai di atas adalah anggaran perbandingan kasar secara atas talian berasaskan konfigurasi umum dewan. Klik butang di bawah untuk menghantar sebut-harga ini ke WhatsApp rasmi krew RR Kedah bagi kraf sebutharga rasmi (PDF formal).
                </div>
              </div>

              {/* CTA Action Booking Whatsapp Link */}
              <div className="mt-8">
                <a
                  href={getWhatsAppProposal()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-sans font-bold text-xs text-center tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Hantar Sebut Harga via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
