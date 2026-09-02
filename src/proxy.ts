// Next.js 16 renamed `middleware.ts` to `proxy.ts`.
// See: node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md
// This file lives in src/ (same level as src/app/) because the app/ folder is
// inside src/ in this project.
//
// Simple in-memory IP rate limit for /api/request (POST contact form).
// - 5 requests / minute / IP
// - 50 requests / day / IP
//
// Caveats (kept in worktree notes for production hardening):
// - This Map lives in the proxy instance. On Vercel, each serverless instance
//   has its own bucket, so the effective global cap is higher than 5/min.
//   For production-grade limits, swap this for Vercel KV or Upstash Redis.
//   The matcher is intentionally narrow (/api/request only) so other routes
//   are not affected.
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type Bucket = {
  minute: number;
  day: number;
  minuteStart: number;
  dayStart: number;
};

const buckets = new Map<string, Bucket>();
const MINUTE_CAP = 5;
const DAY_CAP = 50;
const MINUTE_WINDOW_MS = 60_000;
const DAY_WINDOW_MS = 24 * 60 * 60_000;

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

export function proxy(req: NextRequest) {
  const ip = getClientIp(req);
  const now = Date.now();
  const b =
    buckets.get(ip) ?? { minute: 0, day: 0, minuteStart: now, dayStart: now };

  if (now - b.minuteStart > MINUTE_WINDOW_MS) {
    b.minute = 0;
    b.minuteStart = now;
  }
  if (now - b.dayStart > DAY_WINDOW_MS) {
    b.day = 0;
    b.dayStart = now;
  }

  b.minute += 1;
  b.day += 1;
  buckets.set(ip, b);

  if (b.minute > MINUTE_CAP || b.day > DAY_CAP) {
    return NextResponse.json(
      { error: "rate_limited", reset: b.minuteStart + MINUTE_WINDOW_MS },
      { status: 429 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/request"],
};
