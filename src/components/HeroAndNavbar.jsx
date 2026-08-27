import React, { useState } from 'react';
import logo from '../assets/logo.png';
import heroImg from '../assets/hero.png';
import { Phone, Menu, X } from 'lucide-react';

export default function HeroAndNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = ['Home', 'Services', 'Brands', 'Reviews', 'Blog', 'Contact Us'];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#fafafa] select-none flex flex-col justify-between">
      
      {/* 1. FULL HERO BACKGROUND IMAGE */}
      {/* object-contain object-right-bottom ensures the appliances and pedestal fit accurately below the navbar */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex justify-end items-end overflow-hidden">
        <img 
          src={heroImg} 
          alt="Appliance Repair Specialists Background" 
          className="w-full h-full object-cover lg:object-contain lg:object-right-bottom"
        />
      </div>

      {/* 2. TOP HEADER & NAVBAR */}
      <header className="relative z-50 w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-12 pt-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <a href="#" className="block">
              <img 
                src={logo} 
                alt="Red River Appliance Service" 
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </a>
          </div>

          {/* Floating Pill Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 bg-white/95 backdrop-blur-md px-7 py-2.5 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100/90">
            {navLinks.map((item) => {
              const isActive = activeTab === item;
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setActiveTab(item)}
                  className={`relative text-[13.5px] font-semibold tracking-normal transition-colors duration-200 pb-0.5 ${
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
              className="inline-flex items-center gap-2 bg-[#e51e25] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-500/25 hover:bg-[#c9181e] transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Us Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* 3. HERO CONTENT CONTAINER (Ready for text & badges) */}
      <main className="relative flex-1 w-full max-w-[1380px] mx-auto z-10 pointer-events-none">
        {/* Placeholder ready for text content */}
      </main>

    </div>
  );
}