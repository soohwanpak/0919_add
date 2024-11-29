/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/products/:id',
        destination: '/items/:id',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com"],
  },
}

module.exports = nextConfig