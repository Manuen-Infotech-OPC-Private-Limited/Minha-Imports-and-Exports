import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram, FiFacebook, FiPhone, FiMail, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import vchatQrImg from '../../assets/vchat-qr.jpeg';

const Footer = () => {
  const [linksOpen, setLinksOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <footer className="w-full bg-[#111315] text-[#a0a5ad] font-['nunito'] relative overflow-hidden border-t border-white/[0.02]">

      {/* Top Main Footer Area */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-20 pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-[3fr_2fr_2fr_3fr_3fr] gap-8 md:gap-y-12 xl:gap-6 w-full">

          {/* Column 1: Brand Info */}
          <div className="md:col-span-6 xl:col-span-1 space-y-4 text-left">
            <div className="flex items-center gap-3">
              {/* Tractor Icon SVG */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#cca72f]/10 text-[#cca72f]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="6" cy="18" r="2" />
                  <path d="M6 16h6v-4H8V8h4V6h4v6h2v4" />
                </svg>
              </div>
              <span className="font-['urbanist'] font-bold text-[15px] tracking-wide text-white leading-tight">
                MINHA IMPORTS & EXPORTS
              </span>
            </div>

            <p className="text-[12.5px] leading-[1.65] text-[#a0a5ad]/85">
              Premium Guntur dry red chillies exporter committed to global standards of purity and reliability.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { name: "LinkedIn", icon: <FiLinkedin className="w-4.5 h-4.5" />, href: "https://in.linkedin.com/company/minha-imports-and-exports" },
                { name: "Instagram", icon: <FiInstagram className="w-4.5 h-4.5" />, href: "https://www.instagram.com/dry_chilli_exporters/" },
                { name: "Facebook", icon: <FiFacebook className="w-4.5 h-4.5" />, href: "https://www.facebook.com/DryRedChilliesExporter/" }
              ].map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  aria-label={`${social.name} profile`}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#cca72f] hover:text-white transition-all duration-300 bg-white/[0.01]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 xl:col-span-1 text-left border-b md:border-b-0 border-white/5 pb-2 md:pb-0">
            <button
              onClick={() => setLinksOpen(!linksOpen)}
              className="w-full flex justify-between items-center md:cursor-default md:pointer-events-none text-left focus:outline-none py-2 md:py-0"
            >
              <h3 className="font-['urbanist'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
                Quick Links
              </h3>
              <span className="lg:hidden text-white text-base">
                {linksOpen ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
              </span>
            </button>

            <ul className={`space-y-2 mt-3 md:block ${linksOpen ? 'block' : 'hidden'}`}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Chilli Varieties', path: '/varieties' },
                { name: 'Our Company', path: '/about' },
                { name: 'Quality Assurance', path: '/quality' },
                { name: 'Our Facilities', path: '/facility' },
                { name: 'Certifications', path: '/certifications' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-[13px] text-[#a0a5ad]/90 hover:text-[#cca72f] hover:translate-x-1.5 transition-all duration-300 block font-semibold py-2 md:py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="md:col-span-3 xl:col-span-1 text-left border-b md:border-b-0 border-white/5 pb-2 md:pb-0">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex justify-between items-center md:cursor-default md:pointer-events-none text-left focus:outline-none py-2 md:py-0"
            >
              <h3 className="font-['urbanist'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
                Our Products
              </h3>
              <span className="lg:hidden text-white text-base">
                {productsOpen ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
              </span>
            </button>

            <ul className={`space-y-2 mt-3 md:block ${productsOpen ? 'block' : 'hidden'}`}>
              {[
                { name: 'Dry Red Chillies', path: '/varieties' },
                { name: 'Chilli Powder', path: '/powder' },
                { name: 'Teja S17 Chilli', path: '/varieties' },
                { name: 'Byadgi Dry Chilli', path: '/varieties' }
              ].map((product, idx) => (
                <li key={idx}>
                  <Link to={product.path} className="text-[13px] text-[#a0a5ad]/90 hover:text-[#cca72f] hover:translate-x-1.5 transition-all duration-300 block font-semibold py-2 md:py-0.5">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="md:col-span-6 xl:col-span-1 space-y-3.5 text-left">
            <h3 className="font-['urbanist'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              Contact Us
            </h3>
            <div className="space-y-3 text-[13px]">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-[#cca72f] mt-1 shrink-0" />
                <span className="text-[#a0a5ad]/95 leading-relaxed text-[12.5px]">
                  Arundalpet 7/1, Beside SBI ATM, <br />
                  Guntur, Andhra Pradesh, 522002
                </span>
              </div>
              <a href="mailto:minhaimportsexports@gmail.com" className="flex items-center gap-3 hover:text-[#cca72f] transition-colors py-1 md:py-0 w-full overflow-hidden">
                <FiMail className="w-4 h-4 text-[#cca72f] shrink-0" />
                <span className="text-[#a0a5ad]/95 text-[12.5px]">minhaimportsexports@gmail.com</span>
              </a>
              <a href="tel:+919985728555" className="flex items-center gap-3 hover:text-[#cca72f] transition-colors py-1 md:py-0">
                <FiPhone className="w-4 h-4 text-[#cca72f] shrink-0" />
                <span className="text-[#a0a5ad]/95 text-[12.5px]">+91 99857 28555 (WhatsApp)</span>
              </a>
              <a href="tel:+917288995777" className="flex items-center gap-3 hover:text-[#cca72f] transition-colors py-1 md:py-0">
                <FiPhone className="w-4 h-4 text-[#cca72f] shrink-0" />
                <span className="text-[#a0a5ad]/95 text-[12.5px]">+91 72889 95777</span>
              </a>
            </div>
          </div>

          {/* Column 5: WeChat QR Connect Banner */}
          <div className="md:col-span-6 xl:col-span-1 space-y-3.5 text-left">
            <h3 className="font-['urbanist'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              WeChat Connect
            </h3>

            <div className="flex items-center gap-4 bg-white/5 p-3.5 rounded-xl border border-white/10 w-full max-w-sm">
              <div className="p-1.5 bg-white rounded-lg shadow-md shrink-0 w-20 h-20 flex items-center justify-center">
                <img
                  src={vchatQrImg}
                  alt="Minha WeChat QR Contact"
                  loading="lazy"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <p className="flex-1 min-w-0 text-[12px] text-[#a0a5ad]/90 leading-relaxed">
                Scan WeChat QR to chat directly with our Guntur B2B export desk.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Red-Gold Gradient Stripe */}
      <div className="w-full h-[3px] bg-gradient-to-r from-[#8f000d] to-[#cca72f]" />

      {/* Bottom Bar Area */}
      <div className="w-full bg-[#0b0c0d] text-[12px] text-[#a0a5ad]/50 py-6 px-6 md:px-12 lg:px-16 font-['urbanist']">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#a0a5ad]/60 text-center md:text-left">
            © 2026 Minha Imports & Exports. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-[11.5px] font-semibold text-[#a0a5ad]/45 tracking-widest uppercase">
            <span>ISO 9001:2015 Certified</span>
            <span className="text-white/10 hidden sm:inline">•</span>
            <span>ISO 22000:2018 Compliant</span>
            <span className="text-white/10 hidden sm:inline">•</span>
            <span>Spices Board of India Registered</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
