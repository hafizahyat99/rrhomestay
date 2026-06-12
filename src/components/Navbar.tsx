import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Heart } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      <nav
        id="luxury-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F2ED]/95 backdrop-blur-md shadow-sm border-b border-[#C5A059]/20 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="cursor-pointer group flex items-center gap-3"
          >
            <div className="w-10 h-10 border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif text-xl italic bg-transparent transition-all duration-500 group-hover:bg-[#1A1A1A] group-hover:text-white">
              <span>RR</span>
            </div>
            <div>
              <span className={`block font-serif font-bold text-lg tracking-wider transition-colors duration-300 ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
                RR HOMESTAY
              </span>
              <span className={`block text-[10px] tracking-[0.25em] -mt-1 font-sans font-medium transition-colors duration-300 ${isScrolled ? 'text-[#C5A059]' : 'text-gold-300'}`}>
                &amp; EVENTSPACE
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Utama', id: 'hero' },
              { label: 'Keistimewaan', id: 'features' },
              { label: 'Penginapan', id: 'rooms' },
              { label: 'Tapak Acara', id: 'events' },
              { label: 'Galeri', id: 'gallery' },
              { label: 'FAQ', id: 'faq' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans font-semibold text-xs uppercase tracking-widest hover:text-[#C5A059] transition-colors duration-300 relative py-1 group ${
                  isScrolled ? 'text-[#1A1A1A]' : 'text-white/95'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+60194411934"
              className={`flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-gold-700 hover:text-[#1A1A1A]' : 'text-white/95 hover:text-gold-300'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span> Hubungi Kami</span>
            </a>
            
            <button
              onClick={() => scrollToSection('events')}
              className="px-6 py-3 bg-[#1A1A1A] text-white hover:bg-[#C5A059] font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-sm"
            >
              Teroka Pakej
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="https://wa.me/60194411934?text=Salam%20Admin%20RR%20Homestay.%20Saya%20ingin%20bertanya%20mengenai%20kekosongan%20tarikh%20homestay/eventspace."
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled ? 'bg-gold-100 text-gold-900' : 'bg-white/10 text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-sm transition-colors duration-300 ${
                isScrolled ? 'text-gold-900 hover:bg-gold-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0c0a09]/80 backdrop-blur-md z-40 transition-opacity duration-300 lg:hidden">
          <div className="fixed top-20 left-4 right-4 bg-[#F5F2ED] rounded-sm p-6 shadow-2xl border border-[#C5A059]/30 flex flex-col gap-6 animate-luxury-fade-in">
            <div className="flex flex-col gap-4">
              {[
                { label: 'Utama', id: 'hero' },
                { label: 'Keistimewaan', id: 'features' },
                { label: 'Penginapan & Bilik', id: 'rooms' },
                { label: 'Pakej Perkahwinan & Acara', id: 'events' },
                { label: 'Galeri Kenyamanan', id: 'gallery' },
                { label: 'Soalan Lazim (FAQ)', id: 'faq' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left font-serif font-bold text-lg text-[#1A1A1A] hover:text-[#C5A059] transition-colors py-1.5 border-b border-[#C5A059]/10"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://wa.me/60194411934?text=Salam%20Admin%20RR%20Homestay.%20Saya%20ingin%20tanya%20kekosongan%20eventspace%20dan%20hotel%20bilik."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#128C7E] text-white font-sans font-bold text-center rounded-md hover:bg-[#075e54] transition-colors flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white animate-pulse" />
                <span>Runding via WhatsApp</span>
              </a>

              <a
                href="tel:+60194411934"
                className="w-full py-3 border border-gold-400 text-gold-800 font-sans font-semibold text-center rounded-md hover:bg-gold-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Panggilan Telefon</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
