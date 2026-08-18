"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  href: string;
  eventName: string;
  eventData?: Record<string, string | number | boolean | null>;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function TrackedExternalLink({ eventName, eventData, children, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) track(eventName, eventData);
      }}
    >
      {children}
    </a>
  );
}
