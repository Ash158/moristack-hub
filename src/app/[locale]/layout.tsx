import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { isLocale, LOCALES, type Locale } from "@/lib/i18n";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE_URL = "https://moristack.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MORISTACK",
  alternateName: "MORI STACK",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "MORISTACK builds focused digital tools, services, and experiments from Japan.",
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@moristack.com",
      availableLanguage: ["en", "ja"],
    },
  ],
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isJa = locale === "ja";
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ja: "/ja",
        en: "/en",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: isJa
        ? "MORISTACK — 暮らしのための小さなデジタルサービス"
        : "MORISTACK — Independent apps, built in Japan",
      description: isJa
        ? "MORISTACK は、日本から暮らしに寄り添う小さなデジタルサービスを作ります。"
        : "MORISTACK builds focused digital tools, services, and experiments from Japan.",
      url: `https://moristack.com/${locale}`,
      locale: isJa ? "ja_JP" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale: Locale = locale;

  return (
    <div
      lang={typedLocale}
      className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header locale={typedLocale} />
      <main className="flex-1">{children}</main>
      <Footer locale={typedLocale} />
    </div>
  );
}
