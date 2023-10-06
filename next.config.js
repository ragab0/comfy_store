/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/ragab0/comfy_store/main/src/api/public/images/**',
      },
    ],
  },
}

module.exports = nextConfig
