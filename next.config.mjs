// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any external domains you're using for images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Redirects with locale prefix
      {
        source: '/:locale/advisory',
        destination: '/:locale/services/advisory',
        permanent: true,
      },
      {
        source: '/:locale/loans-management',
        destination: '/:locale/services/loans-management',
        permanent: true,
      },
      {
        source: '/:locale/real-estate',
        destination: '/:locale/services/real-estate',
        permanent: true,
      },
      {
        source: '/:locale/securitization',
        destination: '/:locale/services/securitization',
        permanent: true,
      },
      {
        source: '/:locale/servicing',
        destination: '/:locale/services/servicing',
        permanent: true,
      },
      // Double services redirects (fix for accidental double paths)
      {
        source: '/:locale/services/services/:slug',
        destination: '/:locale/services/:slug',
        permanent: false,
      },
      // Redirects without locale prefix
      {
        source: '/advisory',
        destination: '/services/advisory',
        permanent: true,
      },
      {
        source: '/loans-management',
        destination: '/services/loans-management',
        permanent: true,
      },
      {
        source: '/real-estate',
        destination: '/services/real-estate',
        permanent: true,
      },
      {
        source: '/securitization',
        destination: '/services/securitization',
        permanent: true,
      },
      {
        source: '/servicing',
        destination: '/services/servicing',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);