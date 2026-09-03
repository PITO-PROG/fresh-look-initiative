import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Sparkles } from "lucide-react";

import { NAV } from "@/components/SiteHeader";
import logoAsset from "@/assets/brandit-logo-new.png.asset.json";

const LOGO_SRC = logoAsset.url;

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="inline-block w-fit rounded-xl bg-white/95 p-3 shadow-sm">
            <img src={LOGO_SRC} alt="Brand It KE" className="h-12 w-auto" />
          </span>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Events, corporate and retail branding — designed, fabricated, printed and installed
            in-house from Nairobi.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5 text-sm">
          <p className="font-display text-xs tracking-[0.22em] text-cyan uppercase">Pages</p>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <p className="font-display text-xs tracking-[0.22em] text-cyan uppercase">Reach us</p>
          <a
            href="tel:+254720522588"
            className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-cyan" /> 0720 522 588
          </a>
          <p className="flex items-center gap-2.5 text-muted-foreground">
            <MapPin className="h-4 w-4 text-cyan" /> Haji House, Kirinyaga Road, Nairobi
          </p>
          <p className="flex items-center gap-2.5 text-muted-foreground">
            <Sparkles className="h-4 w-4 text-cyan" /> BranditKe · Facebook · Instagram · TikTok
          </p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Brand It KE · www.branditKe.co.ke
      </p>
    </footer>
  );
}
