/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/instruction",
        destination: "/station",
      },
      {
        source: "/charge",
        destination: "/station",
      },
      {
        source: "/news",
        destination: "/station",
      },
      {
        source: "/activity",
        destination: "/station",
      },
    ];
  },
};

module.exports = nextConfig;
