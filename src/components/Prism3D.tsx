import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const FACES = ["Brand", "Sign", "Wrap", "Print"];

/**
 * A real CSS-3D rotating cube. Faces carry the brand verbs; the whole scene
 * reacts to pointer position and keeps spinning slowly on its own.
 */
export function Prism3D({ className, size = 132 }: { className?: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(sx, [-1, 1], [-26, 26]);
  const rotateX = useTransform(sy, [-1, 1], [22, -22]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      px.set(((e.clientX - (rect.left + rect.width / 2)) / window.innerWidth) * 2);
      py.set(((e.clientY - (rect.top + rect.height / 2)) / window.innerHeight) * 2);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py]);

  const half = size / 2;

  return (
    <div ref={ref} className={cn("perspective-scene float-y", className)} aria-hidden>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        <div className="spin-3d relative" style={{ width: size, height: size }}>
          {FACES.map((face, i) => (
            <div
              key={face}
              className="absolute inset-0 flex items-center justify-center rounded-xl border border-cyan/40 text-sm font-semibold tracking-[0.18em] text-primary-foreground uppercase"
              style={{
                background: i % 2 === 0 ? "var(--brand-cyan)" : "var(--brand-violet)",
                opacity: 0.92,
                transform: `rotateY(${i * 90}deg) translateZ(${half}px)`,
                backfaceVisibility: "hidden",
              }}
            >
              {face}
            </div>
          ))}
          <div
            className="absolute inset-0 rounded-xl border border-cyan/40"
            style={{
              background: "color-mix(in oklab, var(--brand-cyan) 55%, white)",
              transform: `rotateX(90deg) translateZ(${half}px)`,
            }}
          />
          <div
            className="absolute inset-0 rounded-xl border border-violet/40"
            style={{
              background: "color-mix(in oklab, var(--brand-violet) 55%, white)",
              transform: `rotateX(-90deg) translateZ(${half}px)`,
            }}
          />
        </div>
      </motion.div>

      {/* contact shadow grounds the cube */}
      <div
        className="mx-auto mt-6 h-4 rounded-full blur-md"
        style={{
          width: size * 0.8,
          background: "color-mix(in oklab, var(--brand-violet) 30%, transparent)",
        }}
      />
    </div>
  );
}
