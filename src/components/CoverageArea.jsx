import React, { useState } from 'react';
import coverageBg from '../assets/coverage zone.png';
import { MapPin, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoverageArea() {
  const [selectedArea, setSelectedArea] = useState('Winnipeg');

  const areas = [
    'Winnipeg',
    'St. Vital',
    'St. Boniface',
    'River Heights',
    'Charleswood',
    'Transcona',
    'Fort Garry',
  ];

  const mapLocations = [
    { id: 'Transcona', name: 'Transcona', top: '16%', left: '42%' },
    { id: 'Winnipeg', name: 'Winnipeg (Downtown)', top: '22%', left: '13%' },
    { id: 'St. Boniface', name: 'St. Boniface', top: '34%', left: '55%' },
    { id: 'River Heights', name: 'River Heights', top: '36%', left: '7%' },
    { id: 'Charleswood', name: 'Charleswood', top: '52%', left: '2%' },
    { id: 'St. Vital', name: 'St. Vital', top: '54%', left: '57%' },
    { id: 'Fort Garry', name: 'Fort Garry', top: '64%', left: '27%' },
  ];

  return (
    <section className="relative w-full min-h-auto lg:min-h-[640px] bg-white overflow-hidden py-10 lg:py-14 select-none flex items-center">
      
      {/* 1. Full Background Image (coverage zone.png) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden lg:block">
        <img
          src={coverageBg}
          alt="Winnipeg Service Coverage Map"
          className="w-full h-full object-cover object-left lg:object-center opacity-90 lg:opacity-100"
        />
        {/* Soft gradient overlay on mobile for readability */}
        <div className="absolute inset-0 bg-white/85 sm:bg-white/70 lg:hidden" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Bottom Floating Same-Day Badge Positioning */}
          <div className="lg:col-span-6 relative min-h-0 lg:min-h-[550px] flex flex-col justify-end">
            
            {/* Map Badges & Center Logo (Absolutely positioned over the image) */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              
              {/* Location Badges */}
              {mapLocations.map((loc) => {
                const isSelected = selectedArea === loc.id;
                return (
                  <div 
                    key={loc.name}
                    onClick={() => setSelectedArea(loc.id)}
                    className={`absolute bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 z-10 pointer-events-auto transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? 'border-2 border-[#D31820] shadow-[0_8px_20px_rgba(211,24,32,0.2)] scale-110' 
                        : 'border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                    style={{ top: loc.top, left: loc.left, right: loc.right, bottom: loc.bottom }}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D31820] fill-[#D31820]/20' : 'text-[#D31820]'}`} />
                    <span className="text-[10.5px] font-black text-gray-900 tracking-tight">{loc.name}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Red River Same-Day Repair Service Zone Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative lg:absolute lg:-bottom-10 lg:left-1/2 lg:-translate-x-1/2 bg-white rounded-[16px] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 max-w-sm sm:max-w-[340px] w-full mx-auto lg:w-[95%] z-20 pointer-events-auto mt-4 lg:mt-0 mb-4 lg:mb-0"
            >
              
              {/* Top Row */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-[#D31820]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-950 leading-tight">
                    Red River Same-Day
                  </span>
                  <span className="text-[13px] font-bold text-[#D31820] mt-0.5">
                    Repair Service Zone
                  </span>
                </div>
              </div>

              {/* Bottom Info Grid */}
              <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-gray-100 text-left">
                <div className="flex items-start gap-1.5">
                  <Zap className="w-[14px] h-[14px] text-[#D31820] shrink-0 mt-[1px]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-medium leading-tight">Average response time</span>
                    <span className="text-[12px] font-bold text-[#D31820] mt-0.5">Under 2 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-1.5">
                  <MapPin className="w-[14px] h-[14px] text-[#D31820] shrink-0 mt-[1px]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-medium leading-tight">Locally dispatched</span>
                    <span className="text-[12px] font-bold text-gray-900 mt-0.5">technicians</span>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

          {/* Right Column: Text & Neighborhood Selector */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col max-w-xl mx-auto lg:mx-0 py-2 lg:py-0"
          >
            
            {/* Section Tag */}
            <span className="inline-block text-[11px] font-extrabold text-[#D31820] tracking-wider uppercase mb-2">
              OUR COVERAGE ZONE
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-gray-950 leading-[1.15] tracking-tight mb-4">
              Appliance Repair <br />
              <span className="text-[#D31820]">Across Winnipeg</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-[14.5px] leading-relaxed mb-8 pr-4">
              We provide professional appliance repair services throughout Winnipeg and surrounding areas.
            </p>

            {/* Neighborhood Selector Title */}
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-[#D31820]" />
              <span className="text-[14px] font-bold text-gray-900">
                Select your neighborhood to verify service
              </span>
            </div>

            {/* 2-Column Selectable Neighborhood Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {areas.map((area) => {
                const isSelected = selectedArea === area;
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className={`flex items-center gap-2.5 px-4 py-3.5 rounded-[12px] text-[13.5px] font-bold transition-all duration-200 cursor-pointer text-left ${
                      isSelected
                        ? 'bg-[#D31820] text-white shadow-md'
                        : 'bg-white text-gray-800 border border-gray-100 hover:border-gray-200 shadow-sm'
                    }`}
                  >
                    <MapPin
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-white' : 'text-gray-400'
                      }`}
                    />
                    <span>{area}</span>
                  </button>
                );
              })}
            </div>

            {/* Check Your Service Area Button */}
            <div>
              <button
                type="button"
                className="w-full py-4 rounded-[12px] bg-[#D31820] hover:bg-[#b5141b] text-white font-bold text-[15px] shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Check Your Service Area</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
