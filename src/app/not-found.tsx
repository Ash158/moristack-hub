import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center bg-bg px-6 py-16 text-fg">
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
            Choose language
          </Link>
          <Link
            href="/en"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-fg"
          >
            English home
          </Link>
          <Link
            href="/ja"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-fg"
          >
            日本語ホーム
          </Link>
        </div>
      </div>
    </main>
  );
}
