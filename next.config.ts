import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: process.env.NODE_ENV === 'production' ? '/cache-academy' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cache-academy/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;