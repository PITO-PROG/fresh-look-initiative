import type { MediaKey } from "@/lib/media";

export type Service = {
  slug: string;
  title: string;
  copy: string;
  items: string[];
  image: MediaKey;
};

export const SERVICES: Service[] = [
  {
    slug: "signage",
    title: "Signage & Fabrication",
    copy: "Signage that reads clearly at 5 metres and at 500 — fabricated in-house and installed by our own crew.",
    items: [
      "3D built-up letters & logos",
      "Shop fronts and fascia signs",
      "Pylon, monolith & directory boards",
      "Illuminated and reflective signage",
      "Mall, block and door name plates",
      "Billboard construction & installation",
    ],
    image: "services.signage",
  },
  {
    slug: "vehicle",
    title: "Vehicle & Space Branding",
    copy: "Fleets, offices, lifts and walls turned into moving and standing advertising surfaces.",
    items: [
      "Full and partial vehicle wraps",
      "Window and one-way vision graphics",
      "Lift, wall and floor branding",
      "Hand-painted and printed murals",
      "Canvas wall hangings",
      "Reception and boardroom branding",
    ],
    image: "services.vehicle",
  },
  {
    slug: "promo",
    title: "Promo Items & Corporate Wear",
    copy: "Gifts and uniforms your team actually uses — branded with durable print and embroidery.",
    items: [
      "Umbrellas, mugs, pens, keyholders",
      "Flash disks, diaries, notebooks",
      "T-shirts, polos, hoodies, caps",
      "Uniforms, aprons and overalls",
      "Conference and delegate packs",
      "Festive and end-year hampers",
    ],
    image: "services.promo",
  },
  {
    slug: "print",
    title: "Print & Stationery",
    copy: "Everyday corporate print with premium finishing — matte, spot UV, foil and embossing.",
    items: [
      "Business cards & letterheads",
      "Envelopes and company folders",
      "Receipt and delivery books",
      "Notebooks and portfolios",
      "Staff IDs, lanyards and badges",
      "Certificates and presentation packs",
    ],
    image: "services.print",
  },
  {
    slug: "design",
    title: "Graphic Design",
    copy: "The thinking before the printing — identity systems built to survive every surface we brand.",
    items: [
      "Logo design and refresh",
      "Full brand identity systems",
      "Company profiles & proposals",
      "E-fliers and online content",
      "Social media templates",
      "Brand guideline documents",
    ],
    image: "services.design",
  },
  {
    slug: "marketing",
    title: "Corporate Marketing Ware",
    copy: "Everything that makes an activation, launch or exhibition look properly funded.",
    items: [
      "Roll-up, teardrop & telescopic banners",
      "Media walls and backdrops",
      "Fliers, posters and brochures",
      "Flags, buntings and gazebos",
      "Exhibition and stand branding",
      "Magazines and newsletters",
    ],
    image: "services.marketing",
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
