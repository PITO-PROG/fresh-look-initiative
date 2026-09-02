import type { MediaKey } from "@/lib/media";

export type Service = {
  slug: string;
  title: string;
  copy: string;
  items: string[];
  image: MediaKey;
  /** Short label used in the header dropdown. */
  short: string;
  /** Long-form intro for the service detail page. */
  intro: string;
  /** Three pillars explaining how we deliver the service. */
  pillars: { title: string; copy: string }[];
  /** Typical briefs this service answers. */
  useCases: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "design",
    title: "Graphic Design",
    copy: "The thinking before the printing — identity systems built to survive every surface we brand.",
    items: [
      "Logo creation",
      "Online content creation",
      "E-fliers",
      "Company profiles",
      "Business proposals",
    ],
    image: "services.design",
    short: "Graphic Design",
    intro:
      "Design is the thinking before the printing. We build identities that hold up at billboard scale and at 40mm on a lanyard, then hand you a system — logo suite, colours, type, spacing rules and templates — that any future supplier can follow without diluting the brand.",
    pillars: [
      { title: "Strategy first", copy: "We interrogate the audience, the competition and where the brand actually appears before drawing." },
      { title: "Built for every surface", copy: "Logo variants, safe areas and colour rules tested on signage, vehicles, garments and screens." },
      { title: "Handover you own", copy: "Editable source files, print-ready exports and a guideline document, all yours." },
    ],
    useCases: [
      "New brand or full identity refresh",
      "Company profiles and business proposals",
      "E-fliers and social content systems",
      "Brand guidelines for multi-branch teams",
    ],
  },
  {
    slug: "signage",
    title: "Signage",
    copy: "Signage that reads clearly at 5 metres and at 500 — fabricated in-house and installed by our own crew.",
    items: [
      "3D & shop front signs",
      "Road & real estate signs",
      "Directory boards",
      "Caution & policy signs",
      "Illuminated & reflective signs",
      "Wall & brick numbers",
      "Banners",
    ],
    image: "services.signage",
    short: "Signage",
    intro:
      "Signage is the loudest thing your brand owns. We fabricate in our own Nairobi workshop — aluminium, acrylic, steel, ACP and LED — so tolerances, finishes and lead times stay under our control. Every job is surveyed, drawn to scale and mocked up on a photo of your building before a single sheet is cut.",
    pillars: [
      { title: "Surveyed & drawn", copy: "Site measurements, wind-load and power checks, then scaled drawings and a photo mock-up for sign-off." },
      { title: "Built in-house", copy: "CNC routing, welding, acrylic forming, spray finishing and LED wiring all happen under one roof." },
      { title: "Installed by our crew", copy: "Our own riggers handle heights, permits and after-hours installs, then hand over a tested, cleaned sign." },
    ],
    useCases: [
      "New shop front or branch fascia",
      "Road, site and real estate boards",
      "Estate, mall or hospital directory boards",
      "Illuminated, reflective and caution signage",
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    copy: "Fleets, offices, lifts and walls turned into moving and standing advertising surfaces.",
    items: [
      "Vehicle branding",
      "Window branding",
      "Lift branding",
      "Wall branding & murals",
      "Canvas wall hangings",
    ],
    image: "services.vehicle",
    short: "Branding",
    intro:
      "A branded fleet and a branded space are advertising you already own. We wrap vehicles with cast vinyl and print interior and exterior graphics that survive sun, dust and washing. Templates are cut to your exact make and model, and every wrap is heat-sealed and warrantied.",
    pillars: [
      { title: "Model-exact templates", copy: "Vehicle-specific panel templates so seams, door handles and curves fall where they should." },
      { title: "Premium materials", copy: "Cast vinyl, laminated and heat-formed — plus one-way vision film for glass you still want to see out of." },
      { title: "Fast turnaround", copy: "Most single vehicles are stripped, wrapped and back on the road within a day." },
    ],
    useCases: [
      "Full or partial fleet wraps",
      "Branch windows and one-way vision glass",
      "Lift, wall, floor and stairwell branding",
      "Reception murals and canvas wall hangings",
    ],
  },
  {
    slug: "stationery",
    title: "Printed Stationery",
    copy: "Everyday corporate print with premium finishing — matte, spot UV, foil and embossing.",
    items: [
      "Business cards",
      "Letterheads & envelopes",
      "Notebooks & notepads",
      "Receipt & delivery books",
      "Reports & portfolios",
      "Staff IDs & lanyards",
      "Eulogies & school magazines",
      "Complimentary slips",
      "Prescription cards",
    ],
    image: "services.print",
    short: "Printed Stationery",
    intro:
      "The paper your brand hands over should feel considered. We print corporate stationery on quality stock with premium finishing — matte and soft-touch lamination, spot UV, foil, emboss and die-cut — with colour matched across every reprint.",
    pillars: [
      { title: "Colour consistency", copy: "Locked colour profiles so your third reprint matches the first." },
      { title: "Premium finishing", copy: "Foil, spot UV, embossing, letterpress edges and die-cutting done in-house." },
      { title: "Short or long runs", copy: "Digital for small urgent batches, offset for volume — same artwork, same look." },
    ],
    useCases: [
      "Business cards, letterheads, envelopes",
      "Receipt, invoice and delivery books",
      "Staff IDs, lanyards and access badges",
      "Eulogies, school magazines and reports",
    ],
  },
  {
    slug: "marketing",
    title: "Corporate Marketing Materials",
    copy: "Everything that makes an activation, launch or exhibition look properly funded.",
    items: [
      "Fliers & posters",
      "Brochures & magazines",
      "Roll-up & media banners",
      "Tear-drop & telescopic banners",
      "Flags & buntings",
      "Wheel covers",
      "Carrier bags",
    ],
    image: "services.marketing",
    short: "Marketing Materials",
    intro:
      "Activations, launches and exhibitions are judged in the first five seconds. We produce the whole visual kit — banners, backdrops, flags, brochures and bags — delivered together, on time, and set up on site if you need us there.",
    pillars: [
      { title: "One kit, one delivery", copy: "Every item for the event scoped, produced and delivered as a single checked package." },
      { title: "Event-ready hardware", copy: "Roll-ups, teardrops, telescopic frames and media walls that pack down and travel." },
      { title: "On-site set-up", copy: "Our team can install, brand the stand and strike it down after the event." },
    ],
    useCases: [
      "Product launches and activations",
      "Trade shows and exhibition stands",
      "Fliers, posters, brochures and magazines",
      "Outdoor campaigns: flags, buntings, wheel covers",
    ],
  },
  {
    slug: "promo",
    title: "Promo Items & Giveaways",
    copy: "Gifts your clients and team actually keep using — branded with durable print and engraving.",
    items: [
      "Umbrellas & pens",
      "Mugs & keyholders",
      "Flashdisks",
      "Calendars & diaries",
      "Clocks",
    ],
    image: "services.promo",
    short: "Promo Items",
    intro:
      "Merchandise only works if people keep using it. We source stock we have tested, then brand it with the right method for the surface — screen print, pad print, laser or UV — so the logo outlives the campaign.",
    pillars: [
      { title: "Sampled first", copy: "You approve a physical branded sample before we run the full quantity." },
      { title: "Right print method", copy: "Pad print for curves, laser for metal, UV for hard plastics, screen for fabric." },
      { title: "Packed to distribute", copy: "Kitted, boxed and labelled per branch, delegate or team so handover is effortless." },
    ],
    useCases: [
      "Conference and delegate packs",
      "End-year client gifts and hampers",
      "Branded calendars and diaries",
      "Everyday giveaways: pens, mugs, umbrellas",
    ],
  },
  {
    slug: "wear",
    title: "Corporate Wear",
    copy: "Uniforms and team wear branded with embroidery and print that survives the wash.",
    items: [
      "T-shirts & polos",
      "Hoodies & caps",
      "Branded staff uniforms",
      "Official shirts & blouses",
      "Overalls",
    ],
    image: "services.promo",
    short: "Corporate Wear",
    intro:
      "Uniforms are the closest your brand gets to your customer. We supply and brand garments — polos, shirts, hoodies, caps, overalls — using embroidery, screen or heat transfer chosen for the fabric so the mark stays crisp after repeated washing.",
    pillars: [
      { title: "Fit and fabric first", copy: "Sized samples and fabric options before bulk, so staff actually wear what you buy." },
      { title: "Branding that lasts", copy: "Embroidery for knitwear and caps, screen for tees, heat transfer for technical fabrics." },
      { title: "Packed per team", copy: "Bagged and labelled by name, size and branch for effortless distribution." },
    ],
    useCases: [
      "Branded staff uniforms across branches",
      "Official shirts, blouses and corporate polos",
      "Site overalls and safety wear",
      "Team hoodies, caps and event tees",
    ],
  },
];


export type Client = { name: string; sector: string };

export const CLIENTS: Client[] = [
  { name: "Mercedes Centre Ltd", sector: "Automotive" },
  { name: "Autochek", sector: "Automotive" },
  { name: "KCB Bank", sector: "Banking & Finance" },
  { name: "Balozi Sacco", sector: "Banking & Finance" },
  { name: "Wells Fargo", sector: "Logistics & Security" },
  { name: "Fargo Courier", sector: "Logistics & Security" },
  { name: "GIZ", sector: "Development & NGO" },
  {
    name: "Institution of Engineering Technology of Kenya",
    sector: "Government & Associations",
  },
  {
    name: "Kenya Engineering Technology Registration Board",
    sector: "Government & Associations",
  },
  { name: "SevenSeas Technologies", sector: "Technology" },
  { name: "Mangu High School", sector: "Education" },
  { name: "Eastern Kenya Integrated University", sector: "Education" },
  { name: "Emory Hospital", sector: "Healthcare" },
  { name: "Bloom & Grow", sector: "Healthcare" },
  { name: "Kentwood Cabins & Camp", sector: "Hospitality" },
  { name: "Montana Resorts", sector: "Hospitality" },
  { name: "Xfour Lounge", sector: "Hospitality" },
  { name: "Kensington Tours", sector: "Hospitality" },
  { name: "Lintons", sector: "Retail & Beauty" },
  { name: "Aboosto", sector: "Retail & Beauty" },
  { name: "Inbetween Real Estate", sector: "Real Estate" },
  { name: "AmaKove", sector: "Media & Lifestyle" },
  { name: "Simply Orchestrated", sector: "Events" },
  { name: "Evolution", sector: "Events" },
];

export const SECTORS = [
  "Automotive",
  "Banking & Finance",
  "Logistics & Security",
  "Development & NGO",
  "Government & Associations",
  "Technology",
  "Education",
  "Healthcare",
  "Hospitality",
  "Retail & Beauty",
  "Real Estate",
  "Media & Lifestyle",
  "Events",
];


export const PROCESS = [
  {
    step: "01",
    title: "Brief & Brand Audit",
    copy: "We listen to your event, space or campaign goals, audit what your brand already has and flag what is missing.",
    detail: [
      "Site visit and measurements",
      "Existing artwork and asset review",
      "Budget and timeline framing",
    ],
    image: "process.brief" as MediaKey,
  },
  {
    step: "02",
    title: "Design & Mockups",
    copy: "Concepts, mockups and material options — visualised on your actual wall, vehicle or venue before anything is cut.",
    detail: ["Concept routes and revisions", "Material & finish samples", "Photo-real mockups"],
    image: "process.design" as MediaKey,
  },
  {
    step: "03",
    title: "Production",
    copy: "In-house fabrication and printing with obsessive quality control and minimal turnover time.",
    detail: ["Large-format & digital print", "Metal, acrylic and MDF fabrication", "QC before dispatch"],
    image: "process.produce" as MediaKey,
  },
  {
    step: "04",
    title: "Install & Handover",
    copy: "Our team mounts, wraps and hands over on site, on schedule, anywhere in Kenya.",
    detail: ["Rigging and safe installation", "Site clean-up", "Care and maintenance guidance"],
    image: "process.install" as MediaKey,
  },
];

export const STATS = [
  { value: "48h", label: "Typical turnaround" },
  { value: "15+", label: "Sectors served" },
  { value: "100%", label: "In-house production" },
  { value: "47", label: "Counties we deliver to" },
];

export const MARQUEE = [
  "Event Branding",
  "3D Signage",
  "Vehicle Wraps",
  "Large Format Print",
  "Corporate Gifts",
  "Brand Identity",
  "Billboards",
  "Wall Murals",
];
