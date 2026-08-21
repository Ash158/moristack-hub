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
      // English-only rollout (2026-08-20): /ja|/en prefix → no prefix
      {
        source: "/:locale(ja|en)",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:locale(ja|en)/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
