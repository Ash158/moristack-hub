import type { Metadata } from "next";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { content } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const c = content;
  return {
    title: c.about.title,
    description: c.about.body,
    alternates: {
      canonical: "/about",
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <About />
      <Founder />
    </>
  );
}
