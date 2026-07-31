/**
 * Unified section intro used across the home page.
 * One eyebrow language everywhere — a hairline rule + monospace kicker,
 * echoing the hero's coordinate line — so every section rhymes.
 */
const SectionHeading = ({
  kicker,
  title,
  intro,
  align = 'left',
  tone = 'dark', // 'dark' = on light bg · 'light' = on dark bg
  kickerColor,
  showLeftLine = true,
  showRightLine = true,
  className = '',
}) => {
  const center = align === 'center';
  const titleColor = tone === 'light' ? 'text-white' : 'text-[#1a1c1e]';
  const introColor = tone === 'light' ? 'text-white/75' : 'text-[#5a403e]';
  const kColor = kickerColor || (tone === 'light' ? '#cca72f' : '#8f000d');

  return (
    <div className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-2xl ${className}`}>
      <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
        {showLeftLine && <span className="h-px w-7 bg-[#cca72f]" />}
        <span className="font-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: kColor }}>
          {kicker}
        </span>
        {showRightLine && center && <span className="h-px w-7 bg-[#cca72f]" />}
      </div>
      <h2 className={`font-['urbanist'] font-extrabold tracking-tight text-[30px] md:text-[38px] leading-[1.15] ${titleColor}`}>
        {title}
      </h2>
      {intro && (
        <p className={`font-['Nunito'] font-semibold text-[15px] md:text-[16px] leading-[1.6] mt-4 ${introColor}`}>
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
