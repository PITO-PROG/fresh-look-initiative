import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { MediaSlot } from "@/components/MediaSlot";
import { PageHero } from "@/components/PageHero";
import { FadeUp, MaskReveal, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import { SERVICES } from "@/lib/site-data";

import servicesHero from "@/assets/photos/lit-letters.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Signage, Vehicle Branding & Printing — Brand It" },
      {
        name: "description",
        content:
          "Signage fabrication, vehicle wraps, promotional items, corporate wear, print, stationery, graphic design and marketing materials — all produced in-house in Nairobi.",
      },
      { property: "og:title", content: "Brand It KE Services" },
      {
        property: "og:description",
        content:
          "Signage, vehicle branding, promo items, corporate wear, print, design and marketing materials from Nairobi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your brand"
        highlight="touches."
        copy="Six service lines, one production house. Mix them for events, fleets, retail spaces, schools, hospitals and corporate offices."
        image={servicesHero}
      />

      {/* Motion: alternating slide-in rows with curtain image reveals */}
      <div className="mx-auto max-w-7xl space-y-24 px-5 py-16">
        {SERVICES.map((service, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <MaskReveal className={flip ? "lg:order-2" : ""}>
                <MediaSlot
                  slot={service.image}
                  alt={service.title}
                  className="aspect-[4/3] rounded-3xl"
                />
              </MaskReveal>

              <SlideIn from={flip ? "right" : "left"}>
                <p className="font-display text-sm text-cyan">0{i + 1}</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{service.title}</h2>
                <p className="mt-4 text-muted-foreground">{service.copy}</p>
                <Stagger className="mt-7 grid gap-2.5 sm:grid-cols-2" gap={0.05}>
                  {service.items.map((item) => (
                    <StaggerItem key={item} variant="rise">
                      <span className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
                >
                  Explore {service.short} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </SlideIn>
            </section>
          );
        })}
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-28">
        <FadeUp>
          <div className="halo section-mesh flex flex-col items-start gap-5 rounded-3xl border border-border p-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-muted-foreground">
              Not sure which mix you need? Send us the brief and we'll scope it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              Request a quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
