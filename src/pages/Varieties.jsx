import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiFilter, FiMail, FiDroplet, FiFileText, FiShield } from 'react-icons/fi';
import { chilliVarieties } from '../config/chilliData';
import chilliHeroVarieties from '../assets/chilli-hero-varieties.png';
import chilliIntroDry from '../assets/chilli-intro-dry.png';
import chilliSpotlightDry from '../assets/chilli-spotlight-dry.png';
import chilliBowlTable from '../assets/chilli-bowl-table.png';

const tejaCertifications = [
  "APEDA Certified",
  "Aflatoxin Tested",
  "Sudan Dye Free",
  "Full COA Reports",
  "ISO Sourcing",
];

const tejaFeatures = [
  {
    title: "Intense heat",
    body: "75,000–110,000 SHU. Preferred by extract manufacturers and food spice makers globally.",
    active: false,
    pungency: true,
  },
  {
    title: "Heat level",
    body: "Consistently rated among the highest SHU varieties in Guntur production zones. Every batch lab-tested before dispatch.",
    active: true,
    scoville: true,
  },
  {
    title: "Vivid color",
    body: "Uniform deep red skin. ASTA 75–95. Stays bright through long sea journeys.",
    active: false,
    asta: true,
  },
];

const tejaStats = [
  { value: "110K", label: "MAX SHU" },
  { value: "75–95", label: "ASTA COLOR" },
  { value: "<12%", label: "MOISTURE" },
  { value: "FOB", label: "SHIPPING BASIS" },
];

const Varieties = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const [tejaImgError, setTejaImgError] = useState(false);

  const redBgStyle = {
    backgroundImage: `
      radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px),
      linear-gradient(135deg, #8f000d 0%, #a50f15 50%, #5a0006 100%)
    `,
    backgroundSize: '24px 24px, 100% 100%',
  };

  // Categories list derived from data
  const categories = ['All', 'Teja S17', 'S4 / 334', 'S10', 'Byadgi', 'Other Varieties'];

  const getCategoryColorClass = (category) => {
    switch (category) {
      case 'Teja S17': return 'text-[#8f000d]';
      case 'S4 / 334': return 'text-[#1F5E3B]';
      case 'S10': return 'text-[#cca72f]';
      case 'Byadgi': return 'text-[#a73b0f]';
      case 'Other Varieties': return 'text-[#d97706]';
      default: return 'text-[#cca72f]';
    }
  };

  // Scroll to top on mount only if not filtering
  useEffect(() => {
    if (!location.state || !location.state.category) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Handle category filtering from navigation state
  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveFilter(location.state.category);
      // Jump instantly to the catalog to avoid landing at the top of the page
      setTimeout(() => {
        const element = document.getElementById('varieties-catalog');
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }, 0);
    }
  }, [location.state]);

  // Reset expansion when filter changes
  useEffect(() => {
    setIsExpanded(false);
  }, [activeFilter]);

  // Filtered varieties
  const filteredVarieties = activeFilter === 'All'
    ? (isExpanded ? chilliVarieties : chilliVarieties.slice(0, 4))
    : chilliVarieties.filter(v => v.category === activeFilter);

  // Background header styles
  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(17, 19, 21, 0.5), rgba(17, 19, 21, 0.7)),
      url(${chilliHeroVarieties})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center 25%',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
      { '@type': 'ListItem', position: 2, name: 'Chilli Varieties', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/varieties' },
    ],
  };

  return (
    <div className="bg-surface min-h-screen font-['Nunito'] text-[#1a1c1e] relative overflow-hidden">
      <SEO
        title="Guntur Dry Red Chilli Varieties | Minha Imports & Exports"
        description="Explore premium Guntur Dry Red Chilli varieties — Teja S17, S4/334, S10, Byadgi. Bulk Chilli Exporter India with APEDA certification. Custom grades for global spice industries."
        keywords="Guntur Dry Red Chilli Varieties, Teja S17 Chilli, S4 334 Chilli, Byadgi Chilli, Bulk Chilli Supplier India, Chilli Exporter India"
        url="/varieties"
        schemas={[breadcrumb]}
      />

      {/* 1. Hero Banner */}
      <section style={heroStyle} className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden pt-20">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link to="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Chilli Varieties</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Premium Chilli Varieties
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Export-Grade Guntur Dry Red Chillies with Superior Quality and Global Standards
          </p>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-10 md:py-14 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <SectionHeading
              kicker="Direct from the Source"
              title={
                <>
                  Red chillies selected and graded for <span className="text-[#8f000d]">your business.</span>
                </>
              }
            />

            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.7] mt-6">
              We source premium red chillies directly from trusted farmers in Guntur, the heart of India's chilli trade. Every batch is carefully selected and checked to ensure high quality and food safety.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.7] mt-4">
              We offer whole chillies, crushed flakes, and fine chilli powder, with customized packaging and product specifications to meet your business requirements.
            </p>

            <div className="pt-6 flex gap-10">
              <div className="space-y-1">
                <p className="text-[#8f000d] font-['urbanist'] font-bold text-[24px] md:text-[28px] leading-none">100%</p>
                <p className="font-['urbanist'] font-bold text-[11px] uppercase tracking-[0.1em] text-[#a0a5ad]">Traceability</p>
              </div>
              <div className="space-y-1 border-l border-[#a0a5ad]/20 pl-10">
                <p className="text-[#8f000d] font-['urbanist'] font-bold text-[24px] md:text-[28px] leading-none">ISO</p>
                <p className="font-['urbanist'] font-bold text-[11px] uppercase tracking-[0.1em] text-[#a0a5ad]">Certified Sourcing</p>
              </div>
            </div>
          </motion.div>

          {/* Graded Chillies Showcase Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#8f000d]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              alt="Systematic Grading of Guntur Chillies"
              loading="lazy"
              className="relative rounded-xl shadow-xl w-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-[1.01]"
              src={chilliIntroDry}
            />
          </motion.div>

        </div>
      </section>

      {/* 3. Chilli Varieties Showcase catalog — Specimen Ledger redesign */}
      <section id="varieties-catalog" className="py-10 md:py-14 bg-[#faf8f4]">
        <div className="px-6 md:px-12 max-w-[1180px] mx-auto">
          {/* Header — docket style, not centered hero */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 pb-6 border-b border-dashed border-[#1a1c1e]/20">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-7 bg-[#cca72f]" />
                <span className="font-['urbanist'] font-extrabold text-[11px] tracking-[0.15em] uppercase text-[#8f000d]">
                  Export grading register
                </span>
              </div>
              <h2 className="font-['urbanist'] uppercase font-extrabold text-[28px] md:text-[36px] tracking-tight text-[#1a1c1e] leading-[1.05] mt-2">
                Core chilli varieties
              </h2>
              <p className="font-['Nunito'] font-semibold text-[13.5px] text-[#5a403e] mt-2 max-w-md leading-relaxed">
                Indian red chilli, graded and lotted for spice processing,
                extraction, and food manufacture. Specs verified per shipment.
              </p>
            </div>
            <div className="font-['Nunito'] font-bold text-[12px] text-[#5a403e] whitespace-nowrap">
              {filteredVarieties.length.toString().padStart(2, '0')} varieties
            </div>
          </div>

          {/* Filter — index tabs, not pills */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 font-['urbanist'] font-extrabold text-[12.5px] uppercase tracking-wider">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`pb-1.5 border-b-2 transition-colors duration-200 cursor-pointer ${activeFilter === cat
                  ? 'border-[#8f000d] text-[#1a1c1e]'
                  : 'border-transparent text-[#5a403e]/70 hover:text-[#1a1c1e]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Ledger rows */}
          <motion.div layout className="flex flex-col">
            <AnimatePresence mode="popLayout">
              {filteredVarieties.map((chilli, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  key={chilli.id}
                  className="group grid grid-cols-[88px_1fr] md:grid-cols-[120px_1fr_auto] gap-5 md:gap-8 items-center py-6 border-b border-[#1a1c1e]/10 last:border-b-0"
                >
                  {/* Sample swatch */}
                  <Link
                    to={`/varieties/${chilli.id}`}
                    className="relative w-[88px] h-[88px] md:w-[120px] md:h-[120px] bg-[#e4dccb] overflow-hidden flex-shrink-0 border border-[#1a1c1e]/10 rounded"
                  >
                    <img
                      src={chilli.image}
                      alt={chilli.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Grade stamp */}
                  </Link>

                  {/* Identity + spec strip */}
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-['urbanist'] uppercase font-extrabold text-[17px] md:text-[19px] text-[#1a1c1e] tracking-tight leading-tight">
                        <Link to={`/varieties/${chilli.id}`} className="hover:text-[#8f000d] transition-colors">
                          {chilli.name}
                        </Link>
                      </h3>
                      <span className={`font-['urbanist'] font-extrabold text-[10.5px] uppercase tracking-wider ${getCategoryColorClass(chilli.category)}`}>
                        {chilli.category}
                      </span>
                    </div>

                    <p className="font-['Nunito'] font-semibold text-[13.5px] text-[#5a403e] leading-[1.6] mt-1.5 max-w-lg line-clamp-2">
                      {chilli.description}
                    </p>

                    {/* Spec strip — renders fields mapped correctly from config data */}
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 font-['Nunito'] font-bold text-[12.5px] text-[#1a1c1e]">
                      {chilli.heatLevel && (
                        <span><span className="text-[#5a403e]/70">SHU</span> {chilli.heatLevel}</span>
                      )}
                      {chilli.colorValue && (
                        <span><span className="text-[#5a403e]/70">ASTA</span> {chilli.colorValue}</span>
                      )}
                      {chilli.moisture && (
                        <span><span className="text-[#5a403e]/70">MOIST</span> {chilli.moisture}</span>
                      )}
                      {chilli.grade && (
                        <span><span className="text-[#5a403e]/70">GRADE</span> {chilli.grade}</span>
                      )}
                    </div>
                  </div>

                  {/* Actions — right column on desktop, full width on mobile */}
                  <div className="col-span-2 md:col-span-1 flex gap-2 md:flex-col md:items-stretch mt-1 md:mt-0 md:w-[120px]">
                    <Link
                      to={`/varieties/${chilli.id}`}
                      className="flex-1 md:flex-none text-center border border-[#1a1c1e]/20 text-[#1a1c1e] py-2 font-['urbanist'] font-bold text-[10px] uppercase tracking-wider hover:border-[#1a1c1e] hover:bg-[#1a1c1e]/5 transition-all duration-300 cursor-pointer"
                    >
                      Details
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 md:flex-none text-center bg-[#8f000d] text-white py-2 font-['urbanist'] font-bold text-[10px] uppercase tracking-wider hover:bg-[#72000a] transition-all duration-300 cursor-pointer"
                    >
                      Inquire
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View all / show less */}
          {activeFilter === 'All' && chilliVarieties.length > 4 && (
            <div className="flex justify-center pt-10">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="font-['urbanist'] font-extrabold text-[11px] uppercase tracking-[0.15em] text-[#1a1c1e] border-b-2 border-[#1a1c1e] pb-1.5 hover:text-[#8f000d] hover:border-[#8f000d] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                {isExpanded ? 'Show fewer varieties' : 'View all varieties'}
                <FiArrowRight className={`text-[12px] transition-transform ${isExpanded ? '-rotate-90' : ''}`} />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. Special Spotlight: Teja S17 */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative">
        <div className="max-w-[1100px] mx-auto text-left">

          {/* Top Row Label / Badge */}
          <div className="flex justify-between items-start gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5" style={{ backgroundColor: '#cca72f' }} />
              <span className="font-mono text-[11px] tracking-[0.22em] text-[#cca72f] uppercase">
                Top Choice — Teja S17
              </span>
            </div>
          </div>

          {/* Headline & Description side-by-side with Image */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center mb-8">
            <div className="md:col-span-3">
              {/* Headline & Watermark */}
              <div className="relative mb-6">
                <div
                  className="absolute font-['urbanist'] font-black text-neutral-200/70 select-none pointer-events-none z-0 leading-none"
                  style={{
                    fontSize: "180px",
                    top: "-38px",
                    left: "-8px",
                  }}
                >
                  01
                </div>
                <h2 className="relative z-10 font-['urbanist'] font-extrabold tracking-tight text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] text-[#1a1c1e]">
                  The <span className="text-[#8f000d]">king of spice.</span>
                  <br />
                  Nothing comes close.
                </h2>
              </div>

              {/* Gold divider */}
              <div className="w-16 h-0.5 mb-6" style={{ backgroundColor: '#cca72f' }} />

              {/* Description */}
              <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] sm:text-[16px] leading-[1.6] max-w-xl">
                Sourced exclusively from select farms in Guntur's red-soil belt. Teja S17 delivers a heat profile and color that's become the benchmark for spice manufacturers worldwide.
              </p>
            </div>

            {/* Product Image Column (With Badge Overlay) */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-sm border border-[#e0dbd5] bg-[#fdfcfa] p-3 flex items-center justify-center min-h-[220px]">
              <div className="relative w-full h-full">
                <img
                  src={chilliSpotlightDry}
                  alt="Teja S17 Dried Red Chilli Product Showcase"
                  className="w-full h-full object-cover rounded-xl max-h-[280px]"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.06em] text-white uppercase px-2.5 py-1 rounded bg-[#8f000d] shadow-sm font-semibold select-none z-10">
                  #1 Export Volume
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#e0dbd5] rounded-xl overflow-hidden mb-8 bg-white">
            {tejaStats.map((s, idx) => (
              <div
                key={idx}
                className={`p-4 md:p-5 ${idx < 3 ? "border-b sm:border-b-0 sm:border-r border-[#e0dbd5]" : ""
                  } ${idx === 2 ? "border-b-0 sm:border-b-0" : ""} text-left`}
              >
                <div className="text-[20px] md:text-[24px] font-['urbanist'] font-extrabold text-[#8f000d] leading-tight">
                  {s.value}
                </div>
                <div className="text-[10px] tracking-[0.08em] text-[#5f5b58] uppercase font-mono mt-1.5 font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {tejaFeatures.map((f, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${f.active
                  ? "bg-[#7b1a1a] text-white border-transparent shadow-lg shadow-[#7b1a1a]/15"
                  : "bg-white text-[#1a1a1a] border-[#e0dbd5] hover:border-neutral-400"
                  }`}
              >
                <div>
                  <div
                    className={`w-5 h-5 rounded border flex items-center justify-center text-[10px] mb-4 font-bold ${f.active
                      ? "border-white/30 text-white"
                      : "border-neutral-300 text-neutral-500"
                      }`}
                  >
                    ✓
                  </div>
                  <h4 className={`font-['urbanist'] font-extrabold text-[14.5px] mb-2 ${f.active ? "text-white" : "text-[#8f000d]"}`}>{f.title}</h4>
                  <p
                    className={`font-['Nunito'] font-semibold text-[12.5px] leading-relaxed ${f.active ? "text-white/85" : "text-[#5a403e]"
                      }`}
                  >
                    {f.body}
                  </p>
                </div>

                {f.pungency && (
                  <div className="mt-6">
                    <div className="text-[9px] tracking-widest text-[#5a403e]/60 uppercase font-bold mb-1.5">
                      Pungency Rating
                    </div>
                    <div className="h-1 bg-neutral-100 rounded-full overflow-hidden relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#cca72f] rounded-full"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-[#5a403e]/50 mt-1 font-mono">
                      <span>Mild</span>
                      <span>110K SHU Max</span>
                    </div>
                  </div>
                )}

                {f.scoville && (
                  <div className="mt-6">
                    <div className="text-[9px] tracking-widest text-white/60 uppercase font-bold mb-1.5">
                      Scoville Scale
                    </div>
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#f5c842] to-[#c0392b] rounded-full"
                        style={{ width: "78%" }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-white/50 mt-1 font-mono">
                      <span>0</span>
                      <span>75K — 110K SHU</span>
                    </div>
                  </div>
                )}

                {f.asta && (
                  <div className="mt-6">
                    <div className="text-[9px] tracking-widest text-[#5a403e]/60 uppercase font-bold mb-1.5">
                      ASTA Color Value
                    </div>
                    <div className="h-1 bg-neutral-100 rounded-full overflow-hidden relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#8f000d] rounded-full"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-[#5a403e]/50 mt-1 font-mono">
                      <span>0 ASTA</span>
                      <span>75 — 95 ASTA</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certification Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {tejaCertifications.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 border border-neutral-200 rounded-full px-4 py-1.5 text-[#5a403e] font-['urbanist'] font-extrabold text-[12px] bg-white"
              >
                <div className="w-3.5 h-3.5 rounded border border-neutral-300 flex items-center justify-center text-[8px] text-neutral-500 font-bold">
                  ✓
                </div>
                {c}
              </div>
            ))}
          </div>

          {/* Footer Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-neutral-100 pt-6">
            <p className="font-['Nunito'] italic text-[#5a403e]/75 text-[13px] text-left max-w-sm leading-relaxed">
              "Our Teja is graded by hand, batch by batch — not sorted by machine and forgotten."
            </p>
            <a
              href="#inquire"
              className="inline-flex items-center gap-2 border-2 border-[#1a1c1e] bg-transparent hover:bg-[#1a1c1e] hover:text-white text-[#1a1c1e] font-['urbanist'] font-extrabold text-[12px] tracking-wider uppercase py-3.5 px-6 rounded-lg transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <div className="w-3.5 h-3.5 rounded border border-current flex items-center justify-center text-[8px] font-bold">
                ✓
              </div>
              Get a Teja Quote ↗
            </a>
          </div>
        </div>
      </section>
      {/* 5. Quality Standards & Sourcing Ethics */}
      <section className="py-10 md:py-14 bg-surface-container-low relative overflow-hidden">
        {/* Soft elegant background blur graphics */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B22222]/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1F5E3B]/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          {/* Section Heading with animation */}
          <SectionHeading
            align="center"
            kicker="Quality Standards"
            showRightLine={false}
            title={
              <>
                Our quality checks from <span className="text-[#8f000d]">farm to port</span>
              </>
            }
            intro="We make sure that the quality harvested on the farm is exactly what gets delivered to you. Every batch goes through strict testing."
            className="mb-12 md:mb-16"
          />

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {[
              {
                idx: "01",
                title: "Sorting",
                desc: "Hand-sorting by color, size, and grade. We remove all discolored pods and mixed materials.",
                details: ["Uniform size selection", "Color consistency checks", "Clean sorting floors"],
                icon: <FiFilter className="text-white text-xl" />,
                bg: "bg-[#8f000d]"
              },
              {
                idx: "02",
                title: "Moisture checks",
                desc: "Strict humidity checks during packing and warehousing to prevent mold and lock in flavor.",
                details: ["Under 12% moisture limit", "Dry climate storage", "Mold prevention setup"],
                icon: <FiDroplet className="text-white text-xl" />,
                bg: "bg-[#1F5E3B]"
              },
              {
                idx: "03",
                title: "Deep cleaning",
                desc: "Cleaning through multiple screens, magnets, and blowers to remove dust and dirt.",
                details: ["Metal scanning machines", "High-pressure air cleaning", "Dust-free processing"],
                icon: <FiShield className="text-white text-xl" />,
                bg: "bg-[#cca72f]"
              },
              {
                idx: "04",
                title: "Lab testing",
                desc: "Every container is tested by independent labs and shipped with official COA reports.",
                details: ["Aflatoxin clearance tests", "Sudan dye residue checks", "Full lab certificate reports"],
                icon: <FiFileText className="text-white text-xl" />,
                bg: "bg-[#a73b0f]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(0,0,0,0.04)] transition-all duration-300 group"
              >
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="font-['urbanist'] font-bold text-[12px] text-[#cca72f] tracking-wider">{item.idx}</span>
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-['urbanist'] font-bold text-[18px] text-[#1a1c1e] leading-snug">{item.title}</h3>
                  <p className="font-['Nunito'] text-[#5a403e]/90 text-[13.5px] leading-relaxed font-semibold">{item.desc}</p>
                </div>
                <ul className="space-y-3 border-t border-neutral-100 pt-5 mt-5 text-left">
                  {item.details.map((det, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <FiCheck className="text-[#1F5E3B] text-[15px] flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] font-['Nunito'] font-semibold text-[#5a403e]/90 leading-tight">{det}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Packaging Bottom Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8"
          >
            {/* Text details for packaging */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between gap-6 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
              <div>
                <SectionHeading
                  kicker="Export Packaging"
                  title="Custom Packaging Options"
                  intro="We pack all bulk orders securely so they survive long sea journeys and stay fresh, colorful, and aromatic. We can also print your brand and label details on the packaging."
                  tone="dark"
                  kickerColor="#1F5E3B"
                />
              </div>

              {/* Packaging types row */}
              <div className="grid grid-cols-3 gap-4 border-t border-neutral-100 pt-6">
                {[
                  { name: "Jute Bags", desc: "Natural breathable bags for standard shipping" },
                  { name: "PP Bags", desc: "Woven moisture-proof bags for export shipping" },
                  { name: "Carton Boxes", desc: "Rigid corrugated boxes to protect the pods" }
                ].map((pkg, idx) => (
                  <div key={idx} className="space-y-1">
                    <h5 className="font-['urbanist'] font-bold text-[13px] text-[#8f000d]">{pkg.name}</h5>
                    <p className="font-['Nunito'] font-semibold text-[#5a403e]/90 text-[11px] leading-tight">{pkg.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Image */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-lg border border-neutral-100 relative min-h-[200px] group">
              <img
                src={chilliBowlTable}
                alt="Guntur Dry Red Chillies Packaging"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-['urbanist'] font-bold text-white text-[16px] leading-tight">Global Export Shipping</p>
                <p className="font-['Nunito'] text-white/85 text-[11.5px] mt-1 font-semibold">Packed securely and delivered fresh to your nearest port</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. Inquiry CTA Section */}
      <section id="inquire" className="relative bg-surface py-12 md:py-16 overflow-hidden border-t border-neutral-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative z-10 bg-[#181410] rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-2xl border border-white/5 transition-all duration-300"
          >
            {/* Decorative glows inside card */}
            <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#cca72f]/10 rounded-full blur-[70px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-white/5 rounded-full blur-[50px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Sourcing Quote (lg:col-span-5) */}
              <div className="relative lg:pr-8 xl:pr-12 lg:col-span-5 w-full z-10 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#cca72f]" />
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#cca72f]">
                    Our Promise
                  </p>
                </div>
                <blockquote className="font-['urbanist'] font-semibold text-[16px] md:text-[18px] leading-relaxed text-white/95">
                  We choose the best chilli pods from farms we trust, grading every batch by hand to make sure they arrive fresh, hot, and full of color.
                </blockquote>
                <div className="font-['urbanist'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white/50">
                  — The Minha Sourcing Team
                </div>
              </div>

              {/* Right Column: CTA Content (lg:col-span-7) */}
              <div className="space-y-5 text-center lg:text-left lg:col-span-7 w-full">

                <h2 className="font-['urbanist'] font-bold text-[22px] sm:text-[26px] md:text-[30px] leading-[1.25] text-white tracking-tight">
                  Looking for a reliable bulk chilli supplier?
                </h2>

                <p className="font-['Nunito'] font-semibold text-[13.5px] leading-relaxed text-white/80">
                  We are one of India's trusted chilli exporters. Contact us today to get customized price quotes, lab certificates, and booking schedules.
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start pt-1">
                  {[
                    "100% Tested Quality",
                    "International Standards",
                    "Custom Packing Formats"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FiCheck className="text-[#cca72f] text-sm shrink-0" />
                      <span className="font-['urbanist'] font-bold text-[11px] text-white/90 uppercase tracking-wider">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons Group */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3.5 relative z-10 pt-2">
                  <a
                    href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20send%20a%20bulk%20enquiry%20for%20your%20Guntur%20dry%20red%20chillies.%20Please%20share%20product%20grades%2C%20pricing%2C%20and%20MOQ%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 bg-[#8f000d] hover:bg-[#a3000f] text-white font-['urbanist'] font-bold text-[13px] py-4 px-8 rounded-lg uppercase tracking-wider shadow-lg shadow-[#8f000d]/30 transition-colors duration-300 whitespace-nowrap cursor-pointer text-center"
                  >
                    Send Enquiry
                    <FiArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20am%20interested%20in%20your%20chilli%20varieties%20and%20would%20like%20to%20discuss%20pricing%2C%20certifications%2C%20and%20export%20availability."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-['urbanist'] font-bold text-[13px] py-4 px-8 rounded-lg uppercase tracking-wider hover:bg-white hover:text-[#8f000d] hover:border-white transition-colors duration-300 whitespace-nowrap cursor-pointer text-center"
                  >
                    <FiMail className="text-base shrink-0" />
                    Contact Us
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Varieties;
