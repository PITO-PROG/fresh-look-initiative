import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { SplitText } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * Page hero. When `image` is supplied the hero renders as a full-bleed
 * photographic band with a blue→violet brand wash and light-on-dark type.
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  copy,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  copy: string;
  image?: string;
  children?: ReactNode;
}) {
  const onImage = Boolean(image);

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-40 pb-20",
        onImage ? "section-accent" : "pb-16",
      )}
    >
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-30 mix-blend-luminosity"
          />
          <div
            aria-hidden
            className="dot-grid absolute inset-0 opacity-20 mix-blend-overlay"
          />
        </>
      ) : (
        <>
          <div className="grid-lines absolute inset-0 opacity-30" aria-hidden />
          <div className="halo absolute inset-0" aria-hidden />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.24em" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={cn("text-xs uppercase", onImage ? "text-primary-foreground/80" : "text-cyan")}
        >
          {eyebrow}
        </motion.p>
        <h1
          className={cn(
            "mt-5 max-w-4xl text-4xl leading-[1.02] font-bold sm:text-6xl",
            onImage && "text-primary-foreground",
          )}
        >
          <SplitText text={title} />
          {highlight ? (
            <>
              {" "}
              <span className={onImage ? "text-primary-foreground/70" : "text-gradient"}>
                <SplitText text={highlight} />
              </span>
            </>
          ) : null}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className={cn(
            "mt-6 max-w-2xl text-base sm:text-lg",
            onImage ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {copy}
        </motion.p>
        {children}
      </div>
    </section>
  );
}
