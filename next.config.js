/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAPS_API_KEY: "your-api-key-here",
    dataUrl: 'https://zarzmaapi.azurewebsites.net',
  },
  images: {
    domains: ['zarzmaapi.azurewebsites.net'],
  },
  styles: [
    'swiper/css/navigation.min.css',
    // Other CSS files or modules used in your project...
  ],
};

module.exports = nextConfig;
