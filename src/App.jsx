import React from 'react';
import HeroAndNavbar from './components/HeroAndNavbar';
import WhyChooseUs from './components/WhyChooseUs';
import AboutServices from './components/AboutServices';
import Specializations from './components/Specializations';
import ServiceFeatures from './components/ServiceFeatures';
import EasyProcess from './components/EasyProcess';
import BrandsSection from './components/BrandsSection';
import Testimonials from './components/Testimonials';
import CoverageArea from './components/CoverageArea';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa]">
      <HeroAndNavbar />
      <WhyChooseUs />
      <AboutServices />
      <Specializations />
      <ServiceFeatures />
      <EasyProcess />
      <BrandsSection />
      <Testimonials />
      <CoverageArea />
    </div>
  );
}
