/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")


const nextConfig = {
  pwa: {
    dest: "public",
    sw: 'service-worker.js',
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
