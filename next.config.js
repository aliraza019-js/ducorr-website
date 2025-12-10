/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/lunch-n-learning',
        destination: '/lunch-n-learn',
        permanent: true,
      },
      {
        source: '/lunch-n-learning/:path*',
        destination: '/lunch-n-learn/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
