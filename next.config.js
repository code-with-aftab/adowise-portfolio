/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "codewithmosh.com",
      },
      {
        protocol: "https",
        hostname: "uploads.teachablecdn.com",
      }
    ],
  },
};

module.exports = nextConfig;
