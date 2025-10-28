import React from 'react';
import Head from 'next/head';

const SEOHead = ({
  title = 'DeVinci Codes - AI & Automation Solutions | Transform Your Business',
  description = 'Professional AI and automation solutions to revolutionize your business operations. From AI voice receptionists to intelligent automation, we help you save time and increase revenue.',
  keywords = 'AI automation, artificial intelligence, business automation, AI voice receptionist, machine learning, AI solutions, automated workflows, digital transformation, AI consulting, intelligent automation',
  ogImage = '/images/og-image.jpg',
  url = 'https://devincicodes.com',
  author = 'DeVinci Codes',
  type = 'website',
}) => {
  const fullTitle = title.includes('DeVinci Codes') ? title : `${title} | DeVinci Codes`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="DeVinci Codes" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@devincicodes" />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="DeVinci Codes" />
      <meta name="format-detection" content="telephone=no" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Preconnect to External Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'DeVinci Codes',
            description: description,
            url: url,
            logo: `${url}/images/logoFinal.png`,
            sameAs: [
              'https://www.linkedin.com/company/devincicodes',
              'https://twitter.com/devincicodes',
              'https://github.com/devincicodes',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-234-567-890',
              contactType: 'Customer Service',
              email: 'devincicodes.official@gmail.com',
              availableLanguage: ['English'],
            },
          }),
        }}
      />

      {/* Structured Data - Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'DeVinci Codes',
            image: `${url}/images/logoFinal.png`,
            description: description,
            url: url,
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'US',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '100',
            },
          }),
        }}
      />

      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'AI & Automation Solutions',
            provider: {
              '@type': 'Organization',
              name: 'DeVinci Codes',
              url: url,
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'AI Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Voice Receptionist',
                    description: 'Never miss a call with our 24/7 AI-powered voice receptionist',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Automation',
                    description: 'Automate repetitive tasks and save hours of manual work',
                  },
                },
              ],
            },
          }),
        }}
      />
    </Head>
  );
};

export default SEOHead;
