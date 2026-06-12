/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Rooms from './components/Rooms';
import EventSpace from './components/EventSpace';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Closing from './components/Closing';
import StickyWhatsApp from './components/StickyWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F5F2ED] text-[#1A1A1A] antialiased selection:bg-gold-200 selection:text-gold-950 font-sans">
      
      {/* 1. Backdrop Fixed Blur Layer */}
      <div className="fixed inset-0 bg-[#F5F2ED] -z-20" />

      {/* Decorative Editorial Right Label */}
      <div className="fixed right-2 top-1/2 -translate-y-1/2 flex-col items-center gap-12 pointer-events-none hidden xl:flex z-30">
        <div className="h-24 w-[1px] bg-[#1A1A1A] opacity-20"></div>
        <p className="rotate-90 text-[8px] tracking-[0.5em] uppercase font-bold whitespace-nowrap opacity-35 text-[#1A1A1A]">
          ESTABLISHED 2024 • KEDAH DARUL AMAN
        </p>
        <div className="h-24 w-[1px] bg-[#1A1A1A] opacity-20"></div>
      </div>

      {/* 2. Structured Sections Row */}
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Rooms />
        <EventSpace />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>

      <Closing />
      
      {/* 3. Conversion Rate floating agent */}
      <StickyWhatsApp />

    </div>
  );
}
