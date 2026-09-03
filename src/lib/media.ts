/**
 * Central image registry.
 *
 * Every artwork / photo on the site is referenced through a slot key below.
 * To fill a slot: drop the file in `src/assets/`, import it here and replace
 * the `null` with the import. Nothing else in the app needs to change.
 *
 *   import eventHero from "@/assets/event-hero.jpg";
 *   ...
 *   "gallery.event1": eventHero,
 */
import signage from "@/assets/signage.jpg";
import vehicle from "@/assets/vehicle.jpg";
import promo from "@/assets/promo.jpg";
import print from "@/assets/print.jpg";
import heroEvent from "@/assets/hero-event.jpg";
import heroSignage from "@/assets/hero-signage.jpg";
import heroVehicle from "@/assets/hero-vehicle.jpg";
import workshopCrew from "@/assets/photos/workshop-crew.jpg";
import installCrew from "@/assets/photos/install-crew.jpg";
import nairobiMap from "@/assets/photos/nairobi-map.jpg";
import brandedPackaging from "@/assets/photos/branded-packaging.jpg";
import designImg from "@/assets/design.jpg";
import marketing from "@/assets/marketing.jpg";
import brief from "@/assets/brief.jpg";
import billboards from "@/assets/photos/billboards.jpg";
import buildingBranding from "@/assets/photos/building-branding.jpg";
import litLetters from "@/assets/photos/lit-letters.jpg";
import stationeryFlatlay from "@/assets/photos/stationery-flatlay.jpg";
import colorWheel from "@/assets/photos/color-wheel.jpg";
import brandingSheet from "@/assets/photos/branding-sheet.jpg";
import socialMedia from "@/assets/photos/social-media.jpg";
import promoTags from "@/assets/photos/promo-tags.jpg";
import studioDesigner from "@/assets/photos/studio-designer.jpg";
import clientSmile from "@/assets/photos/client-smile.jpg";
import expoStand from "@/assets/photos/expo-stand.jpg";

// New client photography (CDN assets)
import mLitShopfront from "@/assets/brand/sign-brandit-lit-shopfront.jpg.asset.json";
import mVan from "@/assets/brand/vehicle-brandit-van.jpg.asset.json";
import mBranditCards from "@/assets/brand/print-brandit-cards.jpg.asset.json";
import mInbetweenCards from "@/assets/brand/print-inbetween-cards.jpg.asset.json";
import mBannerSet from "@/assets/brand/marketing-banner-set.jpg.asset.json";
import mWearSet from "@/assets/brand/wear-brandit-set.jpg.asset.json";
import mWallReception from "@/assets/brand/wall-brandit-reception.jpg.asset.json";
import mAboostoMediaWall from "@/assets/brand/marketing-aboosto-mediawall.jpg.asset.json";
import mBillboard from "@/assets/brand/sign-brandit-billboard.jpg.asset.json";
import mAboostoWindows from "@/assets/brand/window-aboosto-storefront.jpg.asset.json";
import mWfTumblers from "@/assets/brand/promo-wf-tumblers.jpg.asset.json";

export type MediaKey =
  | "home.hero"
  | "home.showreel"
  | "about.team"
  | "about.workshop"
  | "services.signage"
  | "services.vehicle"
  | "services.promo"
  | "services.print"
  | "services.design"
  | "services.marketing"
  | "process.brief"
  | "process.design"
  | "process.produce"
  | "process.install"
  | "clients.case1"
  | "clients.case2"
  | "clients.case3"
  | "clients.case4"
  | "clients.case5"
  | "clients.case6"
  | "contact.map";

export const media: Record<MediaKey, string | null> = {
  "home.hero": mWallReception.url,
  "home.showreel": mAboostoMediaWall.url,
  "about.team": studioDesigner,
  "about.workshop": workshopCrew,
  "services.signage": mLitShopfront.url,
  "services.vehicle": mVan.url,
  "services.promo": mWfTumblers.url,
  "services.print": mInbetweenCards.url,
  "services.design": mBranditCards.url,
  "services.marketing": mBannerSet.url,
  "process.brief": brandingSheet,
  "process.design": designImg,
  "process.produce": workshopCrew,
  "process.install": installCrew,
  "clients.case1": mBillboard.url,
  "clients.case2": mVan.url,
  "clients.case3": clientSmile,
  "clients.case4": mAboostoWindows.url,
  "clients.case5": colorWheel,
  "clients.case6": mWearSet.url,
  "contact.map": nairobiMap,
};

// Retained for slots that still use the original photography.
void signage;
void promo;
void print;
void heroEvent;
void heroSignage;
void marketing;
void brief;

