import React from 'react';
import { Zap, CheckCircle2, SlidersHorizontal, ShieldCheck } from 'lucide-react';

export default function ServiceFeatures() {
  const features = [
    {
      id: 'fast-response',
      title: 'Fast Response',
      desc: "We know a broken appliance can't wait. We offer fast service when you need it.",
      icon: Zap,
    },
    {
      id: 'experienced-technicians',
      title: 'Experienced Technicians',
      desc: 'Our skilled technicians have the knowledge to diagnose and repair a wide range of appliances.',
      icon: CheckCircle2,
    },
    {
      id: 'all-major-brands',
      title: 'All Major Brands',
      desc: 'From Samsung and LG to Whirlpool, Bosch, GE, Miele, and more.',
      icon: SlidersHorizontal,
    },
    {
      id: 'repair-warranty',
      title: 'Repair Warranty',
      desc: 'Every qualifying repair is backed by a 3-month warranty for added peace of mind.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#fffafa] to-white py-20 lg:py-28 overflow-hidden select-none">
      
      {/* Soft Pink Background Glow on Top Right */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[rgba(211,24,32,0.08)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 lg:mb-18">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <span className="text-[#D31820] text-xs font-bold">⭐</span>
            <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-[#D31820]">
              WHY RED RIVER
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-gray-950 tracking-tight">
            Repair Service You Can Count On
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-gray-500 text-sm sm:text-[15px] font-normal max-w-xl mx-auto leading-relaxed pt-1">
            We combine experienced technicians, transparent service, and fast response times to make appliance repairs simple and stress-free.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-[26px] p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100/90 border-t-[3.5px] border-t-[#D31820] flex flex-col items-center text-center hover:shadow-[0_16px_40px_rgba(211,24,32,0.08)] hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Center Solid Red Circle Icon */}
                <div className="w-14 h-14 rounded-full bg-[#D31820] flex items-center justify-center text-white shadow-md shadow-red-500/25 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
