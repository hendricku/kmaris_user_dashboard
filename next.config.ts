import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    // Set this to false if you want to ensure stricter type checking
    ignoreBuildErrors: false,
  }
};

export default nextConfig;
