import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moristack.com"),
  title: {
    default: "MORISTACK — Independent apps, built in Japan",
    template: "%s · MORISTACK",
  },
  description:
    "MORISTACK builds focused digital tools, services, and experiments from Japan.",
  applicationName: "MORISTACK",
  authors: [{ name: "MORISTACK", url: "https://moristack.com" }],
  generator: "Next.js",
  keywords: [
    "MORISTACK",
    "Japan",
    "indie",
    "digital tools",
    "旅行",
    "電話代行",
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
    title: "MORISTACK — Independent apps, built in Japan",
    description:
      "MORISTACK builds focused digital tools, services, and experiments from Japan.",
    url: "https://moristack.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORISTACK — Independent apps, built in Japan",
    description:
      "MORISTACK builds focused digital tools, services, and experiments from Japan.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
