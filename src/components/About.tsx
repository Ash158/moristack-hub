import { content } from "@/lib/content";

export function About() {
  const c = content;

  return (
    <section id="about" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow text-accent">{c.about.eyebrow}</p>
            <h2 className="display-title mt-4 max-w-md text-[32px] font-extrabold text-fg sm:text-[40px]">
              {c.about.title}
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-fg-soft">
              {c.about.body}
            </p>
          </div>
          <ol className="grid gap-4" aria-label="Three MORISTACK principles">
            {c.about.principles.map((p) => (
              <li
                key={p.num}
                className="group flex items-start gap-5 rounded-[18px] border border-border bg-bg p-5 transition hover:border-accent-soft-line hover:bg-card"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-extrabold shadow-[0_1px_0_rgba(0,0,0,0.05)]"
                  style={{ color: "#ffffff" }}
                >
                  {p.num}
                </span>
                <span className="min-w-0">
                  <h3 className="text-base font-bold text-fg">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-soft">
                    {p.desc}
                  </p>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
