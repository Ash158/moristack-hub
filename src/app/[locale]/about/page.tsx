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
    title: isJa ? "私たちについて" : "About",
    description: isJa
      ? "MORISTACK は大阪を拠点に、少人数で独立してデジタルサービスを作るチームです。"
      : "MORISTACK is a small, independent team in Osaka building focused digital products.",
  };
}

const COPY = {
  en: {
    heading: "About MORISTACK",
    lede: "We build small, useful, well-made digital products from Osaka, Japan.",
    paragraphs: [
      "MORISTACK is a one-person studio. Each product is its own focused experiment — meant to solve one real problem, not to become a platform.",
      "We work in public when we can. We prefer boring technology that ships, plain writing that respects your time, and interfaces that don't try to upsell you.",
      "If a product doesn't pull its weight, we retire it. We'd rather have three things that work well than a dozen that don't.",
    ],
    principlesHeading: "What we care about",
    principles: [
      "Small over big",
      "Useful over impressive",
      "Calm over exciting",
      "Plain over polished",
    ],
    location: "Based in Osaka, Japan.",
    contact: "Questions or feedback?",
  },
  ja: {
    heading: "MORISTACK について",
    lede: "大阪から、小さくて使いやすく、ていねいに作られたデジタルサービスを作っています。",
    paragraphs: [
      "MORISTACK は、ワン person で運営するスタジオです。プロダクトはそれぞれ独立した小さな実験であり、プラットフォームを目指すものではなく、現実の一つの課題を解決するためのものです。",
      "できるだけオープンに働きます。動く退屈なテクノロジーを、時間を尊重する素直な文章を、 upsell しないインターフェースを選びます。",
      "役割を終えたプロダクトは終了します。動かないものを 12 個持つより、動くものを 3 つ持つほうが良いからです。",
    ],
    principlesHeading: "大事にしていること",
    principles: ["小ささを優先", "使いやすさを優先", "静かさを優先", "素直さを優先"],
    location: "所在地: 大阪府",
    contact: "ご質問・フィードバックはこちらから",
  },
} as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const copy = COPY[locale as Locale];

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-20 pb-16">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-fg sm:text-5xl">
        {copy.heading}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-fg-soft">{copy.lede}</p>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-fg-soft">
        {copy.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-card p-7">
        <h2 className="text-lg font-semibold text-fg">
          {copy.principlesHeading}
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {copy.principles.map((p) => (
            <li
              key={p}
              className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm font-medium text-fg"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 text-sm text-muted">{copy.location}</p>
      <p className="mt-2 text-sm text-muted">
        {copy.contact}{" "}
        <a
          href={`/${locale}/contact`}
          className="font-semibold text-fg underline-offset-2 hover:underline"
        >
          {locale === "ja" ? "お問い合わせ" : "Contact"}
        </a>
      </p>
    </div>
  );
}
