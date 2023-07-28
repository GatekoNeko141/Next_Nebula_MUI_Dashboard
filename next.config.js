/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  env: {
    ENDPOINT: process.env.ENDPOINT,
  },
}

module.exports = nextConfig