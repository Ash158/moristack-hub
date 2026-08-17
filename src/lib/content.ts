export type Locale = "ja" | "en";
export const LOCALES: Locale[] = ["ja", "en"];

export type NavCopy = {
  services: string;
  about: string;
  contact: string;
  guides: string;
};

export type HeroCopy = {
  eyebrow: string;
  kicker: string;
  headline: string;
  subhead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  diagram: {
    caption: string;
    from: string;
    mid: string;
    to: string;
    note: string;
  };
};

export type PrincipleCopy = {
  num: string;
  title: string;
  desc: string;
};

export type AboutCopy = {
  eyebrow: string;
  title: string;
  body: string;
  principles: PrincipleCopy[];
};

export type ServiceItemCopy = {
  id: "call" | "plan";
  badge: string;
  productName: string;
  accentVar: "--call-accent" | "--plan-accent";
  accentSoftVar: "--call-accent-soft" | "--plan-accent-soft";
  title: string;
  desc: string;
  bullets: string[];
  meta: string;
  url: string;
  cta: string;
};

export type ServicesCopy = {
  eyebrow: string;
  title: string;
  body: string;
  items: ServiceItemCopy[];
};

export type FeaturedGuide = {
  title: string;
  href: string;
  badge: string;
};

export type GuidesCopy = {
  eyebrow: string;
  title: string;
  body: string;
  callGuides: FeaturedGuide[];
  planGuides: FeaturedGuide[];
};

export type FounderCopy = {
  eyebrow: string;
  title: string;
  body: string;
  address: string;
};

export type FooterCopy = {
  tagline: string;
  callLabel: string;
  planLabel: string;
  contactLabel: string;
  copyright: string;
};

export type PageContent = {
  nav: NavCopy;
  hero: HeroCopy;
  about: AboutCopy;
  services: ServicesCopy;
  guides: GuidesCopy;
  founder: FounderCopy;
  footer: FooterCopy;
  contactEmail: string;
};

export const CONTACT_EMAIL = "support@moristack.com";

const JA: PageContent = {
  nav: {
    services: "サービス",
    about: "について",
    contact: "相談",
    guides: "ガイド",
  },
  hero: {
    eyebrow: "INDIVIDUAL JAPAN OPERATIONS",
    kicker: "MORISTACK, made workable.",
    headline: "日本での用事を、確実に、必要ぶんだけ。",
    subhead:
      "MORISTACKは、海外からでは進めにくい日本の実務だけを扱う小さなオペレーションパートナーです。日本語の電話、旅行プランニング。必要なサービスだけを選び、人が内容を確認してから動きます。",
    ctaPrimary: "サービスを見る",
    ctaSecondary: "相談してみる",
    diagram: {
      caption: "依頼から完了まで",
      from: "依頼",
      mid: "MORISTACK",
      to: "完了",
      note: "着手前に内容と料金を確認。無理な依頼には着手せず、進められる範囲だけをお伝えします。",
    },
  },
  about: {
    eyebrow: "ABOUT",
    title: "一件ずつ、内容を見てから進めます。",
    body: "予約、確認、問い合わせ、旅行計画。日本語と現地感覚が必要なタスクを、急がず確認を挟みながら扱います。便利屋ではなく、海外から日本の用事を進めるための実務パートナーです。",
    principles: [
      {
        num: "01",
        title: "人が確認してから対応",
        desc: "依頼内容を読み、不明点があれば着手前に確認します。テンプレートで返しません。",
      },
      {
        num: "02",
        title: "料金と範囲を先に明確に",
        desc: "何をどこまで行うか、費用はいくらかを事前にお知らせします。曖昧な課金はしません。",
      },
      {
        num: "03",
        title: "必要なサービスだけを選べる",
        desc: "電話代行、旅行プランニングは別サービス。目的に合わせて個別に利用できます。",
      },
    ],
  },
  services: {
    eyebrow: "SERVICES",
    title: "今は2つのサービスを運営しています。",
    body: "どちらも独立した別サイトで運用中。下のリンクからそれぞれのサービスページへ。",
    items: [
      {
        id: "call",
        badge: "CALL",
        productName: "MORISTACK CALL",
        accentVar: "--call-accent",
        accentSoftVar: "--call-accent-soft",
        title: "日本語の電話、あなたの代わりに。",
        desc: "レストラン、美容室、役所、公共料金、ライフラインなど、電話でしか進まない場面を日本語で代行。新規予約、確認、変更、簡単な問い合わせに対応します。",
        bullets: [
          "新規予約・変更・確認・質問",
          "通話完了まで課金なし",
          "Stripeで安全にカード登録",
        ],
        meta: "1件 $6〜 / 通話完了時のみ課金",
        url: "https://call.moristack.com",
        cta: "MORISTACK CALL を開く",
      },
      {
        id: "plan",
        badge: "PLAN",
        productName: "MORISTACK PLAN",
        accentVar: "--plan-accent",
        accentSoftVar: "--plan-accent-soft",
        title: "旅の設計図を、人がつくります。",
        desc: "行きたい場所、興味、滞在日数に合わせて、人が調べてカスタムマップと旅行ガイドをお渡しします。予約代行ではなく、自分のペースで旅を組みたい人のためのプランニングです。",
        bullets: [
          "カスタムマップ + 文字ガイド",
          "予約・決済はあなた自身",
          "7日間以内の旅程は無料対応中",
        ],
        meta: "先着3件限定 / 7日以内無料",
        url: "https://plan.moristack.com",
        cta: "MORISTACK PLAN を開く",
      },
    ],
  },
  guides: {
    eyebrow: "PRACTICAL GUIDES",
    title: "依頼の前に、知っておくと助かること。",
    body: "各サービスに、日本で実際に使う場面で押さえておきたいポイントをまとめたガイドがあります。",
    callGuides: [
      {
        badge: "CALL",
        title: "日本のレストランを電話予約する手順",
        href: "https://call.moristack.com/guides",
      },
      {
        badge: "CALL",
        title: "ホテル・旅館への電話で確認すべきこと",
        href: "https://call.moristack.com/guides",
      },
      {
        badge: "CALL",
        title: "公共料金・ライフラインの問い合わせ英語訳",
        href: "https://call.moristack.com/guides",
      },
    ],
    planGuides: [
      {
        badge: "PLAN",
        title: "日本旅行、eSIMとポケットWi-Fiは結局どれか",
        href: "https://plan.moristack.com/guides",
      },
      {
        badge: "PLAN",
        title: "ジャパンレールパス、今も必要か",
        href: "https://plan.moristack.com/guides",
      },
      {
        badge: "PLAN",
        title: "荷物を預ける場所の選び方",
        href: "https://plan.moristack.com/guides",
      },
    ],
  },
  founder: {
    eyebrow: "COMPANY",
    title: "実務に寄ったオペレーション会社。",
    body: "MORISTACKは、日本国内に登記のある法人として、海外から日本の実務を進めたい方のオペレーションを引き受けています。日本語の電話対応と旅行プランニングを軸に、対応範囲・料金・所要時間を依頼前にお知らせし、進めてよいと判断したものだけお受けしています。",
    address: "MORISTACK Inc. · Osaka, Japan",
  },
  footer: {
    tagline: "日本での用事を、必要なぶんだけ前へ。",
    callLabel: "CALL",
    planLabel: "PLAN",
    contactLabel: "Contact",
    copyright: "© 2026 MORISTACK",
  },
  contactEmail: CONTACT_EMAIL,
};

const EN: PageContent = {
  nav: {
    services: "Services",
    about: "About",
    contact: "Contact",
    guides: "Guides",
  },
  hero: {
    eyebrow: "INDIVIDUAL JAPAN OPERATIONS",
    kicker: "MORISTACK, made workable.",
    headline: "Japan tasks, made workable.",
    subhead:
      "MORISTACK is a small operations partner for Japan tasks that are hard to move forward from abroad — Japanese phone calls and custom trip guides. Pick the service you need; a person reviews the details before anything starts.",
    ctaPrimary: "See services",
    ctaSecondary: "Get in touch",
    diagram: {
      caption: "From request to done",
      from: "Request",
      mid: "MORISTACK",
      to: "Done",
      note: "Scope and price are confirmed before work starts. If we can't take it on, we tell you up front.",
    },
  },
  about: {
    eyebrow: "ABOUT",
    title: "Reviewed by a person, one request at a time.",
    body: "Reservations, confirmations, questions, and trip planning often need Japanese and local context. MORISTACK handles those tasks carefully, with clarification where needed — a quiet operations partner for getting things done in Japan.",
    principles: [
      {
        num: "01",
        title: "Reviewed before action",
        desc: "Every request is read first, and unclear details are confirmed before work begins. No auto-replies.",
      },
      {
        num: "02",
        title: "Scope and price up front",
        desc: "You know what we'll do, how far we can go, and what it costs before we start. No vague billing.",
      },
      {
        num: "03",
        title: "Use only what you need",
        desc: "Phone support and trip planning are separate services, each designed for a specific job. No bundled upsell.",
      },
    ],
  },
  services: {
    eyebrow: "SERVICES",
    title: "Two independent services, one company.",
    body: "Each runs on its own site. Click through for full pricing, FAQs, and request forms.",
    items: [
      {
        id: "call",
        badge: "CALL",
        productName: "MORISTACK CALL",
        accentVar: "--call-accent",
        accentSoftVar: "--call-accent-soft",
        title: "Japanese phone calls, made for you.",
        desc: "For restaurants, salons, city offices, utilities, and other phone-only situations in Japan, a Japanese speaker makes the call on your behalf. New reservations, confirmations, changes, and routine questions.",
        bullets: [
          "New bookings, changes, confirmations, questions",
          "No charge until the call is completed",
          "Secure card registration via Stripe",
        ],
        meta: "From $6 / billed only when the call is made",
        url: "https://call.moristack.com",
        cta: "Open MORISTACK CALL",
      },
      {
        id: "plan",
        badge: "PLAN",
        productName: "MORISTACK PLAN",
        accentVar: "--plan-accent",
        accentSoftVar: "--plan-accent-soft",
        title: "A Japan trip guide, researched by a person.",
        desc: "Based on your interests, dates, and travel style, a custom map and a written guide researched by a person. You stay in control of booking and paying — with a clearer plan in hand.",
        bullets: [
          "Custom map + written guide",
          "You handle all bookings and payments",
          "Trips up to 7 days are free during launch",
        ],
        meta: "First 3 requests free / trips up to 7 days",
        url: "https://plan.moristack.com",
        cta: "Open MORISTACK PLAN",
      },
    ],
  },
  guides: {
    eyebrow: "PRACTICAL GUIDES",
    title: "Worth knowing before you request.",
    body: "Each service keeps a small library of practical guides for situations that come up in Japan.",
    callGuides: [
      {
        badge: "CALL",
        title: "How to phone-book a Japanese restaurant",
        href: "https://call.moristack.com/guides",
      },
      {
        badge: "CALL",
        title: "What to confirm by phone with a ryokan or hotel",
        href: "https://call.moristack.com/guides",
      },
      {
        badge: "CALL",
        title: "English phrases for utility and city-office calls",
        href: "https://call.moristack.com/guides",
      },
    ],
    planGuides: [
      {
        badge: "PLAN",
        title: "Japan eSIM vs pocket Wi-Fi: which one wins",
        href: "https://plan.moristack.com/guides",
      },
      {
        badge: "PLAN",
        title: "Do you still need a Japan Rail Pass?",
        href: "https://plan.moristack.com/guides",
      },
      {
        badge: "PLAN",
        title: "How to choose a luggage storage spot in Japan",
        href: "https://plan.moristack.com/guides",
      },
    ],
  },
  founder: {
    eyebrow: "COMPANY",
    title: "A focused operations company, based in Japan.",
    body: "MORISTACK is a company registered in Japan that handles practical operations for clients working with Japan from overseas. We focus on Japanese phone-based arrangements and custom trip guides, and only take on requests we can complete within the scope, price, and timeline we confirm up front.",
    address: "MORISTACK Inc. · Osaka, Japan",
  },
  footer: {
    tagline: "Japan tasks, only as much as you need.",
    callLabel: "CALL",
    planLabel: "PLAN",
    contactLabel: "Contact",
    copyright: "© 2026 MORISTACK",
  },
  contactEmail: CONTACT_EMAIL,
};

const CONTENT: Record<Locale, PageContent> = { ja: JA, en: EN };

export function getContent(locale: Locale): PageContent {
  return CONTENT[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
