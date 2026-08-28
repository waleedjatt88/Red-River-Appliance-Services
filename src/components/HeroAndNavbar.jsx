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
import { motion } from 'framer-motion';

export default function HeroAndNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = ['Home', 'Services', 'Brands', 'Reviews', 'Blog', 'Contact Us'];

  return (
    <div className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#fafafa] select-none flex flex-col justify-between">
      
      {/* 1. FULL HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden flex items-end justify-center">
        <img 
          src={heroImg} 
          alt="Appliance Repair Specialists Background" 
          className="w-full h-full lg:h-auto min-h-[100vh] lg:min-h-[auto] object-cover lg:object-contain object-[75%_bottom] sm:object-bottom transform translate-y-16 sm:translate-y-12 lg:translate-y-24 xl:translate-y-32"
        />
        {/* Soft white overlay for smaller screens so text remains super clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/40 lg:hidden" />
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
          <nav className="hidden md:flex items-center space-x-6 bg-white/95 backdrop-blur-md px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100/90">
            {navLinks.map((item) => {
              const isActive = activeTab === item;
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setActiveTab(item)}
                  className={`relative text-sm font-semibold tracking-normal transition-colors duration-200 py-1 ${
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
              className="inline-flex items-center gap-2 bg-[#e51e25] text-white px-7 py-3 rounded-xl text-sm font-bold shadow-lg shadow-red-500/25 hover:bg-[#c9181e] transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white" />
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left z-20 space-y-5 sm:space-y-5 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
          >
            
            {/* Top Small Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] self-center lg:self-start"
            >
              <span className="text-[#e51e25] text-[10px] font-black mt-0.5">✦</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-gray-600">
                FAST. RELIABLE. PROFESSIONAL.
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-[30px] sm:text-[38px] lg:text-[44px] xl:text-[52px] font-black text-gray-950 leading-[1.1] sm:leading-[1.08] tracking-tight">
              <span className="block">Appliance Repair</span>
              <span className="block text-[#e51e25]">You Can Count On,</span>
              <span className="block">Right When You Need It.</span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="text-gray-500 text-[14px] sm:text-[15px] font-normal leading-relaxed max-w-md mx-auto lg:mx-0 px-4 sm:px-0">
              Expert repair services for all major home and commercial appliances. Same-day service across Winnipeg and surrounding areas.
            </p>

            {/* CTA Buttons (Stacked on Mobile) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full">
              <button 
                type="button"
                className="flex items-center justify-center gap-2 bg-[#e51e25] text-white px-6 sm:px-7 py-3.5 sm:py-3 rounded-2xl font-bold text-[15px] sm:text-sm shadow-lg shadow-red-500/25 hover:bg-[#c9181e] transition-all duration-200 active:scale-95 w-[85%] sm:w-auto max-w-[280px]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Repair</span>
                <span className="ml-0.5 font-bold">→</span>
              </button>

              <a 
                href="tel:1234567890"
                className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200/90 px-6 sm:px-7 py-3.5 sm:py-3 rounded-2xl font-bold text-[15px] sm:text-sm shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:bg-gray-50 transition-all duration-200 active:scale-95 w-[85%] sm:w-auto max-w-[280px]"
              >
                <Phone className="w-4 h-4 fill-[#e51e25] text-[#e51e25]" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Bottom 4-Item Feature Strip (2x2 Grid on Mobile) */}
            <div className="pt-8 sm:pt-4 w-full px-2 sm:px-0 relative z-30 pb-4 lg:pb-0">
              <div className="bg-white/95 backdrop-blur-md rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100/90 max-w-xl mx-auto lg:mx-0 overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  
                  {/* Feature 1 */}
                  <div className="flex items-center gap-2.5 p-3 sm:p-4 border-r border-b sm:border-b-0 border-gray-100">
                    <div className="w-7 h-7 rounded-full bg-[#fde8e8] flex items-center justify-center text-[#e51e25] shrink-0">
                      <Zap className="w-3.5 h-3.5 fill-[#e51e25]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-gray-800 text-left leading-tight">
                      Same-Day<br />Service
                    </span>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-center gap-2.5 p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-100">
                    <div className="w-7 h-7 rounded-full bg-[#fde8e8] flex items-center justify-center text-[#e51e25] shrink-0">
                      <Shield className="w-3.5 h-3.5 fill-[#e51e25]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-gray-800 text-left leading-tight">
                      3-Month<br />Warranty
                    </span>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-center gap-2.5 p-3 sm:p-4 border-r sm:border-r border-gray-100">
                    <div className="w-7 h-7 rounded-full bg-[#fde8e8] flex items-center justify-center text-[#e51e25] shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#e51e25]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-gray-800 text-left leading-tight">
                      10+ Years<br />Exp
                    </span>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-center gap-2.5 p-3 sm:p-4">
                    <div className="w-7 h-7 rounded-full bg-[#fde8e8] flex items-center justify-center text-[#e51e25] shrink-0">
                      <Wrench className="w-3.5 h-3.5 text-[#e51e25]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-gray-800 text-left leading-tight">
                      All Major<br />Brands
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 4 Floating Overlaid Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:block lg:col-span-6 relative h-[480px] xl:h-[540px] w-full pointer-events-none"
          >
            
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

          </motion.div>

        </div>
      </main>

    </div>
  );
}