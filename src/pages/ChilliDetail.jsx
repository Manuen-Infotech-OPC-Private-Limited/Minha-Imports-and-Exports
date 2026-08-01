import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiMapPin, FiDroplet, FiAward, FiTag } from 'react-icons/fi';
import { GiChiliPepper } from 'react-icons/gi';
import { chilliVarieties } from '../config/chilliData';
import SectionHeading from '../components/common/SectionHeading';

// Import local assets for gallery fallback
import chilliIntroDry from '../assets/chilli-intro-dry.png';
import chilliSpotlightDry from '../assets/chilli-spotlight-dry.png';
import chilliBowlTable from '../assets/chilli-bowl-table.png';
import chilliExportCta from '../assets/chilli-export-cta.png';
import chilliPremium from '../assets/glowing-chilli-premium-remove-bg-io.png';

const ChilliDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState('');

  // Find the current chilli variety details
  const chilli = chilliVarieties.find(c => c.id === id);

  // Scroll to top on mount or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Update default active image when data loads
  useEffect(() => {
    if (chilli) {
      setActiveImage(chilli.image);
    }
  }, [chilli]);

  if (!chilli) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-surface text-center p-6">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Product Not Found</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">The specified chilli variety could not be found in our catalog.</p>
        <Link to="/varieties" className="bg-primary text-white font-bold px-8 py-3 rounded hover:bg-primary-container transition-all">
          Back to Varieties
        </Link>
      </div>
    );
  }

  // Create local images gallery
  const gallery = [
    chilli.image,
    chilliIntroDry,
    chilliSpotlightDry,
    chilliBowlTable
  ];

  // Related products (different than current, showing 2)
  const relatedChillies = chilliVarieties
    .filter(c => c.id !== chilli.id)
    .sort((a, b) => (a.category === chilli.category ? 1 : -1))
    .slice(0, 2);

  const isByadgi = chilli.category === 'Byadgi';
  const applications = [
    {
      idx: "01",
      title: "Spice & Grinding Industry",
      desc: isByadgi
        ? "Best for mild chilli powder and seasoning mixes that need a rich, bright red color."
        : "Best for spicy chilli powder and curry powders that need a strong, steady heat level.",
      highlights: isByadgi
        ? ["Easy to grind into fine powder", "Beautiful natural red color", "100% natural color, no chemicals"]
        : ["Holds a steady heat level in spice mixes", "High powder yield after grinding", "Stays fresh and spicy for a long time"],
      numColor: "text-[#8f000d]/15",
      accentLine: "border-[#8f000d]"
    },
    {
      idx: "02",
      title: "Food Processing Lines",
      desc: isByadgi
        ? "Ideal for making mild sauces, pastes, and packaged foods that need color but no heat."
        : "Ideal for making hot sauces, pastes, and snacks that need a spicy kick and great color.",
      highlights: [
        "Blends perfectly in sauces and pastes",
        "Retains flavor and color during cooking",
        "Helps keep sauces thick and uniform"
      ],
      numColor: "text-[#1F5E3B]/15",
      accentLine: "border-[#1F5E3B]"
    },
    {
      idx: "03",
      title: isByadgi ? "Natural Color Extraction" : "Oleoresin Extraction",
      desc: isByadgi
        ? "Excellent for extracting natural red color due to its high ASTA color value."
        : "Excellent for extracting hot spice oil due to its high natural heat level.",
      highlights: isByadgi
        ? ["High output of natural red color", "Clean and pure color quality", "Perfect for natural food coloring"]
        : ["High output of pure spice oil", "High recovery rate during processing", "Clean and pure oil quality"],
      numColor: "text-[#cca72f]/25",
      accentLine: "border-[#cca72f]"
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      <SEO
        title={`${chilli.name} — Export Grade | Minha Imports & Exports`}
        description={`Buy ${chilli.name} in bulk from India's top chilli exporter. ${chilli.description} Heat: ${chilli.heatLevel}. Color: ${chilli.colorValue} ASTA. FSSAI & APEDA certified.`}
        keywords={`${chilli.name}, Guntur Dry Red Chilli, ${chilli.category}, Chilli Exporter India, Bulk Chilli Supplier, ${chilli.grade} grade chilli`}
        url={`/varieties/${chilli.id}`}
        image={chilli.image}
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
              { '@type': 'ListItem', position: 2, name: 'Chilli Varieties', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/varieties' },
              { '@type': 'ListItem', position: 3, name: chilli.name, item: `https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/varieties/${chilli.id}` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: chilli.name,
            description: chilli.description,
            image: chilli.image,
            brand: { '@type': 'Brand', name: 'Minha Imports & Exports' },
            category: 'Spices & Seasonings',
            countryOfOrigin: 'IN',
            additionalProperty: [
              { '@type': 'PropertyValue', name: 'Heat Level', value: chilli.heatLevel },
              { '@type': 'PropertyValue', name: 'ASTA Color Value', value: chilli.colorValue },
              { '@type': 'PropertyValue', name: 'Moisture', value: chilli.moisture },
              { '@type': 'PropertyValue', name: 'Grade', value: chilli.grade },
              { '@type': 'PropertyValue', name: 'Stem Type', value: chilli.stemType },
            ],
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'USD',
              seller: { '@type': 'Organization', name: 'Minha Imports & Exports' },
            },
          },
        ]}
      />

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt={`${chilli.name} Hero`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={chilli.image}
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/varieties">Chilli Varieties</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">{chilli.name}</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            {chilli.name}
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Premium Export Grade Guntur Dry Red Chilli
          </p>
        </div>
      </section>

      {/* 2. Product Overview Section */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-gutter"
          >
            <div className="bg-white rounded p-2 ambient-shadow overflow-hidden">
              <img
                alt={`${chilli.name} Main`}
                className="w-full h-[500px] object-cover rounded-sm"
                id="main-img"
                src={activeImage}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gallery.map((img, idx) => (
                <img
                  key={idx}
                  alt={`Thumb ${idx + 1}`}
                  className={`w-full h-24 object-cover rounded cursor-pointer transition-all ${activeImage === img ? 'border-2 border-primary-container opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                  src={img}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Key Specs Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            <SectionHeading
              kicker="Specifications"
              title={
                <>
                  Quality specifications for <span className="text-[#8f000d]">{chilli.name}</span>
                </>
              }
              className="mb-6"
            />

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">

              {/* Card 1: Variety Name */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-red-50 text-[#8f000d]">
                    <FiTag className="text-[16px]" />
                  </div>
                  <span className="font-['urbanist'] font-extrabold text-[10px] text-[#5a403e]/70 uppercase tracking-wider">Chilli variety</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[#1a1c1e] font-['urbanist'] font-extrabold text-[14px] md:text-[15px]">{chilli.name}</div>
                    <div className="font-['Nunito'] font-semibold text-[11px] text-[#5a403e]/60 mt-0.5">Official grade code</div>
                  </div>
                  <span className="font-['urbanist'] font-extrabold text-[10px] text-[#8f000d] bg-[#8f000d]/5 px-2.5 py-0.5 rounded">Verified Quality</span>
                </div>
              </div>

              {/* Card 2: Heat Level */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-red-50 text-[#8f000d]">
                    <GiChiliPepper className="text-[16px]" />
                  </div>
                  <span className="font-['urbanist'] font-extrabold text-[10px] text-[#5a403e]/70 uppercase tracking-wider">Spice level (heat)</span>
                </div>
                <div>
                  <div className="text-[#8f000d] font-['urbanist'] font-extrabold text-[14px] md:text-[15px] leading-tight">{chilli.heatLevel}</div>
                  <div className="font-['Nunito'] font-semibold text-[11px] text-[#5a403e]/60 mt-1">Heat level (SHU)</div>
                </div>
              </div>

              {/* Card 3: Color Value */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-yellow-50 text-[#cca72f]">
                    <FiAward className="text-[16px]" />
                  </div>
                  <span className="font-['urbanist'] font-extrabold text-[10px] text-[#5a403e]/70 uppercase tracking-wider">Red color level</span>
                </div>
                <div>
                  <div className="text-[#cca72f] font-['urbanist'] font-extrabold text-[14px] md:text-[15px] leading-tight">{chilli.colorValue}</div>
                  <div className="font-['Nunito'] font-semibold text-[11px] text-[#5a403e]/60 mt-1">Color level (ASTA)</div>
                </div>
              </div>

              {/* Card 4: Stem Style */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-green-50 text-[#1f5e3b]">
                    <FiCheckCircle className="text-[16px]" />
                  </div>
                  <span className="font-['urbanist'] font-extrabold text-[10px] text-[#5a403e]/70 uppercase tracking-wider">Stem type</span>
                </div>
                <div>
                  <div className="text-[#1a1c1e] font-['urbanist'] font-extrabold text-[14px] md:text-[15px] leading-tight">{chilli.stemType}</div>
                  <div className="font-['Nunito'] font-semibold text-[11px] text-[#5a403e]/60 mt-1">Stem style (with/without)</div>
                </div>
              </div>

              {/* Card 5: Moisture */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <FiDroplet className="text-[16px]" />
                  </div>
                  <span className="font-['urbanist'] font-extrabold text-[10px] text-[#5a403e]/70 uppercase tracking-wider">Moisture level</span>
                </div>
                <div>
                  <div className="text-[#1a1c1e] font-['urbanist'] font-extrabold text-[14px] md:text-[15px] leading-tight">{chilli.moisture}</div>
                  <div className="font-['Nunito'] font-semibold text-[11px] text-blue-600/80 mt-1">Moisture limit</div>
                </div>
              </div>

              {/* Card 6: Origin */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-neutral-50 text-neutral-600">
                    <FiMapPin className="text-[16px]" />
                  </div>
                  <span className="font-['urbanist'] font-extrabold text-[10px] text-[#5a403e]/70 uppercase tracking-wider">Where it is grown</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[#1a1c1e] font-['urbanist'] font-extrabold text-[14px] md:text-[15px]">Guntur, Andhra Pradesh</div>
                    <div className="font-['Nunito'] font-semibold text-[11px] text-[#5a403e]/60 mt-0.5">Direct from Guntur farms</div>
                  </div>
                  <span className="font-['urbanist'] font-extrabold text-[10px] text-green-600 bg-green-50 px-2.5 py-0.5 rounded">Grown in India</span>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="flex-1 bg-[#8f000d] text-white py-4 rounded-lg font-['urbanist'] font-bold hover:bg-[#72000a] transition-all active:scale-95 text-center uppercase tracking-wider text-[13px] shadow-lg shadow-[#8f000d]/10">
                Send Inquiry
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. About Variety */}
      <section className="py-8 md:py-12 bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-6 lg:gap-8 items-center">

            {/* Left Column: Text Content */}
            <div className="text-left space-y-6">
              <SectionHeading
                kicker="Variety profile"
                title={
                  <>
                    The {isByadgi ? "pigmentation" : "pungency"} <span className="text-[#8f000d]">king</span>
                  </>
                }
                className="mb-4"
              />
              <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] sm:text-[16px] leading-[1.6] text-justify">
                {chilli.description} We buy our chillies directly from the best farms in Guntur. Every batch is carefully selected, checked, and sorted. We make sure they are fresh, clean, and safe for spice factories and food companies worldwide.
              </p>
              <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] sm:text-[16px] leading-[1.6] text-justify">
                With Minha, you get pure dry red chillies that meet all standard export quality checks. We handle the process from selection to container packaging to ensure it reaches you in perfect condition.
              </p>
            </div>

            {/* Right Column: Transparent Product Image Showcase */}
            <div className="flex justify-center lg:justify-end items-center relative group">
              {/* Subtle background glow effect behind the transparent image */}
              <div className="absolute w-72 h-72 md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-tr from-[#8f000d]/8 to-[#cca72f]/8 blur-3xl pointer-events-none" />

              <img
                src={chilliPremium}
                alt="Premium Guntur Dry Red Chillies"
                className="relative z-10 max-h-[300px] md:max-h-[360px] lg:max-h-[400px] w-auto max-w-[90%] md:max-w-[85%] lg:max-w-[90%] object-contain drop-shadow-[0_20px_35px_rgba(143,0,13,0.20)]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Technical Specifications Table */}
      <section className="py-10 md:py-14 bg-white border-t border-b border-neutral-100">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            align="center"
            kicker="Specifications"
            title={
              <>
                Export quality <span className="text-[#8f000d]">specifications</span>
              </>
            }
            intro="Clear quality and laboratory parameters checked for every batch we ship."
            className="mb-8"
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 font-['Nunito'] text-[14px]">

            {/* Column 1 */}
            <div className="space-y-6">

              {/* Item 1 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14px] md:text-[15px] block">Heat level</span>
                  <span className="font-['Nunito'] font-semibold text-[#5a403e]/60 text-[11px] block mt-1">How we measure heat (SHU)</span>
                </div>
                <span className="font-['urbanist'] font-extrabold text-[#8f000d] text-[14.5px] md:text-[15.5px]">{chilli.heatLevel}</span>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14px] md:text-[15px] block">Red color level</span>
                  <span className="font-['Nunito'] font-semibold text-[#5a403e]/60 text-[11px] block mt-1">How we measure color (ASTA)</span>
                </div>
                <span className="font-['urbanist'] font-extrabold text-[#cca72f] text-[14.5px] md:text-[15.5px]">{chilli.colorValue}</span>
              </div>

              {/* Item 3 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14px] md:text-[15px] block">Moisture level</span>
                  <span className="font-['Nunito'] font-semibold text-[#5a403e]/60 text-[11px] block mt-1">Dryness percentage check</span>
                </div>
                <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14.5px] md:text-[15.5px]">{chilli.moisture} Max</span>
              </div>

            </div>

            {/* Column 2 */}
            <div className="space-y-6">

              {/* Item 4 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14px] md:text-[15px] block">Purity level</span>
                  <span className="font-['Nunito'] font-semibold text-[#5a403e]/60 text-[11px] block mt-1">Careful sorting quality</span>
                </div>
                <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14.5px] md:text-[15.5px]">99.5% Min</span>
              </div>

              {/* Item 5 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14px] md:text-[15px] block">Foreign materials</span>
                  <span className="font-['Nunito'] font-semibold text-[#5a403e]/60 text-[11px] block mt-1">Stems and dust limit</span>
                </div>
                <span className="font-['urbanist'] font-extrabold text-[#ba1a1a] text-[14.5px] md:text-[15.5px]">&lt; 1% Max</span>
              </div>

              {/* Item 6 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14px] md:text-[15px] block">Shelf life</span>
                  <span className="font-['Nunito'] font-semibold text-[#5a403e]/60 text-[11px] block mt-1">When stored in dry place</span>
                </div>
                <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14.5px] md:text-[15.5px]">12 - 18 Months</span>
              </div>

            </div>

            {/* Packaging (Full Width) */}
            <div className="md:col-span-2 pt-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#FAF8F4] rounded-2xl border border-[#cca72f]/20">
                <div className="text-left mb-4 md:mb-0">
                  <span className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[14px] md:text-[15px] block">Standard export packaging</span>
                  <span className="font-['Nunito'] font-semibold text-[#5a403e]/60 text-[11px] block mt-1">Bags and custom cartons</span>
                </div>
                <span className="font-['Nunito'] font-semibold text-[13px] text-[#5a403e] bg-white px-4 py-2.5 rounded-xl border border-neutral-100 text-left md:text-right leading-relaxed max-w-xl">
                  Standard Jute Bags (5kg/10kg/15kg/25kg), PP Bags, or Custom Vacuum-Sealed Cartons
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Applications Section */}
      <section className="py-10 md:py-14 bg-surface-container-low border-t border-b border-neutral-100">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

          <SectionHeading
            align="center"
            kicker="Ideal uses"
            title={
              <>
                Where this variety is <span className="text-[#8f000d]">used</span>
              </>
            }
            intro="We supply our dry red chillies to spice factories, food processors, and color extraction labs worldwide."
            className="mb-8"
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {applications.map((app, idx) => (
              <div key={idx} className="flex flex-col text-left space-y-5 relative">

                {/* Number Overlay */}
                <div className={`font-['urbanist'] font-black text-[72px] leading-none ${app.numColor} select-none`}>
                  {app.idx}
                </div>

                {/* Accent Top Border */}
                <div className={`border-t-2 ${app.accentLine} w-16 pt-3`} />

                <div>
                  <h4 className="font-['urbanist'] font-extrabold text-[18px] text-[#1a1c1e] mb-3">{app.title}</h4>
                  <p className="text-[#5a403e] font-['Nunito'] font-semibold text-[13.5px] leading-relaxed mb-5">{app.desc}</p>
                </div>

                {/* Highlights Bullet List */}
                <ul className="space-y-2.5 border-t border-neutral-100 pt-5 flex-grow">
                  {app.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="grid grid-cols-[8px_1fr] gap-1.5 text-left items-start">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#8f000d] mt-[8px] flex-shrink-0" />
                      <span className="leading-snug text-[14.5px] text-[#5a403e] font-['Nunito'] font-semibold">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Packaging & Export */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-on-background text-white rounded-xl overflow-hidden flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-12 flex flex-col justify-center text-left">
              <SectionHeading
                tone="light"
                kicker="Shipping & Packing"
                kickerColor="#cca72f"
                title={
                  <>
                    Global shipping and <span className="text-[#cca72f]">packing</span>
                  </>
                }
                className="mb-6"
              />
              <ul className="space-y-4 text-white/85">
                <li className="grid grid-cols-[14px_1fr] gap-3 text-left items-start">
                  <span className="text-secondary-fixed select-none flex justify-center text-[15px] leading-none pt-[2px]">✓</span>
                  <span className="leading-snug text-[13.5px] font-['Nunito'] font-semibold text-white/85">Moisture-proof bags to keep the chillies fresh and dry during sea travel.</span>
                </li>
                <li className="grid grid-cols-[14px_1fr] gap-3 text-left items-start">
                  <span className="text-secondary-fixed select-none flex justify-center text-[15px] leading-none pt-[2px]">✓</span>
                  <span className="leading-snug text-[13.5px] font-['Nunito'] font-semibold text-white/85">Fits 6.5 tons in a small 20ft container and 14 tons in a large 40ft container.</span>
                </li>
                <li className="grid grid-cols-[14px_1fr] gap-3 text-left items-start">
                  <span className="text-secondary-fixed select-none flex justify-center text-[15px] leading-none pt-[2px]">✓</span>
                  <span className="leading-snug text-[13.5px] font-['Nunito'] font-semibold text-white/85">We provide custom labels and printing matching your brand design.</span>
                </li>
                <li className="grid grid-cols-[14px_1fr] gap-3 text-left items-start">
                  <span className="text-secondary-fixed select-none flex justify-center text-[15px] leading-none pt-[2px]">✓</span>
                  <span className="leading-snug text-[13.5px] font-['Nunito'] font-semibold text-white/85">We can arrange third-party checks like SGS or Intertek if you need them.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <img alt="Logistics Section" className="absolute inset-0 w-full h-full object-cover" src={chilliBowlTable} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Varieties */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            align="center"
            kicker="Other choices"
            title={
              <>
                Explore other <span className="text-[#8f000d]">varieties</span>
              </>
            }
            intro="See our other dry red chillies to find the perfect heat and color level for your needs."
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
            {relatedChillies.map((relatedChilli, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden ambient-shadow flex flex-col border border-outline-variant card-hover transition-all text-left">
                <Link to={`/varieties/${relatedChilli.id}`} className="block h-48 w-full overflow-hidden">
                  <img alt={relatedChilli.name} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" src={relatedChilli.image} />
                </Link>
                <div className="p-8">
                  <h4 className="font-['urbanist'] font-extrabold text-[18px] text-[#1a1c1e] mb-2">
                    <Link to={`/varieties/${relatedChilli.id}`} className="hover:text-[#8f000d] transition-colors">
                      {relatedChilli.name}
                    </Link>
                  </h4>
                  <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[13.5px] mb-6 leading-relaxed">{relatedChilli.description}</p>
                  <Link to={`/varieties/${relatedChilli.id}`} className="text-[#8f000d] font-['urbanist'] font-bold flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-sm">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dynamic Inquiry Form */}
      <section id="inquire" className="py-10 md:py-14 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-neutral-100">
          {/* Left: Image Showcase */}
          <div className="md:w-5/12 relative min-h-[250px] md:min-h-full">
            <img
              src={chilliExportCta}
              alt="Minha Chilli Exports"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
          </div>

          {/* Right: Content & Action */}
          <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center text-left space-y-6">
            <SectionHeading
              align="left"
              kicker="Direct Trade Supply"
              title={
                <>
                  Request Quote for <span className="text-[#8f000d] block mt-1">{chilli.name}</span>
                </>
              }
              intro="Partner with India's trusted spice export team. Get wholesale prices, quality certificate reports, and customized shipping details for this variety."
              className="mb-2"
              showLeftLine={true}
              showRightLine={false}
            />
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20request%20export%20details%2C%20COA%20%2F%20Aflatoxin%20certificates%2C%20and%20wholesale%20pricing%20for%20${encodeURIComponent(chilli.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8f000d] text-white font-['urbanist'] font-bold text-[12px] py-4 px-8 rounded-xl hover:bg-[#72000a] transition-all uppercase tracking-wider text-center shadow-lg shadow-[#8f000d]/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                WhatsApp Enquiry
              </a>
              <a
                href="tel:+917288995777"
                className="border border-[#8f000d]/20 text-[#8f000d] font-['urbanist'] font-bold text-[12px] py-4 px-8 rounded-xl hover:bg-[#8f000d]/5 transition-all uppercase tracking-wider text-center hover:-translate-y-0.5 active:translate-y-0"
              >
                Call Export Desk
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ChilliDetail;
