import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SERVICES } from "@/lib/site-data";

const LOGO_SRC = "/brandit-logo-light.png";


export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="Brand It KE" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) =>
            item.to === "/services" ? (
              <ServicesMenu key={item.to} />
            ) : (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
            </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+254720522588"
            className="hidden items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            0720 522 588
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2.5 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-5 mt-3 flex flex-col gap-1 rounded-2xl p-4 lg:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-surface-2 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-1 ml-3 flex flex-col gap-1 border-l border-border pl-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-xs text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-cyan" }}
              >
                {service.short}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}

function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        to="/services"
        aria-expanded={open}
        aria-haspopup="menu"
        onFocus={show}
        onClick={() => setOpen(false)}
        className="group relative flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        activeProps={{ className: "text-foreground" }}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
        <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
      </Link>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          role="menu"
          className="glass absolute top-full left-1/2 mt-4 w-72 -translate-x-1/2 rounded-2xl p-2"
        >
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              activeProps={{ className: "bg-surface-2 text-foreground" }}
            >
              <span className="font-medium">{service.short}</span>
              <span className="mt-0.5 block text-xs text-muted-foreground/80">{service.title}</span>
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl px-3 py-2.5 text-xs tracking-[0.14em] text-cyan uppercase hover:bg-surface-2"
          >
            View all services
          </Link>
        </motion.div>
      )}
    </div>
  );
}
