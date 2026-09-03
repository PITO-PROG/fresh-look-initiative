/**
 * Real project work, taken from the Brand It KE project portfolio.
 * Each entry is a job we designed, fabricated and installed.
 */
import bannerBeastmode from "@/assets/portfolio/banner-beastmode.jpg";
import bannerPlastic from "@/assets/portfolio/banner-plastic.jpg";
import bannerRollup from "@/assets/portfolio/banner-rollup.jpg";
import bannerTeardrop from "@/assets/portfolio/banner-teardrop.jpg";
import designIdentity from "@/assets/portfolio/design-identity.jpg";
import directFuneral from "@/assets/portfolio/direct-funeral.jpg";
import directParking from "@/assets/portfolio/direct-parking.jpg";
import interiorMarkie from "@/assets/portfolio/interior-markie.jpg";
import interiorOffice from "@/assets/portfolio/interior-office.jpg";
import litHook from "@/assets/portfolio/lit-hook.jpg";
import litInstall from "@/assets/portfolio/lit-install.jpg";
import litPharmacy from "@/assets/portfolio/lit-pharmacy.jpg";
import litThabiso from "@/assets/portfolio/lit-thabiso.jpg";
import litUsafi from "@/assets/portfolio/lit-usafi.jpg";
import neonAiplace from "@/assets/portfolio/neon-aiplace.jpg";
import neonCallivan from "@/assets/portfolio/neon-callivan.jpg";
import neonKifahari from "@/assets/portfolio/neon-kifahari.jpg";
import printBrochures from "@/assets/portfolio/print-brochures.jpg";
import printCards from "@/assets/portfolio/print-cards.jpg";
import printLetterheads from "@/assets/portfolio/print-letterheads.jpg";
import printMagazines from "@/assets/portfolio/print-magazines.jpg";
import printMenu from "@/assets/portfolio/print-menu.jpg";
import promoBands from "@/assets/portfolio/promo-bands.jpg";
import promoBottles from "@/assets/portfolio/promo-bottles.jpg";
import promoMug from "@/assets/portfolio/promo-mug.jpg";
import promoTumblers from "@/assets/portfolio/promo-tumblers.jpg";
import promoUmbrellas from "@/assets/portfolio/promo-umbrellas.jpg";
import roadAcacia from "@/assets/portfolio/road-acacia.jpg";
import roadEspresso from "@/assets/portfolio/road-espresso.jpg";
import signDailyDelights from "@/assets/portfolio/sign-dailydelights.jpg";
import signFadeFactory from "@/assets/portfolio/sign-fadefactory.jpg";
import signSamples from "@/assets/portfolio/sign-samples.jpg";
import vehicleIflux from "@/assets/portfolio/vehicle-iflux.jpg";
import vehicleProteam from "@/assets/portfolio/vehicle-proteam.jpg";
import vehicleUsafi from "@/assets/portfolio/vehicle-usafi.jpg";
import wallImpossible from "@/assets/portfolio/wall-impossible.jpg";
import wallThinkbox from "@/assets/portfolio/wall-thinkbox.jpg";
import wallVaal from "@/assets/portfolio/wall-vaal.jpg";
import wearHoodieGrey from "@/assets/portfolio/wear-hoodie-grey.jpg";
import wearHoodieRed from "@/assets/portfolio/wear-hoodie-red.jpg";
import wearPolo from "@/assets/portfolio/wear-polo.jpg";
import wearShirts from "@/assets/portfolio/wear-shirts.jpg";
import wearSweatshirt from "@/assets/portfolio/wear-sweatshirt.jpg";
import wearTeam from "@/assets/portfolio/wear-team.jpg";
import wearTshirt from "@/assets/portfolio/wear-tshirt.jpg";
import windowBottles from "@/assets/portfolio/window-bottles.jpg";
import windowDoors from "@/assets/portfolio/window-doors.jpg";

// New client photography (CDN assets)
import aLitShopfront from "@/assets/brand/sign-brandit-lit-shopfront.jpg";
import a3dFascia from "@/assets/brand/sign-brandit-3d-fascia.jpg";
import aVan from "@/assets/brand/vehicle-brandit-van.jpg";
import aReceptionLogo from "@/assets/brand/lit-brandit-reception-logo.jpg";
import aInbetweenCards from "@/assets/brand/print-inbetween-cards.jpg";
import aBranditCards from "@/assets/brand/print-brandit-cards.jpg";
import aPharmacyShopfront from "@/assets/brand/sign-phramirit-shopfront.jpg";
import aPharmacyWindows from "@/assets/brand/window-phramirit-storefront.jpg";
import aIetkBanner from "@/assets/brand/banner-ietk-street.jpg";
import aBloomBuilding from "@/assets/brand/sign-bloomgrow-building.jpg";
import aBloomRoad from "@/assets/brand/road-bloomgrow-direction.jpg";
import aInbetweenRoad from "@/assets/brand/road-inbetween-estate.jpg";
import aWfUmbrellas from "@/assets/brand/promo-wf-umbrellas.jpg";
import aWfPowerbank from "@/assets/brand/promo-wf-powerbank.jpg";
import aWfMug from "@/assets/brand/promo-wf-mug.jpg";
import aWfCarrierBag from "@/assets/brand/marketing-wf-carrierbag.jpg";
import aWfNotebooks from "@/assets/brand/print-wf-notebooks.jpg";
import aWfTent from "@/assets/brand/marketing-wf-tent.jpg";
import aWfKeyholders from "@/assets/brand/promo-wf-keyholders.jpg";
import aWfBottles from "@/assets/brand/promo-wf-bottles.jpg";
import aWfTumblers from "@/assets/brand/promo-wf-tumblers.jpg";
import aWfDiary from "@/assets/brand/promo-wf-diary.jpg";
import aAboostoWindows from "@/assets/brand/window-aboosto-storefront.jpg";
import aWallPurple from "@/assets/brand/wall-brandit-purple.jpg";
import aAboostoLift from "@/assets/brand/lift-aboosto-elevator.jpg";
import aWallReception from "@/assets/brand/wall-brandit-reception.jpg";
import aBillboard from "@/assets/brand/sign-brandit-billboard.jpg";
import aWearSet from "@/assets/brand/wear-brandit-set.jpg";
import aBannerSet from "@/assets/brand/marketing-banner-set.jpg";
import aAboostoMediaWall from "@/assets/brand/marketing-aboosto-mediawall.jpg";

export const WORK_CATEGORIES = [
  "3D & Shopfront Signs",
  "Illuminated & Neon",
  "Vehicle Branding",
  "Wall & Window",
  "Roadside & Wayfinding",
  "Corporate Wear",
  "Banners & Activation",
  "Promo Items",
  "Print & Stationery",
] as const;

export type WorkCategory = (typeof WORK_CATEGORIES)[number];

export type WorkItem = {
  src: string;
  title: string;
  client: string;
  category: WorkCategory;
};

/**
 * Map each service detail page to the portfolio categories that should
 * appear in its gallery.
 */
export const SERVICE_GALLERY_CATEGORIES: Record<string, WorkCategory[]> = {
  design: ["Print & Stationery"],
  signage: ["3D & Shopfront Signs", "Illuminated & Neon", "Roadside & Wayfinding"],
  branding: ["Vehicle Branding", "Wall & Window"],
  stationery: ["Print & Stationery"],
  marketing: ["Banners & Activation"],
  promo: ["Promo Items"],
  wear: ["Corporate Wear"],
};


export function getWorksForService(slug: string): WorkItem[] {
  const categories = SERVICE_GALLERY_CATEGORIES[slug];
  if (!categories) return [];
  return WORK.filter((w) => categories.includes(w.category));
}

export const WORK: WorkItem[] = [
  // 3D & shopfront
  { src: signFadeFactory, title: "Shopfront fascia & 3D letters", client: "Fade Factory", category: "3D & Shopfront Signs" },
  { src: signDailyDelights, title: "Window & fascia lettering", client: "Daily Delights", category: "3D & Shopfront Signs" },
  { src: signSamples, title: "Signage & directory board suite", client: "The Sign Shop / Dentistry", category: "3D & Shopfront Signs" },
  { src: interiorMarkie, title: "Reception & office name plates", client: "Markie Investments", category: "3D & Shopfront Signs" },

  // Illuminated & neon
  { src: litThabiso, title: "Illuminated bar & restaurant sign", client: "Thabiso Lounge", category: "Illuminated & Neon" },
  { src: litHook, title: "Backlit lakefront signage", client: "The Hook Lakefront", category: "Illuminated & Neon" },
  { src: litPharmacy, title: "24-hour illuminated fascia", client: "Lifemed Pharmacy", category: "Illuminated & Neon" },
  { src: litUsafi, title: "Lit shopfront row", client: "Usafi Laundry & Drycleaning", category: "Illuminated & Neon" },
  { src: litInstall, title: "On-site channel letter install", client: "Barber Shop, Nairobi", category: "Illuminated & Neon" },
  { src: neonCallivan, title: "Custom neon studio sign", client: "Callivan Studios", category: "Illuminated & Neon" },
  { src: neonAiplace, title: "Neon script feature wall", client: "AI Place", category: "Illuminated & Neon" },
  { src: neonKifahari, title: "Neon interior signature", client: "Kifahari", category: "Illuminated & Neon" },

  // Vehicle
  { src: vehicleIflux, title: "Full van wrap in cast vinyl", client: "iFlux LED Lighting", category: "Vehicle Branding" },
  { src: vehicleProteam, title: "Fleet branding programme", client: "Proteam Movers Kenya", category: "Vehicle Branding" },
  { src: vehicleUsafi, title: "Delivery unit branding", client: "Usafi Laundromat", category: "Vehicle Branding" },

  // Wall & window
  { src: wallVaal, title: "Office wall branding & values wall", client: "VAAL Real Estate", category: "Wall & Window" },
  { src: wallThinkbox, title: "Cut-vinyl wall graphics", client: "Think Outside The Box mural", category: "Wall & Window" },
  { src: wallImpossible, title: "Hand-finished office mural", client: "Corporate office, Nairobi", category: "Wall & Window" },
  { src: interiorOffice, title: "Interior branding & wall panels", client: "Corporate office, Nairobi", category: "Wall & Window" },
  { src: windowDoors, title: "Frosted glass door branding", client: "GIZ offices", category: "Wall & Window" },
  { src: windowBottles, title: "Retail window graphics", client: "Beverage retailer", category: "Wall & Window" },

  // Roadside & wayfinding
  { src: roadAcacia, title: "School entrance monument sign", client: "Acacia Park School", category: "Roadside & Wayfinding" },
  { src: roadEspresso, title: "Pylon & roadside stack sign", client: "Espresso Salon & Spa", category: "Roadside & Wayfinding" },
  { src: directParking, title: "Event directional sign set", client: "Parking & facilities signage", category: "Roadside & Wayfinding" },
  { src: directFuneral, title: "Custom event signage", client: "Warunge family service", category: "Roadside & Wayfinding" },

  // Corporate wear
  { src: wearTeam, title: "Branded event team uniforms", client: "Activation crew", category: "Corporate Wear" },
  { src: wearTshirt, title: "Screen-printed t-shirts", client: "Fade Factory", category: "Corporate Wear" },
  { src: wearPolo, title: "Embroidered staff polos", client: "Mercedes Center Ltd", category: "Corporate Wear" },
  { src: wearHoodieGrey, title: "Embroidered festival hoodies", client: "Lokole Festival", category: "Corporate Wear" },
  { src: wearHoodieRed, title: "Colour-matched hoodie run", client: "Lokole Festival", category: "Corporate Wear" },
  { src: wearSweatshirt, title: "Custom sweatshirt print", client: "Brand It merch", category: "Corporate Wear" },
  { src: wearShirts, title: "Corporate shirts & blouses", client: "Uniform programme", category: "Corporate Wear" },

  // Banners & activation
  { src: bannerTeardrop, title: "Teardrop flag set", client: "BeastMode Energy", category: "Banners & Activation" },
  { src: bannerBeastmode, title: "Roll-up banner", client: "BeastMode Energy", category: "Banners & Activation" },
  { src: bannerPlastic, title: "Exhibition banner series", client: "Plastic pollution campaign", category: "Banners & Activation" },
  { src: bannerRollup, title: "Memorial roll-up banner", client: "Private commission", category: "Banners & Activation" },

  // Promo
  { src: promoBottles, title: "Personalised water bottles", client: "Corporate gifting", category: "Promo Items" },
  { src: promoMug, title: "Branded mug & spoon sets", client: "MOGA Association", category: "Promo Items" },
  { src: promoUmbrellas, title: "Branded golf umbrellas", client: "Montana Resorts", category: "Promo Items" },
  { src: promoTumblers, title: "Ombre name tumblers", client: "Corporate gifting", category: "Promo Items" },
  { src: promoBands, title: "Silicone event wristbands", client: "Studio-ix / Peluk", category: "Promo Items" },

  // Print
  { src: printMagazines, title: "School magazine production", client: "Mang'u High School", category: "Print & Stationery" },
  { src: printLetterheads, title: "Letterheads, envelopes & folders", client: "Corporate stationery", category: "Print & Stationery" },
  { src: printCards, title: "Check-out cards & collateral", client: "Kentwood Cabins & Camp", category: "Print & Stationery" },
  { src: printMenu, title: "Café menu design & print", client: "Restaurant client", category: "Print & Stationery" },
  { src: printBrochures, title: "Brochures, diaries & profiles", client: "Corporate print", category: "Print & Stationery" },
  { src: designIdentity, title: "Full identity roll-out kit", client: "Brand identity system", category: "Print & Stationery" },
  // Latest client work
  { src: a3dFascia, title: "3D shopfront fascia sign", client: "Brand It Solutions", category: "3D & Shopfront Signs" },
  { src: aPharmacyShopfront, title: "Shopfront fascia & window graphics", client: "Phramirit Pharmacy", category: "3D & Shopfront Signs" },
  { src: aBloomBuilding, title: "Building-mounted signboard", client: "Bloom & Grow Therapy", category: "3D & Shopfront Signs" },
  { src: aLitShopfront, title: "Illuminated shopfront letters", client: "Brand It Solutions", category: "Illuminated & Neon" },
  { src: aReceptionLogo, title: "Backlit reception logo wall", client: "Brand It Solutions", category: "Illuminated & Neon" },
  { src: aBillboard, title: "Rooftop billboard build", client: "Brand It Solutions", category: "Roadside & Wayfinding" },
  { src: aBloomRoad, title: "Roadside directional sign", client: "Bloom & Grow Therapy", category: "Roadside & Wayfinding" },
  { src: aInbetweenRoad, title: "Real estate site board", client: "Inbetween Real Estate", category: "Roadside & Wayfinding" },
  { src: aVan, title: "Full van wrap, all angles", client: "Brand It Solutions", category: "Vehicle Branding" },
  { src: aAboostoWindows, title: "Retail window branding", client: "Aboosto", category: "Wall & Window" },
  { src: aPharmacyWindows, title: "Storefront window graphics", client: "Phramirit Pharmacy", category: "Wall & Window" },
  { src: aWallPurple, title: "Corridor wall branding", client: "Brand It Solutions", category: "Wall & Window" },
  { src: aWallReception, title: "Reception wall branding", client: "Brand It Solutions", category: "Wall & Window" },
  { src: aAboostoLift, title: "Lift door branding", client: "Aboosto", category: "Wall & Window" },
  { src: aWearSet, title: "Polos, hoodies, caps & bags", client: "Brand It Solutions", category: "Corporate Wear" },
  { src: aBannerSet, title: "Media wall, roll-up, flag & teardrop", client: "Brand It Solutions", category: "Banners & Activation" },
  { src: aAboostoMediaWall, title: "Pop-up media walls", client: "Aboosto", category: "Banners & Activation" },
  { src: aIetkBanner, title: "Street procession banner", client: "IET-K", category: "Banners & Activation" },
  { src: aWfTent, title: "Branded gazebo & media wall", client: "Wells Fargo", category: "Banners & Activation" },
  { src: aWfCarrierBag, title: "Branded carrier bags", client: "Wells Fargo", category: "Banners & Activation" },
  { src: aWfUmbrellas, title: "Branded umbrellas", client: "Wells Fargo", category: "Promo Items" },
  { src: aWfMug, title: "Branded mugs", client: "Wells Fargo", category: "Promo Items" },
  { src: aWfBottles, title: "Branded water bottles", client: "Wells Fargo", category: "Promo Items" },
  { src: aWfTumblers, title: "Tumbler & flask range", client: "Wells Fargo", category: "Promo Items" },
  { src: aWfKeyholders, title: "Metal keyholders", client: "Wells Fargo", category: "Promo Items" },
  { src: aWfPowerbank, title: "Branded power banks", client: "Wells Fargo", category: "Promo Items" },
  { src: aWfDiary, title: "Executive diary & pen set", client: "Wells Fargo", category: "Promo Items" },
  { src: aWfNotebooks, title: "Hardcover branded notebooks", client: "Wells Fargo", category: "Print & Stationery" },
  { src: aInbetweenCards, title: "Business card design & print", client: "Inbetween Real Estate", category: "Print & Stationery" },
  { src: aBranditCards, title: "Business card identity", client: "Brand It Solutions", category: "Print & Stationery" },
];

/** Product guide, straight from the portfolio deck. */
export const PRODUCT_GUIDE = [
  {
    title: "Signage",
    items:
      "Banners, 3D signs, shop front signs, road signs, mall names, block names, directory boards, caution signs, real estate signs, pylons, illuminated & reflective signs.",
  },
  {
    title: "Branding",
    items:
      "Vehicle branding, window branding, lift branding, wall branding and murals, canvas wall hangings.",
  },
  {
    title: "Promo items / giveaways",
    items:
      "Umbrellas, pens, mugs, keyholders, flash disks, calendars, diaries, clocks, t-shirts, polos, hoodies, staff uniforms, official shirts & blouses, overalls, caps.",
  },
  {
    title: "Print",
    items:
      "Business cards, complimentary slips, delivery notes, letterheads, envelopes, notebooks & notepads, receipt books, reports, portfolios, staff IDs, lanyards.",
  },
  {
    title: "Corporate marketing materials",
    items:
      "Fliers, posters, brochures, roll-up banners, media banners, tear drop banners, telescopic banners, flags, wheel covers, carrier bags, buntings, magazines.",
  },
  {
    title: "Graphic design",
    items:
      "Logo creation, online content creation, e-fliers, company profiles, business proposals, brand guidelines.",
  },
];
