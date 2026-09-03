import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { MediaSlot } from "@/components/MediaSlot";
import { PageHero } from "@/components/PageHero";
import { FadeUp, MaskReveal, Stagger, StaggerItem } from "@/components/motion";
import { PROCESS } from "@/lib/site-data";

import processHero from "@/assets/brand/lit-brandit-reception-logo.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process | From Brief to Installation — Brand It KE" },
      {
        name: "description",
        content:
          "How Brand It KE works: brand audit and brief, design mockups, in-house production, then installation and handover anywhere in Kenya.",
      },
      { property: "og:title", content: "Our Process | Brand It KE" },
      {
        property: "og:description",
        content: "Brief, design, produce, install — a four-step branding process with minimal turnaround.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Four steps from brief to"
        highlight="installed."
        copy="A single team owns your project end to end, so nothing gets lost between the designer, the printer and the crew on the ladder."
        image={processHero}
      />

      {/* Motion: scroll-drawn timeline with sticky steps */}
      <section ref={trackRef} className="relative mx-auto max-w-5xl px-5 py-16">
        <div className="absolute top-16 bottom-16 left-8 hidden w-px bg-border md:block" aria-hidden>
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="h-full w-px bg-brand-gradient"
          />
        </div>

        <div className="space-y-16 md:pl-24">
          {PROCESS.map((item, i) => (
            <MaskReveal key={item.step} delay={i * 0.05}>
              <div className="card-lift relative rounded-3xl p-8">
                <span className="absolute -left-[4.6rem] top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-background font-display text-xs md:flex">
                  {item.step}
                </span>
                <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
                  <div>
                    <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                    <Stagger className="mt-6 space-y-2" gap={0.07}>
                      {item.detail.map((d) => (
                        <StaggerItem key={d} variant="rise">
                          <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                            {d}
                          </span>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                  <MediaSlot
                    slot={item.image}
                    alt={item.title}
                    label="Step artwork"
                    className="aspect-[4/3] rounded-2xl"
                  />
                </div>
              </div>
            </MaskReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28">
        <FadeUp>
          <div className="halo section-mesh rounded-3xl border border-border p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">What we need from you</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-3">
              {[
                { t: "Your logo files", c: "Vector (AI, EPS, SVG or PDF) gives the cleanest cut and print." },
                { t: "Site details", c: "Photos, dimensions or a location so we can measure and plan access." },
                { t: "Deadline", c: "The date it must be live — we work backwards from there." },
              ].map((b) => (
                <div key={b.t} className="card-lift p-6">
                  <p className="font-display text-base font-semibold">{b.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{b.c}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
