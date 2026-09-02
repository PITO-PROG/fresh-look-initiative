import { createFileRoute } from "@tanstack/react-router";

import { MediaSlot } from "@/components/MediaSlot";
import { PageHero } from "@/components/PageHero";
import { TiltCard } from "@/components/TiltCard";
import { FadeUp, MaskReveal, Parallax, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import { SECTORS, STATS } from "@/lib/site-data";

import aboutHero from "@/assets/photos/studio-designer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brand It KE | Nairobi Branding Company" },
      {
        name: "description",
        content:
          "Who we are: a creative, results-driven events and corporate branding partner in Nairobi delivering design, signage, printing and installation in-house.",
      },
      { property: "og:title", content: "About Brand It KE" },
      {
        property: "og:description",
        content:
          "Creative, results-driven branding, signage and printing from Haji House, Kirinyaga Road, Nairobi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Creativity", copy: "Ideas that fit the brand, the budget and the surface — never recycled templates." },
  { title: "Speed", copy: "Minimal turnover time without cutting corners on finishing or safety." },
  { title: "Affordability", copy: "In-house production means fair pricing and no middleman markups." },
  { title: "Accountability", copy: "One team from brief to installation, answerable for the final result." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We make brands"
        highlight="impossible to miss."
        copy="Brand It KE is a professional branding, signage, printing and graphic design company dedicated to client satisfaction — supporting businesses from startup to growth with strong visibility online and offline."
        image={aboutHero}
      />

      {/* Motion: alternating horizontal slide */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-14 lg:grid-cols-2">
          <SlideIn from="left">
            <MediaSlot
              slot="about.team"
              alt="The Brand It KE team"
              label="Team photo"
              className="aspect-[4/3] rounded-3xl"
            />
          </SlideIn>
          <SlideIn from="right" className="flex flex-col justify-center gap-6">
            <h2 className="text-3xl font-bold sm:text-4xl">Our story</h2>
            <p className="text-muted-foreground">
              We started with event branding and grew into a full visual-communication house. Today
              we design identities, fabricate signage, wrap fleets, print stationery and install
              billboards — with everything produced under one roof on Kirinyaga Road, Nairobi.
            </p>
            <p className="text-muted-foreground">
              That structure is deliberate: fewer hand-offs means faster turnaround, tighter colour
              control and one team accountable for how the final piece looks on your wall.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* Motion: staggered pop-in */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <FadeUp>
          <p className="text-xs tracking-[0.24em] text-cyan uppercase">What drives us</p>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Our values</h2>
        </FadeUp>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <StaggerItem key={v.title} variant="pop">
              <TiltCard intensity={6} className="h-full p-7">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Motion: parallax image + curtain text */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <MaskReveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Inside the workshop</h2>
            <p className="mt-5 text-muted-foreground">
              Large-format printers, cutting tables, metal and acrylic fabrication, an embroidery
              bay and a finishing station — plus an installation crew that travels nationwide.
            </p>
            <ul className="mt-7 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Digital & UV printing",
                "CNC and laser cutting",
                "Welding and metal fabrication",
                "Embroidery & heat transfer",
                "Vinyl application bay",
                "Rigging and site installation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                  {item}
                </li>
              ))}
            </ul>
          </MaskReveal>
          <Parallax distance={60}>
            <MediaSlot
              slot="about.workshop"
              alt="Brand It KE workshop"
              label="Workshop photo"
              className="aspect-[4/5] rounded-3xl"
            />
          </Parallax>
        </div>
      </section>

      {/* Motion: staggered rise */}
      <section className="mx-auto max-w-7xl px-5 py-16 pb-28">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.label} variant="rise">
              <div className="card-lift p-6">
                <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {SECTORS.map((sector) => (
              <span
                key={sector}
                className="tile-hover rounded-full px-4 py-2 text-xs text-muted-foreground"
              >
                {sector}
              </span>
            ))}
          </div>
        </FadeUp>
      </section>
    </>
  );
}
