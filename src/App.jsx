import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import HeroAndNavbar from './components/HeroAndNavbar';
import WhyChooseUs from './components/WhyChooseUs';
import AboutServices from './components/AboutServices';
import Specializations from './components/Specializations';
import ServiceFeatures from './components/ServiceFeatures';
import EasyProcess from './components/EasyProcess';
import BrandsSection from './components/BrandsSection';
import Testimonials from './components/Testimonials';
import CoverageArea from './components/CoverageArea';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data/asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader fullScreen={true} />;
  }

  return (
    <div className="w-full min-h-screen bg-[#FAFAFC] flex flex-col">
      <HeroAndNavbar />
      <WhyChooseUs />
      <AboutServices />
      <Specializations />
      <ServiceFeatures />
      <EasyProcess />
      <BrandsSection />
      <Testimonials />
      <CoverageArea />
      <FaqSection />
      <ContactSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}
