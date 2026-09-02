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
  // Defense-in-depth security headers (security audit 2026-09-02)
  // - nosniff: prevent MIME-type sniffing
  // - CSP: restrict script/style/img/connect sources (unsafe-inline / unsafe-eval
  //   kept for Next.js hydration + dev; production-ready per Next.js 16 docs)
  // - X-Frame-Options: DENY (clickjacking protection, mirrors frame-ancestors)
  // - Referrer-Policy: strict-origin-when-cross-origin (leak minimal)
  // - Permissions-Policy: opt out of all browser features hub does not use
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
              "img-src 'self' data: https://*.vercel.com; " +
              "connect-src 'self' https://*.vercel.com https://*.vercel-insights.com; " +
              "style-src 'self' 'unsafe-inline'; " +
              "font-src 'self' data:; " +
              "object-src 'none'; " +
              "base-uri 'self'; " +
              "frame-ancestors 'none'; " +
              "form-action 'self'",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), " +
              "usb=(), magnetometer=(), gyroscope=(), accelerometer=(), " +
              "interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
