/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC minification
  swcMinify: true,
  
  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimize images
  images: {
    domains: ['randomuser.me', 'images.unsplash.com', 'upload.wikimedia.org'], // Add any image domains you're using
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'], // Modern image formats
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Handle static files and PDFs properly
  async headers() {
    return [
      // General headers for all routes
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; object-src 'self'; frame-src 'self' https://www.google.com https://maps.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;",
          },
        ],
      },
      // Specific headers for PDF files
      {
        source: '/portfolio.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'inline; filename="DeVinci_Codes_Portfolio.pdf"',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
      // Headers for all PDF files
      {
        source: '/:path*.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },

  // React strict mode
  reactStrictMode: true,
  
  // Experimental features for better PDF handling
  experimental: {
    // Enable streaming for large files
    largePageDataBytes: 128 * 1024, // 128KB
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize for performance
    if (!dev && !isServer) {
      // Optimize chunks
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          animations: {
            test: /[\\/]node_modules[\\/](vanta|framer-motion)[\\/]/,
            name: 'animations',
            chunks: 'all',
          },
          pdf: {
            test: /[\\/]node_modules[\\/](react-pdf|pdfjs-dist)[\\/]/,
            name: 'pdf',
            chunks: 'all',
          },
        },
      };
    }

    return config;
  },
}

module.exports = nextConfig 