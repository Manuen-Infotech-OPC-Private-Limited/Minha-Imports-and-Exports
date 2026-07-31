import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import heroSackImg from '../../assets/hero-1-sack.jpg';
import heroChilliesImg from '../../assets/hero-2-chillies.jpg';

// Trade "manifest" line — real, buyer-facing facts, not marketing stats.
const manifest = [
  { label: 'Origin', value: 'Guntur, India' },
  { label: 'Varieties', value: 'Teja · Sannam · Byadgi' },
  { label: 'Certified', value: 'FSSAI · APEDA · ISO' },
  { label: 'Exports', value: '15+ countries' },
];

const bgImages = [heroSackImg, heroChilliesImg];
const MotionLink = motion(Link);

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const reduce = useReducedMotion();

  // Slow crossfade between the two hero photographs
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % bgImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col overflow-hidden bg-[#140605]">

      {/* Background photography — slow crossfade */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={index === 0 ? 'Dried red chillies in a jute sack at a Guntur market' : 'Close-up of premium Guntur dried red chillies'}
            initial={false}
            animate={{ opacity: index === currentIdx ? 1 : 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority={index === 0 ? 'high' : 'low'}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
        {/* Left-heavy editorial scrim + base scrim for the manifest bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140605]/92 via-[#140605]/55 to-[#140605]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140605]/85 via-transparent to-transparent" />
        {/* Top scrim keeps the transparent navbar legible over the photo */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#140605]/70 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-20 flex-1 flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 pt-28 pb-10"
        >
          <div className="max-w-3xl">

            {/* Origin eyebrow (coordinates — trade vernacular) */}
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#cca72f]" />
              <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.22em] text-[#e6c65a] uppercase">
                Guntur, India · 16.3°N 80.4°E
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-['urbanist'] font-extrabold text-white tracking-tight text-[40px] sm:text-[54px] md:text-[64px] lg:text-[68px] leading-[1.05] max-w-[16ch]"
            >
              Dry red chilli from Guntur, graded and shipped{' '}
              <span className="relative whitespace-nowrap">
                to spec.
                <span className="absolute left-0 -bottom-1 h-[4px] w-full bg-[#cca72f] rounded-full" />
              </span>
            </motion.h1>

            {/* Subcopy — specific to buyers */}
            <motion.p
              variants={item}
              className="font-['nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] leading-relaxed mt-7 max-w-[54ch]"
            >
              Teja, Sannam and Byadgi — hand-sorted by SHU, ASTA and moisture,
              then shipped FSSAI, APEDA and ISO-certified from India's chilli capital.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3.5 mt-9">
              <MotionLink
                to="/varieties"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 bg-[#8f000d] hover:bg-[#a3000f] text-white font-['urbanist'] font-bold text-[13px] sm:text-[14px] py-4 px-8 rounded-lg uppercase tracking-wider shadow-lg shadow-[#8f000d]/30 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cca72f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#140605]"
              >
                Explore varieties
                <FiArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-1" />
              </MotionLink>

              <motion.a
                href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20an%20export%20quote%20for%20Guntur%20dry%20red%20chillies.%20Please%20share%20grades%2C%20specifications%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center border border-white/35 text-white font-['urbanist'] font-bold text-[13px] sm:text-[14px] py-4 px-8 rounded-lg uppercase tracking-wider hover:bg-white hover:text-[#8f000d] hover:border-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Request an export quote
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Signature: export manifest bar */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="relative z-20 border-t border-white/15"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-5">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {manifest.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#cca72f]">
                  {m.label}
                </dt>
                <dd className="font-['urbanist'] font-bold text-[13px] sm:text-[14px] text-white/90 leading-snug">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
