/** @type {import('next').NextConfig} */
const nextConfig = {
  // For HuggingFace Spaces or static deployment
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable strict mode for better compatibility
  reactStrictMode: false,
  // Enable standalone for Docker deployment
  experimental: {
    outputFileTracingRoot: process.cwd(),
  }
}

module.exports = nextConfig