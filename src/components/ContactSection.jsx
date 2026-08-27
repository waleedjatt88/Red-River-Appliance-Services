import React, { useState } from 'react';
import contactBg from '../assets/email us today.png';
import { 
  User, 
  Mail, 
  Phone, 
  Wrench, 
  Shield, 
  Package, 
  Search, 
  Plus, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState('Repair');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    issue: '',
  });

  const services = [
    { id: 'Repair', label: 'Repair', icon: Wrench },
    { id: 'Maintenance', label: 'Maintenance', icon: Shield },
    { id: 'Installation', label: 'Installation', icon: Package },
    { id: 'Inspection', label: 'Inspection', icon: Search },
    { id: 'Other', label: 'Other', icon: Plus },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      id="contact"
      className="relative w-full min-h-[750px] lg:min-h-[850px] bg-white py-16 lg:py-24 overflow-hidden select-none flex items-center"
    >
      {/* 1. Full-Width Background Artwork */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src={contactBg}
          alt="Contact Red River Appliance Services Background"
          className="w-full h-full object-cover object-left-bottom lg:object-bottom"
        />
        {/* Soft gradient overlay on mobile for clear text readability */}
        <div className="absolute inset-0 bg-white/90 sm:bg-white/70 lg:hidden" />
      </div>

      {/* 2. Content & Form Wrapper */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-5 space-y-4 lg:space-y-6 max-w-lg lg:mb-auto lg:pt-4">
            
            {/* Top Dot Tag */}
            <div className="flex items-center gap-2 text-xs font-black text-[#D31820] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D31820]" />
              <span>GET IN TOUCH</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-gray-950 leading-[1.12] tracking-tight">
              Call or <br />
              <span className="text-[#D31820]">Email Us Today</span>
            </h2>

            {/* Description Subtext */}
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              Connect with us today to explore how our expertise can help you with your repair needs. Call at{' '}
              <a href="tel:4316688184" className="font-bold text-gray-900 hover:text-[#D31820] transition-colors">
                431-668-8184
              </a>{' '}
              or fill out the form below and describe the problem you have.
            </p>

          </div>

          {/* Right Column: Inquiry Form Card with Exact Figma Shadows */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100/90 w-full max-w-[580px] relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-red-50 text-[#D31820] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#D31820]" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <span className="font-bold text-gray-900">{formData.fullName || 'valued customer'}</span>. A technician will contact you shortly regarding your {selectedService} request.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', issue: '' });
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs hover:bg-[#D31820] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-900">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#f8f9fa] border border-gray-200/90 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#D31820] focus:ring-1 focus:ring-[#D31820] transition"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-900">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#f8f9fa] border border-gray-200/90 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#D31820] focus:ring-1 focus:ring-[#D31820] transition"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Row 2: Phone Number */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-900">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        required
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f8f9fa] border border-gray-200/90 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#D31820] focus:ring-1 focus:ring-[#D31820] transition"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Required (5 Selectable Cards) */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-bold text-gray-900">
                      Service Required
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {services.map((item) => {
                        const Icon = item.icon;
                        const isSelected = selectedService === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedService(item.id)}
                            className={`p-2.5 rounded-2xl border flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer h-20 ${
                              isSelected
                                ? 'bg-red-50/60 border-[#D31820] text-[#D31820] shadow-sm'
                                : 'bg-white border-gray-200/80 text-gray-700 hover:border-gray-300'
                            }`}
                          >
                            <Icon
                              className={`w-4 h-4 ${
                                isSelected ? 'text-[#D31820]' : 'text-gray-600'
                              }`}
                            />
                            <span className="text-[11px] font-bold leading-tight">
                              {item.label}
                            </span>
                            {/* Selection Radio Dot */}
                            <span
                              className={`w-2 h-2 rounded-full border ${
                                isSelected
                                  ? 'bg-[#D31820] border-[#D31820]'
                                  : 'border-gray-300 bg-transparent'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Tell Us About Your Issue */}
                  <div className="space-y-1 pt-1">
                    <label className="block text-xs font-bold text-gray-900">
                      Tell Us About Your Issue
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Provide details about your appliance issue (e.g. brand, symptoms, error codes)..."
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full bg-[#f8f9fa] border border-gray-200/90 rounded-2xl p-3.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#D31820] focus:ring-1 focus:ring-[#D31820] transition resize-none"
                    />
                  </div>

                  {/* Row 5: Submit Inquiry Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-[#D31820] hover:bg-[#b5141b] text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
