import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { FeaturedGuides } from "@/components/FeaturedGuides";
import { HubGuides } from "@/components/HubGuides";
import { Founder } from "@/components/Founder";
import { content } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const c = content;
  return {
    title: c.hero.headline,
    description: c.hero.subhead,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: c.hero.headline,
      description: c.hero.subhead,
      url: "https://moristack.com",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedGuides />
      <HubGuides />
      <Founder />
    </>
  );
}
