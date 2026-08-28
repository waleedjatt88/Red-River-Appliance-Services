import React from 'react';
import fixMachine from '../assets/fix machine.png';
import fixCircut from '../assets/fix circut.png';
import { Tag, ShieldCheck, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutServices() {
  return (
    <section
      className="relative w-full py-20 lg:py-28 overflow-hidden select-none"
      style={{
        background: 'linear-gradient(135deg, rgba(211, 24, 32, 0.08) 0%, #FFFFFF 50%, rgba(211, 24, 32, 0.20) 100%)'
      }}
    >
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[rgba(211,24,32,0.06)] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[rgba(211,24,32,0.18)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Content & Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 sm:space-y-7 max-w-xl"
          >

            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <span className="text-[#D31820] text-xs font-bold">✦</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-gray-500">
                FAST. RELIABLE. PROFESSIONAL.
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-black text-gray-950 leading-[1.14] tracking-tight">
              Your One-Stop <br />
              <span className="text-[#D31820]">Appliance</span> Services
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
              With a decade of dedicated experience, Red River Appliance Service delivers reliable and professional repairs for commercial and residential appliances. Our seasoned technicians specialize in fixing appliances from any brand and offer a three-month warranty on all repairs.
            </p>

            {/* Feature 1: Our Affordable Price */}
            <div className="flex items-start gap-4 pt-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D31820] flex items-center justify-center text-white shrink-0 shadow-md shadow-red-500/25 mt-0.5">
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
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D31820] flex items-center justify-center text-white shrink-0 shadow-md shadow-red-500/25 mt-0.5">
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
                className="inline-flex items-center justify-center gap-2.5 bg-[#D31820] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-red-600/25 hover:bg-[#b5141b] transition-all duration-200 active:scale-95"
              >
                <span>Book a Service</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#D31820] hover:text-[#b5141b] transition-colors"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Layered Image Composition Matching Exact Figma 463x561 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center lg:justify-center py-10 sm:py-6 w-full"
          >

            {/* Wrapper Container with exact Figma width: 463px */}
            <div className="relative w-[90%] sm:w-full max-w-[463px] mx-auto lg:mx-0">

              {/* 1. Main Primary Photo Card (Exact Figma: 463px x 561px, Radius 32px, Border 4px #FFFFFF) */}
              <div className="w-full max-w-[463px] h-[380px] sm:h-[561px] rounded-[24px] sm:rounded-[32px] border-[4px] border-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-white">
                <img
                  src={fixMachine}
                  alt="Appliance Repair Technician"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* 2. Red Serrated Starburst Badge (10+ YEARS OF EXPERIENCE - Top Right) */}
              <div className="absolute -top-4 -right-3 sm:-top-6 sm:-right-7 z-30 pointer-events-none">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center drop-shadow-[0_10px_25px_rgba(211,24,32,0.4)]">
                  <svg
                    className="absolute inset-0 w-full h-full text-[#D31820]"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 0 L55 9 L65 3 L67 13 L78 11 L77 21 L88 23 L83 32 L93 37 L85 45 L94 53 L84 59 L90 69 L79 72 L82 82 L71 82 L70 93 L60 89 L56 99 L48 92 L41 99 L39 89 L29 91 L30 81 L19 80 L23 70 L13 67 L19 58 L10 52 L18 44 L11 36 L21 32 L17 22 L27 21 L26 10 L37 13 L39 3 L48 9 Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
                    <span className="text-xl sm:text-3xl font-black leading-none tracking-tight">10+</span>
                    <span className="text-[6.5px] sm:text-[8.5px] font-black uppercase tracking-wider leading-tight mt-0.5">
                      YEARS OF<br />EXPERIENCE
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Secondary Overlaid Photo Card (Circuit Board - Bottom Right) */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-10 z-20 w-36 sm:w-56 lg:w-60 h-40 sm:h-64 rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.18)] border-[5px] sm:border-[8px] border-white bg-white">
                <img
                  src={fixCircut}
                  alt="Circuit Board Electronic Repair"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 4. Floating Contact Pill Card (Bottom Left) */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-8 sm:-left-8 z-30 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 px-3 sm:p-3.5 sm:px-4 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#D31820] flex items-center justify-center text-white shadow-lg shadow-red-500/30 shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-gray-400 leading-none">
                    NEED HELP FAST?
                  </span>
                  <span className="block text-xs sm:text-base font-black text-gray-900 leading-tight mt-1">
                    (204) 500-2474
                  </span>
                  <span className="block text-[8px] sm:text-[9.5px] font-semibold text-[#D31820] leading-none mt-0.5">
                    We're here to help, anytime.
                  </span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
