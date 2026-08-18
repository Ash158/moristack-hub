import Link from "next/link";

type LogoSize = "sm" | "md" | "lg";
type ProductBadge = "HUB" | "CALL" | "PLAN" | null;

const SIZES: Record<
  LogoSize,
  {
    fontSize: number;
    diamondSize: number;
    gap: number;
    badgeFont: number;
    badgePadX: number;
    badgePadY: number;
  }
> = {
  sm: { fontSize: 17, diamondSize: 6, gap: 6, badgeFont: 10, badgePadX: 8, badgePadY: 3 },
  md: { fontSize: 19, diamondSize: 7, gap: 6, badgeFont: 10.5, badgePadX: 8, badgePadY: 3 },
  lg: { fontSize: 24, diamondSize: 8, gap: 7, badgeFont: 11.5, badgePadX: 10, badgePadY: 4 },
};

type Props = {
  size?: LogoSize;
  asLink?: boolean;
  badge?: ProductBadge;
  href?: string;
  /**
   * CSS variable name for the diamond mark between MORI and STACK.
   * Each product site uses its own accent (--accent / --call-accent /
   * --plan-accent) so cross-sell links render the destination's brand color.
   */
  diamondColorVar?: string;
};

export function Logo({
  size = "md",
  asLink = true,
  badge = "HUB",
  href = "/",
  diamondColorVar = "var(--accent)",
}: Props) {
  const s = SIZES[size];
  const inner = (
    <span className="inline-flex items-center text-fg" style={{ gap: 10 }}>
      <span
        className="inline-flex items-center tracking-tight"
        style={{ gap: s.gap, fontSize: s.fontSize, lineHeight: 1 }}
      >
        <span style={{ fontWeight: 500 }}>MORI</span>
        <span
          aria-hidden="true"
          style={{
            width: s.diamondSize,
            height: s.diamondSize,
            background: diamondColorVar,
            display: "inline-block",
            borderRadius: "1px",
            transform: "translateY(0.5px) rotate(45deg)",
          }}
        />
        <span style={{ fontWeight: 800 }}>STACK</span>
      </span>
      {badge ? (
        <span
          className="rounded-full bg-accent-soft font-extrabold tracking-[0.14em] text-accent"
          style={{
            fontSize: s.badgeFont,
            lineHeight: 1,
            paddingLeft: s.badgePadX,
            paddingRight: s.badgePadX,
            paddingTop: s.badgePadY,
            paddingBottom: s.badgePadY,
          }}
        >
          {badge}
        </span>
      ) : null}
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href={href} aria-label="MORISTACK home" className="no-underline">
      {inner}
    </Link>
  );
}
