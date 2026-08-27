import React, { useState } from 'react';
import Logo from './Logo';
import heroImg from '../assets/hero.png';
import { 
  Clock, 
  ThumbsUp, 
  ShieldCheck, 
  Wrench, 
  Phone, 
  Calendar, 
  Zap, 
  Shield, 
  Key, 
  Menu, 
  X 
} from 'lucide-react';

export default function HeroAndNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = ['Home', 'Services', 'Brands', 'Reviews', 'Blog', 'Contact Us'];

  return (
    <div className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#fafafa] select-none flex flex-col justify-between">
      
      {/* 1. FULL HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img 
          src={heroImg} 
          alt="Appliance Repair Specialists Background" 
          className="w-full h-full object-cover object-bottom"
        />
        {/* Soft white overlay for smaller screens so text remains super clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent lg:hidden" />
      </div>

      {/* 2. TOP HEADER & NAVBAR */}
      <header className="relative z-50 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-5">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo (Razor Sharp Vector Component) */}
          <div className="flex-shrink-0 z-20">
            <a href="#" className="block hover:opacity-95 transition">
              <Logo />
            </a>
          </div>

          {/* Floating Pill Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-5 bg-white/95 backdrop-blur-md px-6 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100/90">
            {navLinks.map((item) => {
              const isActive = activeTab === item;
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setActiveTab(item)}
                  className={`relative text-[13px] font-semibold tracking-normal transition-colors duration-200 py-0.5 ${
                    isActive 
                      ? 'text-[#e51e25]' 
                      : 'text-gray-600 hover:text-[#e51e25]'
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#e51e25] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Call Us Now Button */}
          <div className="hidden md:block">
            <a 
              href="tel:1234567890" 
              className="inline-flex items-center gap-2 bg-[#e51e25] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-red-500/25 hover:bg-[#c9181e] transition-all duration-200 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call Us Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden z-20">
            <button 
              type="button"
              aria-label="Toggle Navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-950 bg-white/95 rounded-xl shadow-sm border border-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-gray-100 absolute top-20 left-4 right-4 z-50 transition-all duration-300">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                    activeTab === item 
                      ? 'text-[#e51e25] bg-red-50' 
                      : 'text-gray-700 hover:text-[#e51e25] hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setActiveTab(item);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
              <hr className="border-gray-100 my-2" />
              <a 
                href="tel:1234567890" 
                className="w-full flex justify-center items-center gap-2 bg-[#e51e25] text-white py-3 rounded-xl font-bold shadow-md hover:bg-[#c9181e] transition"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO CONTENT WRAPPER */}
      <main className="relative z-10 flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full flex items-center py-2 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column: Hero Headlines, Actions & Feature Bar */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left z-20 space-y-4 sm:space-y-5 max-w-xl mx-auto lg:mx-0">
            
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] self-center lg:self-start">
              <span className="text-[#e51e25] text-xs font-bold">✦</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-gray-500">
                FAST. RELIABLE. PROFESSIONAL.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-black text-gray-950 leading-[1.12] tracking-tight">
              Appliance Repair <br />
              <span className="text-[#e51e25]">You Can Count On,</span> <br />
              Right When You Need It.
            </h1>

            {/* Subtext Paragraph */}
            <p className="text-gray-500 text-sm sm:text-[15px] font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              Expert repair services for all major home and commercial appliances. Same-day service across Winnipeg and surrounding areas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button 
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#e51e25] text-white px-6 sm:px-7 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-red-500/25 hover:bg-[#c9181e] transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Repair</span>
                <span className="ml-0.5 font-bold">→</span>
              </button>

              <a 
                href="tel:1234567890"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200/90 px-6 sm:px-7 py-3 rounded-2xl font-bold text-sm shadow-sm hover:bg-gray-50 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-[#e51e25] text-[#e51e25]" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Bottom 4-Item Feature Strip */}
            <div className="pt-2">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-100/90 max-w-xl mx-auto lg:mx-0">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  
                  {/* Feature 1 */}
                  <div className="flex items-center gap-2 p-1 sm:p-0 sm:justify-start">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#e51e25] shrink-0">
                      <Zap className="w-3.5 h-3.5 fill-[#e51e25]" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 text-left leading-tight">
                      Same-Day<br />Service
                    </span>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-center gap-2 p-1 sm:p-0 sm:justify-start pt-2 sm:pt-0 sm:pl-2">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#e51e25] shrink-0">
                      <Shield className="w-3.5 h-3.5 fill-[#e51e25]" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 text-left leading-tight">
                      3-Month<br />Warranty
                    </span>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-center gap-2 p-1 sm:p-0 sm:justify-start pt-2 sm:pt-0 sm:pl-2">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#e51e25] shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#e51e25]" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 text-left leading-tight">
                      10+ Years<br />Exp
                    </span>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-center gap-2 p-1 sm:p-0 sm:justify-start pt-2 sm:pt-0 sm:pl-2">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#e51e25] shrink-0">
                      <Wrench className="w-3.5 h-3.5 text-[#e51e25]" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 text-left leading-tight">
                      All Major<br />Brands
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Floating Overlaid Badges */}
          <div className="hidden lg:block lg:col-span-6 relative h-[480px] xl:h-[540px] w-full pointer-events-none">
            
            {/* Card 1: 24/7 Availability (Top-Left of appliances) */}
            <div className="absolute top-[8%] left-[2%] xl:left-[6%] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center w-24 h-24 xl:w-28 xl:h-28 pointer-events-auto hover:scale-105 transition-all duration-300">
              <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-[#e51e25] flex items-center justify-center text-white mb-1 shadow-md shadow-red-500/25">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-[11px] xl:text-xs font-black text-gray-900 leading-tight">24/7</span>
              <span className="text-[9px] xl:text-[10px] font-medium text-gray-500">Availability</span>
            </div>

            {/* Card 2: Satisfaction Guaranteed (Top-Right of appliances) */}
            <div className="absolute top-[12%] right-[2%] xl:right-[6%] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center w-28 h-24 xl:w-32 xl:h-28 pointer-events-auto hover:scale-105 transition-all duration-300">
              <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-xl bg-red-50 flex items-center justify-center text-[#e51e25] mb-1">
                <ThumbsUp className="w-4 h-4 fill-[#e51e25]" />
              </div>
              <span className="text-[10px] xl:text-xs font-bold text-gray-900 leading-tight text-center">Satisfaction</span>
              <span className="text-[8px] xl:text-[9px] font-medium text-gray-500 text-center">Guaranteed</span>
            </div>

            {/* Card 3: Trusted Technicians (Bottom-Left in front of pedestal) */}
            <div className="absolute bottom-[10%] left-[10%] xl:left-[16%] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center w-28 h-24 xl:w-32 xl:h-28 pointer-events-auto hover:scale-105 transition-all duration-300">
              <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-xl bg-[#e51e25] flex items-center justify-center text-white mb-1 shadow-md shadow-red-500/25">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] xl:text-xs font-bold text-gray-900 leading-tight text-center">Trusted</span>
              <span className="text-[8px] xl:text-[9px] font-medium text-gray-500 text-center">Technicians</span>
            </div>

            {/* Card 4: Upfront Pricing (Bottom-Right next to dishwasher) */}
            <div className="absolute bottom-[16%] right-[2%] xl:right-[6%] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center w-24 h-24 xl:w-28 xl:h-28 pointer-events-auto hover:scale-105 transition-all duration-300">
              <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-xl bg-red-50 flex items-center justify-center text-[#e51e25] mb-1">
                <Wrench className="w-4 h-4 text-[#e51e25]" />
              </div>
              <span className="text-[10px] xl:text-xs font-bold text-gray-900 leading-tight text-center">Upfront</span>
              <span className="text-[8px] xl:text-[9px] font-medium text-gray-500 text-center">Pricing</span>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}