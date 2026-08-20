import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { isLocale, LOCALES, type Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

const SITE_URL = "https://moristack.com";

const organizationJsonLd = (locale: Locale) => {
  const c = getContent(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MORISTACK",
    alternateName: "MORI STACK",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: c.hero.subhead,
    sameAs: [
      "https://call.moristack.com",
      "https://plan.moristack.com",
    ],
    areaServed: { "@type": "Country", name: "Japan" },
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
        email: c.contactEmail,
        availableLanguage: ["en", "ja"],
      },
    ],
  };
};

const websiteJsonLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MORISTACK",
  url: SITE_URL,
  inLanguage: locale,
  publisher: {
    "@type": "Organization",
    name: "MORISTACK",
    url: SITE_URL,
  },
});

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
  const c = getContent(locale);
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
      title: c.hero.headline,
      description: c.hero.subhead,
      url: `https://moristack.com/${locale}`,
      locale: locale === "ja" ? "ja_JP" : "en_US",
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
      className="flex min-h-screen flex-col"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(typedLocale)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd(typedLocale)),
        }}
      />
      <TopNav locale={typedLocale} />
      <main className="flex-1">{children}</main>
      <div id="contact">
        <Footer locale={typedLocale} />
      </div>
    </div>
  );
}
