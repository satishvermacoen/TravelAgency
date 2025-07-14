import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

export default nextConfig;
