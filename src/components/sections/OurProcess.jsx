import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import step1Img from '../../assets/process-step1.png';
import step2Img from '../../assets/process-step2.png';
import step3Img from '../../assets/process-step3.png';
import step4Img from '../../assets/process-step4.png';

const steps = [
  {
    id: '01',
    title: 'Farm sourcing',
    text: 'Direct collaboration with trusted Guntur grower groups since 2013 for premium cultivation.',
    image: step1Img,
    color: '#8f000d',
  },
  {
    id: '02',
    title: 'Selection & grading',
    text: 'Handpicked and graded by our team for vibrant color, high SHU and consistent quality.',
    image: step2Img,
    color: '#1f5e3b',
  },
  {
    id: '03',
    title: 'Processing & packing',
    text: 'Hygienic sorting and custom packaging that locks in freshness, color and flavor.',
    image: step3Img,
    color: '#cca72f',
  },
  {
    id: '04',
    title: 'Global export',
    text: 'On-time delivery with full documentation and clearance to ports worldwide.',
    image: step4Img,
    color: '#8f000d',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const OurProcess = () => {
  return (
    <section id="our-process" className="relative py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden">
      {/* Decorative leaf illustrations in margins */}
      <div className="absolute top-12 left-2 w-[180px] h-[180px] opacity-[0.02] text-[#1F5E3B] pointer-events-none z-0 select-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 C25,65 45,55 85,15 C60,45 55,65 10,90 Z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-2 w-[180px] h-[180px] opacity-[0.02] text-[#1F5E3B] pointer-events-none z-0 select-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 C25,65 45,55 85,15 C60,45 55,65 10,90 Z" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        <SectionHeading
          align="center"
          kicker="How it works"
          title={
            <>
              From <span className="text-[#8f000d]">Guntur farms</span> to{' '}
              <span className="text-[#1f5e3b]">global markets</span>
            </>
          }
          intro="A documented four-stage journey — from the field to your destination port."
        />

        <div className="relative mt-16">
          {/* Timeline Connector Arrows */}
          <div className="hidden lg:block absolute top-[80px] left-0 w-full pointer-events-none z-0">
            {/* Arrow 1: between Col 1 and Col 2 */}
            <div className="absolute left-[25%] -translate-x-1/2 w-[80px] flex items-center justify-center">
              <svg className="w-full h-4" fill="none" viewBox="0 0 100 20">
                <path d="M 5,10 L 85,10" stroke="#1f5e3b" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 80,6 L 88,10 L 80,14" fill="#1f5e3b" stroke="#1f5e3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Arrow 2: between Col 2 and Col 3 */}
            <div className="absolute left-[50%] -translate-x-1/2 w-[80px] flex items-center justify-center">
              <svg className="w-full h-4" fill="none" viewBox="0 0 100 20">
                <path d="M 5,10 L 85,10" stroke="#cca72f" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 80,6 L 88,10 L 80,14" fill="#cca72f" stroke="#cca72f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Arrow 3: between Col 3 and Col 4 */}
            <div className="absolute left-[75%] -translate-x-1/2 w-[80px] flex items-center justify-center">
              <svg className="w-full h-4" fill="none" viewBox="0 0 100 20">
                <path d="M 5,10 L 85,10" stroke="#8f000d" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 80,6 L 88,10 L 80,14" fill="#8f000d" stroke="#8f000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Illustration */}
                <div className="w-[240px] h-[160px] mb-6 relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Step Number Circle */}
                <div
                  className="w-9 h-9 text-white font-['urbanist'] font-bold text-[14px] rounded-full flex items-center justify-center mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.06)] relative z-10"
                  style={{ backgroundColor: step.color }}
                >
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="font-['urbanist'] font-bold text-[18px] text-[#1a1c1e] mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-['nunito'] font-semibold text-[#5f5b58] text-[14px] leading-[1.6] max-w-[260px]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
