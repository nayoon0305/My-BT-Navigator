/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages works best with standalone output or static export
  // But for full App Router support, we usually let Cloudflare handle it.
  images: {
    unoptimized: true, // Often required for static export or certain CDNs
  },
};

module.exports = nextConfig;
