import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BrandsSection() {
  const row1Brands = [
    {
      name: 'SAMSUNG',
      render: () => (
        <span className="text-[#0c2340] font-black tracking-[0.18em] text-lg sm:text-xl font-sans">
          SAMSUNG
        </span>
      ),
    },
    {
      name: 'LG',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#a50034] flex items-center justify-center text-white font-bold text-xs">
            L
          </div>
          <span className="text-[#555] font-bold text-lg tracking-wider">LG</span>
        </div>
      ),
    },
    {
      name: 'Whirlpool',
      render: () => (
        <div className="flex items-center">
          <span className="text-[#00558c] font-bold text-xl italic font-serif tracking-tight">
            Whirlpool
          </span>
          <span className="w-2 h-2 rounded-full bg-[#f1a80a] ml-1 mb-2" />
        </div>
      ),
    },
    {
      name: 'BOSCH',
      render: () => (
        <div className="flex items-center gap-1.5">
          <span className="text-gray-950 font-black text-xl tracking-tight font-sans">
            BOSCH
          </span>
          <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-[#D31820]" />
        </div>
      ),
    },
    {
      name: 'Miele',
      render: () => (
        <div className="bg-[#a6192e] text-white px-3.5 py-1 rounded font-serif font-bold text-base sm:text-lg italic tracking-wider">
          Miele
        </div>
      ),
    },
  ];

  const row2Brands = [
    {
      name: 'GE Appliances',
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border-2 border-[#00558c] text-[#00558c] flex items-center justify-center font-serif italic text-xs font-bold">
            g
          </div>
          <span className="text-gray-900 font-bold text-base tracking-tight">
            GE Appliances
          </span>
        </div>
      ),
    },
    {
      name: 'MAYTAG',
      render: () => (
        <span className="text-[#002f6c] font-black text-lg sm:text-xl tracking-wider font-sans">
          MAYTAG
        </span>
      ),
    },
    {
      name: 'FRIGIDAIRE',
      render: () => (
        <span className="text-gray-900 font-black text-base sm:text-lg tracking-[0.14em] font-serif uppercase">
          FRIGIDAIRE
        </span>
      ),
    },
    {
      name: 'KitchenAid',
      render: () => (
        <span className="text-[#D31820] font-black text-lg sm:text-xl tracking-tight font-sans">
          KitchenAid
        </span>
      ),
    },
    {
      name: 'ELECTROLUX',
      render: () => (
        <span className="text-[#011e41] font-bold text-sm sm:text-base tracking-[0.22em] uppercase font-sans">
          ELECTROLUX
        </span>
      ),
    },
  ];

  // Repeat brands to ensure smooth infinite marquee looping
  const loopRow1 = [...row1Brands, ...row1Brands, ...row1Brands, ...row1Brands];
  const loopRow2 = [...row2Brands, ...row2Brands, ...row2Brands, ...row2Brands];

  return (
    <section id="brands" className="relative w-full bg-white py-20 lg:py-28 overflow-hidden select-none">
      
      {/* Background Soft Pink Glows */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[rgba(211,24,32,0.06)] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-[rgba(211,24,32,0.06)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 lg:mb-16">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <span className="text-[#D31820] text-xs font-bold">⭐</span>
            <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-[#D31820]">
              BRANDS WE SERVICE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-gray-950 tracking-tight">
            We Repair the Brands You Trust
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm sm:text-[15px] font-normal max-w-xl mx-auto leading-relaxed pt-1">
            Our technicians work with a wide range of leading appliance brands, helping you get the right repair without the hassle.
          </p>
        </div>

      </div>

      {/* Marquee Container with Left and Right Gradient Fades */}
      <div className="relative w-full overflow-hidden marquee-track py-2 space-y-5">
        
        {/* Left and Right Fading Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="flex w-max animate-scroll-left gap-5 sm:gap-6 pl-4">
          {loopRow1.map((brand, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-56 sm:w-64 h-24 sm:h-28 rounded-[22px] sm:rounded-[26px] bg-white border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex items-center justify-center px-6 hover:shadow-[0_12px_35px_rgba(211,24,32,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0"
            >
              {brand.render()}
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right (Opposite Direction) */}
        <div className="flex w-max animate-scroll-right gap-5 sm:gap-6 pl-4">
          {loopRow2.map((brand, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-56 sm:w-64 h-24 sm:h-28 rounded-[22px] sm:rounded-[26px] bg-white border border-gray-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex items-center justify-center px-6 hover:shadow-[0_12px_35px_rgba(211,24,32,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0"
            >
              {brand.render()}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom CTA Link */}
      <div className="text-center pt-10 relative z-10">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-bold text-sm text-[#D31820] hover:text-[#b5141b] transition-colors group"
        >
          <span>See All Brands</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </section>
  );
}
