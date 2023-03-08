// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    NEXT_PUBLIC_CHAIN_ID: 97,
    API_ENDPOINT: 'http://139.177.189.219:5001',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '139.177.189.219',
        port: '5001',
      },
    ],
  },
};

module.exports = nextConfig;
