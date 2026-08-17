import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const NAV: Record<
  Locale,
  { label: string; href: string }[]
> = {
  en: [
    { label: "Home", href: "/en" },
    { label: "Services", href: "/en/services" },
    { label: "About", href: "/en/about" },
    { label: "Contact", href: "/en/contact" },
  ],
  ja: [
    { label: "ホーム", href: "/ja" },
    { label: "サービス", href: "/ja/services" },
    { label: "私たちについて", href: "/ja/about" },
    { label: "お問い合わせ", href: "/ja/contact" },
  ],
};

const OTHER_LOCALE: Record<Locale, { code: Locale; label: string; href: string }> = {
  en: { code: "ja", label: "日本語", href: "/ja" },
  ja: { code: "en", label: "English", href: "/en" },
};

export function Header({ locale }: { locale: Locale }) {
  const nav = NAV[locale];
  const other = OTHER_LOCALE[locale];

  return (
    <header className="border-b border-border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href={`/${locale}`}
          className="text-sm font-semibold tracking-[0.22em] text-fg"
          aria-label="MORISTACK home"
        >
          MORISTACK
        </Link>
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-fg-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href={other.href}
          lang={other.code}
          className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold tracking-wide text-fg-soft transition hover:border-fg hover:text-fg"
        >
          {other.label}
        </Link>
      </div>
    </header>
  );
}
