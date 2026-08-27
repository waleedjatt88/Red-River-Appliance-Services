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
    <section className="relative w-full min-h-[700px] lg:min-h-[820px] bg-white overflow-hidden py-16 lg:py-24 select-none flex items-center">
      
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
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bottom Floating Same-Day Badge Positioning */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[420px] lg:min-h-[520px] flex flex-col justify-end">
            
            {/* Red River Same-Day Repair Service Zone Floating Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 max-w-[380px] w-full mt-auto">
              
              {/* Top Row */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#D31820] shrink-0">
                  <Zap className="w-5 h-5 fill-[#D31820]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 leading-tight">
                    Red River Same-Day
                  </h4>
                  <span className="text-xs font-bold text-[#D31820]">
                    Repair Service Zone
                  </span>
                </div>
              </div>

              {/* Bottom Info Grid */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100/90 text-left">
                <div className="flex items-start gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#D31820] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-medium">Average response time</span>
                    <span className="block text-xs font-bold text-gray-800">Under 2 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D31820] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-medium">Locally dispatched</span>
                    <span className="block text-xs font-bold text-gray-800">Technicians</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Text & Neighborhood Selector */}
          <div className="lg:col-span-6 space-y-6 max-w-xl mx-auto lg:mx-0">
            
            {/* Section Tag */}
            <span className="inline-block text-[11px] font-extrabold text-[#D31820] tracking-wider uppercase">
              OUR COVERAGE ZONE
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-gray-950 leading-[1.12] tracking-tight">
              Appliance Repair <br />
              <span className="text-[#D31820]">Across Winnipeg</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We provide professional appliance repair services throughout Winnipeg and surrounding areas.
            </p>

            {/* Neighborhood Selector Title */}
            <div className="flex items-center gap-2 pt-2">
              <MapPin className="w-4 h-4 text-[#D31820]" />
              <span className="text-xs sm:text-sm font-bold text-gray-900">
                Select your neighborhood to verify service
              </span>
            </div>

            {/* 2-Column Selectable Neighborhood Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {areas.map((area) => {
                const isSelected = selectedArea === area;
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer text-left shadow-sm ${
                      isSelected
                        ? 'bg-[#D31820] text-white shadow-md shadow-red-600/30 scale-[1.02]'
                        : 'bg-white text-gray-800 border border-gray-100 hover:border-red-200 hover:bg-gray-50/80'
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
            <div className="pt-4">
              <button
                type="button"
                className="w-full py-4 rounded-2xl bg-[#D31820] hover:bg-[#b5141b] text-white font-bold text-base shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 cursor-pointer"
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
