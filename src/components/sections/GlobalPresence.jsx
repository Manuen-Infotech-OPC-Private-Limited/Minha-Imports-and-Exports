import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import globalPresenceMap from '../../assets/global-presence-map-nobg.png';
import SectionHeading from '../common/SectionHeading';
import CountUp from '../common/CountUp';

const stats = [
  { end: 50, suffix: '+', label: 'Global clients', color: 'text-[#8f000d]' },
  { end: 5000, suffix: '+', label: 'MT annual capacity', color: 'text-[#1f5e3b]' },
  { end: 100, suffix: '%', label: 'Export quality', color: 'text-[#cca72f]' },
  { end: 14, suffix: '+', label: 'Chilli varieties', color: 'text-[#8f000d]' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const GlobalPresence = () => {
  return (
    <section id="global-presence" className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left: heading + value props */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionVariants}
          className="lg:col-span-5"
        >
          <SectionHeading
            kicker="Where we ship"
            title={
              <>
                Taking <span className="text-[#8f000d]">Guntur's finest</span> to the world
              </>
            }
            intro="From Guntur to global markets, we hold quality, consistency and trust steady in every shipment."
          />

          <a
            href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20am%20interested%20in%20importing%20your%20Guntur%20chillies.%20Please%20share%20export%20details%20and%20logistics%20support."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 bg-[#1f5e3b] hover:bg-[#17482d] text-white text-[12px] font-['urbanist'] font-bold py-3.5 px-7 rounded-lg uppercase tracking-wider transition-colors duration-300 group"
          >
            Start an enquiry
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 border-t border-[#1a1c1e]/10 pt-7 mt-8">
            <div>
              <h4 className="font-['urbanist'] font-bold text-[14px] text-[#1a1c1e] mb-1">Purity guaranteed</h4>
              <p className="font-['Nunito'] font-semibold text-[13px] text-[#5f5b58] leading-relaxed">
                Carefully selected crops, processed hygienically to preserve natural heat and color.
              </p>
            </div>
            <div>
              <h4 className="font-['urbanist'] font-bold text-[14px] text-[#1a1c1e] mb-1">Reliable supply</h4>
              <p className="font-['Nunito'] font-semibold text-[13px] text-[#5f5b58] leading-relaxed">
                Year-round availability backed by cold storage to support large-scale orders.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: map + stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionVariants}
          className="lg:col-span-7 flex flex-col items-center gap-8"
        >
          <img
            src={globalPresenceMap}
            alt="Map of Minha's global export footprint"
            className="w-full max-w-[640px] h-auto object-contain"
            draggable="false"
            loading="lazy"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-[640px] border-t border-[#1a1c1e]/10 pt-7">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className={`font-['urbanist'] font-extrabold text-[26px] md:text-[30px] leading-none ${stat.color}`}>
                  <CountUp end={stat.end} suffix={stat.suffix} duration={1.6} className="inline-block" />
                </span>
                <span className="block font-mono text-[10px] tracking-[0.12em] uppercase text-[#8a7d7b] mt-2.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalPresence;
