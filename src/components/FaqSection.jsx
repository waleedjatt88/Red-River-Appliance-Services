import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: 'Why do I need to pay for a service call (diagnostics)?',
      answer:
        'This involves contacting a technician to visit the site and conduct on-site diagnostics.',
    },
    {
      id: 2,
      question: 'How much warranty do I have for a replaced part?',
      answer:
        'All replaced manufacturer parts are backed with our comprehensive 90-day parts and labor guarantee.',
    },
    {
      id: 3,
      question: 'Do your repairs come with a warranty?',
      answer:
        'Yes, every repair service comes backed by our dependable 3-month peace of mind warranty covering both labor and parts.',
    },
    {
      id: 4,
      question: 'If a customer proceeds with the repair, does he need to pay for diagnostics?',
      answer:
        'When you proceed with the recommended repair service, the initial diagnostic fee is applied directly toward your total repair bill.',
    },
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="relative w-full py-20 lg:py-28 overflow-hidden select-none"
      style={{
        background: 'linear-gradient(135deg, rgba(211, 24, 32, 0.06) 0%, #FFFFFF 50%, rgba(211, 24, 32, 0.12) 100%)'
      }}
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-[rgba(211,24,32,0.06)] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[rgba(211,24,32,0.08)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 lg:mb-16">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <span className="text-[#D31820] text-xs font-bold">⚡</span>
            <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-[#D31820]">
              HAVE QUESTIONS?
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-gray-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(faq.id)}
                className={`rounded-[24px] sm:rounded-[26px] transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? 'bg-[#D31820] text-white p-6 sm:p-7 shadow-xl shadow-red-600/25 scale-[1.01]'
                    : 'bg-white text-gray-900 p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/90 hover:border-red-200/90 hover:shadow-md'
                }`}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-base sm:text-[17px] font-bold leading-snug ${
                      isOpen ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {faq.question}
                  </h3>

                  {/* Toggle Button Icon */}
                  {isOpen ? (
                    <div className="w-8 h-8 rounded-full bg-white text-[#D31820] flex items-center justify-center shrink-0 shadow-md">
                      <ChevronUp className="w-5 h-5 text-[#D31820]" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-gray-700">
                      <ChevronDown className="w-5 h-5 text-gray-700" />
                    </div>
                  )}
                </div>

                {/* Expanded Answer */}
                {isOpen && (
                  <div className="pt-3.5 mt-1 border-t border-white/20 text-xs sm:text-[14px] leading-relaxed text-white/95 font-normal animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Link */}
        <div className="text-center pt-12">
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            Still have questions? Connect with our team –{' '}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-[#D31820] font-bold hover:underline ml-1"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
