import { GiChiliPepper } from 'react-icons/gi';

/**
 * Brand lockup: a chilli-red tile holding a single pepper, paired with the
 * Urbanist wordmark and a monospace trade tagline (the same "trade document"
 * voice used in the hero manifest). Adapts to light/dark surfaces.
 */
const Logo = ({ tone = 'dark', className = '' }) => {
  const word = tone === 'light' ? '#ffffff' : '#1a1c1e';
  const sub = tone === 'light' ? 'rgba(255,255,255,0.6)' : '#9a8d8b';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-[#8f000d] shadow-sm shrink-0">
        <GiChiliPepper className="text-[#f0c64b] text-[19px] -rotate-12" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-['urbanist'] font-extrabold tracking-tight text-[20px]" style={{ color: word }}>
          MINHA
        </span>
        <span className="font-mono text-[8px] tracking-[0.26em] uppercase mt-1" style={{ color: sub }}>
          Imports &amp; Exports
        </span>
      </span>
    </span>
  );
};

export default Logo;
