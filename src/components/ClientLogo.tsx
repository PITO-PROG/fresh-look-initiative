import { useState } from "react";

import { CLIENT_LOGOS } from "@/lib/client-logos";

type Props = {
  name: string;
  className?: string;
  size?: "sm" | "md";
};

/**
 * Renders a client's logo when we have the artwork, otherwise a clean wordmark
 * tile so the grid stays consistent while logos are still being collected.
 */
export function ClientLogo({ name, className = "", size = "md" }: Props) {
  const logo = CLIENT_LOGOS[name];
  const [failed, setFailed] = useState(false);
  const height = size === "sm" ? "h-10" : "h-16";

  if (!logo || failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white px-4 text-center ${className}`}
      >
        <span aria-hidden className="h-1 w-6 rounded-full bg-brand-gradient" />
        <span className="font-display text-sm leading-tight font-semibold text-foreground">
          {name}
        </span>
      </div>
    );
  }


  return (
    <div
      className={`flex items-center justify-center rounded-xl px-4 ${
        logo.tone === "dark" ? "bg-ink" : "bg-white"
      } ${className}`}
    >
      <img
        src={logo.url}
        alt={`${name} logo`}
        onError={() => setFailed(true)}
        className={`${height} w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]`}
      />
    </div>
  );
}

