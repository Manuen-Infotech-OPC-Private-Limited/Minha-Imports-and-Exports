import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiAward,
  FiGlobe,
  FiShield,
  FiLayers
} from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';

import chilliExportCta from '../assets/chilli-export-cta.png';
import market from '../assets/market-image.png';
import facilityTool from '../assets/facility-tool.png';
import useStageProgress from '../hooks/useStageProgress';

const Facility = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);
  const flow = useStageProgress(4, { autoPlay: false });
  const { goToStage } = flow; // stable reference (memoized) for the scroll effect
  const lineRef = useRef(null);
  const fillRef = useRef(null);
  const nodeRefs = useRef([]);
  const activeRef = useRef(0);

  const scrollToStage = (i) => {
    nodeRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    const PLAYHEAD = 0.5; // viewport fraction that acts as the timeline playhead
    let raf = 0;
    const compute = () => {
      raf = 0;
      const line = lineRef.current;
      if (!line) return;
      const lineRect = line.getBoundingClientRect();
      const playheadY = window.innerHeight * PLAYHEAD;
      // Fill tracks the playhead as it travels down the line
      if (fillRef.current) {
        const h = Math.max(0, Math.min(playheadY - lineRect.top, lineRect.height));
        fillRef.current.style.height = `${h}px`;
      }
      // Active stage = the last node the playhead has passed
      let next = 0;
      for (let i = 0; i < nodeRefs.current.length; i++) {
        const node = nodeRefs.current[i];
        if (!node) continue;
        const r = node.getBoundingClientRect();
        if (r.top + r.height / 2 <= playheadY) next = i;
      }
      if (next !== activeRef.current) {
        activeRef.current = next;
        goToStage(next); // updates active stage + replays the glow
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onScroll) : null;
    if (ro && lineRef.current) ro.observe(lineRef.current);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (ro) ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [goToStage]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);


  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      <SEO
        title="Processing Facility | Minha Imports & Exports"
        description="State-of-the-art Guntur chilli processing facility. 50,000 sq ft climate-controlled storage, optical sorters, automated packaging. Seed-to-shipment transparency for every export batch."
        keywords="Chilli Processing Facility India, Guntur Chilli Storage, Chilli Sorting Plant, Chilli Export Warehouse, Minha Exports Facility"
        url="/facility"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
            { '@type': 'ListItem', position: 2, name: 'Facility', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/facility' },
          ],
        }]}
      />

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          ref={imgRef}
          alt="Sprawling high-tech industrial processing facility"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          src={market}
          onLoad={() => setImageLoaded(true)}
          fetchpriority="high"
          loading="eager"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6 px-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Facility</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Our Facilities
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Modern Infrastructure for Safe, Hygienic, and Reliable Chilli Exports
          </p>
        </div>
      </section>

      {/* 2. Facility Intro Section */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column (Commitment Text) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-6"
          >
            <SectionHeading
              align="left"
              kicker="Our facilities"
              title={
                <>
                  Precision engineering for <span className="text-[#8f000d]">agricultural excellence</span>
                </>
              }
              className="mb-4"
              showLeftLine={true}
              showRightLine={false}
            />

            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              At Minha Imports & Exports, our modern facilities are designed to ensure quality at every stage. From sourcing fresh chillies to processing, packaging, and shipping, every step is carried out with care and attention to detail.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              We follow strict hygiene and quality standards throughout the process. Every batch is carefully handled, inspected, and documented to ensure safe, reliable, and consistent products for customers around the world.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20know%20more%20about%20your%20export%20facilities%20and%20processing%20capabilities.%20Please%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8f000d] text-white px-8 py-3.5 rounded-lg font-['urbanist'] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8f000d]/95 hover:shadow-primary/20 transition-all active:scale-95"
              >
                Contact Us
                <FiArrowRight className="text-sm" />
              </a>
            </div>
          </motion.div>

          {/* Right Column (Image with yellow highlight background block behind it) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#cca72f]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              alt="High-precision quality control equipment laboratory"
              className="relative rounded-xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src={facilityTool}
            />
          </motion.div>

        </div>
      </section>

      {/* 4. Connected Vertical Process Timeline */}
      <section className="py-10 md:py-14 bg-surface relative overflow-hidden">

        {/* Header */}
        <SectionHeading
          align="center"
          kicker="Workflow stages"
          title={
            <>
              Our four-stage <span className="text-[#8f000d]">operational process</span>
            </>
          }
          className="mb-10 relative z-10"
          showRightLine={true}
        />

        {/* Timeline container */}
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 pb-4 z-10">

          {/* Vertical Connecting Line (faint base track) */}
          <div ref={lineRef} className="absolute left-12 md:left-1/2 top-4 bottom-4 w-[2px] bg-neutral-200 transform -translate-x-1/2 z-0"></div>
          {/* Animated progress fill — flows down to the active stage */}
          <div
            ref={fillRef}
            className="absolute left-12 md:left-1/2 top-4 w-[3px] -translate-x-1/2 rounded-full z-[1] pointer-events-none"
            style={{
              height: 0,
              background: 'linear-gradient(180deg, #8f000d, #2c6a46, #cca72f, #b22222)',
            }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-10 md:space-y-14">

            {/* Phase 01 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-[280px]">

              {/* Timeline Center Node */}
              <div className="absolute left-12 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <button
                  type="button"
                  ref={(el) => (nodeRefs.current[0] = el)}
                  onClick={() => scrollToStage(0)}
                  aria-label="Show Phase 01: Advanced Cleaning & Sorting"
                  className="w-10 h-10 rounded-full flex items-center justify-center font-['urbanist'] font-bold text-xs shadow-md relative z-10 border-2 cursor-pointer transition-all duration-300 focus:outline-none"
                  style={{
                    borderColor: flow.activeStage >= 0 ? '#8f000d' : '#d4d4d4',
                    backgroundColor: flow.activeStage === 0 ? '#8f000d' : '#ffffff',
                    transform: flow.activeStage === 0 ? 'scale(1.15)' : undefined,
                    boxShadow: flow.activeStage === 0 ? '0 8px 22px -6px rgba(143,0,13,0.45)' : undefined,
                  }}
                >
                  <span style={{ color: flow.activeStage === 0 ? '#ffffff' : '#8f000d' }}>01</span>
                  {flow.activeStage === 0 && (
                    <span key={flow.glowKey} className="absolute inset-0 rounded-full pointer-events-none" style={{ border: '2px solid #8f000d', animation: 'stageGlow 0.7s ease-out' }}></span>
                  )}
                </button>
              </div>

              {/* Left Column: Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full order-1 pl-16 md:pl-0 text-left"
              >
                <div className="bg-white border border-neutral-100/85 rounded-3xl p-6 md:p-8 shadow-premium-soft hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10">
                  <span className="text-[#8f000d] font-['urbanist'] font-bold text-[11px] tracking-[0.2em] uppercase">
                    Phase 01
                  </span>
                  <h3 className="font-['urbanist'] font-bold text-[22px] md:text-[26px] text-neutral-900 leading-tight mt-1">
                    Advanced Cleaning &amp; Sorting
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#8f000d] rounded-full mt-3 mb-4"></div>
                  <p className="font-['Nunito'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed mb-6">
                    Every batch of chillies is carefully cleaned to remove dust and impurities. We use modern sorting technology to select chillies based on their size, color, and overall quality, ensuring only the best products move to the next stage.
                  </p>

                  {/* Phase Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#8f000d] uppercase tracking-wider">Daily Capacity</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">50 Metric Tons / Day</p>
                    </div>
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#8f000d] uppercase tracking-wider">Technology</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">Optical Sorters</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full order-2 pl-16 md:pl-0"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 aspect-video group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt="Industrial cleaning and sorting unit"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuH9RkZjvftpwODeAZZ1jCT_ElfBIFqsfgVEPGsdkBeC7xPSJDlPvf-mgctafwM3EPqX25Gvjtz4o59zHkarMUxbNDE5J-PY1aIQvCVACHmZgz7mkHjCdH_Q-C6-VWrK47maS8ORHQ00Mg6qwCjALBkctFjgwopO1tX70dFav7txsvNg8xNhRX0kxaIq4HVI_X72D-nbgG1zU2W1wEB5p7ByffL0W34-Y5U-T6aoXP_v1znpEr8ffkspBndog36CiE7hx619PXs90"
                  />
                </div>
              </motion.div>

            </div>

            {/* Phase 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-[280px]">

              {/* Timeline Center Node */}
              <div className="absolute left-12 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <button
                  type="button"
                  ref={(el) => (nodeRefs.current[1] = el)}
                  onClick={() => scrollToStage(1)}
                  aria-label="Show Phase 02: Climate-Controlled Storage"
                  className="w-10 h-10 rounded-full flex items-center justify-center font-['urbanist'] font-bold text-xs shadow-md relative z-10 border-2 cursor-pointer transition-all duration-300 focus:outline-none"
                  style={{
                    borderColor: flow.activeStage >= 1 ? '#2c6a46' : '#d4d4d4',
                    backgroundColor: flow.activeStage === 1 ? '#2c6a46' : '#ffffff',
                    transform: flow.activeStage === 1 ? 'scale(1.15)' : undefined,
                    boxShadow: flow.activeStage === 1 ? '0 8px 22px -6px rgba(44,106,70,0.45)' : undefined,
                  }}
                >
                  <span style={{ color: flow.activeStage === 1 ? '#ffffff' : (flow.activeStage >= 1 ? '#2c6a46' : '#9ca3af') }}>02</span>
                  {flow.activeStage === 1 && (
                    <span key={flow.glowKey} className="absolute inset-0 rounded-full pointer-events-none" style={{ border: '2px solid #2c6a46', animation: 'stageGlow 0.7s ease-out' }}></span>
                  )}
                </button>
              </div>

              {/* Left Column: Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full order-2 md:order-1 pl-16 md:pl-0"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 aspect-video group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt="Climate controlled warehouse racking interior"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVqfMaAEOt8IxXPT1_xAgBkVbDdPUhsXpc-HbC8eTO7yHqGVr6agRLRn1dK6cVLPThqlameqXuArRfhh_4k0y5E0Fh3CuDHyJSvPbtXt4iH5DXLy6sMP7po0RJKHPoeYdT6eCd7gY7PKJMf9pM5fZSRHzrZZmD0yc7kSqzNWreJR4VGfYyzagh3F1s3p3PG2wF8F4ADeZ2xHHTcQGzQOi9NDX-Kf23UYdGeXellGPlcGSC9rNIC6GI6hqoHB03ZGQA5HPfPCSlNzM"
                  />
                </div>
              </motion.div>

              {/* Right Column: Content Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full order-1 md:order-2 pl-16 md:pl-0 text-left"
              >
                <div className="bg-white border border-neutral-100/85 rounded-3xl p-6 md:p-8 shadow-premium-soft hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10">
                  <span className="text-[#2c6a46] font-['urbanist'] font-bold text-[11px] tracking-[0.2em] uppercase">
                    Phase 02
                  </span>
                  <h3 className="font-['urbanist'] font-bold text-[22px] md:text-[26px] text-neutral-900 leading-tight mt-1">
                    Climate-Controlled Storage
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#2c6a46] rounded-full mt-3 mb-4"></div>
                  <p className="font-['Nunito'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed mb-6">
                    Our chillies are stored in a clean, temperature-controlled warehouse to maintain their freshness, quality, and natural spice. The storage area is regularly monitored to keep the products safe and pest-free.
                  </p>

                  {/* Phase Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#2c6a46] uppercase tracking-wider">Facility Area</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">50,000 Sq. Ft.</p>
                    </div>
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#2c6a46] uppercase tracking-wider">Purity Rating</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">100% Pest-Free</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Phase 03 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-[280px]">

              {/* Timeline Center Node */}
              <div className="absolute left-12 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <button
                  type="button"
                  ref={(el) => (nodeRefs.current[2] = el)}
                  onClick={() => scrollToStage(2)}
                  aria-label="Show Phase 03: Export-Grade Packaging"
                  className="w-10 h-10 rounded-full flex items-center justify-center font-['urbanist'] font-bold text-xs shadow-md relative z-10 border-2 cursor-pointer transition-all duration-300 focus:outline-none"
                  style={{
                    borderColor: flow.activeStage >= 2 ? '#cca72f' : '#d4d4d4',
                    backgroundColor: flow.activeStage === 2 ? '#cca72f' : '#ffffff',
                    transform: flow.activeStage === 2 ? 'scale(1.15)' : undefined,
                    boxShadow: flow.activeStage === 2 ? '0 8px 22px -6px rgba(204,167,47,0.5)' : undefined,
                  }}
                >
                  <span style={{ color: flow.activeStage === 2 ? '#ffffff' : (flow.activeStage >= 2 ? '#cca72f' : '#9ca3af') }}>03</span>
                  {flow.activeStage === 2 && (
                    <span key={flow.glowKey} className="absolute inset-0 rounded-full pointer-events-none" style={{ border: '2px solid #cca72f', animation: 'stageGlow 0.7s ease-out' }}></span>
                  )}
                </button>
              </div>

              {/* Left Column: Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full order-1 pl-16 md:pl-0 text-left"
              >
                <div className="bg-white border border-neutral-100/85 rounded-3xl p-6 md:p-8 shadow-premium-soft hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10">
                  <span className="text-[#cca72f] font-['urbanist'] font-bold text-[11px] tracking-[0.2em] uppercase">
                    Phase 03
                  </span>
                  <h3 className="font-['urbanist'] font-bold text-[22px] md:text-[26px] text-neutral-900 leading-tight mt-1">
                    Export-Grade Packaging
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#cca72f] rounded-full mt-3 mb-4"></div>
                  <p className="font-['Nunito'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed mb-6">
                    We offer secure packaging options for different export needs. Every package is carefully sealed, accurately weighed, and labeled for easy tracking throughout the shipping process.
                  </p>

                  {/* Phase Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#cca72f] uppercase tracking-wider">Bag Sizes</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">5kg to 25kg Pallets</p>
                    </div>
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#cca72f] uppercase tracking-wider">Traceability</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">QR Code Scans</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full order-2 pl-16 md:pl-0"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 aspect-video group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt="Automated packaging line machinery"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEhcZ_nHs0EQKJLbDX7y0XvRmPOa6iAucqFWH9T2nOMY1BE9iW5qzgjsCbWcEJyncANWwgYEsImiqruW5g8aT_QByVk0WuLK9e4d8f1ewlKx_Bs0OourJgT_NYtGiaIgFELQVMPL5sfYsHuoqTFdUWjps-594SZ4Kh_JD0qxvEBTmOTmCWhfE9sXOf2idzcqwIrKaSJ0CKhFJwSms8r_oz71yG0hXecuu0__NXQR5apJco-8tmdJSfonXusgeJQXJZc4qUisMzxM"
                  />
                </div>
              </motion.div>

            </div>

            {/* Phase 04 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-[280px]">

              {/* Timeline Center Node */}
              <div className="absolute left-12 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <button
                  type="button"
                  ref={(el) => (nodeRefs.current[3] = el)}
                  onClick={() => scrollToStage(3)}
                  aria-label="Show Phase 04: Logistics & Global Dispatch"
                  className="w-10 h-10 rounded-full flex items-center justify-center font-['urbanist'] font-bold text-xs shadow-md relative z-10 border-2 cursor-pointer transition-all duration-300 focus:outline-none"
                  style={{
                    borderColor: flow.activeStage >= 3 ? '#b22222' : '#d4d4d4',
                    backgroundColor: flow.activeStage === 3 ? '#b22222' : '#ffffff',
                    transform: flow.activeStage === 3 ? 'scale(1.15)' : undefined,
                    boxShadow: flow.activeStage === 3 ? '0 8px 22px -6px rgba(178,34,34,0.45)' : undefined,
                  }}
                >
                  <span style={{ color: flow.activeStage === 3 ? '#ffffff' : (flow.activeStage >= 3 ? '#b22222' : '#9ca3af') }}>04</span>
                  {flow.activeStage === 3 && (
                    <span key={flow.glowKey} className="absolute inset-0 rounded-full pointer-events-none" style={{ border: '2px solid #b22222', animation: 'stageGlow 0.7s ease-out' }}></span>
                  )}
                </button>
              </div>

              {/* Left Column: Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full order-2 md:order-1 pl-16 md:pl-0"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 aspect-video group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt="Shipping bay container loading logistics"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5HpVK-YBD7YMK4w_aG0iQmuKajVrU2QtRvNh5tYHHIsz7svDjHgtGoc0hIxia2U_xYapwx3ky6-7VBDF7A0HITuxBa2nwjCNSZkU1nL-OQySWSynBfmHxFpR1YY0VXIwuFW0SV4QrjcoL_4O-_qJ4FVpb77R_wzZMpyB7GrDWRwvSECqkzBkPFOIZduK75DHMrijKV61IXgNhLoRKxvF79kj-xF6IQJyQYfg3eEh_NuNORFTy1iGVpKuQ6P4-_g6nzl2ALmLVZb8"
                  />
                </div>
              </motion.div>

              {/* Right Column: Content Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full order-1 md:order-2 pl-16 md:pl-0 text-left"
              >
                <div className="bg-white border border-neutral-100/85 rounded-3xl p-6 md:p-8 shadow-premium-soft hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10">
                  <span className="text-[#b22222] font-['urbanist'] font-bold text-[11px] tracking-[0.2em] uppercase">
                    Phase 04
                  </span>
                  <h3 className="font-['urbanist'] font-bold text-[22px] md:text-[26px] text-neutral-900 leading-tight mt-1">
                    Logistics &amp; Global Dispatch
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#b22222] rounded-full mt-3 mb-4"></div>
                  <p className="font-['Nunito'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed mb-6">
                    Our experienced logistics team ensures every shipment is packed, inspected, and dispatched safely. We manage the entire export process to deliver products on time to customers across the world.
                  </p>

                  {/* Phase Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#b22222] uppercase tracking-wider">Dispatch Hours</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">24/7 Loading Bays</p>
                    </div>
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#b22222] uppercase tracking-wider">Tracking</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">Real-time GPS Logs</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Operations Gallery */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <SectionHeading
            align="center"
            kicker="Gallery"
            title={
              <>
                Inside our <span className="text-[#8f000d]">operations</span>
              </>
            }
            className="mb-10"
            showRightLine={true}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                title: 'Sorting Tech',
                alt: 'Precision sorting machinery and sensors',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdRuK0UnIzK3_sX3XpMYGL2G95-yjeM3iHgFeQru0iezjVHXGLxklO-YQB48LlIvlvYyd1MGfsI2Xr9Ga8PbmgQ8RezDF_WeTm7_7vwY_RrLgbAw0tq-gQxJELCBpnHQszN6lskgfpCioY3_dEM9FrX0P7p_mFKwRbjsdxRRKS3QTlBsALHgvOY46d16xahESy7uYBjaU3ICzcqteoJjVqv88BMztubueTpByhbqL3eya9bHkmehCQfPXhPSkGsEHTNu8AxgeZ4j0'
              },
              {
                title: 'Processing Hall',
                alt: 'Sanitized industrial hall with workers',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7tsFM0-MC3-B-7ssDYwk1wHV5YPBEyZfx7x_CUZMaMdTsu17k-RDaqDJ_lvt8ablJ0lRAS-Y3HGbmg1w8xL-u-wKetQm8Wu9XvugeoXAqqOcdBMEzJb8R52Ke192JvyIaBXHD5xxsF3-UZ_m5LAtFIDUUuL50pAInICkvDqfW0p7uCWVi4jDc_DuR6hTBTiriH_U0sRjLdC5Z4YsiXxJVC2UwwngvmFpfCAbln0UFi-JvejUfbXYxG7vq5L2OKvYvtAf-15G8sN8'
              },
              {
                title: 'Quality Control',
                alt: 'Dry red chilli pod inspection',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5RV5LkqhelQNJBH8UT4s_pmOhN14wgFuCrqrbbnGbWEozpZ2PzLrllp70JH98-TVr5Q6yIAjuQSofGa1VlL-H5BW2MisUL0RMu7cMLiqR8RhhfS2z-aM9mhZwWCtYYypNIuRwUq4CuqfRY2hAIPE_mTn2ljOvKnzggQcLlxxFG6igl6kJFr5Bh6iHjotkXM66Dxz360QEBYmGNrutJgdqjuXdKxv2RoLbp0ov2gih0dRsu2_JsnS_bEIGcxCq6Rkiyoz7F8IM97Q'
              },
              {
                title: 'Logistics Ready',
                alt: 'Pallets prepared for export loading',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ktwPMuHUTtghkrsgWId09mtsprbyLx-cfZKAqBCGTHXz1ZrIxXoH-56cDIIZs97VNGTM_L9x3FTtkbF__Xcg3swmfdo4De7oh3AGJjKqZWn3rjmbhAy1gquQNqDrtk-nbfkmcQ8n1Od4ggN0am3grhUCuZATg9jQDn2qLrxXBgtF8qrDzYCc2x6DTM5DaRKXqW7D9IFyAjv9sC7ZupH8J1IaYkP21KYQt6RGagACwekSxD5YSg1zjtokv1Mg1QcuYBFEHq5eIMM'
              }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-md border border-neutral-100"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={img.alt}
                  src={img.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-[#8f000d]/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end md:items-center justify-start md:justify-center p-3.5 md:p-0">
                  <span className="text-white font-['urbanist'] font-bold text-[11px] md:text-sm tracking-wider uppercase">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. Why Our Infrastructure Matters */}
      <section className="py-10 md:py-14 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <SectionHeading
            align="center"
            kicker="Infrastructure"
            title={
              <>
                Built for quality and <span className="text-[#8f000d]">reliability</span>
              </>
            }
            intro="Our infrastructure is built on more than just modern technology—it is built on trust. Every step, from processing to delivery, is designed to ensure quality, safety, and reliability in every shipment."
            className="mb-16"
            showRightLine={true}
          />

          {/* Apple-Style Unified Grid Container */}
          <div className="bg-white rounded-[2rem] border-t border-l border-neutral-100 shadow-premium-soft overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: '01',
                title: 'Strict Food Safety Standards',
                desc: 'Every product is processed in a clean and hygienic environment to ensure safe, high-quality exports.',
                iconObj: <FiCheckCircle className="text-xl" />,
                color: 'text-[#8f000d]',
                bg: 'bg-[#8f000d]/10',
                border: 'border-[#8f000d]/20',
              },
              {
                num: '02',
                title: 'High Processing Capacity',
                desc: 'Our modern facility can process up to 50 metric tons of chillies every day while maintaining consistent quality.',
                iconObj: <FiCpu className="text-xl" />,
                color: 'text-[#2c6a46]',
                bg: 'bg-[#2c6a46]/10',
                border: 'border-[#2c6a46]/20',
              },
              {
                num: '03',
                title: 'Reliable Stock Availability',
                desc: 'Large storage capacity helps us ensure a steady supply throughout the year.',
                iconObj: <FiLayers className="text-xl" />,
                color: 'text-[#cca72f]',
                bg: 'bg-[#cca72f]/10',
                border: 'border-[#cca72f]/20',
              },
              {
                num: '04',
                title: 'In-House Quality Testing',
                desc: 'Every batch is tested for quality, freshness, and consistency before it is shipped.',
                iconObj: <FiAward className="text-xl" />,
                color: 'text-[#d97706]',
                bg: 'bg-[#d97706]/10',
                border: 'border-[#d97706]/20',
              },
              {
                num: '05',
                title: 'Sustainable Practices',
                desc: 'We use efficient processes that reduce waste and support environmentally responsible production.',
                iconObj: <FiGlobe className="text-xl" />,
                color: 'text-[#0a361c]',
                bg: 'bg-[#0a361c]/10',
                border: 'border-[#0a361c]/20',
              },
              {
                num: '06',
                title: 'Safe & Secure Facility',
                desc: 'Our facility is monitored around the clock to ensure product safety and security at every stage.',
                iconObj: <FiShield className="text-xl" />,
                color: 'text-[#8f6a10]',
                bg: 'bg-[#8f6a10]/10',
                border: 'border-[#8f6a10]/20',
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 md:p-10 border-b border-r border-neutral-100 flex flex-col justify-between min-h-[240px] relative group overflow-hidden text-left hover:bg-neutral-50 transition-colors duration-300"
              >
                {/* Large Background Watermarked Number */}
                <div className="absolute right-6 bottom-4 font-['urbanist'] font-extrabold text-[80px] leading-none text-neutral-100/60 select-none group-hover:text-neutral-200/50 transition-colors duration-300 pointer-events-none z-0">
                  {value.num}
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Icon Container */}
                  <div className={`w-11 h-11 rounded-xl ${value.bg} ${value.color} flex items-center justify-center shrink-0 border ${value.border} transition-transform duration-300 group-hover:scale-110`}>
                    {value.iconObj}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-['urbanist'] font-bold text-neutral-900 text-[16px] leading-tight">
                      {value.title}
                    </h4>
                    <p className="font-['Nunito'] font-semibold text-[#5a403e]/85 text-[13.5px] leading-relaxed max-w-xs">
                      {value.desc}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Business CTA */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative w-full">
        <div className="relative rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-[0_35px_80px_rgba(0,0,0,0.18)] border border-white/[0.04] bg-gradient-to-br from-[#3d0008] via-[#220004] to-[#140002] group">

          {/* Subtle grid and glowing accents */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#8f000d]/25 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8f000d]/35 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#cca72f]/8 rounded-full blur-3xl pointer-events-none" />

          {/* Cargo logistics overlay ship image */}
          <img
            src={chilliExportCta}
            alt="Cargo logistics overlay"
            className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-[0.04] pointer-events-none mix-blend-overlay"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Brand Quote (lg:col-span-5) */}
            <div className="relative space-y-4 text-center lg:text-left lg:border-r lg:border-white/10 lg:pr-8 xl:pr-12 lg:col-span-5 w-full z-10">
              <SectionHeading
                align="left"
                tone="light"
                kicker="Our promise"
                kickerColor="#cca72f"
                intro="Behind every successful export is a strong infrastructure built for precision and consistency. Our facilities are carefully designed to maintain product quality, ensure hygienic handling, and support seamless global deliveries."
                className="mb-0"
                showLeftLine={true}
                showRightLine={false}
              />
              <div className="font-['urbanist'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white/40 relative z-10 mt-2">
                — The Minha Infrastructure Team
              </div>
            </div>

            {/* Right Column: CTA Content (lg:col-span-7) */}
            <div className="space-y-5 text-center lg:text-left lg:col-span-7 w-full">

              {/* Title */}
              <h2 className="font-['urbanist'] font-bold text-[22px] sm:text-[26px] md:text-[32px] leading-[1.2] text-white tracking-tight">
                Partner with a reliable export infrastructure
              </h2>

              {/* Description */}
              <p className="font-['Nunito'] font-semibold text-white/80 text-[13.5px] leading-relaxed">
                Experience the difference of a facility built for the demands of the global market. Request a virtual tour or a quote today.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20bulk%20Guntur%20chilli%20export.%20Please%20share%20pricing%2C%20packaging%20options%2C%20and%20shipping%20timelines."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8f000d] font-['urbanist'] font-extrabold text-[13px] py-3.5 px-7 rounded-lg uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 group whitespace-nowrap cursor-pointer"
                >
                  Request a Quote
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

export default Facility;
