/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "codeby.vteximg.com.br",
      "strapiuploadprovidertodotask.s3.us-east-1.amazonaws.com",
    ],
  },
};
