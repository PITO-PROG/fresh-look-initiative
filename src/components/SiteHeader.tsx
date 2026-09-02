import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SERVICES } from "@/lib/site-data";

const LOGO_SRC = "/brandit-logo.png";


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
        scrolled ? "bg-white py-3 shadow-sm" : "bg-white/95 py-6 backdrop-blur"
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
              className="group relative text-sm font-medium text-[#652c7f] transition-colors hover:text-[#3fa1da]"
              activeProps={{ className: "text-[#3fa1da]" }}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-[#3fa1da] transition-all duration-300 group-hover:w-full" />
            </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+254720522588"
            className="hidden items-center gap-2 rounded-full bg-[#3fa1da] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04] hover:bg-[#652c7f] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            0720 522 588
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-[#652c7f]/20 p-2.5 text-[#652c7f] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mt-3 flex flex-col gap-1 rounded-2xl border border-[#652c7f]/10 bg-white p-4 shadow-lg lg:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#652c7f] hover:bg-[#652c7f]/5 hover:text-[#3fa1da]"
              activeProps={{ className: "text-[#3fa1da]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-1 ml-3 flex flex-col gap-1 border-l-2 border-[#3fa1da]/30 pl-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-xs font-medium text-[#652c7f] hover:text-[#3fa1da]"
                activeProps={{ className: "text-[#3fa1da]" }}
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
        className="group relative flex items-center gap-1.5 text-sm font-medium text-[#652c7f] transition-colors hover:text-[#3fa1da]"
        activeProps={{ className: "text-[#3fa1da]" }}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
        <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-[#3fa1da] transition-all duration-300 group-hover:w-full" />
      </Link>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          role="menu"
          className="absolute top-full left-1/2 mt-4 w-64 -translate-x-1/2 rounded-2xl border border-[#652c7f]/10 bg-white p-2 shadow-xl"
        >
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-[#652c7f] transition-colors hover:bg-[#652c7f]/5 hover:text-[#3fa1da]"
              activeProps={{ className: "bg-[#652c7f]/5 text-[#3fa1da]" }}
            >
              {service.short}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#3fa1da] hover:bg-[#652c7f]/5"
          >
            View all services
          </Link>
        </motion.div>
      )}
    </div>
  );
}
