/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/api/public/images/**',
      },      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/ragab0/comfy_store/blob/main/src/api/public/images/**',
      },
    ],
  },
}

module.exports = nextConfig
