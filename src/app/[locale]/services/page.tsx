import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getServices } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isJa = locale === "ja";
  return {
    title: isJa ? "サービス" : "Services",
    description: isJa
      ? "MORISTACK が公開しているサービス一覧。"
      : "All products and services currently shipping under MORISTACK.",
  };
}

const COPY = {
  en: {
    heading: "Services",
    lede: "Every product we currently maintain. Each one is small on purpose.",
  },
  ja: {
    heading: "サービス",
    lede: "現在公開・運用しているすべてのプロダクト。どれも小さく作ることを意図しています。",
  },
} as const;

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const typedLocale: Locale = locale;
  const copy = COPY[typedLocale];
  const services = getServices(typedLocale);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-16">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-fg sm:text-5xl">
        {copy.heading}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-soft">
        {copy.lede}
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.id}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </div>
  );
}
