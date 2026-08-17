import { Logo } from "@/components/Logo";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

export function TopNav({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-8">
        <Logo size="md" />
        <nav aria-label="Main" className="flex items-center gap-6 md:gap-9">
          <a href="#services" className="hidden text-[14px] font-semibold text-fg-soft transition hover:text-fg sm:inline">
            {c.nav.services}
          </a>
          <a href="#about" className="hidden text-[14px] font-semibold text-fg-soft transition hover:text-fg sm:inline">
            {c.nav.about}
          </a>
          <a href="#contact" className="hidden text-[14px] font-semibold text-fg-soft transition hover:text-fg sm:inline">
            {c.nav.contact}
          </a>
          <LanguageToggle locale={locale} />
        </nav>
      </div>
    </header>
  );
}
