/**
 * Client logo registry.
 *
 * `tone: "dark"` means the artwork is supplied on a dark/coloured background,
 * so it is rendered on a dark tile instead of a white one.
 * Clients without artwork fall back to a clean brand wordmark tile.
 */
import ietk from "@/assets/clients/ietk.svg";
import ketrb from "@/assets/clients/ketrb.svg";
import amakove from "@/assets/clients/amakove.svg";
import inbetween from "@/assets/clients/inbetween.svg";
import fargo from "@/assets/clients/fargo.svg";
import ekiu from "@/assets/clients/ekiu.svg";
import aboosto from "@/assets/clients/aboosto.svg";
import bloomgrow from "@/assets/clients/bloomgrow.svg";
import mercedes from "@/assets/clients/mercedes.svg";
import lintons from "@/assets/clients/lintons.svg";
import balozi from "@/assets/clients/balozi.svg";
import mangu from "@/assets/clients/mangu.svg";
import emory from "@/assets/clients/emory.svg";
import kentwood from "@/assets/clients/kentwood.svg";
import montana from "@/assets/clients/montana.svg";
import kensington from "@/assets/clients/kensington.svg";
import sevenseas from "@/assets/clients/sevenseas.svg";
import xfour from "@/assets/clients/xfour.svg";
import evolution from "@/assets/clients/evolution.svg";
import giz from "@/assets/clients/giz.svg";
import autochek from "@/assets/clients/autochek.svg";
import kcb from "@/assets/clients/kcb.svg";

export type LogoTone = "light" | "dark";

export type ClientLogo = { url: string; tone: LogoTone };

export const CLIENT_LOGOS: Record<string, ClientLogo> = {
  "Institution of Engineering Technology of Kenya": { url: ietk, tone: "light" },
  "Kenya Engineering Technology Registration Board": { url: ketrb, tone: "light" },
  "Eastern Kenya Integrated University": { url: ekiu, tone: "light" },
  "Inbetween Real Estate": { url: inbetween, tone: "light" },
  "Fargo Courier": { url: fargo, tone: "light" },
  "Bloom & Grow": { url: bloomgrow, tone: "light" },
  AmaKove: { url: amakove, tone: "dark" },
  Aboosto: { url: aboosto, tone: "dark" },
  "Mercedes Centre Ltd": { url: mercedes, tone: "light" },
  Lintons: { url: lintons, tone: "dark" },
  "Balozi Sacco": { url: balozi, tone: "light" },
  "Mangu High School": { url: mangu, tone: "light" },
  "Emory Hospital": { url: emory, tone: "light" },
  "Kentwood Cabins & Camp": { url: kentwood, tone: "light" },
  "Montana Resorts": { url: montana, tone: "light" },
  "Kensington Tours": { url: kensington, tone: "light" },
  "SevenSeas Technologies": { url: sevenseas, tone: "light" },
  "Xfour Lounge": { url: xfour, tone: "light" },
  Evolution: { url: evolution, tone: "light" },
  GIZ: { url: giz, tone: "light" },
  Autochek: { url: autochek, tone: "light" },
  "KCB Bank": { url: kcb, tone: "dark" },
};

export const hasLogo = (name: string) => Boolean(CLIENT_LOGOS[name]);
