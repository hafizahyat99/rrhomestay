import { useState } from 'react';
import { FAQS, FAQItem } from '../data';
import { ChevronDown, ChevronUp, HelpCircle, Search, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'faq_all_in_one': true // Keep the most important value open by default
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter and Search logic
  const filteredFaqs = FAQS.filter((faq) => {
    const categoryMatches = activeCategory === 'all' || faq.category === activeCategory;
    const searchMatches = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatches && searchMatches;
  });

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Head Block headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="mb-4 inline-flex items-center gap-2 text-[#C5A059] justify-center">
            <span className="h-[1px] w-6 bg-[#C5A059]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold">Soalan Lazim</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1A1A1A] tracking-tight mb-6">
            Rundingan Jawapan <span className="italic text-[#C5A059]">Pantas (FAQ)</span>
          </h2>
          <div className="w-16 h-[1px] mx-auto bg-[#C5A059] mb-6" />
          <p className="font-sans text-xs md:text-sm text-[#4A4A4A] leading-relaxed font-light">
            Butiran lanjut mengenai kapasiti tempat, pengurusan katering perkahwinan, serta peraturan penginapan di RR Pokok Sena.
          </p>
        </div>

        {/* Dynamic Search & Categorical Controls Row */}
        <div className="space-y-6 mb-16">
          
          {/* Reactive Keyword Search */}
          <div className="relative max-w-lg mx-auto bg-[#F5F2ED] border border-[#C5A059]/35 rounded-sm overflow-hidden flex items-center px-4 py-2.5">
            <Search className="w-5 h-5 text-[#C5A059] mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Cari soalan anda di sini... (cth: kapasiti, katering, melawat)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-[#1A1A1A] placeholder-stone-500 text-xs md:text-sm font-sans focus:outline-none"
            />
          </div>

          {/* Categorical tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-xl mx-auto">
            {[
              { id: 'all', label: 'Semua Soalan' },
              { id: 'general', label: 'Umum' },
              { id: 'event', label: 'Pakej Kahwin' },
              { id: 'booking', label: 'Tempahan' },
              { id: 'homestay', label: 'Homestay' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-[11px] font-sans font-bold tracking-widest uppercase rounded-sm border transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold'
                    : 'bg-transparent border-[#C5A059]/30 text-[#4A4A4A] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = !!openFaqIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`bg-[#FAF8F5] border rounded-sm transition-all duration-300 ${
                    isOpen ? 'border-[#C5A059] bg-[#F5F2ED]/60 shadow-sm' : 'border-[#C5A059]/15'
                  }`}
                >
                  
                  {/* Clickable Header Accordion Trigger */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer select-none group"
                  >
                    <div className="flex gap-3">
                      <HelpCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5 group-hover:text-[#1A1A1A] transition-colors" />
                      <h4 className="font-serif font-bold text-sm md:text-base text-[#1A1A1A] leading-snug group-hover:text-[#C5A059] transition-colors">
                        {faq.question}
                      </h4>
                    </div>
                    
                    <div className="w-6 h-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0 text-[#C5A059] transition-all duration-300">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`overflow-hidden transition-all duration-[400ms] ${
                      isOpen ? 'max-h-[300px] border-t border-[#C5A059]/15' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 md:p-8 bg-white text-xs md:text-sm text-stone-600 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </div>

                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#F5F2ED] border border-[#C5A059]/20 rounded-sm">
              <span className="text-3xl block mb-2">🔎</span>
              <p className="font-sans text-sm text-[#4A4A4A] font-medium">Tiada soalan ditemui padan dengan carian: &ldquo;{searchQuery}&rdquo;</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-xs hover:text-[#1A1A1A] text-[#C5A059] underline font-semibold mt-2"
              >
                Set Semula Carian
              </button>
            </div>
          )}
        </div>

        {/* Closing Quick Help Quote */}
        <div className="mt-16 text-center">
          <div className="p-6 inline-flex flex-col sm:flex-row items-center gap-4 bg-[#F5F2ED] border border-[#C5A059]/30 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#C5A059] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="font-sans text-xs text-[#1A1A1A] font-bold leading-tight">Tidak jumpa soalan anda?</p>
              <p className="font-sans text-[11px] text-[#8E8B85] font-light mt-0.5">Sembang terus dengan pengurus majlis kami melalui WhatsApp untuk jawapan anda.</p>
            </div>
            <a
              href="https://wa.me/60194411934?text=Salam%20Admin%20RR%20Homestay.%20Saya%20baca%20FAQ%20di%20website%20pakej.%20Boleh%20saya%20bertanya%20mengenai..."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-[#1A1A1A] hover:bg-[#C5A059] rounded-sm font-sans font-bold text-[10px] tracking-widest uppercase text-white shadow-md transition-colors duration-300"
            >
              Sembang Whatsapp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
