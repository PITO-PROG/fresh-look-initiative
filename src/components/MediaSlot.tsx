import { ImagePlus } from "lucide-react";
import { media, type MediaKey } from "@/lib/media";
import { cn } from "@/lib/utils";

export function MediaSlot({
  slot,
  alt,
  label,
  className,
  imgClassName,
}: {
  slot: MediaKey;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
}) {
  const src = media[slot];

  if (src) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105",
            imgClassName,
          )}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${alt} — artwork coming soon`}
      className={cn(
        "relative flex items-center justify-center overflow-hidden border border-dashed border-border bg-surface/50",
        className,
      )}
    >
      <div className="grid-lines absolute inset-0 opacity-30" aria-hidden />
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <span className="rounded-xl border border-border bg-surface-2 p-2.5 text-cyan">
          <ImagePlus className="h-4 w-4" />
        </span>
        <p className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {label ?? alt}
        </p>
        <p className="text-[10px] text-muted-foreground/70">Artwork slot · {slot}</p>
      </div>
    </div>
  );
}
