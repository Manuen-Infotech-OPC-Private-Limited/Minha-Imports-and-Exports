import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919985728555';
const WHATSAPP_MESSAGE = 'Hello Minha Imports & Exports! I would like to inquire about your products.';

const WhatsAppFAB = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 group"
    >
      {/* Tooltip label */}
      <span
        className={`
          bg-white text-[#1a1c1e] font-['urbanist'] font-bold text-[11px] tracking-wide
          px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap
          transition-all duration-300 pointer-events-none
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
        `}
      >
        Chat with us
      </span>

      {/* FAB Button */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 relative"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7 relative z-10"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.774L0 32l8.469-2.001A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.852l-.485-.288-5.027 1.188 1.217-4.893-.316-.503A13.267 13.267 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.274-9.938c-.398-.199-2.355-1.162-2.72-1.295-.366-.133-.633-.199-.9.199-.267.398-1.033 1.295-1.267 1.561-.233.267-.466.3-.864.1-.398-.2-1.682-.62-3.203-1.977-1.184-1.057-1.984-2.362-2.217-2.76-.233-.398-.025-.613.175-.811.18-.178.398-.466.598-.698.2-.233.267-.399.399-.665.133-.267.067-.499-.033-.698-.1-.2-.9-2.17-1.233-2.97-.325-.78-.655-.674-.9-.686l-.765-.013c-.267 0-.7.1-1.067.499-.366.398-1.4 1.367-1.4 3.337 0 1.97 1.434 3.874 1.633 4.14.2.267 2.822 4.307 6.834 6.038.955.413 1.7.659 2.282.843.959.305 1.832.262 2.522.159.769-.115 2.355-.963 2.688-1.894.333-.93.333-1.727.233-1.894-.099-.166-.366-.266-.764-.465z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppFAB;
