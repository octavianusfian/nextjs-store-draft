import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com", // <- tambahkan ini
      },
      {
        protocol: "https",
        hostname: "xchpmhacwvgsgzgrtaqc.supabase.co", // <- tambahkan ini
      },
    ],
  },
};

export default nextConfig;
