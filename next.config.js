/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Add this line to disable automatic static optimization for API routes
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;