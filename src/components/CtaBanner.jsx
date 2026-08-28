import React from 'react';
import hereToHelpImg from '../assets/here to help.png';
import { Phone, Calendar, ShieldCheck, Zap, Smile, Asterisk } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  const miniFeatures = [
    {
      title: 'Same-Day',
      subtitle: 'Service',
      icon: Zap,
    },
    {
      title: 'Certified',
      subtitle: 'Technicians',
      icon: ShieldCheck,
    },
    {
      title: 'Satisfaction',
      subtitle: 'Guarantee',
      icon: Smile,
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden select-none">

      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(211,24,32,0.04)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Heading, Subtext, Badges & Dual CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 sm:space-y-7 max-w-xl"
          >

            {/* Top Solid Red Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#D31820] text-white px-3.5 py-1.5 rounded-full shadow-md shadow-red-500/20">
              <Asterisk className="w-3.5 h-3.5 text-white animate-spin-slow" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold">
                NEED HELP NOW?
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-[32px] sm:text-4xl lg:text-[46px] xl:text-[52px] font-black text-gray-950 leading-[1.1] tracking-tight flex flex-col">
              <span className="sm:whitespace-nowrap">Appliance Not Working?</span>
              <span className="text-[#D31820] sm:whitespace-nowrap">We’re Here to Help!</span>
            </h2>

            {/* Subtext Paragraph */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Fast, reliable and affordable appliance repair services just a call away. Same-day service available.
            </p>

            {/* 3 Mini Feature Items */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1">
              {miniFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#D31820] shrink-0">
                      <Icon className="w-4 h-4 text-[#D31820]" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-bold text-gray-900 leading-tight">
                        {item.title}
                      </span>
                      <span className="block text-[11px] text-gray-500 font-normal">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2 CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">

              {/* Call Now Button */}
              <a
                href="tel:2041234567"
                className="inline-flex items-center justify-center gap-2 bg-[#D31820] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-xl shadow-red-600/25 hover:bg-[#b5141b] transition-all duration-200 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now: (204) 123-4567</span>
              </a>

              {/* Book Online Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-[1.5px] border-red-300 hover:border-[#D31820] hover:bg-red-50/40 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 active:scale-95 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#D31820]" />
                <span className="text-[#D31820]">Book Online</span>
              </a>

            </div>

          </motion.div>

          {/* Right Column: Hero Appliance Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 flex items-center justify-center lg:justify-end"
          >
            <img
              src={hereToHelpImg}
              alt="Appliance Repair Specialists Ready to Help"
              className="w-full max-w-[540px] lg:max-w-[620px] h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
