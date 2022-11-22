/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/ddfn8xvu3",
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: "@next/font/local" }],
  },
};

module.exports = nextConfig;
