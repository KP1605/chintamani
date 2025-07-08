import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import CounterSection from '../components/CounterSection';
import AboutSection from '../components/AboutSection';
import OfferingsSection from '../components/OfferingsSection';
import WhySection from '../components/WhySection';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CounterSection />
      <AboutSection />
      <OfferingsSection />
      <WhySection />
    </>
  );
}

export default Home;
