import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Founder } from "@/components/Founder";
import { Footer } from "@/components/Footer";
import { getContent } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const c = getContent("ja");
  return {
    title: "MORISTACK",
    description: c.hero.subhead,
    alternates: {
      canonical: "/",
      languages: {
        ja: "/",
        en: "/en",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: "MORISTACK",
      description: c.hero.subhead,
      url: "https://moristack.com",
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default function ApexHome() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav locale="ja" />
      <main className="flex-1">
        <Hero locale="ja" />
        <About locale="ja" />
        <Services locale="ja" />
        <Founder locale="ja" />
      </main>
      <div id="contact">
        <Footer locale="ja" />
      </div>
    </div>
  );
}
