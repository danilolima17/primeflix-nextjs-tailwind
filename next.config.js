/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
  sw: "sw.js"
})

module.exports = withPWA({
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
})