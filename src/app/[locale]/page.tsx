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
    title: isJa
      ? "MORISTACK — 暮らしのための小さなデジタルサービス"
      : "MORISTACK — Independent apps, built in Japan",
    description: isJa
      ? "MORISTACK は、日本から暮らしに寄り添う小さなデジタルサービスを作ります。"
      : "MORISTACK builds focused digital tools, services, and experiments from Japan.",
  };
}

const COPY = {
  en: {
    eyebrow: "MORISTACK",
    heading: "Independent apps, built in Japan.",
    lede: "Focused digital tools, services, and experiments — one problem at a time.",
    servicesHeading: "What we're shipping",
    servicesLede:
      "Each service is a small, focused product. Use what you need; ignore the rest.",
    contactLabel: "Get in touch",
  },
  ja: {
    eyebrow: "MORISTACK",
    heading: "暮らしのための、小さなデジタルサービス。",
    lede: "暮らしに寄り添う小さな道具をひとつずつ作っています。",
    servicesHeading: "公開中のサービス",
    servicesLede:
      "それぞれ独立した小さなプロダクトです。気になるものだけご利用ください。",
    contactLabel: "お問い合わせ",
  },
} as const;

export default async function LocaleHome({
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
    <div className="mx-auto w-full max-w-6xl px-6">
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <p className="text-sm font-semibold tracking-[0.22em] text-fg-soft">
          {copy.eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-fg sm:text-6xl">
          {copy.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft">
          {copy.lede}
        </p>
      </section>

      <section className="border-t border-border pt-16 pb-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-fg">
            {copy.servicesHeading}
          </h2>
          <a
            href={`/${typedLocale}/services`}
            className="text-sm font-medium text-fg-soft transition hover:text-fg"
          >
            {typedLocale === "ja" ? "すべて見る →" : "See all →"}
          </a>
        </div>
        <p className="mt-3 max-w-2xl text-base text-fg-soft">
          {copy.servicesLede}
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
