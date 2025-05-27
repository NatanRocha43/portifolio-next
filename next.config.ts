import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,  
  },
  legacyBrowsers: false,
  reactStrictMode: true,
};

export default nextConfig;
