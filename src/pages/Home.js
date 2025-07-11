import React from 'react';
import HeroSection from '../components/HeroSection';
import CounterSection from '../components/CounterSection';
import AboutSection from '../components/AboutSection';
import OfferingsSection from '../components/OfferingsSection';
import WhySection from '../components/WhySection';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <CounterSection />
      <AboutSection />
      <OfferingsSection />
      <WhySection />
      <Footer />
    </>
  );
}

export default Home;
