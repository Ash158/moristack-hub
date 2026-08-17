import Link from "next/link";

type LogoSize = "sm" | "md" | "lg";
type ProductBadge = "HUB" | "CALL" | "PLAN" | null;

const SIZES: Record<LogoSize, { fontSize: number; dotSize: number; gap: number; badgeFont: number; badgePadX: number; badgePadY: number }> = {
  sm: { fontSize: 17, dotSize: 6, gap: 6, badgeFont: 10, badgePadX: 8, badgePadY: 3 },
  md: { fontSize: 19, dotSize: 7, gap: 6, badgeFont: 10.5, badgePadX: 8, badgePadY: 3 },
  lg: { fontSize: 24, dotSize: 8, gap: 7, badgeFont: 11.5, badgePadX: 10, badgePadY: 4 },
};

type Props = {
  size?: LogoSize;
  asLink?: boolean;
  badge?: ProductBadge;
  href?: string;
};

export function Logo({
  size = "md",
  asLink = true,
  badge = "HUB",
  href = "/",
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
            width: s.dotSize,
            height: s.dotSize,
            background: "var(--accent)",
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
