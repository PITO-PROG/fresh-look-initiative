import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { MediaSlot } from "@/components/MediaSlot";
import { PageHero } from "@/components/PageHero";
import { ServiceGallery } from "@/components/ServiceGallery";
import { FadeUp, MaskReveal, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import { media } from "@/lib/media";
import { getWorksForService } from "@/lib/portfolio";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | Brand It KE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} in Nairobi | Brand It KE`;
    return {
      meta: [
        { title },
        { name: "description", content: service.copy },
        { property: "og:title", content: title },
        { property: "og:description", content: service.copy },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-40 pb-28">
      <h1 className="text-4xl font-bold">Service not found</h1>
      <p className="mt-4 text-muted-foreground">
        That service page doesn't exist. Browse everything we produce instead.
      </p>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        All services <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const heroImage = media[service.image];
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      {heroImage ? (
        <PageHero
          eyebrow="Service"
          title={service.title}
          copy={service.copy}
          image={heroImage}
        />
      ) : (
        <PageHero eyebrow="Service" title={service.title} copy={service.copy} />
      )}

      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <SlideIn from="left">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">What this covers</h2>
            <p className="mt-5 text-muted-foreground">{service.intro}</p>

            <Stagger className="mt-9 grid gap-2.5 sm:grid-cols-2" gap={0.05}>
              {service.items.map((item) => (
                <StaggerItem key={item} variant="rise">
                  <span className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </SlideIn>

          <MaskReveal>
            <MediaSlot
              slot={service.image}
              alt={service.title}
              className="aspect-[4/5] rounded-3xl"
            />
          </MaskReveal>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <FadeUp>
          <h2 className="text-3xl font-bold sm:text-4xl">How we deliver it</h2>
        </FadeUp>
        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {service.pillars.map((pillar, i) => (
            <StaggerItem key={pillar.title} variant="rise">
              <div className="halo h-full rounded-3xl border border-border p-7">
                <p className="font-display text-sm text-cyan">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <FadeUp>
          <h2 className="text-3xl font-bold sm:text-4xl">Typical briefs</h2>
        </FadeUp>
        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
          {service.useCases.map((useCase) => (
            <StaggerItem key={useCase} variant="rise">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface-2/40 px-5 py-4 text-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                {useCase}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <FadeUp>
          <div className="halo section-mesh flex flex-col items-start gap-5 rounded-3xl border border-border p-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-muted-foreground">
              Have a {service.short.toLowerCase()} brief? Send the details and we'll quote it.
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

      <section className="mx-auto max-w-7xl px-5 pb-28">
        <FadeUp>
          <p className="text-xs tracking-[0.24em] text-cyan uppercase">Other services</p>
        </FadeUp>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <StaggerItem key={other.slug} variant="rise">
              <Link
                to="/services/$slug"
                params={{ slug: other.slug }}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border p-6 transition-colors hover:border-cyan"
              >
                <h3 className="font-display text-lg font-semibold">{other.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-cyan">
                  Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
