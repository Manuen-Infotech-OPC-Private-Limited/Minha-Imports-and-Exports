import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'Minha Imports & Exports';

// Global JSON-LD schemas injected on every page
const GLOBAL_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    description:
      "India's trusted Guntur Dry Red Chilli and Chilli Powder exporter. FSSAI, APEDA & ISO certified bulk chilli supplier.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Guntur',
      addressLocality: 'Guntur',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7288995777',
      contactType: 'sales',
      email: 'minhaimportsexports@gmail.com',
      availableLanguage: ['English', 'Telugu', 'Hindi'],
    },
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: BASE_URL,
    image: DEFAULT_IMAGE,
    telephone: '+91-8185867999',
    email: 'minhaimportsexports@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Guntur',
      addressLocality: 'Guntur',
      addressRegion: 'Andhra Pradesh',
      postalCode: '522001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.3067,
      longitude: 80.4365,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: BASE_URL,
    name: SITE_NAME,
    description: "India's trusted Guntur Dry Red Chilli and Chilli Powder exporter.",
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/varieties?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  },
];

/**
 * Reusable SEO component.
 *
 * Usage:
 *   <SEO
 *     title="Page Title | Minha Imports & Exports"
 *     description="Page description..."
 *     keywords="keyword1, keyword2"
 *     image="https://..." (optional, defaults to og-image.jpg)
 *     url="/path"         (relative path, gets prepended with BASE_URL)
 *     schemas={[]}        (extra JSON-LD schema objects for this page)
 *   />
 */
const SEO = ({
  title,
  description,
  keywords = '',
  image = DEFAULT_IMAGE,
  url = '/',
  schemas = [],
}) => {
  const canonicalUrl = `${BASE_URL}${url}`;
  const ogImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const allSchemas = [...GLOBAL_SCHEMAS, ...schemas];

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
