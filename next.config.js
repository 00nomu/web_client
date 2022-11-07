/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  output: 'standalone',
  distDir: 'build',

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    disableStaticImages: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  async rewrites() {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: process.env.SOURCE_PATH,
          destination: process.env.DESTINATION_URL,
        },
        {
          source: process.env.PRODUCTION_JAVA_SERVER_PATH,
          destination: process.env.PRODUCTION_JAVA_SERVER_URL,
        }

      ];
    } else {
      return [
        {
          source: process.env.SOURCE_PATH,
          destination: process.env.DESTINATION_URL,
        },
        {
          source: process.env.JAVA_SERVER_PATH,
          destination: process.env.JAVA_SERVER_URL,
        }
      ];
    }
  },
});