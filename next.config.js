/** @type {import('next').NextConfig} */
const nextConfig = {
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
