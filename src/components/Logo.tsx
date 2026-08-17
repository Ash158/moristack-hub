import Link from "next/link";

type LogoSize = "sm" | "md" | "lg";

const SIZES: Record<LogoSize, { fontSize: number; dotSize: number; gap: number; letterSpacing: string }> = {
  sm: { fontSize: 17, dotSize: 6, gap: 7, letterSpacing: "-0.02em" },
  md: { fontSize: 20, dotSize: 7, gap: 7, letterSpacing: "-0.02em" },
  lg: { fontSize: 24, dotSize: 8, gap: 8, letterSpacing: "-0.02em" },
};

export function Logo({
  size = "md",
  asLink = true,
}: {
  size?: LogoSize;
  asLink?: boolean;
}) {
  const s = SIZES[size];
  const inner = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap,
        fontWeight: 900,
        fontSize: s.fontSize,
        letterSpacing: s.letterSpacing,
        lineHeight: 1,
      }}
    >
      <span>MORI</span>
      <span
        aria-hidden="true"
        style={{
          width: s.dotSize,
          height: s.dotSize,
          background: "var(--accent)",
          borderRadius: 1,
          display: "inline-block",
        }}
      />
      <span>STACK</span>
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link
      href="/"
      aria-label="MORISTACK home"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {inner}
    </Link>
  );
}
