import React from 'react';

export default function Logo({ className = "h-10 sm:h-11 w-auto" }) {
  return (
    <div className={`flex flex-col justify-center select-none ${className}`}>
      {/* Top Headline: RED RIVER */}
      <div className="flex items-center text-[#e51e25] font-black text-[22px] sm:text-[25px] leading-tight tracking-wider font-sans">
        <span>RE</span>
        {/* Custom Stylized 'D' with Plug Symbol */}
        <span className="relative inline-flex items-center justify-center mx-[0.5px]">
          <span className="relative z-10 font-black">D</span>
          <svg 
            className="absolute -top-1.5 -right-1 w-3 h-3 text-[#e51e25] fill-[#e51e25]" 
            viewBox="0 0 24 24"
          >
            <path d="M16 7V3h-2v4h-4V3H8v4H6c-1.1 0-2 .9-2 2v5c0 3.07 2.34 5.6 5.35 5.94L9 21h6l-.35-1.06C17.66 19.6 20 17.07 20 14V9c0-1.1-.9-2-2-2h-2z"/>
          </svg>
        </span>
        <span className="ml-1.5">RIVER</span>
      </div>

      {/* Bottom Subtitle: APPLIANCE SERVICE */}
      <span className="text-[#2b313b] text-[8.5px] sm:text-[9.5px] font-extrabold tracking-[0.28em] uppercase -mt-0.5 leading-none">
        APPLIANCE SERVICE
      </span>
    </div>
  );
}
