"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export function RequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [fallbackMailto, setFallbackMailto] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    setFallbackMailto("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) {
        setError(body?.error || "We could not send your request.");
        setStatus("error");
        return;
      }
      if (body?.fallback && body?.mailto) {
        setFallbackMailto(body.mailto);
      }
      setStatus("ok");
      form.reset();
    } catch {
      setError("Network error. Please try again or email support@moristack.com.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-5">
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-fg">Name</span>
        <input
          required
          name="name"
          maxLength={100}
          className="w-full rounded-[12px] border border-border bg-card px-4 py-3 text-base text-fg"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-fg">Email</span>
        <input
          required
          name="email"
          type="email"
          maxLength={320}
          className="w-full rounded-[12px] border border-border bg-card px-4 py-3 text-base text-fg"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-fg">Which service?</span>
        <select
          name="service"
          defaultValue=""
          className="w-full rounded-[12px] border border-border bg-card px-4 py-3 text-base text-fg"
        >
          <option value="">Choose one (optional)</option>
          <option value="call">CALL — Japanese phone call</option>
          <option value="plan">PLAN — Custom Japan trip guide</option>
          <option value="other">Other / not sure</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-fg">Your request</span>
        <textarea
          required
          name="message"
          rows={6}
          maxLength={2000}
          className="w-full rounded-[12px] border border-border bg-card px-4 py-3 text-base text-fg"
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-bold text-white no-underline shadow-[0_1px_0_rgba(0,0,0,0.05)] transition hover:bg-accent-hover disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send request"}
          {status !== "submitting" && <span aria-hidden="true">→</span>}
        </button>
        <span className="text-xs text-fg-soft">
          By sending, you agree to be contacted at the email above.
        </span>
      </div>
      {status === "ok" && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-[12px] border border-accent-soft-line bg-accent-soft p-4 text-sm text-fg"
        >
          <p className="font-bold text-accent-deep">Thanks — we&apos;ll be in touch.</p>
          {fallbackMailto ? (
            <p className="mt-2 text-fg-soft">
              Email delivery is being set up. You can also{" "}
              <a
                href={fallbackMailto}
                className="font-bold text-accent-deep underline"
              >
                open this in your mail app
              </a>{" "}
              to send directly.
            </p>
          ) : (
            <p className="mt-2 text-fg-soft">
              A person will read your request and reply with scope and price within 2-3 business days.
            </p>
          )}
        </div>
      )}
      {status === "error" && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-[12px] border border-red-300 bg-red-50 p-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}
    </form>
  );
}
