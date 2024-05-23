/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `https://example.com/:path*`,
        },
      ],
    }
  },
}

export default nextConfig
