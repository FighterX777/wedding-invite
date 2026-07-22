import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow Three.js and R3F to be transpiled
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],

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
