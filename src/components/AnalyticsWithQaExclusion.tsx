"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

function excludeAgentQa(event: BeforeSendEvent) {
  const url = new URL(event.url);
  if (
    url.searchParams.get("utm_source") === "agent-qa" &&
    url.searchParams.get("utm_medium") === "internal"
  ) {
    return null;
  }

  return event;
}

export function AnalyticsWithQaExclusion() {
  return <Analytics beforeSend={excludeAgentQa} />;
}
