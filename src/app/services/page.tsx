import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { content } from "@/lib/content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const c = content;
  return {
    title: c.services.title,
    description: c.services.items.map((s) => s.title).join(" / "),
    alternates: {
      canonical: "/services",
    },
  };
}

export default function ServicesPage() {
  return <Services />;
}
