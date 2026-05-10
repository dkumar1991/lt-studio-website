import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://ltstudio.io';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const DEFAULTS = {
  title: 'LT Studio — Web Design & Development Agency',
  description: 'A web design & development studio crafting high-performance digital products for startups and enterprises worldwide.',
  keywords: 'web design, web development, UI UX design, React, Next.js, mobile apps, e-commerce, digital agency',
};

export default function SEO({
  title,
  description = DEFAULTS.description,
  keywords = DEFAULTS.keywords,
  canonical = '/',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  structuredData,
}) {
  const fullTitle = title
    ? `${title} | LT Studio`
    : DEFAULTS.title;

  const canonicalUrl = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="LT Studio" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="theme-color" content="#6c63ff" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content="LT Studio" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
