import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { ClientLogo } from "@/components/ClientLogo";
import { CLIENTS } from "@/lib/site-data";
import { hasLogo } from "@/lib/client-logos";

/**
 * Consolidated client wall: every brand shown as artwork (logo-first), in one
 * continuously scrolling band placed high on the homepage.
 */
const WITH_ART = CLIENTS.filter((c) => hasLogo(c.name));
const WITHOUT_ART = CLIENTS.filter((c) => !hasLogo(c.name));

// Logos lead each row; remaining brands follow so the band stays full.
const ORDERED = [...WITH_ART, ...WITHOUT_ART];
const ROW_A = ORDERED.filter((_, i) => i % 2 === 0);
const ROW_B = ORDERED.filter((_, i) => i % 2 === 1);

function LogoRow({
  items,
  reverse = false,
  duration = 46,
}: {
  items: typeof CLIENTS;
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];

  return (
    <div className="logo-marquee group/row relative overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-4"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((client, i) => (
          <motion.div
            key={`${client.name}-${i}`}
            whileHover={{ y: -6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="logo-tile logo-tile-anim group h-24 w-44 shrink-0 overflow-hidden sm:w-52"
            title={client.name}
          >
            <ClientLogo name={client.name} size="md" className="h-full w-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function ClientLogoWall() {
  return (
    <section className="section-accent-soft relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs tracking-[0.24em] text-violet uppercase">Brands we've branded</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-[1.08] font-bold sm:text-4xl">
              Trusted from boardrooms to <span className="text-gradient">boda routes</span>.
            </h2>
          </div>
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
          >
            View all clients <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="logo-fade relative z-10 mt-10 space-y-3"
      >
        <LogoRow items={ROW_A} duration={48} />
        <LogoRow items={ROW_B} reverse duration={56} />
      </motion.div>
    </section>
  );
}
