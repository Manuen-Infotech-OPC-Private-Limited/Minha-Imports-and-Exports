import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';
import chilliBasketImg from '../../assets/chilli-bowl-table.png';
import powderImg from '../../assets/chilli-powder-hero.png';

const products = [
  {
    label: 'Whole / dried',
    name: 'Dry Red Chillies',
    color: '#8f000d',
    image: chilliBasketImg,
    fit: 'cover',
    desc: "Handpicked from Guntur's finest farms — rich color, high pungency, graded to your spec.",
    specs: ['Teja · S4 · Byadgi', '< 11% moisture', 'Stem / stemless'],
    to: '/varieties',
    cta: 'Explore varieties',
  },
  {
    label: 'Ground',
    name: 'Chilli Powder',
    color: '#1f5e3b',
    image: powderImg,
    fit: 'cover',
    desc: 'Cold-ground to retain natural oils, color and pungency — blended to your requirement.',
    specs: ['ASTA 60–90+', 'Custom blends', 'No added color'],
    to: '/powder',
    cta: 'Explore powder',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto">

        <SectionHeading
          align="center"
          kicker="What we ship"
          title={
            <>
              Two products, <span className="text-[#8f000d]">one standard</span>
            </>
          }
          intro="Sourced direct from Guntur, India's spice capital, and processed to the highest international export grade."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-14">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="h-60 bg-[#f4efe7] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className={`w-full h-full ${p.fit === 'contain' ? 'object-contain p-6' : 'object-cover'} transition-transform duration-700 group-hover:scale-[1.03]`}
                />
                <span
                  className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-md text-white"
                  style={{ backgroundColor: p.color }}
                >
                  {p.label}
                </span>
              </div>

              {/* Body */}
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <h3 className="font-['urbanist'] font-extrabold text-[24px] text-[#1a1c1e] leading-tight">
                  {p.name}
                </h3>
                <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] leading-[1.6] mt-3">
                  {p.desc}
                </p>

                {/* Mono spec chips */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.specs.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] tracking-[0.04em] text-[#5f5b58] bg-neutral-100 border border-neutral-200 rounded-md px-2.5 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  to={p.to}
                  className="inline-flex items-center gap-2 mt-7 font-['urbanist'] font-bold text-[13px] uppercase tracking-wider text-white py-3 px-6 rounded-lg transition-opacity duration-300 hover:opacity-90 group/btn w-fit"
                  style={{ backgroundColor: p.color }}
                >
                  {p.cta}
                  <FiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
