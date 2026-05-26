/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages specific optimizations
  typescript: {
    ignoreBuildErrors: true, // Optional: useful if type errors block deployment
  },
  eslint: {
    ignoreDuringBuilds: true, // Optional: useful if lint errors block deployment
  },
};

module.exports = nextConfig;
