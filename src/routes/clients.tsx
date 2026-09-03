import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ClientLogo } from "@/components/ClientLogo";
import { WorkGallery } from "@/components/WorkGallery";

import { PageHero } from "@/components/PageHero";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { CLIENTS, SECTORS } from "@/lib/site-data";

import clientsHeroAsset from "@/assets/brand/marketing-aboosto-mediawall.jpg.asset.json";
const clientsHero = clientsHeroAsset.url;

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients | Brands Branded by Brand It KE" },
      {
        name: "description",
        content:
          "The full Brand It KE client list — Mercedes Centre, KCB Bank, GIZ, Autochek, Mangu High School, SevenSeas Technologies, Montana Resorts and more.",
      },
      { property: "og:title", content: "Our Clients | Brand It KE" },
      {
        property: "og:description",
        content:
          "Automotive, banking, NGO, tech, education, healthcare and hospitality brands we've branded across Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  const [filter, setFilter] = useState<string>("All");
  const filters = useMemo(() => ["All", ...SECTORS], []);
  const list = filter === "All" ? CLIENTS : CLIENTS.filter((c) => c.sector === filter);

  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Brands that trust us with"
        highlight="their surfaces."
        copy="From automotive showrooms to schools, banks, hospitals and resorts — here is who we have branded, and the sectors we know best."
        image={clientsHero}
      />

      {/* Motion: filter chips + animated layout list */}
      <section className="mx-auto max-w-7xl px-5 py-10">
        <FadeUp>
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                  filter === f
                    ? "border-cyan bg-surface-2 text-foreground"
                    : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeUp>

        <motion.ul layout className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {list.map((client) => (
              <motion.li
                key={client.name}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="logo-tile group flex-col overflow-hidden"
              >
                <ClientLogo name={client.name} size="sm" className="h-24 w-full" />
                <div className="w-full border-t border-border px-3 py-2 text-center">
                  <p className="text-[0.6rem] tracking-[0.16em] text-cyan uppercase">
                    {client.sector}
                  </p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>


      </section>

      {/* Real project gallery */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <FadeUp>
          <p className="text-xs tracking-[0.24em] text-cyan uppercase">Case gallery</p>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Recent projects</h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Every photo below is a job we designed, fabricated and installed. Filter by the kind of
            work you need, and tap any image for a closer look.
          </p>
        </FadeUp>

        <div className="mt-12">
          <WorkGallery />
        </div>
      </section>


      {/* Motion: staggered testimonial pop */}
      <section className="section-accent-soft mt-16"><div className="mx-auto max-w-7xl px-5 py-24">
        <Stagger className="grid gap-5 md:grid-cols-3" gap={0.12}>
          {[
            "Signage delivered and installed ahead of our launch date.",
            "The fleet wraps still look new after two years on Kenyan roads.",
            "One team handled design, print and installation — no chasing suppliers.",
          ].map((quote, i) => (
            <StaggerItem key={i} variant="pop">
              <blockquote className="card-lift h-full p-7 text-sm leading-relaxed text-muted-foreground">
                "{quote}"
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.1}>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            Join the list <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeUp>
      </div>
      </section>
    </>
  );
}
