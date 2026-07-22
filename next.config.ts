import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
