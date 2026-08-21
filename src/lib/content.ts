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
  id: "call" | "plan" | "poko";
  badge: string;
  productName: string;
  accentVar:
    | "--call-accent"
    | "--plan-accent"
    | "--poko-accent";
  accentSoftVar:
    | "--call-accent-soft"
    | "--plan-accent-soft"
    | "--poko-accent-soft";
  /**
   * Set to "ja" when the linked service is Japanese-only.
   * Drives the language badge on the Services card with a `lang="ja"`
   * attribute. English-language services (CALL, PLAN) leave this
   * undefined.
   */
  serviceLanguage?: "ja";
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
  pokoLabel: string;
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

export const content: PageContent = {
  nav: {
    services: "Services",
    about: "About MORISTACK",
    contact: "Contact",
    guides: "Guides",
  },
  hero: {
    eyebrow: "INDIVIDUAL JAPAN OPERATIONS",
    kicker: "MORISTACK, made workable.",
    headline: "Japan tasks, made workable.",
    subhead:
      "MORISTACK is an independent operations partner for Japan tasks that are hard to move forward from abroad. Pick the service you need; a person reviews the details before anything starts.",
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
    title: "Reviewed up front, one request at a time.",
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
    title: "Independent services, one brand.",
    body: "Each runs on its own site. CALL and PLAN are in English; POKO is a Japanese-language service for families in Japan.",
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
        cta: "Make a Japanese phone call →",
      },
      {
        id: "plan",
        badge: "PLAN",
        productName: "MORISTACK PLAN",
        accentVar: "--plan-accent",
        accentSoftVar: "--plan-accent-soft",
        title: "A Japan trip guide, researched end-to-end.",
        desc: "Based on your interests, dates, and travel style, a custom map and a written guide researched end-to-end. You stay in control of booking and paying — with a clearer plan in hand.",
        bullets: [
          "Custom map + written guide",
          "You handle all bookings and payments",
          "Trips up to 4 nights / 5 days are free during launch",
        ],
        meta: "First 3 requests free / trips up to 4 nights / 5 days",
        url: "https://plan.moristack.com",
        cta: "Plan a Japan trip →",
      },
      {
        id: "poko",
        badge: "POKO",
        productName: "MORISTACK POKO",
        accentVar: "--poko-accent",
        accentSoftVar: "--poko-accent-soft",
        serviceLanguage: "ja",
        title: "An AI tutor children actually talk to.",
        desc: "A voice-first AI tutor for children in Japan. It gives staged hints instead of handing over the answer, practises English conversation in real time, and keeps study records only with a parent's consent. Built for the Japanese school curriculum, and offered entirely in Japanese.",
        bullets: [
          "Staged hints, never the answer straight away",
          "Real-time Japanese and English voice practice",
          "Parent-controlled records, up to 5 children",
        ],
        meta: "Japanese-language service",
        url: "https://poko.moristack.com",
        cta: "See POKO (in Japanese) →",
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
    title: "Operations for the practical side of Japan.",
    body: "MORISTACK is operated for clients working with Japan from overseas. We focus on Japanese phone-based arrangements and custom trip guides, and only take on requests we can complete within the scope, price, and timeline we confirm up front.",
    address: "MORISTACK",
  },
  footer: {
    tagline: "Japan tasks, only as much as you need.",
    callLabel: "CALL",
    planLabel: "PLAN",
    pokoLabel: "POKO",
    contactLabel: "Contact",
    copyright: "© 2026 MORISTACK",
  },
  contactEmail: CONTACT_EMAIL,
};
