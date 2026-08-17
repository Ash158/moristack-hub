import type { Metadata } from "next";
import { isLocale } from "@/lib/content";
import { getContent } from "@/lib/content";
import { About } from "@/components/About";
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
    title: c.about.title,
    description: c.about.body,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  return (
    <>
      <About locale={locale} />
      <Founder locale={locale} />
    </>
  );
}
