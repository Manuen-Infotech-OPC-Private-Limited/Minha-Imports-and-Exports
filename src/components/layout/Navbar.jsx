import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo-minha-main.png';
import logoDarkImg from '../../assets/logo-minha-dark.png';

// Import hero images for hover-based prefetching
import certificationsHero from '../../assets/certifications-hero.png';
import contactHero from '../../assets/contact-hero.png';
import facilityHero from '../../assets/facility-hero.png';
import powderHero from '../../assets/powder-hero.png';
import aboutHero from '../../assets/about_hero_bg.png';
import varietiesHero from '../../assets/chilli-hero-varieties.png';

const heroImageMap = {
  '/certifications': certificationsHero,
  '/contact': contactHero,
  '/facility': facilityHero,
  '/powder': powderHero,
  '/about': aboutHero,
  '/varieties': varietiesHero,
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chilli Varieties', path: '/varieties' },
  { name: 'Chilli Powder', path: '/powder' },
  { name: 'Our Company', path: '/about' },
  { name: 'Quality', path: '/quality' },
  { name: 'Facility', path: '/facility' },
  { name: 'Certification', path: '/certifications' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileVarietiesOpen, setMobileVarietiesOpen] = useState(false);
  const location = useLocation();

  const handleLinkHover = (path) => {
    const imgSrc = heroImageMap[path];
    if (imgSrc) {
      const img = new Image();
      img.src = imgSrc;
    }
  };

  // Solid bar appears once the user leaves the hero
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActivePath = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* Full-width bar: transparent over the hero, solid white once scrolled */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled
            ? 'bg-white border-b border-neutral-200 shadow-[0_1px_24px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-10 lg:px-12 h-[72px] flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 focus:outline-none" aria-label="Minha Imports & Exports — home">
            <img
              src={isScrolled ? logoImg : logoDarkImg}
              alt="Minha Imports & Exports"
              className="h-[40px] object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const active = isActivePath(link.path);

              if (link.path === '/varieties') {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setShowDropdown(false)}
                      className={`relative font-['urbanist'] text-[12px] xl:text-[12.5px] font-bold tracking-[0.04em] py-2 transition-colors duration-200 focus:outline-none cursor-pointer bg-transparent border-none outline-none ${isScrolled
                          ? active
                            ? 'text-[#8f000d]'
                            : 'text-neutral-700 hover:text-[#8f000d]'
                          : active
                            ? 'text-white'
                            : 'text-white/75 hover:text-white'
                        }`}
                    >
                      {link.name}
                      <svg className={`inline-block align-middle w-2.5 h-2.5 ml-1 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ marginTop: '-2px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                      {active && (
                        <motion.span
                          layoutId="navActiveUnderline"
                          className={`absolute -bottom-0.5 left-0 right-0 h-[2.5px] rounded-full ${isScrolled ? 'bg-[#8f000d]' : 'bg-[#cca72f]'
                            }`}
                        />
                      )}
                    </Link>

                    {/* Simple Dropdown Menu */}
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[210px] rounded-[18px] py-3.5 px-4 z-[100] transition-all duration-300 border flex flex-col gap-2 ${isScrolled
                              ? 'bg-white/95 backdrop-blur-[18px] border-neutral-200/30 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-neutral-700'
                              : 'bg-[#0a0a0a]/95 backdrop-blur-[18px] border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-white/90'
                            }`}
                        >
                          {/* Top Caret Triangle */}
                          <div className="absolute top-[-5.5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-inherit border-l border-t border-inherit rotate-45" />

                          <Link
                            to="/varieties"
                            state={{ category: 'Teja S17' }}
                            onClick={() => setShowDropdown(false)}
                            className="w-full block text-left py-1 px-0.5 text-[11px] font-['urbanist'] font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-1 hover:text-[#cca72f]"
                          >
                            Teja S17
                          </Link>

                          <Link
                            to="/varieties"
                            state={{ category: 'S4 / 334' }}
                            onClick={() => setShowDropdown(false)}
                            className="w-full block text-left py-1 px-0.5 text-[11px] font-['urbanist'] font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-1 hover:text-[#cca72f]"
                          >
                            S4 / 334 Sannam
                          </Link>

                          <Link
                            to="/varieties"
                            state={{ category: 'S10' }}
                            onClick={() => setShowDropdown(false)}
                            className="w-full block text-left py-1 px-0.5 text-[11px] font-['urbanist'] font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-1 hover:text-[#cca72f]"
                          >
                            S10 Gold
                          </Link>

                          <Link
                            to="/varieties"
                            state={{ category: 'Byadgi' }}
                            onClick={() => setShowDropdown(false)}
                            className="w-full block text-left py-1 px-0.5 text-[11px] font-['urbanist'] font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-1 hover:text-[#cca72f]"
                          >
                            Byadgi
                          </Link>

                          <Link
                            to="/varieties"
                            state={{ category: 'Other Varieties' }}
                            onClick={() => setShowDropdown(false)}
                            className="w-full block text-left py-1 px-0.5 text-[11px] font-['urbanist'] font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-1 hover:text-[#cca72f]"
                          >
                            Other Varieties
                          </Link>

                          <div className="border-t border-neutral-100/10 mt-1 pt-2" />

                          <Link
                            to="/varieties"
                            state={{ category: 'All' }}
                            onClick={() => setShowDropdown(false)}
                            className={`w-full block text-left py-1 px-0.5 text-[11px] font-['urbanist'] font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-1 font-extrabold ${isScrolled ? 'text-[#8f000d]' : 'text-[#cca72f]'
                              }`}
                          >
                            All Varieties
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onMouseEnter={() => handleLinkHover(link.path)}
                  className={`relative font-['urbanist'] text-[12px] xl:text-[12.5px] font-bold tracking-[0.04em] py-2 transition-colors duration-200 focus:outline-none ${isScrolled
                      ? active
                        ? 'text-[#8f000d]'
                        : 'text-neutral-700 hover:text-[#8f000d]'
                      : active
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                    }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className={`absolute -bottom-0.5 left-0 right-0 h-[2.5px] rounded-full ${isScrolled ? 'bg-[#8f000d]' : 'bg-[#cca72f]'
                        }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              onMouseEnter={() => handleLinkHover('/contact')}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#8f000d] hover:bg-[#a3000f] text-white font-['urbanist'] font-bold text-[11.5px] py-2.5 px-5 rounded-lg uppercase tracking-wider transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cca72f] focus-visible:ring-offset-2"
            >
              Contact
              <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 -mr-2 transition-colors focus:outline-none ${isScrolled ? 'text-neutral-900 hover:text-[#8f000d]' : 'text-white'
                }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — solid, no glass */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#140605] z-50 flex flex-col lg:hidden text-white"
          >
            <div className="w-full px-6 h-[72px] flex items-center justify-between border-b border-white/10">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <img src={logoDarkImg} alt="Minha Imports & Exports" className="h-8 object-contain" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-white hover:text-[#cca72f] transition-colors focus:outline-none"
                aria-label="Close navigation menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-6 py-8 flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#cca72f] mb-5">
                Menu
              </span>
              <div className="flex flex-col divide-y divide-white/10">
                {navLinks.map((link, idx) => {
                  const active = isActivePath(link.path);

                  if (link.path === '/varieties') {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className="w-full"
                      >
                        <button
                          onClick={() => setMobileVarietiesOpen(!mobileVarietiesOpen)}
                          className={`w-full flex items-center justify-between font-['urbanist'] font-bold text-[17px] tracking-tight py-4 transition-colors focus:outline-none text-left cursor-pointer ${active ? 'text-[#cca72f]' : 'text-white hover:text-[#cca72f]'
                            }`}
                        >
                          <span>{link.name}</span>
                          <svg className={`w-4 h-4 transition-transform duration-300 ${mobileVarietiesOpen ? 'rotate-180 text-[#cca72f]' : 'text-white/50'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {mobileVarietiesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-white/[0.03] border border-white/5 rounded-2xl mb-4 py-2 px-3 space-y-1"
                            >
                              <Link
                                to="/varieties"
                                state={{ category: 'All' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-extrabold uppercase tracking-widest text-[#cca72f]"
                              >
                                All Varieties
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'Teja S17' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                Teja S17
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'S4 / 334' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                S4 / 334
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'S10' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                S10
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'Byadgi' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                Byadgi
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'Other Varieties' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                Other Varieties
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        onMouseEnter={() => handleLinkHover(link.path)}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between font-['urbanist'] font-bold text-[17px] tracking-tight py-4 transition-colors ${active ? 'text-[#cca72f]' : 'text-white hover:text-[#cca72f]'
                          }`}
                      >
                        {link.name}
                        <FiArrowRight className="text-base opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-[#8f000d] hover:bg-[#a3000f] text-white text-[13px] font-['urbanist'] font-bold py-4 px-8 rounded-lg uppercase tracking-wider transition-colors"
              >
                Request an export quote
                <FiArrowRight className="text-sm" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
