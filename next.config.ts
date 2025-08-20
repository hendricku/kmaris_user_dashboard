import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false
  }
};

export default config;

export default nextConfig;
