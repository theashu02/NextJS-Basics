/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/Redirect",
        destination: "/",
        permanent: false,
      },
      {
        source: "/Studentlist/:student",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
