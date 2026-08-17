import Link from "next/link";
import type { Locale } from "@/lib/content";

const OTHER: Record<Locale, { code: Locale; label: string; href: string }> = {
  ja: { code: "en", label: "EN", href: "/en" },
  en: { code: "ja", label: "日本語", href: "/ja" },
};

export function LanguageToggle({ locale }: { locale: Locale }) {
  const other = OTHER[locale];
  return (
    <Link
      href={other.href}
      lang={other.code}
      className="inline-flex items-center rounded-full border border-border bg-bg px-3.5 py-1.5 text-xs font-bold tracking-wide text-fg transition hover:border-fg"
      aria-label={`Switch language to ${other.label}`}
    >
      {other.label}
    </Link>
  );
}
