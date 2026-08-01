import React, { useEffect } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiThermometer,
  FiDroplet,
  FiAward,
  FiPackage,
  FiShield,
  FiStar,
  FiArrowRight
} from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';

import dryChilliSortingFacility from '../assets/dry_chilli_sorting_facility.png';

// Import custom generated step timeline images
import qaStepFarm from '../assets/qa_step_farm.png';
import qaStepAcquisition from '../assets/qa_step_acquisition.png';
import qaStepProcessing from '../assets/qa_step_processing.png';
import qaStepShipping from '../assets/qa_step_shipping.png';
import chilliExportCta from '../assets/chilli-export-cta.png';
import glowingChilliPremiumRemoveBg from '../assets/glowing-chilli-premium-remove-bg-io.png';
import chilliSorting from '../assets/chilli-sorting.jpg';

const QualityAssurance = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const processStages = [
    {
      num: '01',
      title: 'Farm Visits',
      image: qaStepFarm,
      desc: 'We visit our partner farms to check crop quality and ensure the best chillies are selected from the very beginning.',
      colorClass: 'border-[#2c6a46]/40',
      dotBgClass: 'bg-[#2c6a46]',
      badgeBgClass: 'bg-[#2c6a46]'
    },
    {
      num: '02',
      title: 'Acquisition',
      image: qaStepAcquisition,
      desc: 'We carefully choose high-quality chillies from trusted farmers to ensure only the best produce enters our supply chain.',
      colorClass: 'border-[#8f000d]/40',
      dotBgClass: 'bg-[#8f000d]',
      badgeBgClass: 'bg-[#8f000d]'
    },
    {
      num: '03',
      title: 'Processing',
      image: qaStepProcessing,
      desc: 'The chillies are cleaned, sorted, and processed in our modern facility while maintaining strict quality and hygiene standards.',
      colorClass: 'border-[#cca72f]/40',
      dotBgClass: 'bg-[#cca72f]',
      badgeBgClass: 'bg-[#cca72f]'
    },
    {
      num: '04',
      title: 'Shipping',
      image: qaStepShipping,
      desc: 'Every shipment is carefully packed, inspected, and prepared for safe and timely delivery to customers around the world.',
      colorClass: 'border-[#d97706]/40',
      dotBgClass: 'bg-[#d97706]',
      badgeBgClass: 'bg-[#d97706]'
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      <SEO
        title="Quality Assurance | Minha Imports & Exports"
        description="Rigorous quality checks for every chilli export batch — HPLC heat testing, ASTA color analysis, aflatoxin screening, and FSSAI compliance. 4-stage quality process from farm to port."
        keywords="Chilli Quality Assurance, ASTA Color Test, Aflatoxin Free Chilli, FSSAI Certified Exporter, Guntur Chilli Quality, Pesticide Free Chilli Export"
        url="/quality"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.minhaimportsandexports.com/' },
            { '@type': 'ListItem', position: 2, name: 'Quality Assurance', item: 'https://www.minhaimportsandexports.com/quality' },
          ],
        }]}
      />

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt="Quality Inspection and Sorting Facility"
          className="absolute inset-0 w-full h-full object-cover object-[center_42%]"
          src={dryChilliSortingFacility}
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Quality Assurance</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Quality Assurance
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Maintaining Excellence Through Every Stage of Export
          </p>
        </div>
      </section>

      {/* 2. Quality Commitment Section */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column (Image with secondary accent background glow) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#2c6a46]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              alt="Expert Quality Grading Red Chillies"
              className="relative rounded-xl shadow-xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src={chilliSorting}
            />
          </motion.div>

          {/* Right Column (Commitment Texts and Bullet list) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <SectionHeading
              align="left"
              kicker="Our standards"
              title={
                <>
                  Premium standards for <span className="text-[#8f000d]">global markets</span>
                </>
              }
              className="mb-4"
              showLeftLine={true}
              showRightLine={false}
            />

            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
              At Minha Imports & Exports, quality is at the heart of everything we do. We carefully source, process, and export premium Guntur dry red chillies while maintaining high standards at every step.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
              From selecting the best chillies to the final packaging, every batch goes through thorough quality checks. Our team ensures that each shipment is clean, safe, and meets international food safety and export standards, so our customers receive consistent quality every time.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-xl shrink-0 mt-0.5" />
                <span className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
                  Every batch is carefully processed to ensure it is clean, safe, and free from impurities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-xl shrink-0 mt-0.5" />
                <span className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
                  Moisture levels are carefully monitored to keep the chillies fresh and maintain a longer shelf life.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-xl shrink-0 mt-0.5" />
                <span className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
                  We source our chillies directly from trusted farmers in Guntur to ensure consistent quality and authenticity.
                </span>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* 3. 4-Stage Quality Process */}
      <section className="bg-surface-container-low py-10 md:py-14 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">

          <SectionHeading
            align="center"
            kicker="Our process"
            title={
              <>
                Our four-stage <span className="text-[#8f000d]">quality process</span>
              </>
            }
            className="mb-10"
            showRightLine={true}
          />

          <div className="relative mt-8">
            {/* Horizontal connecting line with midpoint dots (Desktop only) */}
            <div className="absolute top-[80px] left-[12.5%] right-[12.5%] h-[2px] border-t border-dashed border-neutral-300 hidden md:block -z-10">
              {/* Mid-segment dots */}
              <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2c6a46]"></div>
              <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2c6a46]"></div>
              <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2c6a46]"></div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-8"
            >
              {processStages.map((stage, idx) => (
                <motion.div
                  key={stage.num}
                  variants={fadeUpVariants}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Outer circle frame with compass dots */}
                  <div className={`relative w-40 h-40 rounded-full border p-1.5 bg-white shadow-premium-soft flex items-center justify-center ${stage.colorClass}`}>

                    {/* Compass-style boundary dots */}
                    <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${stage.dotBgClass}`}></div>
                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${stage.dotBgClass}`}></div>
                    <div className={`absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${stage.dotBgClass}`}></div>
                    <div className={`absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${stage.dotBgClass}`}></div>

                    {/* Circular Image Container */}
                    <div className="w-[144px] h-[144px] rounded-full overflow-hidden relative">
                      <img
                        alt={stage.title}
                        className="w-full h-full object-cover"
                        src={stage.image}
                      />
                    </div>
                  </div>

                  {/* Stage status badge */}
                  <div className={`w-6 h-6 rounded-full text-white flex items-center justify-center font-['urbanist'] font-bold text-[11px] mt-6 shadow-md ${stage.badgeBgClass}`}>
                    {stage.num}
                  </div>

                  {/* Heading & text */}
                  <h3 className="font-['urbanist'] font-bold text-[16px] text-neutral-900 mt-4 mb-2 uppercase tracking-wide">
                    {stage.title}
                  </h3>
                  <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[13px] md:text-[14px] leading-relaxed max-w-xs px-2">
                    {stage.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. Quality Standards Checklist (Benchmarks) */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <SectionHeading
            align="left"
            kicker="Our benchmarks"
            title={
              <>
                Certified quality <span className="text-[#8f000d]">measures</span>
              </>
            }
            intro="Every batch goes through detailed quality checks and inspections to ensure it meets high standards for purity, safety, freshness, and international export requirements."
            className="mb-10"
            showLeftLine={true}
            showRightLine={false}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {/* 1. Quality First Always Left Card (Spans 2 rows) */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 md:row-span-2 bg-[#123e25] text-white p-6 rounded-2xl flex flex-col justify-between text-left overflow-hidden relative shadow-premium-soft min-h-[420px] md:min-h-full"
            >
              <div className="space-y-6 relative z-10">
                {/* Shield Icon and Heading Inline */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 shrink-0">
                    <FiShield className="text-white text-lg" />
                  </div>
                  <h3 className="font-['urbanist'] font-bold text-[18px] leading-tight text-white">
                    Quality First<br />Always
                  </h3>
                </div>

                <p className="font-['Nunito'] font-semibold text-white/80 text-[13.5px] leading-relaxed">
                  Every step is controlled, tested and certified. We implement strict multi-stage sorting, moisture management (10-12%), and laboratory inspection to meet international food safety benchmarks and preserve natural color and heat.
                </p>
              </div>

              {/* Background removed chilli bowl image at bottom part of card */}
              <div className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none select-none z-0">
                <img
                  src={glowingChilliPremiumRemoveBg}
                  alt="Quality Red Chillies Bowl"
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </motion.div>

            {/* 2. Moisture Control Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2c6a46]/10 text-[#2c6a46] flex items-center justify-center shrink-0">
                    <FiThermometer className="text-lg" />
                  </div>
                  <h4 className="font-['urbanist'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Moisture Control
                  </h4>
                </div>
                <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  10-12% maintained to prevent mold.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['urbanist'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Controlled
              </div>
            </motion.div>

            {/* 3. Cleanliness Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8f000d]/10 text-[#8f000d] flex items-center justify-center shrink-0">
                    <FiDroplet className="text-lg" />
                  </div>
                  <h4 className="font-['urbanist'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Cleanliness
                  </h4>
                </div>
                <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  Product free from foreign matter.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['urbanist'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Verified
              </div>
            </motion.div>

            {/* 4. Product Grading Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2c6a46]/10 text-[#2c6a46] flex items-center justify-center shrink-0">
                    <FiAward className="text-lg" />
                  </div>
                  <h4 className="font-['urbanist'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Product Grading
                  </h4>
                </div>
                <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  SHU & ASTA standards for markets.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['urbanist'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Certified
              </div>
            </motion.div>

            {/* 5. Packaging Safety Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8f000d]/10 text-[#8f000d] flex items-center justify-center shrink-0">
                    <FiPackage className="text-lg" />
                  </div>
                  <h4 className="font-['urbanist'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Packaging Safety
                  </h4>
                </div>
                <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  Food-grade packaging for long freshness.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['urbanist'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Validated
              </div>
            </motion.div>

            {/* 6. Export Compliance Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2c6a46]/10 text-[#2c6a46] flex items-center justify-center shrink-0">
                    <FiShield className="text-lg" />
                  </div>
                  <h4 className="font-['urbanist'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Export Compliance
                  </h4>
                </div>
                <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  Phytosanitary & MRL compliant.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['urbanist'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Compliant
              </div>
            </motion.div>

            {/* 7. Global Trust Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 relative overflow-hidden bg-gradient-to-br from-neutral-900 to-[#122e1d] text-white p-6 rounded-2xl flex flex-col justify-between text-left shadow-premium-soft min-h-[200px]"
            >
              {/* Vessel overlay ship graphic */}
              <img
                src={chilliExportCta}
                alt="Cargo logistics overlay"
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-15 pointer-events-none"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 shrink-0">
                    <FiStar className="text-white text-lg fill-current" />
                  </div>
                  <h4 className="font-['urbanist'] font-bold text-[15px] text-white leading-tight">
                    Global Trust
                  </h4>
                </div>
                <p className="font-['Nunito'] font-semibold text-white/80 text-[13px] leading-relaxed mt-4">
                  Delivering premium quality to international spice hubs.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['urbanist'] font-bold w-max mt-4 text-emerald-400 bg-emerald-500/10 relative z-10">
                <span>✓</span> Trusted
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* 5. Trust Highlight Section */}
      <section className="py-10 md:py-14 bg-surface-container-low relative overflow-hidden text-center">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Heading */}
            <SectionHeading
              align="center"
              kicker="Global sourcing partner"
              title={
                <>
                  Quality you can <span className="text-[#8f000d]">trust</span>
                </>
              }
              intro="Our success is built on consistent quality, reliable supply, and trusted partnerships. By combining modern technology with experienced farmers, we deliver premium products to customers around the world."
              className="mb-8"
              showRightLine={true}
            />

            {/* Stats Divider Line */}
            <div className="border-t border-neutral-200/60 my-5"></div>

            {/* 3-Column Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">

              {/* Stat 1 */}
              <div className="space-y-2 py-4 md:py-0 md:px-4 text-center">
                <div className="font-['urbanist'] font-black text-[40px] md:text-[48px] leading-none text-[#2c6a46] flex items-center justify-center gap-2">
                  100%
                </div>
                <div className="font-['urbanist'] font-bold text-[10.5px] tracking-[0.15em] text-neutral-800 uppercase">
                  Certified Quality
                </div>
                <p className="text-[12.5px] text-[#5a403e]/80 font-['Nunito'] max-w-[220px] mx-auto leading-relaxed mt-1">
                  Every batch is tested to meet international quality and food safety standards.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2 py-4 md:py-0 md:px-4 text-center">
                <div className="font-['urbanist'] font-black text-[40px] md:text-[48px] leading-none text-[#2c6a46] flex items-center justify-center gap-2">
                  50+
                </div>
                <div className="font-['urbanist'] font-bold text-[10.5px] tracking-[0.15em] text-neutral-800 uppercase">
                  Global Destinations
                </div>
                <p className="text-[12.5px] text-[#5a403e]/80 font-['Nunito'] max-w-[220px] mx-auto leading-relaxed mt-1">
                  Supplying premium dry red chillies to customers across the world.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2 py-4 md:py-0 md:px-4 text-center">
                <div className="font-['urbanist'] font-black text-[40px] md:text-[48px] leading-none text-[#2c6a46] flex items-center justify-center gap-2">
                  24/7
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-emerald-600 animate-pulse shrink-0"></span>
                </div>
                <div className="font-['urbanist'] font-bold text-[10.5px] tracking-[0.15em] text-neutral-800 uppercase">
                  Supply Chain Visibility
                </div>
                <p className="text-[12.5px] text-[#5a403e]/80 font-['Nunito'] max-w-[220px] mx-auto leading-relaxed mt-1">
                  Track every batch from the farm to the final shipment.
                </p>
              </div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* 6. Inquiry CTA Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative w-full">
        <div className="relative rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-[0_35px_80px_rgba(0,0,0,0.18)] border border-white/[0.04] bg-gradient-to-br from-[#2c6a46] via-[#123e25] to-[#111315] group">

          {/* Subtle grid and glowing accents */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#2c6a46]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#2c6a46]/30 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

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
                kicker="Our standard"
                kickerColor="#cca72f"
                intro="Excellence is the only standard that travels without a passport. We don't just inspect our chillies; we trace, verify, and guarantee their legacy from Guntur's soil to your doorstep."
                className="mb-0"
                showLeftLine={true}
                showRightLine={false}
              />
              <div className="font-['urbanist'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white/40 relative z-10 mt-2">
                — The Minha Quality Council
              </div>
            </div>

            {/* Right Column: CTA Content (lg:col-span-7) */}
            <div className="space-y-5 text-center lg:text-left lg:col-span-7 w-full">

              {/* Title */}
              <h2 className="font-['urbanist'] font-bold text-[22px] sm:text-[26px] md:text-[32px] leading-[1.2] text-white tracking-tight">
                Looking for premium <span className="text-[#cca72f]">chilli exports?</span>
              </h2>

              {/* Description */}
              <p className="font-['Nunito'] font-semibold text-white/80 text-[13.5px] leading-relaxed">
                Partner with Minha Imports & Exports for reliable, grade-A dry red chillies. Get a customized quote based on your specific requirements today.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20know%20more%20about%20your%20quality%20standards%2C%20testing%20process%2C%20and%20certifications.%20Please%20share%20the%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2c6a46] font-['urbanist'] font-extrabold text-[13px] py-3.5 px-7 rounded-lg uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 group whitespace-nowrap cursor-pointer"
                >
                  Send Inquiry
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

export default QualityAssurance;
