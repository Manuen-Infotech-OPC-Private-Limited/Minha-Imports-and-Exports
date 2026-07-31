import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';
import domesticChilliImg from '../../assets/domestic-chilli-supply.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const DomesticMarket = () => {
  return (
    <section id="domestic-market" className="py-16 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left: Clean, Minimal visual display */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100/50">
            {/* Absolute badge overlay */}
            <div className="absolute left-5 top-5 bg-[#8f000d] text-white px-3.5 py-2 rounded-lg font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-bold shadow-lg z-20">
              Domestic Supply
            </div>
            <img
              alt="Vibrant Guntur wholesale dry red chilli market yard supply"
              className="w-full h-[380px] md:h-[480px] object-cover"
              src={domesticChilliImg}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right: heading + copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionVariants}
          className="lg:col-span-6 text-left space-y-6"
        >
          <SectionHeading
            kicker="Now serving domestic market"
            title={
              <>
                Rooted in India, serving the <span className="text-[#8f000d]">nation's spice industry</span>
              </>
            }
            intro="Bringing the soulful heat and rich heritage of Guntur's finest chillies back home to food processors and spice creators across India."
            showLeftLine={true}
            showRightLine={false}
          />

          <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
            After years of carrying Guntur's bold flavours to the global stage, we are proud to bring that same passion back home. Minha supplies domestic manufacturers with pure Guntur chillies and cold-ground powders that honor the soil and protect the health of Indian families.
          </p>

          <ul className="space-y-3.5 pt-2">
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-[#1f5e3b] text-lg shrink-0 mt-0.5" />
              <span className="font-['Nunito'] font-semibold text-[#5a403e] text-[14.5px] leading-relaxed">
                <strong>Honest Quality & Care:</strong> Handled with respect, preserving Guntur's natural heat, color, and moisture profile in every batch.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-[#1f5e3b] text-lg shrink-0 mt-0.5" />
              <span className="font-['Nunito'] font-semibold text-[#5a403e] text-[14.5px] leading-relaxed">
                <strong>Protecting Indian Kitchens:</strong> Thoroughly tested for pesticides and aflatoxins—because safe food is a fundamental right.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-[#1f5e3b] text-lg shrink-0 mt-0.5" />
              <span className="font-['Nunito'] font-semibold text-[#5a403e] text-[14.5px] leading-relaxed">
                <strong>Supporting Our Farmers:</strong> Sourced direct from Guntur grower networks, standing hand-in-hand with local farming families.
              </span>
            </li>
          </ul>


        </motion.div>

      </div>
    </section>
  );
};

export default DomesticMarket;
