import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tokyo-travel-20260313',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
