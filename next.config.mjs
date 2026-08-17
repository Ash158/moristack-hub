/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // www → apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.moristack.com" }],
        destination: "https://moristack.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
