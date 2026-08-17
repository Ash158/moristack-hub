import type { Metadata } from "next";
import { isLocale } from "@/lib/content";
import { getContent } from "@/lib/content";
import { Services } from "@/components/Services";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);
  return {
    title: c.services.title,
    description: c.services.items.map((s) => s.title).join(" / "),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  return <Services locale={locale} />;
}
