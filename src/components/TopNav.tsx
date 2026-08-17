import { Logo } from "@/components/Logo";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function TopNav({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85">
      <div className="mx-auto flex w-full max-w-[1000px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Logo size="md" />
        <nav aria-label="Main" className="flex items-center gap-5 text-sm font-medium text-fg-soft sm:gap-7">
          <a href="#services" className="hidden transition hover:text-fg sm:inline">{c.nav.services}</a>
          <a href="#about" className="hidden transition hover:text-fg sm:inline">{c.nav.about}</a>
          <a href="#contact" className="hidden transition hover:text-fg sm:inline">{c.nav.contact}</a>
          <LanguageToggle locale={locale} />
        </nav>
      </div>
    </header>
  );
}
