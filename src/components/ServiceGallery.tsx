import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import type { WorkItem } from "@/lib/portfolio";

export function ServiceGallery({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState<WorkItem | null>(null);

  if (items.length === 0) return null;

  return (
    <div>
      <motion.div
        layout
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {items.map((item) => (
          <motion.button
            type="button"
            key={item.src}
            layout
            onClick={() => setActive(item)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="tile-hover group relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2 text-left"
          >
            <img
              src={item.src}
              alt={`${item.title} — ${item.client}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.07]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-[10px] tracking-[0.2em] text-cyan uppercase">{item.category}</p>
              <p className="mt-1 font-display text-sm leading-snug font-semibold text-primary-foreground">
                {item.title}
              </p>
              <p className="text-xs text-primary-foreground">{item.client}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-ink/85 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[86vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card"
            >
              <img
                src={active.src}
                alt={`${active.title} — ${active.client}`}
                className="max-h-[68vh] w-full object-contain bg-surface-2"
              />
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="text-[10px] tracking-[0.22em] text-cyan uppercase">
                    {active.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold">{active.title}</h3>
                  <p className="text-sm text-muted-foreground">{active.client}</p>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border hover:bg-surface-2"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
