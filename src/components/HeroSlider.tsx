import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type HeroSlide = {
  src: string;
  eyebrow: string;
  title: string;
  copy: string;
};

const AUTOPLAY_MS = 5600;

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [go, paused]);

  const active = slides[index] ?? slides[0];
  if (!active) return null;


  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-surface-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={active.src}
          src={active.src}
          alt={active.title}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6 sm:p-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] tracking-[0.28em] text-primary-foreground uppercase">
              {active.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
              {active.title}
            </h2>
            <p className="mt-2 max-w-md text-sm text-primary-foreground">{active.copy}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show ${slide.title}`}
                onClick={() => setIndex(i)}
                className="group relative h-1 w-10 overflow-hidden rounded-full bg-primary-foreground/30"
              >
                <span
                  className={`absolute inset-y-0 left-0 rounded-full bg-primary-foreground transition-all duration-500 ${
                    i === index ? "w-full" : "w-0 group-hover:w-1/3"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/35 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/35 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
