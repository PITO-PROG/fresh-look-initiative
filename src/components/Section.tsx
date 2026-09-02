import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Tone = "plain" | "band" | "mesh" | "accent" | "accent-soft";

/**
 * Section shell: consistent vertical rhythm plus a decorative background
 * treatment (tinted band, brand mesh glow or plain) and optional grid texture.
 */
export function Section({
  children,
  tone = "plain",
  grid = false,
  className,
  innerClassName,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  grid?: boolean;
  className?: string;
  innerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        tone === "band" && "section-band",
        tone === "mesh" && "section-mesh",
        tone === "accent" && "section-accent overflow-hidden",
        tone === "accent-soft" && "section-accent-soft",
        className,
      )}
    >
      {grid ? (
        <div
          aria-hidden
          className="grid-lines pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(70%_60%_at_50%_50%,black,transparent)]"
        />
      ) : null}
      <div className={cn("relative z-10 mx-auto max-w-7xl px-5", innerClassName)}>{children}</div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div aria-hidden className="mx-auto max-w-7xl px-5">
      <div className="hairline-glow" />
    </div>
  );
}
