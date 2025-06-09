import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fit.iuh.edu.vn',
      },
    ],
  },
};

export default nextConfig;
