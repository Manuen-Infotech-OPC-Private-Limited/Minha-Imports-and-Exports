import { motion } from 'framer-motion';
import { FiAward, FiShield, FiGlobe, FiTruck, FiPackage, FiThumbsUp } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';

// Brand trio only — red / green / gold cycling, no off-palette colors.
const capabilities = [
  {
    title: 'Premium grade',
    text: 'A-class Guntur chillies with high SHU and vibrant, stable natural color.',
    icon: <FiAward />,
    color: '#8f000d',
  },
  {
    title: 'Hygienic processing',
    text: 'International standards in sorting, stem-cutting and packaging — start to finish.',
    icon: <FiShield />,
    color: '#1f5e3b',
  },
  {
    title: 'Global compliance',
    text: 'FSSAI, FDA and food-safety compliant for seamless international trade.',
    icon: <FiGlobe />,
    color: '#cca72f',
  },
  {
    title: 'On-time delivery',
    text: 'A reliable logistics network that lands on schedule at any port worldwide.',
    icon: <FiTruck />,
    color: '#8f000d',
  },
  {
    title: 'Reliable supply',
    text: 'Direct sourcing keeps supply steady and priced, even through peak season.',
    icon: <FiPackage />,
    color: '#1f5e3b',
  },
  {
    title: 'Documented trust',
    text: 'Every shipment ships with lab reports and inspection certificates.',
    icon: <FiThumbsUp />,
    color: '#cca72f',
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

        {/* Left: sticky heading rail */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              kicker="Why Minha"
              title={
                <>
                  What buyers <span className="text-[#8f000d]">rely on us</span> for
                </>
              }
            />
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.7] mt-6">
              In Minha, customer service is the prime motto — every shipment is graded, tested and
              documented to your exact specification.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <span className="h-px w-7 bg-[#cca72f]" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8a7d7b]">
                FSSAI · APEDA · ISO certified
              </span>
            </div>
          </div>
        </div>

        {/* Right: capabilities list */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-7 border-t border-neutral-200"
        >
          {capabilities.map((item) => (
            <motion.div
              key={item.title}
              variants={rowVariants}
              className="flex items-start gap-5 py-6 border-b border-neutral-200 group"
            >
              <div
                className="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center text-[22px] transition-transform duration-300 group-hover:scale-105"
                style={{
                  color: item.color,
                  backgroundColor: `${item.color}14`,
                  border: `1px solid ${item.color}30`,
                }}
              >
                {item.icon}
              </div>
              <div className="pt-0.5">
                <h3 className="font-['urbanist'] font-bold text-[18px] md:text-[19px] text-[#1a1c1e] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="font-['Nunito'] font-semibold text-[#5f5b58] text-[14px] md:text-[15px] leading-[1.6]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
