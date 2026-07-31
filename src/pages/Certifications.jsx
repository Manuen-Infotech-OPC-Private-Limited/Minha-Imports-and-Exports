import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiShield,
  FiGlobe,
  FiAward,
  FiFileText,
  FiArrowRight,
  FiX,
  FiZoomIn,
} from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';

// Existing assets
import fssaiLogo from '../assets/3fssai-logo-png.png';
import brcLogo from '../assets/brc-food-certification-logo-Photoroom.png';
import fieoLogo from '../assets/fieo-Photoroom.png';
import chilliExportCta from '../assets/chilli-export-cta.png';
import chilliBowlTable from '../assets/chilli-bowl-table.png';
import certificationsHeroBg from '../assets/certifications-hero.png';
import iso9001Cert from '../assets/certificates/iso-9001-2015.jpg';
import iso22000Cert from '../assets/certificates/iso-22000-2018.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const certifications = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    desc: 'Certified for maintaining high standards in the trading, export, storage, processing, and packaging of agricultural products.',
    icon: <FiAward className="text-[#2c6a46] text-2xl" />,
    accentColor: '#2c6a46',
    certNo: '2020082101BGS',
    issuedBy: 'QRO — Quality Research Organization',
    image: iso9001Cert,
  },
  {
    id: 'iso22000',
    name: 'ISO 22000:2018',
    subtitle: 'Food Safety Management Systems',
    desc: 'Certified for following internationally recognized food safety practices across sourcing, processing, storage, packaging, and export operations.',
    icon: <FiShield className="text-[#8f000d] text-2xl" />,
    accentColor: '#8f000d',
    certNo: '2020082101GS',
    issuedBy: 'QRO — Quality Research Organization',
    image: iso22000Cert,
  },
];

const whyPoints = [
  {
    title: 'Buyer Confidence',
    desc: 'Certifications provide the assurance that every product meets global food consumption and safety standards.',
  },
  {
    title: 'Seamless Customs Clearance',
    desc: 'Compliant documentation ensures no port-level delays, protecting your delivery timelines.',
  },
  {
    title: 'Reliability & Consistency',
    desc: 'Uniform grade standards across every container, safeguarding your brand\'s market reputation.',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [activePillar, setActivePillar] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);


  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeCert]);

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      <SEO
        title="Certifications & Compliance | Minha Imports & Exports"
        description="ISO 9001:2015 & ISO 22000:2018 certified Guntur chilli exporter. FSSAI, APEDA, FIEO, BRC certifications for safe and compliant global chilli exports."
        keywords="ISO Certified Chilli Exporter, FSSAI Certified, APEDA Registered, BRC Food Certification, Chilli Compliance India, Certified Spice Exporter"
        url="/certifications"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
            { '@type': 'ListItem', position: 2, name: 'Certifications', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/certifications' },
          ],
        }]}
      />

      {/* ── Lightbox Modal ──────────────────────────────────────────────────── */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setActiveCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
              <div>
                <p className="font-['urbanist'] font-extrabold text-[16px] text-[#1a1c1e]">{activeCert.name}</p>
                <p className="font-['urbanist'] font-semibold text-[10px] tracking-widest uppercase text-[#5a403e]/60">{activeCert.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#8f000d] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <FiX className="text-[18px]" />
              </button>
            </div>
            {/* Certificate Image */}
            <div className="p-4 bg-neutral-50">
              <img
                src={activeCert.image}
                alt={`${activeCert.name} Certificate`}
                className="w-full rounded-xl object-contain max-h-[70vh]"
              />
            </div>
            {/* Modal Footer */}
            <div className="px-5 py-3 bg-white border-t border-neutral-100 flex items-center justify-between">
              <p className="font-['urbanist'] font-bold text-[10px] tracking-widest text-[#5a403e]/50 uppercase">
                Cert No: {activeCert.certNo} &nbsp;·&nbsp; {activeCert.issuedBy}
              </p>
              <a
                href={activeCert.image}
                download
                className="text-[11px] font-['urbanist'] font-bold text-[#8f000d] hover:underline"
              >
                Download
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          ref={imgRef}
          alt="Certified Chilli Export Facility"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          src={certificationsHeroBg}
          onLoad={() => setImageLoaded(true)}
          fetchpriority="high"
          loading="eager"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-5 px-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Certifications</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Certifications &amp; Compliance
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Committed to International Standards and Trusted Export Practices
          </p>
        </div>
      </section>

      {/* ── 2. Introduction ─────────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#cca72f]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              alt="Official trade and compliance documents"
              className="relative rounded-xl shadow-2xl w-full h-[400px] md:h-[480px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src={chilliBowlTable}
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-left space-y-6"
          >
            <SectionHeading
              align="left"
              kicker="Global assurance"
              title={
                <>
                  Upholding the gold standard in <span className="text-[#8f000d]">spice export</span>
                </>
              }
              className="mb-4"
              showLeftLine={true}
              showRightLine={false}
            />
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.7]">
              At Minha Imports & Exports, quality is more than a promise—it is part of everything we do. From sourcing to shipping, every step is carefully monitored to ensure our Guntur chillies meet high food safety and export standards.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.7]">
              Our certifications reflect our commitment to quality, safety, and reliable exports, giving our customers confidence in every shipment.
            </p>

            {/* Inline trust logos */}
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <img src={fssaiLogo} alt="FSSAI Certified" className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={brcLogo} alt="BRC Certified" className="h-9 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={fieoLogo} alt="FIEO Member" className="h-9 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  document.getElementById('all-certificates')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center gap-2 bg-[#8f000d] text-white px-8 py-3.5 rounded-lg font-['urbanist'] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8f000d]/90 transition-all active:scale-95"
              >
                View Documents
                <FiArrowRight className="text-sm" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Certifications Showcase ──────────────────────────────────────── */}
      <section id="all-certificates" className="py-10 md:py-14 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          {/* Header */}
          <SectionHeading
            align="center"
            kicker="Our credentials"
            title={
              <>
                Internationally recognised <span className="text-[#8f000d]">certifications</span>
              </>
            }
            className="mb-10"
            showRightLine={true}
          />

          {/* Cards Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 flex flex-col text-left shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon pill */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cert.accentColor}12` }}
                >
                  {cert.icon}
                </div>

                <h3 className="font-['urbanist'] font-extrabold text-[18px] md:text-[20px] text-[#1a1c1e] mb-1">
                  {cert.name}
                </h3>
                <p className="font-['urbanist'] font-semibold text-[10px] tracking-wider uppercase text-[#5a403e]/60 mb-3">
                  {cert.subtitle}
                </p>
                <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[13px] leading-relaxed flex-1">
                  {cert.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <p className="font-['urbanist'] font-bold text-[10px] tracking-widest text-[#5a403e]/50 uppercase mb-1">Certificate No.</p>
                  <p className="font-['urbanist'] font-bold text-[12px] text-[#1a1c1e]">{cert.certNo}</p>
                  <p className="font-['Nunito'] text-[11px] text-[#5a403e]/60 mt-1">{cert.issuedBy}</p>
                </div>
                <button
                  onClick={() => setActiveCert(cert)}
                  className="mt-5 inline-flex items-center gap-1.5 text-[#8f000d] font-['urbanist'] font-bold text-[12px] hover:underline underline-offset-2 transition-all"
                >
                  <FiZoomIn className="text-[14px]" />
                  View Certificate
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Compliance Standards (Premium Shield with Four Quadrants) ────── */}
      <section className="py-5 md:py-6 bg-surface relative overflow-hidden text-[#1a1c1e] border-y border-neutral-100/50">

        {/* Glow Accents */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#2c6a46]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#8f000d]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#cca72f]/2 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left side text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 text-left space-y-6"
            >
              <SectionHeading
                align="left"
                kicker="Compliance standards"
                title={
                  <>
                    Built on four <span className="text-[#8f000d]">pillars of trust</span>
                  </>
                }
                className="mb-4"
                showLeftLine={true}
                showRightLine={false}
              />

              <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[14px] sm:text-[15px] leading-relaxed max-w-md">
                Our certifications reflect our commitment to quality, food safety, and international standards, ensuring every product is sourced, processed, and exported with care and confidence.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    document.getElementById('all-certificates')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center gap-2 border-2 border-[#8f000d]/45 text-[#8f000d] hover:text-white hover:bg-[#8f000d] px-7 py-3 rounded-full font-['urbanist'] font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#8f000d]/10 active:scale-95"
                >
                  Our Certifications
                  <FiArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>

            {/* Right side: Interactive Shield */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 flex justify-center items-center"
            >
              <div className="relative w-full max-w-[480px] aspect-[400/440]">
                {/* SVG Shield Background and Glows */}
                <svg
                  viewBox="0 0 400 440"
                  className="w-full h-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Metallic Gold Gradient for Borders */}
                    <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8a6f27" />
                      <stop offset="25%" stopColor="#cca72f" />
                      <stop offset="50%" stopColor="#ffd875" />
                      <stop offset="75%" stopColor="#cca72f" />
                      <stop offset="100%" stopColor="#8a6f27" />
                    </linearGradient>

                    {/* Radial Glow Gradients for Hover States */}
                    <radialGradient id="greenGlow" cx="25%" cy="25%" r="45%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="goldGlow" cx="75%" cy="25%" r="45%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="blueGlow" cx="25%" cy="75%" r="45%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="purpleGlow" cx="75%" cy="75%" r="45%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </radialGradient>

                    {/* ClipPath matching the exact outer boundary of the shield */}
                    <clipPath id="shieldClip">
                      <path d="M 200 30 C 130 20 60 15 20 25 C 20 130 15 230 35 300 C 55 370 120 415 200 435 C 280 415 345 370 365 300 C 385 230 380 130 380 25 C 340 15 270 20 200 30 Z" />
                    </clipPath>
                  </defs>

                  {/* ── Quadrant Backgrounds (Clipped to Shield) ── */}
                  <g clipPath="url(#shieldClip)">
                    {/* Top Left - Product Safety */}
                    <rect x="0" y="0" width="200" height="220" fill="#bdeed0" />

                    {/* Top Right - Hygienic Handling */}
                    <rect x="200" y="0" width="200" height="220" fill="#f9edd0" />

                    {/* Bottom Left - Export Compliance */}
                    <rect x="0" y="220" width="200" height="220" fill="#c4ddfc" />

                    {/* Bottom Right - Doc Accuracy */}
                    <rect x="200" y="220" width="200" height="220" fill="#fcdad7" />

                    {/* ── Inner Dividers ── */}
                    <line x1="200" y1="30" x2="200" y2="435" stroke="url(#goldBorderGrad)" strokeWidth="1" opacity="0.2" />
                    <line x1="20" y1="220" x2="380" y2="220" stroke="url(#goldBorderGrad)" strokeWidth="1" opacity="0.2" />
                  </g>

                  {/* ── Shield Gold Borders (Double Outline) ── */}
                  {/* Outer Gold Border */}
                  <path
                    d="M 200 30 C 130 20 60 15 20 25 C 20 130 15 230 35 300 C 55 370 120 415 200 435 C 280 415 345 370 365 300 C 385 230 380 130 380 25 C 340 15 270 20 200 30 Z"
                    fill="none"
                    stroke="url(#goldBorderGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Inner Thin Gold Border */}
                  <path
                    d="M 200 40 C 133 30 68 26 30 35 C 30 130 26 222 43 290 C 61 355 123 403 200 422 C 277 403 339 355 357 290 C 374 222 370 130 370 35 C 332 26 267 30 200 40 Z"
                    fill="none"
                    stroke="url(#goldBorderGrad)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.4"
                  />

                  {/* ── Center Golden Seal / Wax Stamp ── */}
                  <g className="filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                    {/* Scalloped outer edge polygon */}
                    <polygon
                      points={(() => {
                        let pts = [];
                        const cx = 200, cy = 220, r1 = 44, r2 = 38, points = 28;
                        for (let i = 0; i < points * 2; i++) {
                          const angle = (i * Math.PI) / points;
                          const r = i % 2 === 0 ? r1 : r2;
                          const x = cx + r * Math.cos(angle);
                          const y = cy + r * Math.sin(angle);
                          pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                        }
                        return pts.join(' ');
                      })()}
                      fill="url(#goldBorderGrad)"
                      stroke="#8a6f27"
                      strokeWidth="1"
                    />
                    {/* Inner raised circle */}
                    <circle cx="200" cy="220" r="33" fill="url(#goldBorderGrad)" stroke="#8a6f27" strokeWidth="1" />
                    {/* Dotted decorative inner circle */}
                    <circle cx="200" cy="220" r="29" fill="none" stroke="#fff3d1" strokeWidth="0.8" strokeDasharray="2.5 1.5" opacity="0.6" />
                    {/* Stamp Text */}
                    <text x="200" y="214" textAnchor="middle" fill="#311f05" fontSize="8.5" fontWeight="900" fontFamily="urbanist" letterSpacing="1.2">TRUST</text>
                    <text x="200" y="228" textAnchor="middle" fill="#311f05" fontSize="6" fontWeight="800" fontFamily="urbanist" letterSpacing="0.8">ASSURED</text>
                  </g>
                </svg>

                {/* ── Grid Overlay with Text Content ── */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
                  {/* Top-Left Quadrant Text */}
                  <div className="pointer-events-auto pl-12 sm:pl-16 pr-4 sm:pr-6 pt-10 pb-4 flex flex-col justify-center items-center text-center">
                    <div className="text-emerald-600 mb-2 shrink-0">
                      <FiShield className="text-[20px] sm:text-[24px] md:text-[26px]" />
                    </div>
                    <h4 className="font-['urbanist'] font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#1a1c1e] tracking-wide mb-1 leading-tight">
                      Product Safety
                    </h4>
                    <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[8.5px] sm:text-[9.5px] md:text-[11px] leading-relaxed max-w-[115px] sm:max-w-[145px]">
                      Advanced testing for safe and residue-free products.
                    </p>
                  </div>

                  {/* Top-Right Quadrant Text */}
                  <div className="pointer-events-auto pr-12 sm:pr-16 pl-4 sm:pl-6 pt-10 pb-4 flex flex-col justify-center items-center text-center">
                    <div className="text-amber-600 mb-2 shrink-0">
                      <FiCheckCircle className="text-[20px] sm:text-[24px] md:text-[26px]" />
                    </div>
                    <h4 className="font-['urbanist'] font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#1a1c1e] tracking-wide mb-1 leading-tight">
                      Hygienic Handling
                    </h4>
                    <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[8.5px] sm:text-[9.5px] md:text-[11px] leading-relaxed max-w-[115px] sm:max-w-[145px]">
                      Strict hygiene and controlled processing environments.
                    </p>
                  </div>

                  {/* Bottom-Left Quadrant Text */}
                  <div className="pointer-events-auto pl-12 sm:pl-16 pr-4 sm:pr-6 pt-1 sm:pt-2 pb-16 sm:pb-20 flex flex-col justify-start items-center text-center">
                    <div className="text-blue-600 mb-2 shrink-0">
                      <FiGlobe className="text-[20px] sm:text-[24px] md:text-[26px]" />
                    </div>
                    <h4 className="font-['urbanist'] font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#1a1c1e] tracking-wide mb-1 leading-tight">
                      Export Compliance
                    </h4>
                    <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[8.5px] sm:text-[9.5px] md:text-[11px] leading-relaxed max-w-[115px] sm:max-w-[145px]">
                      Compliant with global MRL and phytosanitary regulations.
                    </p>
                  </div>

                  {/* Bottom-Right Quadrant Text */}
                  <div className="pointer-events-auto pr-12 sm:pr-16 pl-4 sm:pl-6 pt-1 sm:pt-2 pb-16 sm:pb-20 flex flex-col justify-start items-center text-center">
                    <div className="text-purple-600 mb-2 shrink-0">
                      <FiFileText className="text-[20px] sm:text-[24px] md:text-[26px]" />
                    </div>
                    <h4 className="font-['urbanist'] font-bold text-[11px] sm:text-[13px] md:text-[15px] text-[#1a1c1e] tracking-wide mb-1 leading-tight">
                      Doc Accuracy
                    </h4>
                    <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[8.5px] sm:text-[9.5px] md:text-[11px] leading-relaxed max-w-[115px] sm:max-w-[145px]">
                      Accurate and verifiable documents for seamless clearance.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 5. Why Certifications Matter ────────────────────────────────────── */}
      <section className="py-5 md:py-6 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Points */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 md:order-1 space-y-4"
          >
            <SectionHeading
              align="left"
              kicker="Why it matters"
              title={
                <>
                  Why certified <span className="text-[#8f000d]">sourcing matters</span>
                </>
              }
              className="mb-4"
              showLeftLine={true}
              showRightLine={false}
            />

            <ul className="space-y-4 pt-1">
              {whyPoints.map((pt, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2c6a46]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheckCircle className="text-[#2c6a46] text-[16px]" />
                  </div>
                  <div>
                    <p className="font-['urbanist'] font-bold text-[15px] text-[#1a1c1e] mb-1">{pt.title}</p>
                    <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[14px] leading-relaxed">{pt.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 relative group"
          >
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#8f000d]/10 rounded-xl rotate-3 -z-10 group-hover:rotate-0 transition-transform duration-500" />
            <img
              alt="Global Chilli Trade Logistics"
              className="relative rounded-xl shadow-2xl w-full h-[300px] md:h-[350px] object-cover hover:scale-[1.01] transition-transform duration-500"
              src={chilliExportCta}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 6. Trust Logo Strip ─────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-surface border-y border-neutral-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <p className="font-['urbanist'] font-bold text-[10px] tracking-[0.25em] text-[#1a1c1e]/40 uppercase mb-8">
            Certified Quality. Trusted Worldwide.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {/* FSSAI logo */}
            <img src={fssaiLogo} alt="FSSAI" className="h-10 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            {/* BRC logo */}
            <img src={brcLogo} alt="BRC Certified" className="h-9 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            {/* FIEO logo */}
            <img src={fieoLogo} alt="FIEO" className="h-9 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />

          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative w-full">
        <div className="relative rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-[0_35px_80px_rgba(0,0,0,0.18)] border border-white/[0.04] bg-gradient-to-br from-[#2b210e] via-[#1d1609] to-[#0f0b04] group">

          {/* Glows & Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#cca72f]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#cca72f]/25 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#cca72f]/8 rounded-full blur-3xl pointer-events-none" />

          {/* Ship image overlay */}
          <img
            src={chilliExportCta}
            alt="Export cargo overlay"
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
                intro="Compliance is our passport, and uncompromising safety is our path. Our certifications are not just medals on a wall, but a daily promise of purity built for the global stage."
                className="mb-0"
                showLeftLine={true}
                showRightLine={false}
              />
              <div className="font-['urbanist'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white/40 relative z-10 mt-2">
                — The Minha Compliance Registry
              </div>
            </div>

            {/* Right Column: CTA Content (lg:col-span-7) */}
            <div className="space-y-5 text-center lg:text-left lg:col-span-7 w-full">

              {/* Title */}
              <h2 className="font-['urbanist'] font-bold text-[22px] sm:text-[26px] md:text-[32px] leading-[1.2] text-white tracking-tight">
                Looking for a certified <span className="text-[#cca72f]">chilli export partner?</span>
              </h2>

              {/* Description */}
              <p className="font-['Nunito'] font-semibold text-white/80 text-[13.5px] leading-relaxed">
                Partner with Minha for trusted sourcing with globally compliant documentation. We handle the complexity of compliance so you can focus on growth.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20receive%20your%20certification%20details%20and%20compliance%20documents."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8f000d] font-['urbanist'] font-extrabold text-[13px] py-3.5 px-7 rounded-lg uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 group whitespace-nowrap cursor-pointer"
                >
                  Request Details
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

export default Certifications;
