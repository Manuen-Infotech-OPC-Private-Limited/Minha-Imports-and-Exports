import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';
import harvest from '../../assets/hero-about.png';

// Mono credential row — the same "trade data" voice as the hero manifest.
const credentials = [
  { value: '2013', label: 'Sourcing since' },
  { value: '5,000 MT', label: 'Annual capacity' },
  { value: '15+', label: 'Export markets' },
];

const MotionLink = motion(Link);

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Photograph — clean frame, mono caption (swap this image freely) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img
            alt="Dry red chilli harvest in Guntur"
            loading="lazy"
            className="rounded-2xl w-full h-[400px] md:h-[520px] object-cover"
            src={harvest}
          />
          <div className="absolute left-4 bottom-4 bg-[#140605]/85 px-3 py-2 rounded-lg backdrop-blur-[2px]">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#cca72f]">
              Guntur · at the source
            </span>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <SectionHeading
            kicker="Who we are"
            title={
              <>
                Guntur's red chilli, handled by people who{' '}
                <span className="text-[#8f000d]">know the crop.</span>
              </>
            }
          />

          <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.7] mt-6">
            Minha works at the source — Guntur, Asia's largest chilli market — buying direct from
            grower groups since 2013. That closeness gives us first pick of each harvest and tight
            control over quality long before it reaches a container.
          </p>
          <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.7] mt-4">
            Every lot is hand-sorted and graded to your spec — color, heat and moisture checked —
            then shipped FSSAI, APEDA and ISO-certified. We're not just exporters; we're the partner
            standing behind each shipment.
          </p>

          {/* Credential row */}
          <dl className="grid grid-cols-3 gap-4 border-t border-[#1a1c1e]/10 pt-6 mt-8">
            {credentials.map((c) => (
              <div key={c.label}>
                <dt className="font-['urbanist'] font-extrabold text-[#1a1c1e] text-[22px] md:text-[26px] leading-none">
                  {c.value}
                </dt>
                <dd className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#8a7d7b] mt-2">
                  {c.label}
                </dd>
              </div>
            ))}
          </dl>

          <MotionLink
            to="/about"
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 mt-8 font-['urbanist'] font-bold text-[14px] text-[#8f000d] uppercase tracking-wider group focus:outline-none"
          >
            Read our story
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </MotionLink>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
