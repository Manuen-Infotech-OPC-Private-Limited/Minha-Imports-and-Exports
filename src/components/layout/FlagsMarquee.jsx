import { motion } from 'framer-motion';

const row1Countries = [
  { name: 'USA', code: 'us' },
  { name: 'UAE', code: 'ae' },
  { name: 'Vietnam', code: 'vn' },
  { name: 'Thailand', code: 'th' },
  { name: 'Mexico', code: 'mx' },
  { name: 'Nepal', code: 'np' },
];

const row2Countries = [
  { name: 'China', code: 'cn' },
  { name: 'Malaysia', code: 'my' },
  { name: 'Indonesia', code: 'id' },
  { name: 'Sri Lanka', code: 'lk' },
  { name: 'Bangladesh', code: 'bd' },
];

const scrollRow1 = [...row1Countries, ...row1Countries, ...row1Countries];
const scrollRow2 = [...row2Countries, ...row2Countries, ...row2Countries];

const FlagCard = ({ country }) => (
  <div className="flex items-center gap-3.5 shrink-0 bg-white border border-neutral-200 rounded-lg px-5 py-3.5 w-[210px]">
    <div className="w-[42px] h-[28px] rounded-[3px] overflow-hidden border border-black/10 shrink-0">
      <img
        src={`https://flagcdn.com/w80/${country.code}.png`}
        alt={`${country.name} flag`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <span className="font-['urbanist'] font-bold text-[14px] text-[#1a1c1e] uppercase tracking-wide whitespace-nowrap">
      {country.name}
    </span>
  </div>
);

const FlagsMarquee = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full py-10 bg-[#FAF8F4] overflow-hidden z-20 border-y border-neutral-200"
    >
      {/* Label */}
      <div className="flex items-center justify-center gap-3 mb-7 px-6">
        <span className="h-px w-7 bg-[#cca72f]" />
        <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#8a7d7b]">
          Trusted across 15+ markets
        </span>
        <span className="h-px w-7 bg-[#cca72f]" />
      </div>

      {/* Edge fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAF8F4] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAF8F4] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex gap-4">
            {scrollRow1.map((country, idx) => (
              <FlagCard key={idx} country={country} />
            ))}
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex gap-4" style={{ animationDirection: 'reverse' }}>
            {scrollRow2.map((country, idx) => (
              <FlagCard key={idx} country={country} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlagsMarquee;
