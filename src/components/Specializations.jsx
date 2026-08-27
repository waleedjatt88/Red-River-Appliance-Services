import React from 'react';
import washerImg from '../assets/washer.png';
import dryerImg from '../assets/dryer.png';
import refrigeratorImg from '../assets/refrigerator.png';
import ovenImg from '../assets/oven.png';
import dishwasherImg from '../assets/dishwasher.png';
import { Sparkles, Sun, Snowflake, Flame, ArrowRight, Disc } from 'lucide-react';

export default function Specializations() {
  const appliances = [
    {
      id: 'washer',
      name: 'Washer',
      img: washerImg,
      icon: Disc,
    },
    {
      id: 'dryer',
      name: 'Dryer',
      img: dryerImg,
      icon: Sun,
    },
    {
      id: 'refrigerator',
      name: 'Refrigerator',
      img: refrigeratorImg,
      icon: Snowflake,
    },
    {
      id: 'oven',
      name: 'Oven & Stove',
      img: ovenImg,
      icon: Flame,
    },
    {
      id: 'dishwasher',
      name: 'Dishwasher',
      img: dishwasherImg,
      icon: Sparkles,
    },
  ];

  return (
    <section id="services" className="relative w-full bg-white py-16 lg:py-24 select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 lg:mb-16">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <span className="text-[#D31820] text-xs font-bold">✦</span>
            <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-gray-500">
              OUR SPECIALIZATIONS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight max-w-2xl mx-auto leading-tight">
            Professional Repairs For All Major Appliances
          </h2>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {appliances.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-[28px] p-3.5 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100/90 flex flex-col justify-between hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with Floating Icon Badge */}
                <div className="relative w-full h-[180px] sm:h-[195px] rounded-[22px] overflow-hidden bg-gray-50">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Icon Badge (Top-Left) */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-gray-100 flex items-center justify-center text-[#D31820] z-10 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-[#D31820]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-4 pb-1 text-center space-y-3">
                  <h3 className="text-base sm:text-[17px] font-bold text-gray-900 leading-snug">
                    {item.name}
                  </h3>

                  {/* Divider & Learn More Link */}
                  <div className="pt-2 border-t border-gray-100/80 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D31820] group-hover:underline">
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
