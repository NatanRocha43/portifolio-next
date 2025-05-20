import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,  
  },
  reactStrictMode: true,
};

export default nextConfig;
