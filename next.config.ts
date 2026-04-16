import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Bật chế độ xuất bản tĩnh
  images: {
    unoptimized: true, // GitHub Pages không hỗ trợ Image Optimization mặc định của Next.js
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
