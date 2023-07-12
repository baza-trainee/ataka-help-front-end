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
        hostname: `${process.env.NEXT_PUBLIC_HOSTNAME}`,
        port: "",
        pathname: "/static/**",
      },
    ],
  },
  experimental: {
    outputFileTracingIgnores: ["**canvas**"],
  },
};

module.exports = nextConfig;
