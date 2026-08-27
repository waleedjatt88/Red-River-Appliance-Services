import React from 'react';
import HeroAndNavbar from './components/HeroAndNavbar';
import WhyChooseUs from './components/WhyChooseUs';
import AboutServices from './components/AboutServices';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa]">
      <HeroAndNavbar />
      <WhyChooseUs />
      <AboutServices />
    </div>
  );
}
