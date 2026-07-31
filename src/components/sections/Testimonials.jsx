import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiMapPin, FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';

const reviews = [
  {
    name: 'Rajesh Mehta',
    role: 'Director of Procurement',
    company: 'Vedic Spices & Extracts',
    location: 'Mumbai, Maharashtra',
    tag: 'Unmatched pungency & color retention',
    text: "Minha's Sannam and Teja varieties set a new benchmark for our extraction division. The ASTA color value stays stable even after months in storage. Truly exceptional quality.",
    rating: 5,
  },
  {
    name: 'Anjali Sharma',
    role: 'Head Quality Auditor',
    company: 'Bharat Masala Foods',
    location: 'Delhi NCR',
    tag: 'Zero compliance issues on aflatoxin',
    text: 'We have sourced multiple container loads from Minha. Their sorting and lab controls mean zero rejections on pesticide residues or moisture. The stemless sort is clean and ready.',
    rating: 5,
  },
  {
    name: 'Vikram Sengupta',
    role: 'VP Supply Chain',
    company: 'Indo-Global Spice Alliance',
    location: 'Kolkata, West Bengal',
    tag: 'Consistent year-round shipping',
    text: 'Minha’s cold-chain storage means we get fresh-harvest quality red chillies even off-season. Their locked-in pricing contract saved us from local market price hikes.',
    rating: 5,
  },
  {
    name: 'Karthik Srinivasan',
    role: 'Managing Partner',
    company: 'Deccan Milling & Packaging',
    location: 'Guntur, Andhra Pradesh',
    tag: 'Custom private-label packaging',
    text: 'Their packaging lines support varied configurations, from jute sacks to vacuum-sealed packs. The team’s response time and execution during peak season are commendable.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  useEffect(() => {
    if (isHovered) return undefined;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const review = reviews[activeIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left: heading + trust card */}
        <div className="lg:col-span-5">
          <SectionHeading
            kicker="Client voices"
            title={
              <>
                Trusted by India's <span className="text-[#1f5e3b]">leading food brands</span>
              </>
            }
            intro="We supply India's largest packers, processors and exporters with consistent, certified dry red chilli — lot after lot."
          />

          {/* Trust score card */}
          <div className="bg-[#161013] text-white p-6 rounded-2xl border border-white/[0.06] mt-8 flex items-center gap-5">
            <div>
              <div className="font-['urbanist'] font-black text-[42px] text-[#cca72f] leading-none">4.9</div>
              <div className="flex text-[#cca72f] gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-[#cca72f] text-xs" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="font-['urbanist'] font-bold text-xs uppercase tracking-wider text-white/90">
                Average supplier rating
              </div>
              <div className="font-mono text-[11px] text-white/55 mt-1.5 leading-relaxed">
                120+ audited trading transactions
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
            {['FSSAI certified', 'ASTA standardized'].map((t) => (
              <span key={t} className="flex items-center gap-2 font-['urbanist'] font-bold text-[11px] text-neutral-700 uppercase tracking-wide">
                <FiCheck className="text-[#1f5e3b] stroke-[3px]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: carousel */}
        <div className="lg:col-span-7">
          <div
            className="relative min-h-[360px] sm:min-h-[300px] flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-neutral-200 rounded-2xl p-8 md:p-10 w-full"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 text-[#cca72f]">
                    {[...Array(review.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-[#cca72f] text-sm" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#cca72f]">
                    Quality verified
                  </span>
                </div>

                <h3 className="font-['urbanist'] font-extrabold text-[19px] sm:text-[21px] text-[#1a1c1e] leading-snug mt-5">
                  "{review.tag}"
                </h3>
                <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] leading-relaxed mt-4">
                  {review.text}
                </p>

                <div className="w-full h-px bg-neutral-100 my-6" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-['urbanist'] font-black text-[14px] text-[#1a1c1e]">{review.name}</div>
                    <div className="font-['Nunito'] text-[12px] text-[#5a403e]/75 mt-0.5">
                      {review.role}, <span className="font-semibold text-[#1f5e3b]">{review.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-600 self-start sm:self-auto">
                    <FiMapPin className="text-[#8f000d]" />
                    {review.location}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-7">
            <div className="flex gap-2.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-[#8f000d]' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-lg border border-neutral-300 hover:border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors bg-white"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="text-lg" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-lg border border-neutral-300 hover:border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors bg-white"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
