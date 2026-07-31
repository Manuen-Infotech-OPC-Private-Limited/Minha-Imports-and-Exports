import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/layout/Hero';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Products from '../components/sections/Products';
import OurProcess from '../components/sections/OurProcess';
import GlobalPresence from '../components/sections/GlobalPresence';
import DomesticMarket from '../components/sections/DomesticMarket';
import FlagsMarquee from '../components/layout/FlagsMarquee';
import Testimonials from '../components/sections/Testimonials';
import ContactSection from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <SEO
        title="Guntur Dry Red Chilli Exporter | Minha Imports & Exports"
        description="India's trusted Guntur Dry Red Chilli and Chilli Powder exporter. Bulk Indian Chilli Supplier for spice industries worldwide. FSSAI, APEDA & ISO certified."
        keywords="Guntur Dry Red Chillies, Chilli Exporter India, Chilli Powder Exporter, Indian Chilli Supplier, Bulk Chilli Supplier, dry red chilli export India"
        url="/"
      />
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <OurProcess />
      <GlobalPresence />
      <DomesticMarket />
      <FlagsMarquee />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default Home;
