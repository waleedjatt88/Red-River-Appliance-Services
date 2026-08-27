import React from 'react';
import fixMachine from '../assets/fix machine.png';
import fixCircut from '../assets/fix circut.png';
import { Tag, ShieldCheck, Phone, ArrowRight, ExternalLink } from 'lucide-react';

export default function AboutServices() {
  return (
    <section 
      className="relative w-full py-16 lg:py-28 overflow-hidden select-none"
      style={{
        background: 'linear-gradient(135deg, rgba(211, 24, 32, 0.10) 0%, #FFFFFF 45%, rgba(211, 24, 32, 0.20) 100%)'
      }}
    >
      {/* Ambient background soft light circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[rgba(211,24,32,0.08)] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[rgba(211,24,32,0.15)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content & Benefits */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 max-w-xl">
            
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <span className="text-[#e51e25] text-xs font-bold">✦</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-gray-500">
                FAST. RELIABLE. PROFESSIONAL.
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-black text-gray-950 leading-[1.14] tracking-tight">
              Your One-Stop <br />
              <span className="text-[#e51e25]">Appliance</span> Services
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
              With a decade of dedicated experience, Red River Appliance Service delivers reliable and professional repairs for commercial and residential appliances. Our seasoned technicians specialize in fixing appliances from any brand and offer a three-month warranty on all repairs.
            </p>

            {/* Feature 1: Our Affordable Price */}
            <div className="flex items-start gap-4 pt-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e51e25] flex items-center justify-center text-white shrink-0 shadow-md shadow-red-500/25 mt-0.5">
                <Tag className="w-5 h-5 fill-white" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-gray-900">
                  Our Affordable Price
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Transparent up-front pricing quote with absolutely no hidden fees or surprise diagnostics costs.
                </p>
              </div>
            </div>

            {/* Feature 2: Trusted Repair Service */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e51e25] flex items-center justify-center text-white shrink-0 shadow-md shadow-red-500/25 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-gray-900">
                  Trusted Repair Service
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Backed by fully licensed and insured technicians carrying genuine factory-authorized parts.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              <button 
                type="button"
                className="inline-flex items-center justify-center gap-2.5 bg-[#e51e25] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-red-500/25 hover:bg-[#c9181e] transition-all duration-200 active:scale-95"
              >
                <span>Book a Service</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <a 
                href="#services"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#e51e25] hover:text-[#c9181e] transition-colors"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Layered Image Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Primary Main Image (Fix Machine) */}
            <div className="relative w-full max-w-[480px] lg:max-w-[520px] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <img 
                src={fixMachine} 
                alt="Appliance Repair Technician" 
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
              />

              {/* 10+ Years Experience Serrated Red Badge (Top Right) */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  {/* Serrated / Starburst Outer Ring */}
                  <svg 
                    className="absolute inset-0 w-full h-full text-[#D31820] drop-shadow-lg" 
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 0 L55 9 L65 3 L67 13 L78 11 L77 21 L88 23 L83 32 L93 37 L85 45 L94 53 L84 59 L90 69 L79 72 L82 82 L71 82 L70 93 L60 89 L56 99 L48 92 L41 99 L39 89 L29 91 L30 81 L19 80 L23 70 L13 67 L19 58 L10 52 L18 44 L11 36 L21 32 L17 22 L27 21 L26 10 L37 13 L39 3 L48 9 Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Badge Text Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
                    <span className="text-xl sm:text-2xl font-black leading-none tracking-tight">10+</span>
                    <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider leading-tight mt-0.5">
                      YEARS OF<br />EXPERIENCE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlaid Secondary Image (Circuit Board) */}
            <div className="absolute -bottom-6 sm:-bottom-8 -right-2 sm:-right-6 lg:-right-4 z-20 w-44 sm:w-56 lg:w-64 rounded-[26px] overflow-hidden shadow-2xl border-[5px] sm:border-[7px] border-white bg-white">
              <img 
                src={fixCircut} 
                alt="Circuit Board Electronic Repair" 
                className="w-full h-36 sm:h-48 lg:h-56 object-cover"
              />
            </div>

            {/* Overlaid Floating Call Badge (Bottom Left) */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-2 sm:left-4 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e51e25] flex items-center justify-center text-white shadow-md shadow-red-500/30 shrink-0">
                <Phone className="w-4 h-4 fill-white" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] font-extrabold uppercase tracking-wider text-gray-400">
                  NEED HELP FAST?
                </span>
                <span className="block text-xs sm:text-sm font-black text-gray-900 leading-tight">
                  (204) 500-2474
                </span>
                <span className="block text-[9px] font-medium text-gray-400">
                  We're here to help, anytime.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
