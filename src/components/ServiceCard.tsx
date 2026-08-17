import type { Service } from "@/lib/services";

export function ServiceCard({
  service,
}: {
  service: Omit<Service, "oneLiner"> & { oneLiner: string };
}) {
  return (
    <a
      href={service.url}
      className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 transition hover:border-fg hover:shadow-sm"
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
          {service.tagline}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-fg">
          {service.name}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-fg-soft">
          {service.oneLiner}
        </p>
      </div>
      <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition group-hover:gap-2.5">
        Visit
        <span aria-hidden>→</span>
      </p>
    </a>
  );
}
