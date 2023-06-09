/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_KEY: process.env.NEXT_PUBLIC_SITE_KEY,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atakhelp.onrender.com",
        port: "",
        pathname: "/static/**",
      },
    ],
  },
};

module.exports = nextConfig;
