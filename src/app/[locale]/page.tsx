import type { Metadata } from "next";
import { isLocale } from "@/lib/content";
import { getContent } from "@/lib/content";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { FeaturedGuides } from "@/components/FeaturedGuides";
import { Founder } from "@/components/Founder";

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
    title: c.hero.headline,
    description: c.hero.subhead,
  };
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <FeaturedGuides locale={locale} />
      <Founder locale={locale} />
    </>
  );
}
