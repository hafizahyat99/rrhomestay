import { MapPin, Coins, Award, Bed } from 'lucide-react';

const FEATURE_CARDS = [
  {
    icon: Award,
    title: "Semua Dalam Satu Lokasi",
    description: "Nikmati kemudahan homestay, tempat perhimpunan acara, dewan makan, dan katering berkualiti tinggi yang terletak bersebelahan dalam satu kawasan tapak seluas 1.5 ekar tanpa perlu berpindah tempat."
  },
  {
    icon: Coins,
    title: "Jimat Masa & Kos Tinggi",
    description: "Tiada caj sewa tempat tersembunyi yang mahal. Kami menyusun pakej hiasan, katering bertaraf resort, dan penginapan berbilang bilik dalam satu harga borong jimat yang mudah diurus."
  },
  {
    icon: MapPin,
    title: "Ruang Majlis Eksklusif",
    description: "Sesuai untuk segenap jenis keraian—resepis perkahwinan adat, upacara nikah damai, sambutan aqiqah syahdu, makan malam korporat tahunan, atau mesyuarat pengurusan tertutup."
  },
  {
    icon: Bed,
    title: "Penginapan Selesa & Mewah",
    description: "Dilengkapi bilik-bilik hotel studio dan homestay banglo berhawa dingin sepenuhnya bagi memastikan tetamu jauh, warga emas, atau pengantin dapat berteduh dan berehat dengan tenang."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#F5F2ED] relative overflow-hidden">
      
      {/* Decorative Delicate Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading Pairings */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="mb-4 inline-flex items-center gap-2 text-[#C5A059] justify-center">
            <span className="h-[1px] w-6 bg-[#C5A059]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold">Pengalaman Yang Eksklusif</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1A1A1A] tracking-tight leading-tight mb-6">
            Kenapa RR Adalah Keputusan Terbaik <br />
            <span className="italic text-[#C5A059]">Untuk Detik Bersejarah Anda?</span>
          </h2>
          <div className="w-16 h-[1px] mx-auto bg-[#C5A059] mb-6" />
          <p className="font-sans text-xs md:text-sm text-[#4A4A4A] leading-relaxed font-light max-w-2xl mx-auto">
            Kami menggabungkan seni bina timur moden dengan kemudahan terkini untuk memberikan ketenangan fikiran mutlak kepada bakal penganjur majlis dan pengantin.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {FEATURE_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FCFAF6] hover:bg-white p-8 md:p-10 rounded-sm border border-gold-200/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-800/5 flex flex-col justify-between"
              >
                
                {/* Visual Top Decorative Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-r-[10px] border-t-transparent border-r-transparent group-hover:border-t-gold-400 group-hover:border-r-gold-400 transition-all duration-500" />

                <div>
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 mb-8 transition-colors duration-500 group-hover:bg-gold-900 group-hover:text-gold-200">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg md:text-xl text-[#2C2A29] mb-4 group-hover:text-gold-800 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#6E6B65] leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                {/* Micro CTA Signpost */}
                <div className="w-8 h-0.5 bg-gold-200 group-hover:w-full transition-all duration-500 mt-8" />

              </div>
            );
          })}
        </div>

        {/* Statement Bar */}
        <div className="mt-20 p-8 md:p-12 bg-[#FAF8F5] border border-[#C5A059]/30 rounded-sm text-center max-w-4xl mx-auto gold-glow">
          <p className="font-serif italic text-base md:text-lg text-[#1A1A1A]">
            &ldquo;Penjimatan sehingga 30% kos logistik dan pengangkutan dengan menghimpunkan semua keluarga rapat pengantin di lokasi majlis yang sama.&rdquo;
          </p>
          <p className="font-sans text-[10px] tracking-widest font-semibold text-[#C5A059] mt-4 uppercase">
            — Bahagian Kajian &amp; Penilaian Pelanggan RR Kedah
          </p>
        </div>

      </div>
    </section>
  );
}
