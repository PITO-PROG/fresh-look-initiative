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
  "home.hero": brandedPackaging,
  "home.showreel": socialMedia,
  "about.team": studioDesigner,
  "about.workshop": workshopCrew,
  "services.signage": litLetters,
  "services.vehicle": vehicle,
  "services.promo": promoTags,
  "services.print": stationeryFlatlay,
  "services.design": colorWheel,
  "services.marketing": expoStand,
  "process.brief": brandingSheet,
  "process.design": designImg,
  "process.produce": workshopCrew,
  "process.install": installCrew,
  "clients.case1": billboards,
  "clients.case2": heroVehicle,
  "clients.case3": clientSmile,
  "clients.case4": buildingBranding,
  "clients.case5": colorWheel,
  "clients.case6": brandedPackaging,
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

