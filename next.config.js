/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAPS_API_KEY: "your-api-key-here",
  },
};

module.exports = nextConfig;
