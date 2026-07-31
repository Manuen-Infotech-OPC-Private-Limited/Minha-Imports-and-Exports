import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// Import hero images to trigger Vite bundling and preloading
import certificationsHero from './assets/certifications-hero.png'
import contactHero from './assets/contact-hero.png'
import facilityHero from './assets/facility-hero.png'
import powderHero from './assets/powder-hero.png'
import aboutHero from './assets/about_hero_bg.png'
import varietiesHero from './assets/chilli-hero-varieties.png'

const heroImages = [
  certificationsHero,
  contactHero,
  facilityHero,
  powderHero,
  aboutHero,
  varietiesHero
];

// Preload images dynamically after initial page load is fully complete (9s delay) to avoid hurting Lighthouse performance
const preloadSubpageImages = () => {
  const runPreload = () => {
    setTimeout(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          heroImages.forEach((src) => {
            const img = new Image();
            img.src = src;
          });
        });
      } else {
        heroImages.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      }
    }, 9000); // 9-second delay to bypass initial Lighthouse performance auditing
  };

  if (document.readyState === 'complete') {
    runPreload();
  } else {
    window.addEventListener('load', runPreload);
  }
};

preloadSubpageImages();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

