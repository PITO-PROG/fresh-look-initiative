import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { ClientLogoWall } from "@/components/ClientLogoWall";
import { HeroSlider, type HeroSlide } from "@/components/HeroSlider";
import { MediaSlot } from "@/components/MediaSlot";
import { Prism3D } from "@/components/Prism3D";
import { Section } from "@/components/Section";
import { TiltCard } from "@/components/TiltCard";
import { WorkGallery } from "@/components/WorkGallery";
import {
  FadeUp,
  MaskReveal,
  SlideIn,
  SplitText,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import { MARQUEE, PROCESS, SERVICES, STATS } from "@/lib/site-data";
import { PRODUCT_GUIDE } from "@/lib/portfolio";

import heroVehicle from "@/assets/hero-vehicle.jpg";
import billboards from "@/assets/photos/billboards.jpg";
import litLetters from "@/assets/photos/lit-letters.jpg";
import stationery from "@/assets/photos/stationery-flatlay.jpg";

const HERO_SLIDES: HeroSlide[] = [
  {
    src: billboards,
    eyebrow: "Event branding",
    title: "Activations that fill the frame",
    copy: "Branded tents, backdrops, pull-ups and stage sets built for launch day.",
  },
  {
    src: litLetters,
    eyebrow: "Signage fabrication",
    title: "3D signs, lit and installed",
    copy: "Acrylic and channel letters fabricated in-house, mounted and wired on site.",
  },
  {
    src: heroVehicle,
    eyebrow: "Vehicle branding",
    title: "Fleets that advertise all day",
    copy: "Full and partial wraps in cast vinyl, applied to survive Nairobi roads.",
  },
  {
    src: stationery,
    eyebrow: "Print & promo",
    title: "Print with a proper finish",
    copy: "Corporate gifts, apparel, brochures and large-format print, on time.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brand It KE | Branding, Signage & Printing in Nairobi" },
      {
        name: "description",
        content:
          "Brand It KE is Nairobi's branding, signage and printing partner — event branding, 3D signs, vehicle wraps, promo items and premium print. Kirinyaga Road.",
      },
      { property: "og:title", content: "Brand It KE | Your Branding Experts" },
      {
        property: "og:description",
        content:
          "Event branding, signage fabrication, vehicle wraps, corporate gifts and print from Haji House, Kirinyaga Road, Nairobi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="grid-lines absolute inset-0 opacity-30" aria-hidden />
      <div className="halo absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs tracking-[0.22em] text-foreground uppercase backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            <span>Branding</span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            <span>Signage</span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            <span>Printing</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl leading-[0.95] font-bold sm:text-6xl lg:text-7xl"
          >
            Your Branding
            <br />
            <span className="text-gradient">Experts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Brand It KE turns events, vehicles, walls and shop fronts into brand
            experiences — designed, fabricated and installed in-house from Nairobi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-violet)] transition-transform duration-300 hover:scale-[1.04]"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-surface-2"
            >
              See our clients
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {STATS.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-gradient">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="perspective-scene relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotateY: 14, rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, rotateY: -6, rotateX: 3 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotateY: 0, rotateX: 0, scale: 1.015 }}
            style={{ transformStyle: "preserve-3d" }}
            className="depth-shadow h-[26rem] w-full rounded-3xl sm:h-[32rem] lg:h-[36rem]"
          >
            <HeroSlider slides={HERO_SLIDES} />
          </motion.div>

          <Prism3D
            size={116}
            className="absolute -bottom-14 -left-14 z-20 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}


function Marquee() {
  return (
    <div className="section-accent-cyan relative overflow-hidden py-5">
      <div className="marquee-track relative z-10 flex w-max gap-12 whitespace-nowrap">
        {[...MARQUEE, ...MARQUEE].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 font-display text-lg tracking-tight text-primary-foreground/90"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* Motion: horizontal slide-in from both sides */
function Intro() {
  return (
    <Section tone="accent-soft" innerClassName="py-28">
      <div className="grid gap-14 lg:grid-cols-2">
        <SlideIn from="left">
          <p className="text-xs tracking-[0.24em] text-cyan uppercase">Who we are</p>
          <h2 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-5xl">
            <SplitText text="Branding that shows up everywhere your brand does." />
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Brand It KE is a creative, results-driven branding, signage,
            printing and design company serving SMEs, corporates, schools, hospitals, malls and
            individuals across Kenya.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline"
          >
            More about us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </SlideIn>

        <SlideIn from="right">
          <MediaSlot
            slot="home.hero"
            alt="Brand It KE installation"
            label="Feature artwork"
            className="aspect-[4/3] rounded-3xl"
          />
        </SlideIn>
      </div>
    </Section>
  );
}

/* Motion: staggered flip-in cards */
function ServicesTeaser() {
  return (
    <Section tone="band" grid innerClassName="py-24">
      <FadeUp>
        <p className="text-xs tracking-[0.24em] text-cyan uppercase">What we deliver</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-[1.05] font-bold sm:text-5xl">
          Every surface, <span className="text-gradient">on brand</span>.
        </h2>
      </FadeUp>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <StaggerItem key={service.slug} variant="flip">
            <TiltCard className="h-full">
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group block h-full"
              >
              <div className="relative">
                <MediaSlot
                  slot={service.image}
                  alt={service.title}
                  className="h-48 w-full"
                  imgClassName="opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <span className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 font-display text-xs font-bold text-cyan backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-4 h-1 w-12 rounded-full bg-cyan" />
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
              </Link>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp delay={0.1}>
        <Link
          to="/services"
          className="tile-hover mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
        >
          Explore all services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </FadeUp>
    </Section>
  );
}

/* Motion: scroll-scrub zoom */
function StatsBand() {
  return (
    <Section tone="accent" innerClassName="py-16">
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
      />
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-6 backdrop-blur-sm"
          >
            <p className="font-display text-4xl font-bold text-primary-foreground">{s.value}</p>
            <p className="mt-2 text-sm text-primary-foreground/75">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


/* Real portfolio work, filterable */
function WorkShowcase() {
  return (
    <Section tone="mesh" innerClassName="py-24">
      <FadeUp>
        <p className="text-xs tracking-[0.24em] text-cyan uppercase">Our projects</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-[1.05] font-bold sm:text-5xl">
          Signs, wraps and print we've <span className="text-gradient">actually shipped</span>.
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Photographed on site across Nairobi and beyond — 3D signs, illuminated fascias, neon,
          vehicle wraps, wall and window branding, corporate wear, promo items and print.
        </p>
      </FadeUp>

      <div className="mt-12">
        <WorkGallery limitPerCategory={2} />
      </div>
    </Section>
  );
}

/* Products guide from the portfolio deck */
function ProductGuide() {
  return (
    <Section tone="accent" innerClassName="py-20">
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
      />
      <FadeUp>
        <p className="relative z-10 text-xs tracking-[0.24em] text-primary-foreground/80 uppercase">
          Products guide
        </p>
        <h2 className="relative z-10 mt-5 max-w-2xl text-4xl leading-[1.05] font-bold text-primary-foreground sm:text-5xl">
          One supplier for <span className="text-primary-foreground/70">every deliverable</span>.
        </h2>
      </FadeUp>

      <Stagger className="perspective-scene mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCT_GUIDE.map((group, i) => (
          <StaggerItem key={group.title} variant="flip" className="h-full">
            <motion.div
              whileHover={{ y: -8, rotateX: 4, rotateY: -3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 900 }}
              className="card-glass-dark group h-full p-7"
            >
              <span className="pointer-events-none absolute right-5 top-1 font-display text-7xl font-bold text-primary-foreground/10 transition-colors duration-500 group-hover:text-primary-foreground/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                  {group.items}
                </p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}


/* Motion: curtain wipe reveal */
function ProcessTeaser() {
  return (
    <Section tone="mesh" grid innerClassName="py-24">
      <MaskReveal>
        <p className="text-xs tracking-[0.24em] text-cyan uppercase">How we work</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-[1.05] font-bold sm:text-5xl">
          Minimal turnover time. <span className="text-gradient">Maximum finish.</span>
        </h2>
      </MaskReveal>

      <div className="perspective-scene mt-14 grid gap-5 md:grid-cols-4">
        {PROCESS.map((item, i) => (
          <MaskReveal key={item.step} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -10, rotateX: 7, rotateY: -5 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 900 }}
              className="group card-lift h-full p-7"
            >
              <span className="font-display text-5xl font-bold text-transparent transition-all duration-500 group-hover:text-gradient [-webkit-text-stroke:1px_color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                {item.step}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
            </motion.div>
          </MaskReveal>
        ))}
      </div>
    </Section>
  );
}

/* Client wall now lives in <ClientLogoWall /> — one consolidated animated band. */


/* Waves-style value band */
function PromiseBand() {
  return (
    <Section tone="accent" innerClassName="py-20">
      <div
        aria-hidden
        className="grid-lines pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
      />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <FadeUp>
          <p className="text-xs tracking-[0.24em] text-primary-foreground/80 uppercase">
            Why Brand It
          </p>
          <h2 className="mt-5 text-4xl leading-[1.05] font-bold text-primary-foreground sm:text-5xl">
            Designed, fabricated and installed by one team.
          </h2>
        </FadeUp>
        <Stagger className="grid gap-4 sm:grid-cols-3">
          {PROMISES.map((item) => (
            <StaggerItem key={item.title} variant="rise">
              <div className="h-full rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{item.copy}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

const PROMISES = [
  { title: "In-house production", copy: "Print, fabrication and finishing under one roof — no middlemen." },
  { title: "Installed on site", copy: "Our crews mount, wire and wrap anywhere in Kenya." },
  { title: "Deadline first", copy: "Event dates and launches drive our schedule, not the other way round." },
];

function CtaBand() {
  return (
    <Section tone="accent" innerClassName="py-20">
      <div
        aria-hidden
        className="grid-lines pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
      />
      <FadeUp>
        <div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Let's brand it.
            </h2>
            <p className="mt-3 max-w-md text-sm text-primary-foreground/80">
              Share your event, fleet, office or campaign — we'll come back with concepts,
              materials and a timeline.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform duration-300 hover:scale-[1.04]"
          >
            <Sparkles className="h-4 w-4" /> Get a quote
          </Link>
        </div>
      </FadeUp>
    </Section>
  );
}


function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ClientLogoWall />
      <Intro />
      <ServicesTeaser />
      <StatsBand />
      <WorkShowcase />
      <PromiseBand />
      <ProductGuide />
      <ProcessTeaser />
      <CtaBand />
    </>
  );
}
