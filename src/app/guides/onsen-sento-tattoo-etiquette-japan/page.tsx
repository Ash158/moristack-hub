import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = {
  src: "/images/guides/onsen-sento-tattoo-etiquette-japan-hero.jpg",
  alt: "A steaming outdoor hot spring bath at a traditional Japanese onsen, empty, with stone steps and wooden signage",
  width: 1800,
  height: 1112,
};

export const metadata: Metadata = {
  title: "Onsen and Sento With Tattoos: What's Actually Allowed in Japan",
  description:
    "Whether tattoos are allowed at Japanese onsen and sento in 2026, how to find a tattoo-friendly bath, cover-up stickers, and basic bathing etiquette.",
  alternates: { canonical: "/guides/onsen-sento-tattoo-etiquette-japan" },
  openGraph: {
    type: "article",
    title: "Onsen and Sento With Tattoos: What's Actually Allowed in Japan",
    images: [{ url: HERO_IMAGE.src, width: HERO_IMAGE.width, height: HERO_IMAGE.height, alt: HERO_IMAGE.alt }],
  },
  twitter: {
    card: "summary_large_image",
    images: [HERO_IMAGE.src],
  },
};

export default function Guide() {
  return (
    <>
      <article className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">JAPAN CUSTOMS</p>
          <h1 className="display-title mt-4 text-[36px] font-extrabold text-fg sm:text-[44px]">
            Onsen and Sento With Tattoos: What&apos;s Actually Allowed
          </h1>
          <p className="mt-6 text-[15px] uppercase tracking-[0.18em] text-fg-soft">
            ~5 min read
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              sizes="(min-width: 1024px) 768px, 100vw"
              className="w-full object-cover"
              priority
            />
          </div>
          <div className="prose mt-8 space-y-6 text-[17px] leading-relaxed text-fg">
            <p>
              Many onsen (hot spring baths) and sento (public bathhouses) in Japan still refuse visible tattoos, and the rule is not a myth or an old stereotype — it is a real, commonly enforced house policy at a large share of facilities. But the picture is not all-or-nothing either: a growing number of baths allow tattoos outright, many more allow them if covered with a small patch, and private baths sidestep the issue entirely. The short version: <strong>check the specific facility before you go, and carry cover-up stickers as a backup</strong>.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">Why the ban exists</h2>
            <p>
              The association between tattoos and organized crime (yakuza) is the historical reason most onsen and sento give for excluding tattooed guests — full-body irezumi has long been associated with yakuza membership, and many bathhouses adopted no-tattoo policies to discourage those groups from using the facility. The policy has outlived the reasoning for most visitors: a small ankle tattoo on a foreign tourist is treated the same as a full back piece under a blanket &ldquo;no tattoo&rdquo; sign, because staff are enforcing a rule, not making a judgment call about who looks like what.
            </p>
            <p>
              This is slowly changing. The Japan Tourism Agency has encouraged facilities to soften the policy ahead of rising inbound tourism, and hotel and ryokan chains catering to foreign guests have led the shift. But there is no national law and no single standard — each onsen, sento, and ryokan sets its own rule, so a blanket assumption in either direction (&ldquo;tattoos are fine now&rdquo; or &ldquo;tattoos are always banned&rdquo;) will be wrong somewhere.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">How to find a tattoo-friendly bath</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Search &ldquo;tattoo friendly&rdquo; plus the facility name before you go.</strong> Several onsen-focused travel sites and apps maintain lists of tattoo-friendly baths by region, and many facility websites now state their policy directly in English.
              </li>
              <li>
                <strong>Large hotel and resort onsen are more likely to allow tattoos</strong> than small neighborhood sento or traditional ryokan, especially chains that serve a lot of foreign guests.
              </li>
              <li>
                <strong>Private baths (kashikiri-buro or kazoku-buro) sidestep the issue entirely</strong> — these are reserved for one party at a time, usually for 45-60 minutes, and tattoo policy does not apply since no other guests are present. Many ryokan and larger onsen resorts offer one, often for an extra fee.
              </li>
              <li>
                <strong>Call ahead if you are unsure.</strong> Front desk staff will give a direct yes or no, and it avoids an awkward moment at the bath entrance. This is a routine question a Japanese-speaking caller can confirm on your behalf.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">Cover-up stickers and patches</h2>
            <p>
              For a small-to-medium tattoo, a waterproof cover-up sticker or patch is a practical middle path. These are sold at drugstores near major onsen towns and on hotel gift shop counters, typically in a few standard sizes, and many facilities that otherwise ban tattoos will accept a fully covered one. A patch works best on a single, contained tattoo (an ankle, a small shoulder piece); it will not realistically cover a large or multi-area tattoo, and staff can usually tell the difference and will ask you to leave if the cover looks improvised.
            </p>
            <p>
              If you know you will want one, bringing a flesh-tone adhesive bandage or a specialized tattoo cover patch from home saves the search once you arrive, since not every town has a drugstore that stocks them.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">Basic onsen and sento etiquette</h2>
            <p>These apply regardless of tattoo policy, and getting them wrong is a more common source of an awkward bath experience than a tattoo is:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Wash and rinse thoroughly at the shower stations before entering the bath — the bath water is shared and not for washing in.</li>
              <li>No swimsuits in the bath itself (a small number of mixed-gender or resort-style &ldquo;onsen theme park&rdquo; facilities are the exception, and will say so clearly).</li>
              <li>Long hair should be tied up and kept out of the water.</li>
              <li>The small hand towel does not go in the bath water — leave it at the side, or fold it on top of your head.</li>
              <li>No photography inside the bathing area, ever, even of empty rooms.</li>
              <li>Baths are quiet spaces. Conversation happens at a low volume; there is no phone use at the bathside.</li>
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-fg">Common questions</h2>
            <p>
              <strong>Is the tattoo ban a law?</strong> No. It is a private policy set by each individual facility. There is no Japanese law against tattooed people entering a public bath.
            </p>
            <p>
              <strong>Do small or discreet tattoos get more leeway?</strong> Sometimes, informally — but policy is usually written as a blanket rule (&ldquo;no visible tattoos&rdquo;) rather than a size threshold, so it depends on the individual staff member on duty, and you should not count on it.
            </p>
            <p>
              <strong>Are hotel room baths and rented private onsen a safe default?</strong> Yes. A private bath attached to your room, or a reserved family/private bath (kashikiri-buro), is tattoo-policy-free by definition, since you are the only party using it.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[16px] border border-border bg-card p-6">
              <p className="text-sm font-bold text-fg">Planning a Japan trip?</p>
              <p className="mt-2 text-sm text-fg-soft">
                A custom Japan trip guide — written for your dates, your style, and the parts you actually want to figure out.
              </p>
              <Link
                href="/services"
                className="mt-3 inline-flex items-center gap-1 text-base font-bold text-accent no-underline hover:underline"
              >
                See PLAN <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="rounded-[16px] border border-border bg-card p-6">
              <p className="text-sm font-bold text-fg">Need to confirm a tattoo policy by phone?</p>
              <p className="mt-2 text-sm text-fg-soft">
                A routine Japanese phone call to a ryokan or onsen to confirm their policy before you book.
              </p>
              <Link
                href="https://call.moristack.com"
                className="mt-3 inline-flex items-center gap-1 text-base font-bold text-accent no-underline hover:underline"
              >
                See CALL <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
