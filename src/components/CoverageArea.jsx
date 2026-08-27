import React, { useState } from 'react';
import coverageBg from '../assets/coverage zone.png';
import { MapPin, ArrowRight, Zap } from 'lucide-react';

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

  return (
    <section className="relative w-full min-h-auto lg:min-h-[640px] bg-white overflow-hidden py-10 lg:py-14 select-none flex items-center">
      
      {/* 1. Full Background Image (coverage zone.png) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Bottom Floating Same-Day Badge Positioning */}
          <div className="lg:col-span-6 relative min-h-[220px] sm:min-h-[320px] lg:min-h-[420px] flex flex-col justify-end">
            
            {/* Red River Same-Day Repair Service Zone Floating Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] border border-gray-100 max-w-[340px] w-full mt-auto">
              
              {/* Top Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-[#D31820] shrink-0">
                  <Zap className="w-4 h-4 fill-[#D31820]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                    Red River Same-Day
                  </h4>
                  <span className="text-[11px] font-bold text-[#D31820]">
                    Repair Service Zone
                  </span>
                </div>
              </div>

              {/* Bottom Info Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-gray-100 text-left">
                <div className="flex items-start gap-1.5">
                  <Zap className="w-3 h-3 text-[#D31820] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[9.5px] text-gray-400 font-medium leading-none">Avg response time</span>
                    <span className="block text-[11px] font-bold text-gray-800 mt-0.5">Under 2 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3 h-3 text-[#D31820] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[9.5px] text-gray-400 font-medium leading-none">Locally dispatched</span>
                    <span className="block text-[11px] font-bold text-gray-800 mt-0.5">Technicians</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Text & Neighborhood Selector */}
          <div className="lg:col-span-6 space-y-4 max-w-lg mx-auto lg:mx-0">
            
            {/* Section Tag */}
            <span className="inline-block text-[10.5px] font-extrabold text-[#D31820] tracking-wider uppercase">
              OUR COVERAGE ZONE
            </span>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-gray-950 leading-[1.14] tracking-tight">
              Appliance Repair <br />
              <span className="text-[#D31820]">Across Winnipeg</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              We provide professional appliance repair services throughout Winnipeg and surrounding areas.
            </p>

            {/* Neighborhood Selector Title */}
            <div className="flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#D31820]" />
              <span className="text-xs sm:text-[13px] font-bold text-gray-900">
                Select your neighborhood to verify service
              </span>
            </div>

            {/* 2-Column Selectable Neighborhood Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
              {areas.map((area) => {
                const isSelected = selectedArea === area;
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer text-left shadow-sm ${
                      isSelected
                        ? 'bg-[#D31820] text-white shadow-md shadow-red-600/30 scale-[1.02]'
                        : 'bg-white text-gray-800 border border-gray-100 hover:border-red-200 hover:bg-gray-50/80'
                    }`}
                  >
                    <MapPin
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isSelected ? 'text-white' : 'text-gray-400'
                      }`}
                    />
                    <span>{area}</span>
                  </button>
                );
              })}
            </div>

            {/* Check Your Service Area Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-3.5 rounded-xl bg-[#D31820] hover:bg-[#b5141b] text-white font-bold text-sm shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>Check Your Service Area</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
