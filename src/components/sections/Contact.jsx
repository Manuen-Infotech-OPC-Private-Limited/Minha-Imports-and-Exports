import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#8f000d] via-[#7a000b] to-[#5a0006] py-12 md:py-16 px-7 md:px-14 border border-[#8f000d]/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: brand line */}
            <div className="lg:col-span-5 lg:border-r lg:border-white/15 lg:pr-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-7 bg-[#cca72f]" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#e6c65a]">
                  From the source
                </span>
              </div>
              <blockquote className="font-['urbanist'] font-semibold text-[18px] md:text-[20px] leading-snug text-white">
                "From Guntur's farming heritage to global markets — every shipment carries our
                promise of quality, trust and long-term partnership."
              </blockquote>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#e6c65a] mt-5">
                — The Minha team
              </div>
            </div>

            {/* Right: CTA */}
            <div className="lg:col-span-7">
              <h2 className="font-['urbanist'] font-extrabold text-[26px] md:text-[34px] leading-[1.15] text-white tracking-tight">
                Looking for a reliable chilli buying partner?
              </h2>
              <p className="font-['Nunito'] font-semibold text-white/80 text-[15px] leading-relaxed mt-4 max-w-xl">
                Get in touch for wholesale quotes, bulk orders and direct sourcing — dry red chillies
                and chilli powder, shipped to spec.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
                {['100% export quality', 'Direct Guntur farms', 'Global sourcing'].map((t) => (
                  <span key={t} className="flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] uppercase text-white/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f]" />
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20a%20quote%20for%20bulk%20chilli%20supply.%20Please%20share%20pricing%20and%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-white text-[#8f000d] font-['urbanist'] font-bold text-[13px] py-3.5 px-7 rounded-lg uppercase tracking-wider hover:bg-neutral-100 transition-colors duration-300 group"
              >
                Request a quote
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
