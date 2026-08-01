import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import cargoShipImg from '../assets/image.png';
import chilliBowlTable from '../assets/chilli-bowl-table.png';
import contactHeroBg from '../assets/contact-hero.png';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiChevronDown,
  FiSend,
  FiAward,
  FiPackage,
  FiGlobe
} from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';
import {
  MdInventory2,
  MdVerified,
  MdLocalShipping,
  MdPublic
} from 'react-icons/md';



const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    reqType: 'Bulk Order',
    message: ''
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);


  const toggleFaq = (index) => {
    setOpenFaq(prev => prev === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setIsFlipped(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFlipped(false);
      setFormData({
        name: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        reqType: 'Bulk Order',
        message: ''
      });
    }, 4500);
  };

  const highlights = [
    {
      icon: <MdInventory2 className="text-[#2c6a46] text-[24px]" />,
      title: "Bulk Order Support",
      desc: "Capacity to fulfill high-volume seasonal demands with consistent quality standards.",
      borderColor: "border-[#2c6a46]"
    },
    {
      icon: <MdVerified className="text-[#8f000d] text-[24px]" />,
      title: "Reliable Sourcing",
      desc: "Direct sourcing from the heart of Guntur's finest farms and markets.",
      borderColor: "border-[#8f000d]"
    },
    {
      icon: <MdLocalShipping className="text-[#cca72f] text-[24px]" />,
      title: "Timely Shipment",
      desc: "End-to-end logistics tracking for prompt international delivery schedules.",
      borderColor: "border-[#cca72f]"
    },
    {
      icon: <MdPublic className="text-[#2c6a46] text-[24px]" />,
      title: "Trade Readiness",
      desc: "Fully compliant with international food safety and trade regulations.",
      borderColor: "border-[#2c6a46]"
    }
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity for export?",
      a: "We typically handle bulk orders starting from 1 metric ton (MT) for international shipments. For specific varieties like Teja or Byadgi, MOQs may vary based on seasonal availability."
    },
    {
      q: "Do you provide product samples before large orders?",
      a: "Yes, we provide lab-tested samples for quality verification. Shipping charges for samples are usually borne by the inquirer, which can be adjusted in the final commercial invoice."
    },
    {
      q: "What packaging options are available?",
      a: "We offer standard 5kg, 10kg, 25kg, and 50kg Gunny bags or PP bags. Customized private labeling and vacuum packaging are also available upon request for premium retail clients."
    },
    {
      q: "Which international regions do you export to?",
      a: "We currently export to North America, Europe, Southeast Asia, and the Middle East. Our logistics partners ensure compliance with regional customs and food safety import standards."
    }
  ];

  return (
    <div className="bg-surface text-[#1a1c1e] font-body">
      <SEO
        title="Contact Us | Minha Imports & Exports"
        description="Get in touch with Minha Imports & Exports for bulk dry red chilli inquiries. WhatsApp, email, and phone support. Guntur, India. Export inquiry response within 12 hours."
        keywords="Contact Minha Exports, Chilli Export Inquiry, Buy Guntur Chilli, Chilli Wholesale Inquiry, Dry Red Chilli Exporter Contact, Bulk Spice Inquiry India"
        url="/contact"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/contact' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/contact',
            name: 'Contact Minha Imports & Exports',
            description: 'Send a bulk export inquiry or business partnership request to Minha Imports & Exports.',
          },
        ]}
      />
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #1a1c1e !important;
          box-shadow: 0 0 0px 1000px #ffffff inset !important;
          -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>

      {/* ── 1. Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          ref={imgRef}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          alt="International Cargo Port Sourcing"
          src={contactHeroBg}
          onLoad={() => setImageLoaded(true)}
          fetchPriority="high"
          loading="eager"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-5 px-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Contact</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Contact Us
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Connect With Us for Premium Guntur Chilli Exports and Business Inquiries
          </p>
        </div>
      </section>

      {/* ── 2. Global Export Partnerships ────────────────────────────────────── */}
      <section className="py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="bg-white rounded-[20px] shadow-[0_8px_50px_rgba(0,0,0,0.07)] border border-neutral-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[360px]">

              {/* LEFT: Text Content */}
              <div className="w-full lg:w-[32%] shrink-0 flex flex-col justify-center px-8 md:px-10 py-10 border-b lg:border-b-0 lg:border-r border-neutral-100">
                <SectionHeading
                  align="left"
                  kicker="Our reach"
                  title={
                    <>
                      Global export <span className="text-[#8f000d]">partnerships</span>
                    </>
                  }
                  className="mb-4"
                  showLeftLine={true}
                  showRightLine={false}
                />
                <p className="font-['Nunito'] font-semibold text-[#6B7280] text-[13px] md:text-[14px] leading-[1.8]">
                  We welcome importers, wholesalers, food manufacturers, and retail distributors worldwide. Our infrastructure is designed to handle large-scale international orders while maintaining strict quality standards and logistics transparency.
                </p>
              </div>

              {/* RIGHT: Cargo Ship Image as FULL background, cards overlaid on top */}
              <div className="w-full lg:w-[68%] relative overflow-hidden min-h-[360px]">
                {/* Full background image */}
                <img
                  src={cargoShipImg}
                  alt="International cargo ship with airplane - Minha Export Logistics"
                  className="absolute inset-0 w-full h-full object-cover object-left"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                {/* Contact Cards overlaid on the right side of the image */}
                <div className="absolute inset-y-0 right-0 w-full sm:w-[40%] flex flex-col justify-center gap-2 p-3 z-10">

                  {/* Phone */}
                  <div className="flex items-center gap-2.5 px-3 py-2.5 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
                    <div className="w-8 h-8 rounded-full border-[2px] border-[#A50F15] flex items-center justify-center shrink-0">
                      <FiPhone className="text-[#A50F15] text-[13px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="w-6 h-[2px] bg-[#2E6F4F] mb-1 rounded-full" />
                      <h4 className="font-['urbanist'] font-bold text-[10px] tracking-wider text-[#A50F15] uppercase mb-0.5">Phone</h4>
                      <a href="tel:+919985728555" className="block font-['Nunito'] text-[13px] font-bold text-[#111827] hover:text-[#2E6F4F] transition-colors leading-[1.5]">+91 99857 28555 (WhatsApp)</a>
                      <a href="tel:+917288995777" className="block font-['Nunito'] text-[13px] font-bold text-[#111827] hover:text-[#2E6F4F] transition-colors leading-[1.5]">+91 72889 95777</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2.5 px-3 py-2.5 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
                    <div className="w-8 h-8 rounded-full border-[2px] border-[#A50F15] flex items-center justify-center shrink-0">
                      <FiMail className="text-[#A50F15] text-[13px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="w-6 h-[2px] bg-[#2E6F4F] mb-1 rounded-full" />
                      <h4 className="font-['urbanist'] font-bold text-[10px] tracking-wider text-[#A50F15] uppercase mb-0.5">Email</h4>
                      <a href="mailto:minhaimportsexports@gmail.com" className="block font-['Nunito'] text-[13px] font-bold text-[#111827] hover:text-[#2E6F4F] transition-colors leading-[1.5] break-all">minhaimportsexports@gmail.com</a>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-center gap-2.5 px-3 py-2.5 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
                    <div className="w-8 h-8 rounded-full border-[2px] border-[#A50F15] flex items-center justify-center shrink-0">
                      <FiMapPin className="text-[#A50F15] text-[13px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="w-6 h-[2px] bg-[#2E6F4F] mb-1 rounded-full" />
                      <h4 className="font-['urbanist'] font-bold text-[10px] tracking-wider text-[#A50F15] uppercase mb-0.5">Office Address</h4>
                      <p className="font-['Nunito'] text-[12.5px] font-bold text-[#111827] leading-[1.5]">Arundalpet 7/1,<br />Beside SBI ATM, Guntur, AP, India – 522002</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Inquiry Form & Highlights (3D Flipping Card) ─────────────────── */}
      <section className="py-8 md:py-10 bg-surface-container-low border-t border-b border-neutral-100 relative overflow-hidden">
        {/* Soft background ambient glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#cca72f]/5 rounded-full pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8f000d]/4 rounded-full pointer-events-none blur-3xl" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          <SectionHeading
            align="center"
            kicker="Interactive portal"
            title={
              <>
                Global sourcing <span className="text-[#8f000d]">gateway</span>
              </>
            }
            intro="Experience our seamless digital procurement portal. Fill out our interactive inquiry form below to submit your custom spice requirements directly to our trade specialists."
            className="mb-8"
            showRightLine={true}
          />

          {/* 3D Perspective Card Wrapper Container */}
          <div
            style={{ perspective: '2000px', width: '100%' }}
            className="relative w-full max-w-4xl mx-auto transition-all duration-300"
          >
            <div
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                width: '100%',
                willChange: 'transform',
              }}
            >

              {/* CARD FRONT FACE */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  position: isFlipped ? 'absolute' : 'relative',
                  inset: isFlipped ? 0 : 'auto',
                  width: '100%',
                  height: isFlipped ? '100%' : 'auto',
                  borderRadius: '2.5rem',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff'
                }}
                className={`flex flex-col lg:flex-row ${isFlipped ? 'h-full' : ''}`}
              >
                {/* Left Side: Sourcing highlights */}
                <div className="w-full lg:w-5/12 bg-gradient-to-br from-[#8f000d] to-[#4c0005] text-white p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#cca72f]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#8f000d]/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full justify-start gap-3.5">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-['urbanist'] font-bold text-[8.5px] tracking-widest uppercase mb-2 sm:mb-3">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Trade Desk Online
                      </div>

                      <span className="font-['urbanist'] font-semibold text-[9.5px] tracking-[0.2em] text-[#cca72f] uppercase block mb-0.5">
                        Minha Imports & Exports
                      </span>
                      <h3 className="font-['urbanist'] font-extrabold text-[20px] leading-tight text-white mb-1.5">
                        Export Sourcing
                      </h3>
                      <p className="font-['Nunito'] font-semibold text-white text-[13px] leading-relaxed mb-2.5">
                        Partner with India's premier agricultural exporter. We secure premium quality dry red chilli varieties tailored to your exact specifications.
                      </p>

                      {/* Badges / Highlights */}
                      <div className="space-y-2.5">
                        {highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2.5 group">
                            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-all duration-300 mt-0.5">
                              {React.cloneElement(hl.icon, { className: "text-[#cca72f] text-[14px]" })}
                            </div>
                            <div>
                              <h4 className="font-['urbanist'] font-bold text-[11.5px] text-white tracking-wide leading-tight">{hl.title}</h4>
                              <p className="font-['Nunito'] font-semibold text-[10.5px] text-white/80 leading-snug mt-0.5">{hl.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Trade Details */}
                    <div className="mt-auto pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <div className="text-left">
                        <span className="font-['urbanist'] text-[7.5px] tracking-wider text-white/70 uppercase block">Avg Response</span>
                        <span className="font-['urbanist'] text-[11px] font-bold text-white leading-none mt-0.5 block">&lt; 12 Hours</span>
                      </div>
                      <div className="text-right">
                        <span className="font-['urbanist'] text-[7.5px] tracking-wider text-[#ffd966] uppercase block">Global Sourcing</span>
                        <span className="font-['urbanist'] text-[11px] font-bold text-[#ffd966] leading-none mt-0.5 block">ASTA Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Interactive Sourcing Inquiry Form */}
                <div className="w-full lg:w-7/12 p-4 sm:p-5 flex flex-col justify-center relative overflow-hidden bg-white text-left">
                  {/* Background image watermark */}
                  <img
                    src={chilliBowlTable}
                    alt="Dried red Guntur chilli exports"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-[0.08]"
                  />

                  <div className="relative z-10">
                    <div className="mb-2 text-left">
                      <h3 className="font-['urbanist'] font-extrabold text-[16px] text-[#1a1c1e] tracking-tight">Inquiry Form</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-1.5">

                      {/* Grid for inputs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">

                        {/* Full Name */}
                        <div className="relative border border-neutral-300 focus-within:border-[#8f000d] focus-within:ring-1 focus-within:ring-[#8f000d] rounded-xl px-3 py-1 transition-all duration-300 bg-white text-left shadow-sm">
                          <label className="block font-['urbanist'] font-black text-[8px] tracking-wider text-neutral-500 uppercase mb-0.5">Full Name *</label>
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border-none p-0 bg-transparent text-[12.5px] text-[#1a1c1e] focus:outline-none focus:ring-0 font-['Nunito'] placeholder-neutral-400 font-semibold"
                            placeholder="Enter Name"
                            type="text"
                          />
                        </div>

                        {/* Company Name */}
                        <div className="relative border border-neutral-300 focus-within:border-[#8f000d] focus-within:ring-1 focus-within:ring-[#8f000d] rounded-xl px-3 py-1 transition-all duration-300 bg-white text-left shadow-sm">
                          <label className="block font-['urbanist'] font-black text-[8px] tracking-wider text-neutral-500 uppercase mb-0.5">Company Name</label>
                          <input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full border-none p-0 bg-transparent text-[12.5px] text-[#1a1c1e] focus:outline-none focus:ring-0 font-['Nunito'] placeholder-neutral-400 font-semibold"
                            placeholder="Enter Company Name"
                            type="text"
                          />
                        </div>

                        {/* Country */}
                        <div className="relative border border-neutral-300 focus-within:border-[#8f000d] focus-within:ring-1 focus-within:ring-[#8f000d] rounded-xl px-3 py-1 transition-all duration-300 bg-white text-left shadow-sm">
                          <label className="block font-['urbanist'] font-black text-[8px] tracking-wider text-neutral-500 uppercase mb-0.5">Country *</label>
                          <input
                            required
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full border-none p-0 bg-transparent text-[12.5px] text-[#1a1c1e] focus:outline-none focus:ring-0 font-['Nunito'] placeholder-neutral-400 font-semibold"
                            placeholder="Enter Country Name"
                            type="text"
                          />
                        </div>

                        {/* Email */}
                        <div className="relative border border-neutral-300 focus-within:border-[#8f000d] focus-within:ring-1 focus-within:ring-[#8f000d] rounded-xl px-3 py-1 transition-all duration-300 bg-white text-left shadow-sm">
                          <label className="block font-['urbanist'] font-black text-[8px] tracking-wider text-neutral-500 uppercase mb-0.5">Email Address *</label>
                          <input
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border-none p-0 bg-transparent text-[12.5px] text-[#1a1c1e] focus:outline-none focus:ring-0 font-['Nunito'] placeholder-neutral-400 font-semibold"
                            placeholder="Enter Email Address"
                            type="email"
                          />
                        </div>

                        {/* Phone Number */}
                        <div className="relative border border-neutral-300 focus-within:border-[#8f000d] focus-within:ring-1 focus-within:ring-[#8f000d] rounded-xl px-3 py-1 transition-all duration-300 bg-white text-left md:col-span-2 shadow-sm">
                          <label className="block font-['urbanist'] font-black text-[8px] tracking-wider text-neutral-500 uppercase mb-0.5">Phone Number *</label>
                          <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border-none p-0 bg-transparent text-[12.5px] text-[#1a1c1e] focus:outline-none focus:ring-0 font-['Nunito'] placeholder-neutral-400 font-semibold"
                            placeholder="Enter Phone Number"
                            type="tel"
                          />
                        </div>

                      </div>

                      {/* Requirement Type Selector */}
                      <div className="text-left space-y-1">
                        <label className="block font-['urbanist'] font-black text-[8.5px] tracking-wider text-neutral-600 uppercase">Requirement Type *</label>
                        <div className="flex flex-wrap gap-1">
                          {['Bulk Order', 'Export Inquiry', 'Partnership', 'General Support'].map((type) => {
                            const isSelected = formData.reqType === type;
                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, reqType: type }))}
                                className={`px-2.5 py-1 rounded-full font-['urbanist'] text-[8.5px] sm:text-[9px] font-bold tracking-wide uppercase transition-all duration-300 border focus:outline-none cursor-pointer flex items-center gap-1 ${isSelected
                                  ? 'bg-[#8f000d] text-white border-[#8f000d] shadow-sm shadow-[#8f000d]/10'
                                  : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
                                  }`}
                              >
                                {isSelected && <FiCheckCircle className="text-xs" />}
                                {type}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Message TextArea */}
                      <div className="relative border border-neutral-300 focus-within:border-[#8f000d] focus-within:ring-1 focus-within:ring-[#8f000d] rounded-xl px-3 py-1 transition-all duration-300 bg-white text-left shadow-sm">
                        <label className="block font-['urbanist'] font-black text-[8.5px] tracking-wider text-neutral-600 uppercase mb-0.5">Your Message *</label>
                        <textarea
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full border-none p-0 bg-transparent text-[12.5px] text-[#1a1c1e] focus:outline-none focus:ring-0 font-['Nunito'] placeholder-neutral-400 resize-none font-semibold"
                          placeholder="Tell us about volume requirements, grades, target delivery dates..."
                          rows={2}
                        />
                      </div>

                      {/* Submit Row */}
                      <div className="pt-1.5 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 bg-[#8f000d] hover:bg-[#72000a] text-white font-['urbanist'] font-extrabold text-[13px] py-3.5 px-7 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-md group whitespace-nowrap cursor-pointer w-full sm:w-auto text-center"
                        >
                          Send Inquiry
                          <FiSend className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 duration-300" />
                        </button>
                        <p className="font-['Nunito'] font-semibold text-neutral-600 text-[10px] leading-relaxed text-center sm:text-left max-w-[240px]">
                          We respond to verified commercial inquiries within 12 business hours.
                        </p>
                      </div>

                    </form>
                  </div>
                </div>
              </div>

              {/* CARD BACK FACE */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: isFlipped ? 'relative' : 'absolute',
                  inset: isFlipped ? 'auto' : 0,
                  width: '100%',
                  height: isFlipped ? 'auto' : '100%',
                  borderRadius: '2.5rem',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff'
                }}
                className={`flex flex-col lg:flex-row ${isFlipped ? '' : 'h-full'}`}
              >
                {/* Left Side: Deep Green Sourcing Guidelines */}
                <div className="w-full lg:w-5/12 bg-gradient-to-br from-[#1F5E3B] to-[#0d2a1b] text-white p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#cca72f]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#1F5E3B]/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#cca72f] font-['urbanist'] font-bold text-[8.5px] tracking-widest uppercase mb-4 sm:mb-6">
                        <FiCheckCircle className="text-xs" />
                        Verification Phase
                      </div>

                      <span className="font-['urbanist'] font-semibold text-[10px] tracking-[0.2em] text-[#cca72f] uppercase block mb-1">
                        Procurement Guide
                      </span>
                      <h3 className="font-['urbanist'] font-extrabold text-[20px] text-white leading-tight mb-3 sm:mb-4">
                        Submission Steps
                      </h3>

                      {/* Timeline steps */}
                      <div className="space-y-4 text-left">
                        <div className="flex gap-2.5">
                          <div className="w-5.5 h-5.5 rounded-full bg-white/10 text-[#cca72f] flex items-center justify-center font-['urbanist'] font-bold text-[10px] shrink-0">
                            1
                          </div>
                          <div>
                            <h5 className="font-['urbanist'] font-bold text-[11.5px] text-white tracking-wide">Select Request Type</h5>
                            <p className="font-['Nunito'] text-[10.5px] text-white/50 leading-relaxed mt-0.5">Toggle between bulk buy, logistics options, or standard samples.</p>
                          </div>
                        </div>

                        <div className="flex gap-2.5">
                          <div className="w-5.5 h-5.5 rounded-full bg-white/10 text-[#cca72f] flex items-center justify-center font-['urbanist'] font-bold text-[10px] shrink-0">
                            2
                          </div>
                          <div>
                            <h5 className="font-['urbanist'] font-bold text-[11.5px] text-white tracking-wide">Provide Spec Details</h5>
                            <p className="font-['Nunito'] text-[10.5px] text-white/50 leading-relaxed mt-0.5">Mention custom moisture grade, ASTA standards, or packaging requirements.</p>
                          </div>
                        </div>

                        <div className="flex gap-2.5">
                          <div className="w-5.5 h-5.5 rounded-full bg-white/10 text-[#cca72f] flex items-center justify-center font-['urbanist'] font-bold text-[10px] shrink-0">
                            3
                          </div>
                          <div>
                            <h5 className="font-['urbanist'] font-bold text-[11.5px] text-white tracking-wide">Trade Review</h5>
                            <p className="font-['Nunito'] text-[10.5px] text-white/50 leading-relaxed mt-0.5">Our executives verify supply chains and confirm FOB/CIF pricing quotes.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-left">
                      <p className="font-['Nunito'] text-[10.5px] text-white/40 leading-relaxed">
                        Confidentiality guaranteed. All specifications comply with international custom regulations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Inquiry Transmitted Success Dashboard */}
                <div className="w-full lg:w-7/12 p-4 sm:p-5 flex flex-col justify-center items-center text-center relative overflow-hidden bg-white">
                  {/* Background image watermark */}
                  <img
                    src={chilliBowlTable}
                    alt="Dried red Guntur chilli exports"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-[0.08]"
                  />

                  <div className="relative z-10 flex flex-col items-center justify-center max-w-md w-full">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4 shadow-md shadow-emerald-500/5">
                      <FiCheckCircle className="text-[32px] animate-pulse" />
                    </div>

                    <h4 className="font-['urbanist'] font-extrabold text-[18px] sm:text-[20px] text-neutral-900 mb-2 tracking-tight">
                      Inquiry Transmitted Successfully
                    </h4>

                    <p className="font-['Nunito'] font-semibold text-neutral-500 text-[12px] sm:text-[13px] leading-relaxed mb-4">
                      Thank you, <span className="font-semibold text-neutral-800">{formData.name || 'valued partner'}</span>. Our Guntur export desk trade executives have received your request and will follow up with pricing worksheets and product specifications within 12 hours.
                    </p>

                    <div className="w-full border-t border-b border-neutral-100 py-4 my-1 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-left w-full sm:w-auto">
                        <span className="font-['urbanist'] text-[8.5px] tracking-wider text-neutral-400 uppercase block">Submission Ref</span>
                        <span className="font-['urbanist'] text-[11px] font-bold text-neutral-700 leading-none mt-0.5 block">ME-739402</span>
                      </div>
                      <div className="text-right w-full sm:w-auto">
                        <span className="font-['urbanist'] text-[8.5px] tracking-wider text-neutral-400 uppercase block">Status</span>
                        <span className="font-['urbanist'] text-[11px] font-bold text-emerald-600 leading-none mt-0.5 block">Assigned to Trade Desk</span>
                      </div>
                    </div>

                    {/* Progress Bar indicating auto-reset timeout */}
                    <div className="w-full bg-neutral-150 h-1 rounded-full overflow-hidden mt-8">
                      {isFlipped && (
                        <motion.div
                          initial={{ width: "100%" }}
                          animate={{ width: "0%" }}
                          transition={{ duration: 4.5, ease: "linear" }}
                          className="bg-emerald-500 h-full"
                        />
                      )}
                    </div>
                    <span className="font-['urbanist'] text-[9px] tracking-wider text-neutral-400 uppercase mt-2">
                      Flipping back in a moment...
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 4. FAQ & Map Integrated Section (Desktop: Side-by-side Flat Split, Mobile: Clean Stacked) ──────────────────── */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-white to-surface-container-low border-b border-neutral-200/60 relative overflow-hidden">
        {/* Soft background ambient decorations */}
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#cca72f]/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          {/* DESKTOP VIEW: Flat Side-by-Side Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-12 items-start">

            {/* LEFT PANEL: Frequently Asked Questions (Flat list of accordions) */}
            <div className="col-span-5 text-left">
              <SectionHeading
                align="left"
                kicker="Support & queries"
                title={
                  <>
                    Frequently asked <span className="text-[#8f000d]">questions</span>
                  </>
                }
                className="mb-6"
                showLeftLine={true}
                showRightLine={false}
              />

              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  const iconConfig = [
                    { bg: 'bg-rose-500/10 text-rose-600', icon: <FiClock /> },
                    { bg: 'bg-emerald-500/10 text-emerald-600', icon: <FiAward /> },
                    { bg: 'bg-amber-500/10 text-amber-600', icon: <FiPackage /> },
                    { bg: 'bg-indigo-500/10 text-indigo-600', icon: <FiGlobe /> }
                  ][index] || { bg: 'bg-neutral-100 text-neutral-600', icon: <FiGlobe /> };

                  return (
                    <div
                      key={index}
                      className={`border rounded-xl overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'border-[#8f000d]/20 shadow-md' : 'border-neutral-200 shadow-sm hover:border-neutral-300'
                        }`}
                    >
                      <button
                        className="w-full flex justify-between items-center py-4 px-4 text-left cursor-pointer focus:outline-none"
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[13px] shrink-0 ${iconConfig.bg}`}>
                            {iconConfig.icon}
                          </div>
                          <span className="font-['urbanist'] font-bold text-[12.5px] text-neutral-800 leading-snug">
                            {faq.q}
                          </span>
                        </div>
                        <FiChevronDown className={`text-neutral-400 text-[14px] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#8f000d]' : ''}`} />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 px-4 pl-[48px] font-['Nunito'] font-semibold text-neutral-500 text-[12px] leading-relaxed border-t border-neutral-100/50 pt-2.5">
                          {faq.a}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Questions Action */}
              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-['urbanist'] font-bold">
                <span className="text-neutral-400">Still have questions?</span>
                <a
                  href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20have%20a%20question%20for%20your%20team.%20Please%20get%20in%20touch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8f000d] hover:text-[#cca72f] transition-colors inline-flex items-center gap-1 group"
                >
                  Contact our team
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* RIGHT PANEL: Visit Our Export Hub (Flat details & Map) */}
            <div className="col-span-7 text-left">
              <SectionHeading
                align="left"
                kicker="Corporate location"
                title={
                  <>
                    Visit our <span className="text-[#8f000d]">export hub</span>
                  </>
                }
                intro="Located Beside SBI ATM, Arundalpet."
                className="mb-6"
                showLeftLine={true}
                showRightLine={false}
              />

              {/* Sourcing Map Block */}
              <div className="w-full h-[360px] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md bg-neutral-100 mb-6">
                <iframe
                  title="Minha Sourcing Facility Map Detail"
                  src="https://maps.google.com/maps?q=16.30355453491211,80.43951416015625+(Dry+Red+Chilli+Exporters+India+-+Minha+Imports+and+Exports)&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[10%] contrast-[105%]"
                />
              </div>

              {/* Action Buttons & Address */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.bing.com/maps/directions?ty=0&v=2&sV=1&rtp=%7Epos.16.30355453491211_80.43951416015625__Dry%2520Red%2520Chilli%2520Exporters%2520India%2520-%2520Minha%2520Imports%2520and%2520Exports_&cp=16.303555%7E80.439514&lvl=16&style=r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#8f000d] hover:bg-[#72000a] text-white font-['urbanist'] font-extrabold text-[12px] py-3.5 px-6 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-md text-center"
                  >
                    Get Directions
                  </a>
                  <a
                    href="https://www.bing.com/maps/directions?ty=0&v=2&sV=1&rtp=%7Epos.16.30355453491211_80.43951416015625__Dry%2520Red%2520Chilli%2520Exporters%2520India%2520-%2520Minha%2520Imports%2520and%2520Exports_&cp=16.303555%7E80.439514&lvl=16&style=r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-['urbanist'] font-extrabold text-[12px] py-3.5 px-6 rounded-lg uppercase tracking-wider transition-all duration-300 text-center"
                  >
                    View On Map
                  </a>
                </div>

                {/* Address details */}
                <div className="flex gap-3 items-center border-t border-neutral-200 pt-4 text-[12.5px] text-neutral-600 font-['Nunito'] leading-relaxed">
                  <FiMapPin className="text-[#2c6a46] text-[18px] shrink-0" />
                  <span>Arundalpet 7/1, Beside SBI ATM, Guntur, Andhra Pradesh – 522002, India</span>
                </div>
              </div>
            </div>

          </div>

          {/* MOBILE/TABLET VIEW: Clean Stacked Sections (No cards) */}
          <div className="lg:hidden flex flex-col gap-12">

            {/* FAQ Block */}
            <div className="text-left">
              <SectionHeading
                align="left"
                kicker="Support & queries"
                title={
                  <>
                    Frequently asked <span className="text-[#8f000d]">questions</span>
                  </>
                }
                className="mb-5"
                showLeftLine={true}
                showRightLine={false}
              />

              <div className="space-y-3.5">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  const iconConfig = [
                    { bg: 'bg-rose-500/10 text-rose-600', icon: <FiClock /> },
                    { bg: 'bg-emerald-500/10 text-emerald-600', icon: <FiAward /> },
                    { bg: 'bg-amber-500/10 text-amber-600', icon: <FiPackage /> },
                    { bg: 'bg-indigo-500/10 text-indigo-600', icon: <FiGlobe /> }
                  ][index] || { bg: 'bg-[#cca72f]/10 text-[#cca72f]', icon: <FiGlobe /> };

                  return (
                    <div
                      key={index}
                      className={`border rounded-xl overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'border-[#8f000d]/20 shadow-md' : 'border-neutral-200 shadow-sm'
                        }`}
                    >
                      <button
                        className="w-full flex justify-between items-center py-3.5 px-4 text-left cursor-pointer focus:outline-none"
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[13px] shrink-0 ${iconConfig.bg}`}>
                            {iconConfig.icon}
                          </div>
                          <span className="font-['urbanist'] font-bold text-[12px] sm:text-[12.5px] text-neutral-800 leading-snug">
                            {faq.q}
                          </span>
                        </div>
                        <FiChevronDown className={`text-neutral-400 text-[14px] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#8f000d]' : ''}`} />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 px-4 pl-[48px] font-['Nunito'] font-semibold text-neutral-500 text-[11px] sm:text-[12px] leading-relaxed border-t border-neutral-100/50 pt-2.5">
                          {faq.a}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Questions Action */}
              <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-['urbanist'] font-bold">
                <span className="text-neutral-400">Still have questions?</span>
                <a
                  href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20have%20a%20question%20for%20your%20team.%20Please%20get%20in%20touch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8f000d] hover:text-[#cca72f] transition-colors inline-flex items-center gap-1 group"
                >
                  Contact our team
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Visit Our Export Hub Block */}
            <div className="text-left border-t border-neutral-200 pt-6">
              <SectionHeading
                align="left"
                kicker="Corporate location"
                title={
                  <>
                    Visit our <span className="text-[#8f000d]">export hub</span>
                  </>
                }
                intro="Located Beside SBI ATM, Arundalpet."
                className="mb-5"
                showLeftLine={true}
                showRightLine={false}
              />

              {/* Map Block */}
              <div className="w-full h-[260px] rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100 mb-5">
                <iframe
                  title="Minha Sourcing Facility Map Mobile"
                  src="https://maps.google.com/maps?q=16.30355453491211,80.43951416015625+(Dry+Red+Chilli+Exporters+India+-+Minha+Imports+and+Exports)&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[10%] contrast-[105%]"
                />
              </div>

              {/* Action Buttons & Address details */}
              <div className="space-y-6 mt-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://www.bing.com/maps/directions?ty=0&v=2&sV=1&rtp=%7Epos.16.30355453491211_80.43951416015625__Dry%2520Red%2520Chilli%2520Exporters%2520India%2520-%2520Minha%2520Imports%2520and%2520Exports_&cp=16.303555%7E80.439514&lvl=16&style=r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#8f000d] hover:bg-[#72000a] text-white font-['urbanist'] font-extrabold text-[12px] py-3.5 px-6 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-md text-center"
                  >
                    Get Directions
                  </a>
                  <a
                    href="https://www.bing.com/maps/directions?ty=0&v=2&sV=1&rtp=%7Epos.16.30355453491211_80.43951416015625__Dry%2520Red%2520Chilli%2520Exporters%2520India%2520-%2520Minha%2520Imports%2520and%2520Exports_&cp=16.303555%7E80.439514&lvl=16&style=r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-['urbanist'] font-extrabold text-[12px] py-3.5 px-6 rounded-lg uppercase tracking-wider transition-all duration-300 text-center"
                  >
                    View On Map
                  </a>
                </div>

                <div className="flex gap-3 items-center border-t border-neutral-200 pt-4 text-[12px] text-neutral-600 font-['Nunito'] leading-relaxed">
                  <FiMapPin className="text-[#2c6a46] text-[16px] shrink-0" />
                  <span>Arundalpet 7/1, Beside SBI ATM, Guntur, Andhra Pradesh – 522002, India</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>



    </div>
  );
};

export default Contact;


