import type { Metadata } from "next";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { content } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const c = content;
  return {
    title: c.about.title,
    description: "MORISTACK helps with Japan reservations, confirmations, questions and trip planning, reviewing requests and clarifying details before work begins.",
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
