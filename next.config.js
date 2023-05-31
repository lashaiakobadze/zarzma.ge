/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAPS_API_KEY: "your-api-key-here",
    dataUrl: "https://zarzmaapi.azurewebsites.net",
  },
  images: {
    domains: ["zarzmaapi.azurewebsites.net", "http://localhost:3000/"],
  },
};

module.exports = nextTranslate(nextConfig);
