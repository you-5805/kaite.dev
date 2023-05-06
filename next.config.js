/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  swcMinify: true,
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};
