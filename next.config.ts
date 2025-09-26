import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "eda.ru" },
      { protocol: "https", hostname: "amp.eda.ru" },
      { protocol: "https", hostname: "povarenok.ru" },
    ]    
  }
};

export default nextConfig;