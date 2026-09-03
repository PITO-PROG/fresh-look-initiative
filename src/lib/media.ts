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
import mLitShopfront from "@/assets/brand/sign-brandit-lit-shopfront.jpg";
import mVan from "@/assets/brand/vehicle-brandit-van.jpg";
import mBranditCards from "@/assets/brand/print-brandit-cards.jpg";
import mInbetweenCards from "@/assets/brand/print-inbetween-cards.jpg";
import mBannerSet from "@/assets/brand/marketing-banner-set.jpg";
import mWearSet from "@/assets/brand/wear-brandit-set.jpg";
import mWallReception from "@/assets/brand/wall-brandit-reception.jpg";
import mAboostoMediaWall from "@/assets/brand/marketing-aboosto-mediawall.jpg";
import mBillboard from "@/assets/brand/sign-brandit-billboard.jpg";
import mAboostoWindows from "@/assets/brand/window-aboosto-storefront.jpg";
import mWfTumblers from "@/assets/brand/promo-wf-tumblers.jpg";
import mWfTent from "@/assets/brand/marketing-wf-tent.jpg";
import mWfUmbrellas from "@/assets/brand/promo-wf-umbrellas.jpg";

import m3dFascia from "@/assets/brand/sign-brandit-3d-fascia.jpg";
import mInbetweenCardsProc from "@/assets/brand/print-inbetween-cards.jpg";
import mBloomBuilding from "@/assets/brand/sign-bloomgrow-building.jpg";

export type MediaKey =
  | "home.hero"
  | "home.showreel"
  | "about.team"
  | "about.workshop"
  | "services.signage"
  | "services.vehicle"
  | "services.promo"
  | "services.wear"
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
  "home.hero": mWallReception,
  "home.showreel": mAboostoMediaWall,
  "about.team": mWearSet,
  "about.workshop": m3dFascia,
  "services.signage": mLitShopfront,
  "services.vehicle": mVan,
  "services.promo": mWfTumblers,
  "services.wear": mWearSet,
  "services.print": mInbetweenCards,
  "services.design": mBranditCards,
  "services.marketing": mBannerSet,
  "process.brief": mBranditCards,
  "process.design": mInbetweenCardsProc,
  "process.produce": mLitShopfront,
  "process.install": mBloomBuilding,
  "clients.case1": mBillboard,
  "clients.case2": mVan,
  "clients.case3": mWfTent,
  "clients.case4": mAboostoWindows,
  "clients.case5": mWfUmbrellas,
  "clients.case6": mWearSet,
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

