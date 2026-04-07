import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/bskr-landing" : "",
  assetPrefix: isProd ? "/bskr-landing" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
