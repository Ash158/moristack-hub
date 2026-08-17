import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isJa = locale === "ja";
  return {
    title: isJa ? "お問い合わせ" : "Contact",
    description: isJa
      ? "MORISTACK へのお問い合わせはこちら。"
      : "Get in touch with the MORISTACK team.",
  };
}

const COPY = {
  en: {
    heading: "Contact",
    lede: "We read every message. We don't promise an SLA, but we do promise a real reply.",
    emailLabel: "Email",
    email: "hello@moristack.com",
    response: "We usually reply within a few business days.",
    note: "If your question is about a specific product, please use the contact form on that product's site — it gets to the right person faster.",
  },
  ja: {
    heading: "お問い合わせ",
    lede: "すべてのメッセージに目を通します。SLA は約束できませんが、必ず本物の返信を約束します。",
    emailLabel: "メール",
    email: "hello@moristack.com",
    response: "通常、数営業日以内にご返信します。",
    note: "特定のプロダクトに関するお問い合わせは、各プロダクトのお問い合わせフォームからご連絡ください。担当者に早く届きます。",
  },
} as const;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const copy = COPY[locale as Locale];

  return (
    <div className="mx-auto w-full max-w-2xl px-6 pt-20 pb-16">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-fg sm:text-5xl">
        {copy.heading}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-fg-soft">{copy.lede}</p>

      <div className="mt-10 rounded-3xl border border-border bg-card p-7">
        <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
          {copy.emailLabel}
        </p>
        <a
          href={`mailto:${copy.email}`}
          className="mt-2 block text-2xl font-semibold tracking-[-0.02em] text-fg underline-offset-4 hover:underline"
        >
          {copy.email}
        </a>
        <p className="mt-4 text-sm text-fg-soft">{copy.response}</p>
      </div>

      <p className="mt-8 text-sm text-muted">{copy.note}</p>
    </div>
  );
}
