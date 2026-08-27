import React from 'react';
import testimonialPhoto from '../assets/testinomials.png';
import { Star, Phone } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote:
        '“The practical tools & mindset shifts I gain during coach helped me become a more effective leader & communicator. I highly recommend this coaching to anyone seeking real growth.”',
      author: 'Jane Cooper',
      role: 'Founder & Lead Coach',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      quote:
        '“The practical tools & mindset shifts I gain during coach helped me become a more effective leader & communicator. I highly recommend this coaching to anyone seeking real growth.”',
      author: 'Emily Rodriguez',
      role: 'Career Professional',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="reviews" className="relative w-full bg-gradient-to-b from-[#fffafa] via-white to-white py-20 lg:py-28 overflow-hidden select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[rgba(211,24,32,0.06)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 lg:mb-18">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <span className="text-[#D31820] text-xs font-bold">✦</span>
            <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-gray-500">
              TESTIMONIALS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-gray-950 tracking-tight">
            Real Results for Real <br className="sm:hidden" /> Businesses
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Column 1: Image Card with Google Rating Overlay */}
          <div className="relative w-full h-[360px] sm:h-[400px] rounded-[28px] overflow-hidden shadow-xl border border-gray-100 bg-white group">
            <img
              src={testimonialPhoto}
              alt="Appliance Repair Testimonial"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlaid Google Rating Card */}
            <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 px-4 shadow-xl border border-gray-100 flex items-center gap-3">
              {/* Google G Logo */}
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black text-gray-900 leading-none">4.9/5</span>
                  <div className="flex text-[#D31820]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D31820] text-[#D31820]" />
                    ))}
                  </div>
                </div>
                <span className="block text-[10.5px] font-medium text-gray-500 mt-0.5">
                  Our 120k Happy Customer
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Testimonial Cards */}
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-[28px] p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100/90 flex flex-col justify-between hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top 5 Red Stars */}
              <div>
                <div className="flex text-[#D31820] gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D31820] text-[#D31820]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                  {rev.quote}
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-6 border-t border-gray-100/80 flex items-center gap-3.5 mt-6">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover shadow-sm border border-gray-100"
                />
                <div className="text-left">
                  <h4 className="text-sm sm:text-base font-bold text-gray-950 leading-tight">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-gray-400 font-normal mt-0.5">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Social Proof Info Strip */}
        <div className="pt-14 text-center space-y-2">
          
          <div className="inline-flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm text-gray-700 font-medium">
            <div className="relative inline-flex items-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-6 h-6 rounded-full object-cover border border-white"
              />
              <div className="w-4 h-4 rounded-full bg-[#D31820] text-white flex items-center justify-center -ml-1.5 shadow-sm">
                <Phone className="w-2 h-2 fill-white" />
              </div>
            </div>
            <span>Where smart design and clean energy come together powerfully – </span>
            <a
              href="#reviews"
              className="text-[#D31820] font-bold hover:underline"
            >
              View All Reviews
            </a>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            <span className="font-bold text-gray-900">4.9/5</span>
            <div className="flex text-[#D31820]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D31820] text-[#D31820]" />
              ))}
            </div>
            <span className="text-gray-500 font-medium">Over 4200 Reviews</span>
          </div>

        </div>

      </div>
    </section>
  );
}
