/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: ["files.stripe.com", "github.com"],
  },
};

module.exports = nextConfig;
