/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3004',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
