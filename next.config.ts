import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/bskr-landing",
  assetPrefix: "/bskr-landing/",
};

export default nextConfig;
