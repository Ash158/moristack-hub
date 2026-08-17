import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moristack.com"),
  title: {
    default: "MORISTACK",
    template: "%s · MORISTACK",
  },
  description:
    "MORISTACK is a practice for the practical side of Japan — CALL for phone-based arrangements, PLAN for trip planning.",
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
    title: "MORISTACK — A practice for the practical side of Japan",
    description:
      "MORISTACK runs independent services including MORISTACK CALL, for phone-based arrangements, and MORISTACK PLAN, a trip-planning guide.",
    url: "https://moristack.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORISTACK — A practice for the practical side of Japan",
    description:
      "Independent services for the practical side of Japan: CALL, PLAN.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
