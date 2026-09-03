import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Sparkles } from "lucide-react";

import { MediaSlot } from "@/components/MediaSlot";
import { PageHero } from "@/components/PageHero";
import { FadeUp, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import { SERVICES } from "@/lib/site-data";

import contactHeroAsset from "@/assets/brand/sign-brandit-3d-fascia.jpg.asset.json";
const contactHero = contactHeroAsset.url;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Brand It KE | Kirinyaga Road, Nairobi" },
      {
        name: "description",
        content:
          "Talk to Brand It KE — call 0720 522 588 or send your brief via WhatsApp. Haji House, Kirinyaga Road, Nairobi.",
      },
      { property: "og:title", content: "Contact Brand It KE" },
      {
        property: "og:description",
        content: "Call 0720 522 588 or WhatsApp your branding brief. Haji House, Kirinyaga Road, Nairobi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's brand"
        highlight="it."
        copy="Tell us about your event, fleet, office or campaign. We'll come back with concepts, materials and a timeline."
        image={contactHero}
      />

      {/* Motion: two-sided slide-in with focus glow form */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <SlideIn from="left">
            <div className="space-y-4 text-sm">
              <a
                href="tel:+254720522588"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-cyan"
              >
                <Phone className="h-4 w-4 text-cyan" /> 0720 522 588
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-cyan" /> Haji House, Kirinyaga Road, Nairobi
              </p>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Sparkles className="h-4 w-4 text-cyan" /> BranditKe on Facebook, Instagram & TikTok
              </p>
              <p className="text-muted-foreground">www.branditKe.co.ke</p>
            </div>

            <div className="card-lift mt-8 p-6 text-sm">
              <p className="font-display text-base font-semibold">Working hours</p>
              <p className="mt-2 text-muted-foreground">Mon – Fri · 8:00am – 6:00pm</p>
              <p className="text-muted-foreground">Saturday · 9:00am – 3:00pm</p>
              <p className="mt-3 text-muted-foreground">
                Event installations run outside these hours on request.
              </p>
            </div>

            <MediaSlot
              slot="contact.map"
              alt="Map to Haji House, Kirinyaga Road"
              label="Map / location artwork"
              className="mt-8 aspect-[16/9] rounded-2xl"
            />
          </SlideIn>

          <SlideIn from="right">
            <form
              className="card-lift space-y-4 rounded-3xl p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Hi Brand It, I'm ${data.get("name")} from ${
                  data.get("company") || "—"
                }. Service: ${data.get("service")}. ${data.get("message")}`;
                window.location.href = `https://wa.me/254720522588?text=${encodeURIComponent(body)}`;
              }}
            >
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-input bg-background/60 px-5 py-3.5 text-sm outline-none transition-shadow duration-300 placeholder:text-muted-foreground focus:glow-ring"
              />
              <input
                name="company"
                placeholder="Company"
                className="w-full rounded-xl border border-input bg-background/60 px-5 py-3.5 text-sm outline-none transition-shadow duration-300 placeholder:text-muted-foreground focus:glow-ring"
              />
              <select
                name="service"
                className="w-full rounded-xl border border-input bg-background/60 px-5 py-3.5 text-sm outline-none transition-shadow duration-300 focus:glow-ring"
                defaultValue={SERVICES[0]?.title}
              >
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="What do you need branded?"
                className="w-full resize-none rounded-xl border border-input bg-background/60 px-5 py-3.5 text-sm outline-none transition-shadow duration-300 placeholder:text-muted-foreground focus:glow-ring"
              />
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                Send via WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </SlideIn>
        </div>
      </section>

      {/* Motion: staggered FAQ pop */}
      <section className="section-band relative mx-auto w-full px-5 py-20 pb-28">
        <div className="mx-auto max-w-7xl">
        <FadeUp>
          <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked</h2>
        </FadeUp>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2" gap={0.1}>
          {[
            { q: "How fast can you deliver?", a: "Most print and promo jobs turn around in 48 hours. Fabricated signage depends on size and finish — we confirm dates at quotation." },
            { q: "Do you install outside Nairobi?", a: "Yes. Our crew travels countrywide for signage, billboards and event installations." },
            { q: "Can you work from our brand guidelines?", a: "Absolutely — send the guidelines and vector logo files and we'll match colours and spacing exactly." },
            { q: "Do you handle small orders?", a: "Yes. From ten branded mugs to a full mall signage suite, the same team handles it." },
          ].map((f) => (
            <StaggerItem key={f.q} variant="pop">
              <div className="card-lift h-full p-7">
                <p className="font-display text-base font-semibold">{f.q}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        </div>
      </section>
    </>
  );
}
