import React, { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function CountUp({ end = 0, start = 0, duration = 1.5, suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null);
  const [value, setValue] = useState(start);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const from = Number(start) || 0;
          const to = Number(end) || 0;
          const startTime = performance.now();
          const dur = Math.max(100, duration * 1000);

          const frame = (now) => {
            const t = Math.min(1, (now - startTime) / dur);
            const eased = easeOutCubic(t);
            const current = from + (to - from) * eased;
            setValue(current);
            if (t < 1) requestAnimationFrame(frame);
          };

          requestAnimationFrame(frame);
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [end, start, duration]);

  const formatted = Number(value).toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return (
    <span ref={ref} className={className}>
      {formatted}{suffix}
    </span>
  );
}
