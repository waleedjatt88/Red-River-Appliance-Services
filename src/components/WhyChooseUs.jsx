import React from 'react';
import { ThumbsUp, Clock, ShieldCheck, Wrench } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      num: '01',
      icon: ThumbsUp,
      value: '10+',
      title: 'Years of Experience',
      desc: 'Trusted local expertise',
      iconType: 'light' // light red background
    },
    {
      num: '02',
      icon: Clock,
      value: '24/7',
      title: 'Service Availability',
      desc: 'Emergency repairs anytime',
      iconType: 'solid' // solid red circle
    },
    {
      num: '03',
      icon: ShieldCheck,
      value: '3 Months',
      title: 'Repair Warranty',
      desc: 'Guaranteed parts & labor',
      iconType: 'solid' // solid red shield
    },
    {
      num: '04',
      icon: Wrench,
      value: 'All Major',
      title: 'Appliance Brands',
      desc: 'Certified brand technicians',
      iconType: 'light' // light red background
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Header & Tagline */}
        <div className="text-center space-y-3 mb-12 lg:mb-16">
          
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <span className="text-[#e51e25] text-xs font-bold">✦</span>
            <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-gray-500">
              WHY RED RIVER APPLIANCE
            </span>
          </div>

          {/* Section Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Your Appliances. Our Expertise
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white rounded-[26px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100/90 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Card Top: Icon & Number */}
                <div className="flex items-center justify-between mb-8">
                  {item.iconType === 'solid' ? (
                    <div className="w-11 h-11 rounded-full bg-[#e51e25] flex items-center justify-center text-white shadow-md shadow-red-500/25 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center text-[#e51e25] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 fill-[#e51e25]" />
                    </div>
                  )}

                  <span className="text-xs font-bold text-gray-400 font-mono tracking-wider">
                    {item.num}
                  </span>
                </div>

                {/* Card Bottom: Stat Value, Title & Description */}
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-[#e51e25] tracking-tight">
                    {item.value}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pt-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
