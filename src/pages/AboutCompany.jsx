import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiTarget,
  FiGlobe,
  FiEye,
  FiShield,
  FiCheckCircle,
  FiHeart,
  FiActivity,
  FiLayers,
  FiTruck,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight
} from 'react-icons/fi';
import cooDavidChen from '../assets/coo_david_chen.png';
import aboutHeroBg from '../assets/about_hero_bg.png';
import dryChilliSortingFacility from '../assets/dry_chilli_sorting_facility.png';
import immersiveSpiceBg from '../assets/immersive_spice_bg.png';
import worldMapSvg from '../assets/world-map.svg';
import founder1 from '../assets/founder1.png';
import founder2 from '../assets/founder2.png';
import CountUp from '../components/common/CountUp';
import useStageProgress from '../hooks/useStageProgress';
import SectionHeading from '../components/common/SectionHeading';

const OdometerYear = ({ year, color }) => {
  const digits = year.split('');
  return (
    <div className="flex font-['urbanist'] font-black text-[72px] sm:text-[88px] lg:text-[108px] leading-none select-none tracking-tighter">
      {digits.map((digit, idx) => {
        const val = parseInt(digit) || 0;
        return (
          <div
            key={idx}
            className="overflow-hidden relative"
            style={{
              width: '0.7em',
              height: '1.28em',
              marginRight: idx < digits.length - 1 ? '-0.1em' : '0'
            }}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: `-${val * 1.28}em` }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 14,
                delay: idx * 0.05
              }}
              className="absolute left-0 top-0 w-full"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span
                  key={n}
                  className="block text-center bg-gradient-to-br bg-clip-text text-transparent"
                  style={{
                    height: '1.28em',
                    lineHeight: '1.28em',
                    backgroundImage: `linear-gradient(135deg, ${color}, #cca72f)`,
                  }}
                >
                  {n}
                </span>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

const AboutCompany = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTimelineYear, setActiveTimelineYear] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  // Interactive "Why Partner With Us" pipeline (auto-advances, click to control)
  const partner = useStageProgress(3, { autoPlay: true, interval: 2800 });

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);


  const values = [
    {
      id: 'integrity',
      num: '01',
      title: 'Integrity',
      icon: <FiShield className="text-2xl" />,
      desc: 'We believe that trust is built through honesty and transparency. We always communicate openly and do business with fairness and strong ethical values.',
      accentColor: '#8f000d',
    },
    {
      id: 'quality',
      num: '02',
      title: 'Quality',
      icon: <FiCheckCircle className="text-2xl" />,
      desc: 'Quality is at the heart of everything we do. Every batch of chilli is carefully selected and processed to meet high standards for color, spice level, freshness, and export quality.',
      accentColor: '#2c6a46',
    },
    {
      id: 'commitment',
      num: '03',
      title: 'Customer Commitment',
      icon: <FiHeart className="text-2xl" />,
      desc: 'Our customers always come first. From your first inquiry to the final delivery, we provide reliable service and support to build long-lasting partnerships.',
      accentColor: '#cca72f',
    },
    {
      id: 'transparency',
      num: '04',
      title: 'Transparency',
      icon: <FiEye className="text-2xl" />,
      desc: 'We believe in keeping our customers informed. Every product can be traced from the farm to the final shipment, giving you confidence in its quality and safety.',
      accentColor: '#8f000d',
    },
    {
      id: 'sustainability',
      num: '05',
      title: 'Sustainability',
      icon: <FiActivity className="text-2xl" />,
      desc: 'We support farming practices that protect the environment, make better use of natural resources, and help our farming communities grow for the future.',
      accentColor: '#2c6a46',
    },
    {
      id: 'standards',
      num: '06',
      title: 'Global Standards',
      icon: <FiGlobe className="text-2xl" />,
      desc: 'We follow international food safety and quality standards to ensure our products meet the requirements of customers across the world.',
      accentColor: '#cca72f',
    }
  ];

  const pillars = [
    {
      id: 'mission',
      label: 'Our Mission',
      icon: <FiTarget className="text-xl" />,
      tagline: 'Customer Sourcing Focus',
      content: (
        <>
          At Minha Imports & Exports, we believe that our customers are at the heart of everything we do. Our goal is to deliver high-quality products that meet each customer's needs and expectations. From sourcing the finest spices to processing and delivering them with care, we focus on maintaining consistent quality at every step. We are committed to building long-term relationships by offering reliable products, excellent service, and value our customers can trust.
        </>
      )
    },
    {
      id: 'policy',
      label: 'Protect & Produce Policy',
      icon: <FiActivity className="text-xl" />,
      tagline: 'Quality Standards Frame',
      content: (
        <>
          We believe in growing together with our customers by sharing our knowledge and experience. Our <strong className="font-extrabold text-white">Protect & Produce</strong> approach helps us maintain high-quality standards at every stage. By using the best raw materials, modern technology, and trusted processing methods, we ensure that every product is made with care and delivered to meet the needs of customers around the world.
        </>
      )
    },
    {
      id: 'security',
      label: 'Supply Security',
      icon: <FiShield className="text-xl" />,
      tagline: 'Food Safety Framework',
      content: (
        <>
          We are committed to providing a steady supply of natural, safe, and high-quality spices to our customers. Our experienced team works with care, dedication, and attention to detail at every stage, ensuring that every product meets the highest quality standards before it reaches customers around the world.
        </>
      )
    },
    {
      id: 'commitment',
      label: 'Commitment',
      icon: <FiHeart className="text-xl" />,
      tagline: 'Socio-Environmental Pledge',
      content: (
        <>
          We believe in being responsible to our customers, our employees, and the environment. At Minha Imports & Exports, we keep our promises, build strong relationships based on trust, and work in a way that supports sustainable growth. Our goal is to create lasting value while giving back to the people and communities we work with.
        </>
      )
    }
  ];

  const timelineData = [
    {
      year: '2013',
      title: 'Export Origins',
      subtitle: 'Started with export focus',
      desc: 'Minha Imports & Exports started with a simple goal—to connect Guntur\'s finest chillies with customers around the world. By working closely with local farmers and supplying premium dry red chillies, we built strong relationships with our first global export partners.',
      tag: 'Export Launch',
      accent: '#8f000d',
    },
    {
      year: '2016',
      title: 'Company Establishment',
      subtitle: 'Streamlining Guntur chilli trade',
      desc: 'Founded with a vision to streamline the dry red chilli export market from Guntur and resolve supply chain fragmentation. We set up our initial sourcing channels and defined our standard operating procedures.',
      tag: 'Launch Milestone',
      accent: '#2c6a46',
    },
    {
      year: '2019',
      title: 'Export Expansion',
      subtitle: 'State-of-the-art facilities',
      desc: 'Established full-scale state-of-the-art processing and grading units. Successfully fulfilled major international contracts in SE Asia and scaled operations under strict export guidelines.',
      tag: 'Infrastructure Growth',
      accent: '#cca72f',
    },
    {
      year: '2022',
      title: 'Global Reach',
      subtitle: 'Expanding to 15+ countries',
      desc: 'Extended distribution and trade routes, exporting premium products to over 15 countries across Europe, the Middle East, and the Americas, while securing compliance certifications for every port.',
      tag: 'Global Scale',
      accent: '#8f000d',
    },
    {
      year: '2026',
      title: 'Domestic Market Entry',
      subtitle: 'Now serving India too',
      desc: 'After years of export success, Minha expanded into the domestic market in 2026, delivering quality Guntur chillies across India while continuing to serve global customers.',
      tag: 'Domestic Expansion',
      accent: '#1f5e3b',
    }
  ];

  const handlePrevYear = () => {
    setSlideDirection(-1);
    setActiveTimelineYear((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };

  const handleNextYear = () => {
    setSlideDirection(1);
    setActiveTimelineYear((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  const changeTimelineYear = (newIdx) => {
    setSlideDirection(newIdx > activeTimelineYear ? 1 : -1);
    setActiveTimelineYear(newIdx);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      <SEO
        title="About Us | Minha Imports & Exports"
        description="Learn about Minha Imports & Exports — Guntur's leading dry red chilli and spice exporter and domestic supplier. FSSAI, APEDA & ISO certified. Direct farm-to-port supply chain since 2013."
        keywords="Minha Imports Exports, About Minha, Guntur Chilli Exporter, Indian Spice Company, Chilli Exporter India, APEDA certified exporter"
        url="/about"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
            { '@type': 'ListItem', position: 2, name: 'Our Company', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/about' },
          ],
        }]}
      />

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          ref={imgRef}
          alt="Premium Chilli Sourcing Fields"
          className={`absolute inset-0 w-full h-full object-cover object-[center_35%] transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          src={aboutHeroBg}
          onLoad={() => setImageLoaded(true)}
          fetchPriority="high"
          loading="eager"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Our Company</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            About Minha
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Delivering Quality, Trust, and Excellence in Global Chilli Exports. We bridge the gap between local agricultural excellence and international demand.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#2c6a46]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              alt="Dry red chilli processing and sorting facility"
              className="relative rounded-xl shadow-xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src={dryChilliSortingFacility}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <SectionHeading
              align="left"
              kicker="Our story"
              title={
                <>
                  A legacy of precision and <span className="text-[#8f000d]">pure spices</span>
                </>
              }
              className="mb-4"
              showLeftLine={true}
              showRightLine={false}
            />
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
              Minha Imports & Exports has been connecting the rich chilli farms of Guntur with customers around the world since 2013. Being located in Guntur, one of Asia's largest spice markets, helps us work closely with trusted farmers and source the best-quality chillies during every harvest season.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
              Our quality journey begins with carefully selecting each batch of chillies. Our experienced team removes damaged, discolored, and low-quality chillies to ensure only the best are processed. We also maintain the right moisture levels and sort the chillies by size to keep the quality consistent and fresh, even during long-distance shipping.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
              We follow strict quality and export standards with certifications from FSSAI, APEDA, and ISO. Along with supplying premium products, we provide reliable shipping, complete export documentation, and dedicated customer support, making every shipment smooth and hassle-free for our global partners.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20am%20interested%20in%20a%20B2B%20partnership%20for%20chilli%20export.%20Please%20share%20your%20company%20profile%20and%20export%20terms."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8f000d] text-white px-8 py-3.5 rounded-lg font-['urbanist'] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8f000d]/90 hover:shadow-primary/20 transition-all active:scale-95"
              >
                Contact Us
              </a>
              <Link
                to="/quality"
                className="border-2 border-[#2c6a46] text-[#2c6a46] px-8 py-3 rounded-lg font-['urbanist'] font-bold text-xs uppercase tracking-wider hover:bg-[#2c6a46]/5 transition-all active:scale-95"
              >
                Export Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Mission, Policy & Commitment - Immersive Switcher Card */}
      <section className="py-10 md:py-14 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <SectionHeading
            align="center"
            kicker="Our foundation"
            title={
              <>
                Mission, policy and <span className="text-[#8f000d]">commitment</span>
              </>
            }
            intro="Discover our core frameworks, standards, and values that guide every export transaction and operational process."
            className="mb-10"
            showRightLine={true}
          />

          {/* Immersive Img Card Container */}
          <div className="relative w-full min-h-[520px] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-neutral-800 bg-neutral-950">
            {/* Background Image of Card */}
            <div className="absolute inset-0 z-0">
              <img
                alt="Moody dried red chillies and rich warm spices"
                className="w-full h-full object-cover opacity-35"
                src={immersiveSpiceBg}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,.38) 0%, rgba(0,0,0,.32) 40%, rgba(0,0,0,.35) 100%)"
                }}
              />
            </div>

            {/* Inner Content Grid */}
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch">

              {/* Left Column Navigation Panel (1/3 Width) */}
              <div className="w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-10 flex flex-col justify-center gap-3">
                <span className="font-['urbanist'] font-bold text-[10px] tracking-[0.2em] text-[#cca72f] uppercase block mb-4 text-left">
                  Explore Foundations
                </span>

                <div className="flex flex-col gap-3">
                  {pillars.map((pillar, idx) => {
                    const isActive = activeSection === idx;
                    return (
                      <button
                        key={pillar.id}
                        onClick={() => setActiveSection(idx)}
                        onMouseEnter={() => setActiveSection(idx)}
                        className={`flex items-center gap-4 px-6 py-4 rounded-xl font-['urbanist'] font-bold text-xs uppercase tracking-wider transition-all duration-300 w-full text-left focus:outline-none ${isActive
                          ? 'bg-white/15 text-white border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.05)]'
                          : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                          }`}
                      >
                        <div className={`p-2.5 rounded-lg transition-all duration-300 ${isActive ? 'bg-[#cca72f] text-black scale-110' : 'bg-white/5 text-white/50'}`}>
                          {pillar.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="text-white font-bold text-[12px]">{pillar.label}</div>
                          <div className={`text-[9px] font-medium tracking-normal normal-case transition-colors duration-300 ${isActive ? 'text-[#cca72f]' : 'text-white/35'}`}>
                            {pillar.tagline}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column Content Panel (2/3 Width) */}
              <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-left relative min-h-[350px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-6"
                  >
                    {/* <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-white/10 text-[#cca72f] border border-white/5 shadow-sm`}>
                        {pillars[activeSection].icon}
                      </div>
                      <div>
                        <span className="font-['urbanist'] font-semibold text-[10px] tracking-[0.15em] text-[#cca72f] uppercase block">
                          Minha imports & exports
                        </span>
                      </div>
                    </div> */}

                    <h3 className="font-['urbanist'] font-extrabold text-[28px] md:text-[34px] lg:text-[40px] leading-tight text-white border-l-4 border-[#cca72f] pl-6">
                      {pillars[activeSection].label}
                    </h3>

                    <p className="font-body-lg text-white/85 text-[15px] md:text-[17px] leading-[1.7] text-justify font-semibold">
                      {pillars[activeSection].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Values - Staggered Wave Grid */}
      <section className="py-12 md:py-14 bg-surface border-y border-neutral-200 relative overflow-hidden">

        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <SectionHeading
            align="left"
            kicker="The Minha way"
            title={
              <>
                Core values that <span className="text-[#8f000d]">drive us</span>
              </>
            }
            intro="Our values guide every relationship we build—from the farmers we work with to the customers we serve across the world. We believe in creating lasting partnerships based on trust, quality, and mutual growth."
            className="mb-10"
            showLeftLine={true}
            showRightLine={false}
          />
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {values.map((val) => (
              <div
                key={val.id}
                className="group border-neutral-200 rounded-xl p-7 md:p-8 transition-all duration-300 hover:bg-[#FFFDF9] hover:border-neutral-300 hover:shadow-[0_16px_35px_-24px_rgba(0,0,0,0.12)]"
              >
                {/* Accent Bar */}
                <div
                  className="w-10 h-[3px] rounded-full mb-5"
                  style={{
                    backgroundColor: val.accentColor,
                  }}
                />
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    color: val.accentColor,
                    backgroundColor: `${val.accentColor}10`,
                  }}
                >
                  {val.icon}
                </div>
                {/* Title */}
                <h4
                  className="font-['urbanist'] font-bold text-[20px] mb-3 leading-tight transition-colors duration-300"
                  style={{
                    color: '#1a1c1e',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = val.accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#1a1c1e';
                  }}
                >
                  {val.title}
                </h4>
                {/* Description */}
                <p className="font-['Nunito'] text-[14px] leading-6 text-[#5f5b58] mb-6">
                  {val.desc}
                </p>
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span
                    className="font-['urbanist'] font-semibold text-[12px] uppercase tracking-[0.16em]"
                    style={{
                      color: val.accentColor,
                    }}
                  >
                    Principle
                  </span>
                  <span className="font-['urbanist'] text-neutral-300 font-bold text-base">
                    {val.num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Journey Timeline - Interactive Horizontal Slider */}
      <section className="py-10 md:py-14 bg-surface-container-high relative overflow-hidden border-y border-neutral-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">

          <style>{`
            @keyframes progressStreak {
              0% { left: -40%; }
              100% { left: 100%; }
            }
            @keyframes haloPulse {
              0% { transform: scale(1); opacity: 0.6; }
              100% { transform: scale(1.8); opacity: 0; }
            }
          `}</style>

          <SectionHeading
            align="center"
            kicker="Our evolution"
            title={
              <>
                Our journey and <span className="text-[#8f000d]">milestones</span>
              </>
            }
            intro="Follow the journey of Minha Imports & Exports, from our humble beginnings to becoming a trusted exporter serving customers across the globe."
            className="mb-10"
            showRightLine={true}
          />

          {/* Progress Wavy Track for Desktop / Tablet (screens >= md) */}
          <div className="hidden md:block relative w-full max-w-3xl mx-auto h-[140px] mb-8 mt-12 select-none">
            <svg viewBox="0 0 800 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="wavy-timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="10%" stopColor="#8f000d" />
                  <stop offset="30%" stopColor="#2c6a46" />
                  <stop offset="50%" stopColor="#cca72f" />
                  <stop offset="70%" stopColor="#8f000d" />
                  <stop offset="90%" stopColor="#1f5e3b" />
                </linearGradient>
              </defs>
              {/* Background Path line */}
              <path
                d="M 50,90 L 100,90 C 170,90 210,90 250,90 C 320,90 360,30 400,30 C 440,30 480,90 550,90 C 620,90 660,90 700,90 L 750,90"
                stroke="#e5e7eb"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Dynamic Gradient Path */}
              <path
                d="M 50,90 L 100,90 C 170,90 210,90 250,90 C 320,90 360,30 400,30 C 440,30 480,90 550,90 C 620,90 660,90 700,90 L 750,90"
                stroke="url(#wavy-timeline-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Interactive Nodes */}
              {timelineData.map((item, idx) => {
                const isActive = idx === activeTimelineYear;
                const cx = [100, 250, 400, 550, 700][idx];
                const cy = idx === 2 ? 30 : 90;
                return (
                  <g key={item.year} className="cursor-pointer group" onClick={() => changeTimelineYear(idx)}>
                    <circle cx={cx} cy={cy} r="16" fill={item.accent} opacity={isActive ? 0.25 : 0} className="transition-all duration-300" />
                    <circle cx={cx} cy={cy} r="10" fill={item.accent} className="transition-transform duration-300 group-hover:scale-110 origin-center" style={{ transformOrigin: `${cx}px ${cy}px` }} />
                    <circle cx={cx} cy={cy} r="5" fill="#fff" />
                  </g>
                );
              })}
            </svg>
            {/* Year Labels Overlay absolute */}
            {timelineData.map((item, idx) => {
              const isActive = idx === activeTimelineYear;
              const leftPercent = ['12.5%', '27.5%', '47.5%', '67.5%', '87.5%'][idx];
              const topVal = idx === 2 ? '50%' : '45%';
              return (
                <button
                  key={item.year}
                  onClick={() => changeTimelineYear(idx)}
                  className="absolute font-['urbanist'] font-extrabold text-[13px] md:text-sm tracking-wider transition-all duration-300 select-none -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                  style={{
                    left: leftPercent,
                    top: topVal,
                    color: isActive ? item.accent : '#9ca3af'
                  }}
                >
                  {item.year}
                </button>
              );
            })}
          </div>

          {/* Progress Bar Line for Mobile (screens < md) */}
          <div className="md:hidden w-full max-w-[280px] mx-auto h-[3px] bg-neutral-200 relative mb-10 mt-16 flex justify-between items-center px-1">
            <div
              className="absolute h-[3px] left-0 top-0 transition-all duration-500 ease-out"
              style={{
                width: `${(activeTimelineYear / (timelineData.length - 1)) * 100}%`,
                backgroundColor: timelineData[activeTimelineYear].accent,
              }}
            />
            {timelineData.map((item, idx) => {
              const isActive = idx === activeTimelineYear;
              return (
                <button
                  key={item.year}
                  onClick={() => changeTimelineYear(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none cursor-pointer"
                >
                  <span
                    className="absolute -top-7 font-['urbanist'] font-extrabold text-[12px] tracking-wider transition-all duration-300"
                    style={{ color: isActive ? item.accent : '#9ca3af' }}
                  >
                    {item.year}
                  </span>
                  <div
                    className="w-5 h-5 rounded-full border-4 bg-white transition-all duration-300 flex items-center justify-center"
                    style={{ borderColor: isActive || idx < activeTimelineYear ? item.accent : '#e5e7eb' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                      style={{ backgroundColor: isActive || idx < activeTimelineYear ? item.accent : 'transparent' }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Milestone Showcase Card */}
          <div className="w-full max-w-4xl mx-auto relative px-0 md:px-20">

            {/* Left and Right Chevron Navigation Buttons */}
            <button
              onClick={handlePrevYear}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-neutral-100 shadow-md hover:bg-neutral-50 hover:scale-105 active:scale-95 transition-all text-neutral-600 focus:outline-none cursor-pointer hidden md:block"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={handleNextYear}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-neutral-100 shadow-md hover:bg-neutral-50 hover:scale-105 active:scale-95 transition-all text-neutral-600 focus:outline-none cursor-pointer hidden md:block"
            >
              <FiChevronRight className="text-xl" />
            </button>

            <div
              className="bg-white rounded-[2.5rem] shadow-premium-soft border border-neutral-100/80 p-8 md:p-12 min-h-[350px] relative overflow-hidden flex items-stretch z-10"
            >

              <AnimatePresence mode="wait" custom={slideDirection}>
                <motion.div
                  key={activeTimelineYear}
                  custom={slideDirection}
                  variants={{
                    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
                    center: { opacity: 1, x: 0 },
                    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -50 : 50 })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 relative z-10"
                >
                  {/* Left Column (Huge Year Display) */}
                  <div className="w-full md:w-5/12 flex flex-col justify-center items-start text-left space-y-4">
                    <span
                      className="px-4 py-1.5 rounded-full font-['urbanist'] font-bold text-[10px] uppercase tracking-wider text-white"
                      style={{ backgroundColor: timelineData[activeTimelineYear].accent }}
                    >
                      {timelineData[activeTimelineYear].tag}
                    </span>

                    {/* Giant Gradient Year Text with Odometer Animation */}
                    <OdometerYear
                      year={timelineData[activeTimelineYear].year}
                      color={timelineData[activeTimelineYear].accent}
                    />
                  </div>

                  {/* Right Column (Milestone Details) */}
                  <div className="w-full md:w-7/12 flex flex-col justify-center text-left space-y-4">
                    <span className="font-['urbanist'] font-semibold text-[11px] tracking-[0.15em] text-[#cca72f] uppercase block">
                      {timelineData[activeTimelineYear].subtitle}
                    </span>
                    <h3 className="font-['urbanist'] font-extrabold text-[24px] md:text-[32px] text-[#1a1c1e] leading-tight">
                      {timelineData[activeTimelineYear].title}
                    </h3>
                    <p className="font-['Nunito'] font-semibold text-neutral-600 text-[15px] leading-relaxed">
                      {timelineData[activeTimelineYear].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Touch Arrows */}
            <div className="flex md:hidden justify-center items-center gap-6 mt-6">
              <button
                onClick={handlePrevYear}
                className="p-3 rounded-full bg-white border border-neutral-100 shadow-md hover:bg-neutral-50 active:scale-95 transition-all text-neutral-600 focus:outline-none"
              >
                <FiChevronLeft className="text-lg" />
              </button>
              <button
                onClick={handleNextYear}
                className="p-3 rounded-full bg-white border border-neutral-100 shadow-md hover:bg-neutral-50 active:scale-95 transition-all text-neutral-600 focus:outline-none"
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Leadership & Management */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <SectionHeading
            align="center"
            kicker="Leadership"
            title={
              <>
                Leadership and visionary <span className="text-[#8f000d]">management</span>
              </>
            }
            intro="Driven by years of experience in international trade, strong business relationships, and a commitment to delivering high-quality agricultural products."
            className="mb-10"
            showRightLine={true}
          />

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {/* Founder 1 Card */}
            <div className="bg-white rounded-[1.75rem] overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-500 flex flex-col text-left group">
              <div className="aspect-[3/4] max-h-[300px] overflow-hidden relative bg-[#f0efec]">
                <img
                  alt="Mr. Shaik Jani Basha"
                  className="w-full h-full object-cover object-[50%_8%] group-hover:scale-[1.02] transition-transform duration-700"
                  src={founder1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="font-['urbanist'] font-bold text-[9px] tracking-[0.18em] text-[#8f000d] uppercase block">Founder & Managing Director</span>
                  <h3 className="font-['urbanist'] font-extrabold text-[20px] text-[#1a1c1e] leading-tight">Mr. Shaik Jani Basha</h3>
                </div>

                <div className="border-l-4 border-[#cca72f] pl-4 italic text-neutral-600 text-[12px] leading-relaxed font-['Nunito']">
                  "Our mission is to establish Minha as the synonym of trust, quality, and purity in the global chilli market, connecting Guntur farmers with buyers."
                </div>

                <p className="text-on-surface-variant font-['Nunito'] font-semibold text-[12px] leading-relaxed">
                  With over 20 years of experience in global agricultural exports, Mr. Shaik Jani Basha founded Minha with a vision to bridge the gap between Indian spice heritage and global quality standards. He guides the company's long-term strategy.
                </p>
              </div>
            </div>

            {/* Founder 2 Card */}
            <div className="bg-white rounded-[1.75rem] overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-500 flex flex-col text-left group">
              <div className="aspect-[3/4] max-h-[300px] overflow-hidden relative bg-[#f0efec]">
                <img
                  alt="Mr. Moosa Maulavi Rafeekh"
                  className="w-full h-full object-cover object-[50%_8%] group-hover:scale-[1.02] transition-transform duration-700"
                  src={founder2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="font-['urbanist'] font-bold text-[9px] tracking-[0.18em] text-[#8f000d] uppercase block">Co-Founder & Chief Executive Officer</span>
                  <h3 className="font-['urbanist'] font-extrabold text-[20px] text-[#1a1c1e] leading-tight">Mr. Moosa Maulavi Rafeekh</h3>
                </div>

                <div className="border-l-4 border-[#cca72f] pl-4 italic text-neutral-600 text-[12px] leading-relaxed font-['Nunito']">
                  "Our goal is simple: to make Indian dry chillies the gold standard of quality and traceability in every international market we serve."
                </div>

                <p className="text-on-surface-variant font-['Nunito'] font-semibold text-[12px] leading-relaxed">
                  With over 15 years of experience in supply chain technology and global trade, Mr. Moosa Maulavi Rafeekh co-founded Minha to modernize agricultural exports. He oversees technology integration, logistics, and operational compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Global Presence */}
      <section className="py-10 md:py-14 bg-surface-container-low/40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">

          {/* Header */}
          <SectionHeading
            align="center"
            kicker="Global supply"
            title={
              <>
                Our international <span className="text-[#8f000d]">trade network</span>
              </>
            }
            intro="Based in Guntur, the heart of India's spice trade, Minha Imports & Exports supplies premium-quality red chillies to customers around the world. Every shipment is carefully prepared to meet international quality and export standards."
            className="mb-10"
            showRightLine={true}
          />

          {/* Large Dashboard Map Panel */}
          <div className="max-w-[1100px] mx-auto bg-white rounded-[2rem] border border-neutral-100/80 shadow-premium-soft p-6 md:p-10 relative overflow-hidden flex flex-col items-center">

            {/* Soft Ambient Corner Tints */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#cca72f]/3 rounded-full pointer-events-none blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8f000d]/3 rounded-full pointer-events-none blur-3xl" />

            {/* Map Frame */}
            <div
              style={{ aspectRatio: '784.077 / 458.627' }}
              className="relative w-full mb-8"
            >
              <img
                alt="Global export presence map graphic"
                className="absolute inset-0 w-full h-full opacity-[0.85] select-none pointer-events-none block"
                src={worldMapSvg}
              />

              {/* Gold/Red Pulsing Marker over Guntur, India */}
              <div className="absolute top-[55.3%] left-[72.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
                {/* Ping ring */}
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#8f000d]/60 animate-ping pointer-events-none" />
                {/* Core dot */}
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#8f000d] border-2 border-white shadow-md cursor-default" />
                {/* Tooltip badge */}
                <span className="mt-2.5 bg-neutral-900/90 text-white font-['urbanist'] font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg pointer-events-none flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] animate-pulse" />
                  Guntur origin
                </span>
              </div>
            </div>

            {/* Integrated Dividers Statistics Bar */}
            <div className="border-t border-neutral-100 w-full pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center">

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#8f000d]"><CountUp end={15} suffix="+" duration={1.6} className="inline-block" /></span>
                <span className="font-['urbanist'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Export Destinations
                </span>
                <span className="font-['Nunito'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Active container shipping routes worldwide.
                </span>
              </div>

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#2c6a46]"><CountUp end={200} suffix="+" duration={1.6} className="inline-block" /></span>
                <span className="font-['urbanist'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Containers / Year
                </span>
                <span className="font-['Nunito'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Consistent high-volume bulk supply logistics.
                </span>
              </div>

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#cca72f]"><CountUp end={100} suffix="%" duration={1.6} className="inline-block" /></span>
                <span className="font-['urbanist'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Sourcing Traceability
                </span>
                <span className="font-['Nunito'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  From Guntur farms to final shipment ports.
                </span>
              </div>

              <div className="space-y-1 last:border-0">
                <span className="block text-4xl font-extrabold text-[#8f000d]">24/7</span>
                <span className="font-['urbanist'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Logistics Support
                </span>
                <span className="font-['Nunito'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Real-time custom clearance coordination.
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Why Partner With Us (Horizontal Value Chain Pipeline) */}
      <section className="py-10 md:py-14 bg-surface border-t border-neutral-100 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <SectionHeading
            align="center"
            kicker="Our process"
            title={
              <>
                Our simple three-step <span className="text-[#8f000d]">process</span>
              </>
            }
            intro="We make it easy for global businesses to source premium red chillies from India with stable prices, clean quality, and fast shipping."
            className="mb-10"
            showRightLine={true}
          />

          {/* Pipeline Container */}
          <div className="relative w-full">
            {/* Horizontal progress track (desktop) — fills up to the active stage */}
            <div className="absolute top-8 left-[16%] right-[16%] h-[3px] bg-neutral-200 rounded-full -z-0 hidden lg:block">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out"
                style={{
                  width: `${(partner.activeStage / 2) * 100}%`,
                  background: 'linear-gradient(90deg, #2c6a46, #8f000d, #cca72f)',
                }}
              />
            </div>

            {/* Three Columns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">

              {/* Stage 1: Sourcing */}
              <div className="text-center space-y-6 group">
                <button
                  type="button"
                  onClick={() => partner.goToStage(0)}
                  aria-label="Show stage: Direct Sourcing"
                  className="w-16 h-16 mx-auto relative block rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
                  style={{ transform: partner.activeStage === 0 ? 'scale(1.12)' : undefined }}
                >
                  {/* Glow ring — replays on every click via keyed remount */}
                  {partner.activeStage === 0 && (
                    <span
                      key={partner.glowKey}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ border: '2px solid #2c6a46', animation: 'stageGlow 0.7s ease-out' }}
                    />
                  )}
                  {/* Core circle node */}
                  <span
                    className="w-full h-full rounded-full border-2 flex items-center justify-center relative z-10 transition-colors duration-300"
                    style={{
                      borderColor: partner.activeStage >= 0 ? '#2c6a46' : '#d4d4d4',
                      backgroundColor: partner.activeStage === 0 ? '#2c6a46' : '#ffffff',
                      boxShadow: partner.activeStage === 0 ? '0 8px 24px -6px rgba(44,106,70,0.4)' : '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-['urbanist'] font-bold py-0.5 px-2 rounded-full whitespace-nowrap transition-colors duration-300"
                      style={{ backgroundColor: partner.activeStage >= 0 ? '#2c6a46' : '#d4d4d4' }}
                    >
                      STAGE 01
                    </span>
                    <FiLayers
                      className="text-[20px] transition-colors duration-300"
                      style={{ color: partner.activeStage === 0 ? '#ffffff' : '#2c6a46' }}
                    />
                  </span>
                </button>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['urbanist'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Direct Sourcing
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#2c6a46]/5 text-[#2c6a46] font-['urbanist'] font-bold text-[10px] tracking-wide uppercase">
                    20+ Farmer Groups
                  </div>
                  <p className="font-['Nunito'] font-semibold text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    We buy chillies directly from farmer groups in Guntur. This gives us better quality control, stable prices, and helps us support local farming communities.
                  </p>
                </div>
              </div>

              {/* Stage 2: Quality */}
              <div className="text-center space-y-6 group">
                <button
                  type="button"
                  onClick={() => partner.goToStage(1)}
                  aria-label="Show stage: Tested Quality"
                  className="w-16 h-16 mx-auto relative block rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
                  style={{ transform: partner.activeStage === 1 ? 'scale(1.12)' : undefined }}
                >
                  {/* Glow ring — replays on every click via keyed remount */}
                  {partner.activeStage === 1 && (
                    <span
                      key={partner.glowKey}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ border: '2px solid #8f000d', animation: 'stageGlow 0.7s ease-out' }}
                    />
                  )}
                  {/* Core circle node */}
                  <span
                    className="w-full h-full rounded-full border-2 flex items-center justify-center relative z-10 transition-colors duration-300"
                    style={{
                      borderColor: partner.activeStage >= 1 ? '#8f000d' : '#d4d4d4',
                      backgroundColor: partner.activeStage === 1 ? '#8f000d' : '#ffffff',
                      boxShadow: partner.activeStage === 1 ? '0 8px 24px -6px rgba(143,0,13,0.4)' : '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-['urbanist'] font-bold py-0.5 px-2 rounded-full whitespace-nowrap transition-colors duration-300"
                      style={{ backgroundColor: partner.activeStage >= 1 ? '#8f000d' : '#d4d4d4' }}
                    >
                      STAGE 02
                    </span>
                    <FiCheckCircle
                      className="text-[20px] transition-colors duration-300"
                      style={{ color: partner.activeStage === 1 ? '#ffffff' : (partner.activeStage >= 1 ? '#8f000d' : '#9ca3af') }}
                    />
                  </span>
                </button>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['urbanist'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Tested Quality
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#8f000d]/5 text-[#8f000d] font-['urbanist'] font-bold text-[10px] tracking-wide uppercase">
                    100% Safe Spices
                  </div>
                  <p className="font-['Nunito'] font-semibold text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    Every batch of chillies is tested in laboratories. We check for moisture, pesticide levels, and colors to make sure they match global health standards.
                  </p>
                </div>
              </div>

              {/* Stage 3: Logistics */}
              <div className="text-center space-y-6 group">
                <button
                  type="button"
                  onClick={() => partner.goToStage(2)}
                  aria-label="Show stage: Fast Shipping"
                  className="w-16 h-16 mx-auto relative block rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
                  style={{ transform: partner.activeStage === 2 ? 'scale(1.12)' : undefined }}
                >
                  {/* Glow ring — replays on every click via keyed remount */}
                  {partner.activeStage === 2 && (
                    <span
                      key={partner.glowKey}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ border: '2px solid #cca72f', animation: 'stageGlow 0.7s ease-out' }}
                    />
                  )}
                  {/* Core circle node */}
                  <span
                    className="w-full h-full rounded-full border-2 flex items-center justify-center relative z-10 transition-colors duration-300"
                    style={{
                      borderColor: partner.activeStage >= 2 ? '#cca72f' : '#d4d4d4',
                      backgroundColor: partner.activeStage === 2 ? '#cca72f' : '#ffffff',
                      boxShadow: partner.activeStage === 2 ? '0 8px 24px -6px rgba(204,167,47,0.45)' : '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-['urbanist'] font-bold py-0.5 px-2 rounded-full whitespace-nowrap transition-colors duration-300"
                      style={{ backgroundColor: partner.activeStage >= 2 ? '#cca72f' : '#d4d4d4' }}
                    >
                      STAGE 03
                    </span>
                    <FiTruck
                      className="text-[20px] transition-colors duration-300"
                      style={{ color: partner.activeStage === 2 ? '#ffffff' : (partner.activeStage >= 2 ? '#cca72f' : '#9ca3af') }}
                    />
                  </span>
                </button>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['urbanist'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Fast Shipping
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#cca72f]/5 text-[#cca72f] font-['urbanist'] font-bold text-[10px] tracking-wide uppercase">
                    15+ Countries Served
                  </div>
                  <p className="font-['Nunito'] font-semibold text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    We book fast cargo ships and take care of all export paperwork. Your orders arrive at your port on time with no customs delays.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative w-full">
        <div className="relative rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-[0_35px_80px_rgba(0,0,0,0.18)] border border-white/[0.04] bg-gradient-to-br from-[#8f000d] via-[#5e0008] to-[#200002] group">

          {/* Subtle grid and glowing accents */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#cca72f]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#cca72f]/15 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Brand Quote (lg:col-span-5) */}
            <div className="relative space-y-4 text-center lg:text-left lg:border-r lg:border-white/10 lg:pr-8 xl:pr-12 lg:col-span-5 w-full z-10">
              <SectionHeading
                align="left"
                tone="light"
                kicker="Our story"
                kickerColor="#cca72f"
                title="Our sourcing promise"
                intro="Our story began in the fertile lands of Guntur with a simple belief—that the finest harvest deserves a place on the global stage. Today, every shipment carries the dedication of our farmers, the trust of our partners, and our promise of quality."
                className="mb-0"
                showLeftLine={true}
                showRightLine={false}
              />
              <div className="font-['urbanist'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white/40 relative z-10 mt-2">
                — The Minha Board of Directors
              </div>
            </div>

            {/* Right Column: CTA Content (lg:col-span-7) */}
            <div className="space-y-5 text-center lg:text-left lg:col-span-7 w-full">

              {/* Title */}
              <h2 className="font-['urbanist'] font-bold text-[22px] sm:text-[26px] md:text-[32px] leading-[1.2] text-white tracking-tight">
                Ready to secure your <span className="text-[#cca72f]">chilli supply?</span>
              </h2>

              {/* Description */}
              <p className="font-['Nunito'] font-semibold text-white/80 text-[13.5px] leading-relaxed">
                Connect directly with our Guntur export desk. We offer custom packaging, strict pesticide compliance, and stable year-round shipping slots.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20request%20a%20bulk%20export%20quote.%20Please%20share%20your%20pricing%2C%20custom%20packaging%20options%2C%20and%20pesticide%20compliance%20documentation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8f000d] font-['urbanist'] font-extrabold text-[13px] py-3.5 px-7 rounded-lg uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 group whitespace-nowrap cursor-pointer"
                >
                  Request Quote
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Trust Guarantee */}
              <div className="text-[8.5px] font-['urbanist'] tracking-widest text-white/40 uppercase pt-1">
                Export Desk Response Guarantee: Within 12 Hours
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutCompany;
