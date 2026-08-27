import React from 'react';
import fixesEasilyImg from '../assets/fixes easily.png';
import { Play } from 'lucide-react';

export default function EasyProcess() {
  const steps = [
    {
      num: '01',
      title: 'Book Your Repair',
      desc: 'Call us or request a repair appointment online in seconds.',
    },
    {
      num: '02',
      title: 'We Diagnose the Problem',
      desc: 'Our certified technician inspects your appliance and identifies the issue.',
    },
    {
      num: '03',
      title: 'We Fix It',
      desc: 'We provide the right repair solution and get your appliance working again.',
    },
    {
      num: '04',
      title: 'Enjoy Peace of Mind',
      desc: 'Your professional repair is fully backed by our dependable warranty.',
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-white to-[#fffafa] py-20 lg:py-28 overflow-hidden select-none">
      
      {/* Soft Ambient Light on Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgba(211,24,32,0.06)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Video/Image Container */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-[#D31820]">
                SIMPLE PROCESS
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-gray-950 leading-[1.14] tracking-tight">
              Getting Your Appliance <br />
              Fixed Is Easy
            </h2>

            {/* Image Container with Center Play Button */}
            <div className="relative w-full max-w-[540px] rounded-[30px] sm:rounded-[34px] overflow-hidden shadow-2xl border border-gray-100 bg-white group mt-6">
              <img
                src={fixesEasilyImg}
                alt="Appliance Repair Process Technician"
                className="w-full h-[320px] sm:h-[380px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Center Play Button */}
              <button 
                type="button"
                aria-label="Play Overview Video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border border-gray-100 flex items-center justify-center text-[#D31820] group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-[#D31820]/30 flex items-center justify-center">
                  <Play className="w-5 h-5 fill-[#D31820] text-[#D31820] ml-0.5" />
                </div>
              </button>
            </div>

          </div>

          {/* Right Column: 4 Process Step Cards */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-4.5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-[22px] sm:rounded-[24px] p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/90 flex items-center gap-4 sm:gap-5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)] hover:translate-x-1 transition-all duration-300 group"
              >
                {/* Red Number Ribbon Badge */}
                <div className="relative w-13 h-13 sm:w-16 sm:h-16 rounded-[18px] bg-[#D31820] text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/25 group-hover:scale-105 transition-transform">
                  <span className="text-xl sm:text-2xl font-black leading-none tracking-tight">
                    {step.num}
                  </span>
                  {/* Subtle decorative curved corner accent */}
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-400/40 rounded-full blur-[1px]" />
                </div>

                {/* Step Details */}
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-base sm:text-[17px] font-bold text-gray-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-gray-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
