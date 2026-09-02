/**
 * Site-wide ambient background: layered aurora fields, a soft dot grid and a
 * film-grain overlay. Purely decorative, fixed behind all content.
 */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      {/* aurora fields — solid brand colours softened by blur */}
      <div
        className="aurora-blob -top-40 -left-32 h-[38rem] w-[38rem] opacity-[0.28]"
        style={{ backgroundColor: "var(--brand-cyan)" }}
      />
      <div
        className="aurora-blob top-[35%] -right-40 h-[42rem] w-[42rem] opacity-[0.22]"
        style={{ backgroundColor: "var(--brand-cyan)", animationDelay: "-8s" }}
      />
      <div
        className="aurora-blob bottom-[-12%] left-[20%] h-[34rem] w-[34rem] opacity-[0.24]"
        style={{ backgroundColor: "var(--brand-violet)", animationDelay: "-15s" }}
      />

      {/* structure */}
      <div className="dot-grid absolute inset-0 opacity-[0.5]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.35]" />
    </div>
  );
}
