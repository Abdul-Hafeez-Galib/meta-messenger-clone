/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "freesvg.org",
      "platform-lookaside.fbsbx.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
