import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moristack.com"),
  title: {
    default: "MORISTACK",
    template: "%s · MORISTACK",
  },
  description:
    "MORISTACK — a small, considered operations partner for the practical side of Japan. CALL for Japanese phone calls, PLAN for custom Japan trip guides.",
  applicationName: "MORISTACK",
  authors: [{ name: "MORISTACK", url: "https://moristack.com" }],
  generator: "Next.js",
  keywords: [
    "MORISTACK",
    "Japan",
    "CALL",
    "PLAN",
    "電話代行",
    "旅行プランニング",
    "Japan phone call",
    "Japan trip planning",
  ],
  alternates: {
    canonical: "/",
    languages: {
      ja: "/ja",
      en: "/en",
      "x-default": "/en",
    },
  },
  openGraph: {
    siteName: "MORISTACK",
    title: "MORISTACK — Operations for the practical side of Japan",
    description:
      "An independent operations partner for Japan tasks that are hard to move forward from abroad — Japanese phone calls and custom trip guides.",
    url: "https://moristack.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MORISTACK — Operations for the practical side of Japan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MORISTACK — Operations for the practical side of Japan",
    description:
      "Independent operations for the practical side of Japan.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${jakarta.variable}`}>
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
