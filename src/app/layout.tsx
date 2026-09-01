import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { AnalyticsWithQaExclusion } from "@/components/AnalyticsWithQaExclusion";
import { content, CONTACT_EMAIL } from "@/lib/content";
import "./globals.css";

const SITE_URL = "https://moristack.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MORISTACK",
  alternateName: "MORI STACK",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description: content.hero.subhead,
  sameAs: [
    "https://call.moristack.com",
    "https://plan.moristack.com",
  ],
  areaServed: { "@type": "Country", name: "Japan" },
  knowsLanguage: ["en", "ja"],
  knowsAbout: [
    "Japanese phone-call concierge",
    "Japan travel planning",
    "Phone-only restaurant reservations in Japan",
    "Hotel and ryokan booking by phone",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT_EMAIL,
      availableLanguage: ["en", "ja"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MORISTACK",
  url: SITE_URL,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "MORISTACK",
    url: SITE_URL,
  },
};

const founderJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Satoshi Morinaga",
  jobTitle: "Founder, MORISTACK",
  worksFor: {
    "@type": "Organization",
    name: "MORISTACK",
    url: SITE_URL,
  },
  url: SITE_URL,
  sameAs: [
    "https://github.com/Ash158",
  ],
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MORISTACK",
    template: "%s · MORISTACK",
  },
  description:
    "MORISTACK — a small, considered operations partner for the practical side of Japan. CALL for Japanese phone calls, PLAN for custom Japan trip guides.",
  applicationName: "MORISTACK",
  authors: [{ name: "MORISTACK", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "MORISTACK",
    "Japan",
    "CALL",
    "PLAN",
    "Japan phone call",
    "Japan trip planning",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "ja-JP": "/",
    },
  },
  other: {
    "og:locale:alternate": "ja_JP",
  },
  openGraph: {
    siteName: "MORISTACK",
    title: "MORISTACK — Operations for the practical side of Japan",
    description:
      "An independent operations partner for Japan tasks that are hard to move forward from abroad — Japanese phone calls and custom trip guides.",
    url: SITE_URL,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(founderJsonLd),
          }}
        />
        <TopNav />
        <main className="flex-1">{children}</main>
        <div id="contact">
          <Footer />
        </div>
        <AnalyticsWithQaExclusion />
        <SpeedInsights />
      </body>
    </html>
  );
}
