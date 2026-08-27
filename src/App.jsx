import React from 'react';
import HeroAndNavbar from './components/HeroAndNavbar';
import WhyChooseUs from './components/WhyChooseUs';
import AboutServices from './components/AboutServices';
import Specializations from './components/Specializations';
import ServiceFeatures from './components/ServiceFeatures';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa]">
      <HeroAndNavbar />
      <WhyChooseUs />
      <AboutServices />
      <Specializations />
      <ServiceFeatures />
    </div>
  );
}
