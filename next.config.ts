// @type {import('next').NextConfig}
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'travelwebappp.blob.core.windows.net',
        pathname: '/brontofly-travelwebapp/**',
      },
    ],
  },
};

module.exports = nextConfig;