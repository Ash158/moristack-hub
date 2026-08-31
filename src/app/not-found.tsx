import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl text-center">
        <p className="text-sm font-semibold tracking-[0.22em] text-fg-soft">
          404
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 text-lg text-fg-soft">
          The link may be old, or the page may have moved.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-fg bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-fg/90"
          >
            Back to home
          </Link>
          <Link
            href="/#services"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-fg"
          >
            See services
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}
