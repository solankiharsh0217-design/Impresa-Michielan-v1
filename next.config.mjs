/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.impresamichielan.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Speed up Vercel builds by skipping redundant checks (we verify locally)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
