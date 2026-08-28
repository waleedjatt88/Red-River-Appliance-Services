import React from 'react';
import footerLogo from '../assets/footer logo.png';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Wrench, 
  ShieldCheck 
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Our Brands', href: '#brands' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    'Washer Repair',
    'Dryer Repair',
    'Refrigerator Repair',
    'Oven & Stove Repair',
    'Dishwasher Repair',
    'Microwave Repair',
  ];

  return (
    <footer className="w-full bg-[#181a1f] text-gray-300 pt-16 pb-8 select-none border-t border-slate-800/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-[#2a2d35]">
          
          {/* Column 1: Branding & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Footer Logo */}
            <div className="flex items-center">
              <img
                src={footerLogo}
                alt="Red River Appliance Service"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-400 text-xs sm:text-[13.5px] leading-relaxed max-w-sm">
              Professional appliance repair services in Winnipeg. We repair all major brands with fast, reliable and affordable solutions.
            </p>

            {/* Social Icons (Crisp SVGs) */}
            <div className="flex items-center gap-2.5 pt-2">
              
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-[34px] h-[34px] rounded-full bg-[#262930] text-white flex items-center justify-center hover:bg-[#D31820] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-[34px] h-[34px] rounded-full bg-[#262930] text-white flex items-center justify-center hover:bg-[#D31820] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-[34px] h-[34px] rounded-full bg-[#262930] text-white flex items-center justify-center hover:bg-[#D31820] transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-[34px] h-[34px] rounded-full bg-[#262930] text-white flex items-center justify-center hover:bg-[#D31820] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

            </div>

          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              QUICK LINKS
            </h4>
            
            <ul className="space-y-2 text-xs sm:text-[13.5px]">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between text-gray-400 hover:text-white transition-colors group max-w-[140px]"
                  >
                    <span>{item.name}</span>
                    <span className="text-gray-600 group-hover:text-[#D31820] text-xs font-bold transition-colors">
                      ›
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              SERVICES
            </h4>

            <ul className="space-y-3 text-xs sm:text-[13.5px]">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors group"
                  >
                    <Wrench className="w-3.5 h-3.5 text-[#D31820] shrink-0" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              CONTACT US
            </h4>

            <ul className="space-y-4 text-xs sm:text-[13px] text-gray-400">
              
              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#D31820] shrink-0" />
                <a href="tel:2041234567" className="hover:text-white transition">
                  (204) 123-4567
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D31820] shrink-0" />
                <a href="mailto:info@redriverrepair.ca" className="hover:text-white transition">
                  info@redriverrepair.ca
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D31820] shrink-0 mt-0.5" />
                <span>
                  123 Main Street, Winnipeg, MB<br />R3B 1A1
                </span>
              </li>

              {/* Operating Hours */}
              <li className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#D31820] shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 8:00 AM – 8:00 PM<br />
                  Sun: 9:00 AM – 5:00 PM
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar: 3 Summary Items */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-xs text-gray-400">
          
          {/* Item 1: Serving Winnipeg */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#27151a] flex items-center justify-center text-[#D31820] shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D31820]" />
            </div>
            <div className="text-left">
              <span className="block font-bold text-gray-200">
                Proudly Serving Winnipeg
              </span>
              <span className="block text-[11px] text-gray-500">
                Red River Same-Day Repair Service Zone
              </span>
            </div>
          </div>

          {/* Item 2: Average Response Time */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#27151a] flex items-center justify-center text-[#D31820] shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#D31820]" />
            </div>
            <div className="text-left">
              <span className="block font-bold text-gray-200">
                Average response time: Under 2 hours
              </span>
              <span className="block text-[11px] text-gray-500">
                Locally dispatched technicians
              </span>
            </div>
          </div>

          {/* Item 3: Copyright */}
          <div className="text-center md:text-right text-[11px] text-gray-500">
            <span>© {new Date().getFullYear()} Red River Appliance Repair.</span><br />
            <span>All rights reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
