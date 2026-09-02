# Image list for Brand It KE website

## Current state
- **All media slots are filled** with existing photos from `src/assets/`.
- **Portfolio gallery** already has 54 project images.
- **Client logos** are 21 SVG files in `src/assets/clients/`.
- **Logo** exists as `public/brandit-logo-light.png` and `public/brandit-logo.png`.

No page currently shows a broken or empty image slot. The list below is grouped by where images appear, so you can decide which ones to keep, replace, or send better versions of.

## Images that appear on each page

### Global / navigation
| Purpose | File / path | What it is now | Recommended replacement |
|---|---|---|---|
| Header logo | `public/brandit-logo-light.png` | White logo on transparent | Keep, or send a higher-res PNG/SVG if available |
| Footer logo | `public/brandit-logo-light.png` | Same as header | Keep or send a stacked/alt version |
| Favicon | `public/favicon.ico` / `favicon.png` | Existing favicon | Send a 32×32 / 180×180 icon if you have a brand mark |

### Homepage `/`
| Purpose | Slot / file | Current image | Recommended subject |
|---|---|---|---|
| Hero slider slide 1 | `src/assets/photos/billboards.jpg` | Billboards | Large-format billboard / pylon sign |
| Hero slider slide 2 | `src/assets/photos/lit-letters.jpg` | Lit letters | Illuminated channel letters / neon sign |
| Hero slider slide 3 | `src/assets/hero-vehicle.jpg` | Vehicle | Branded van / fleet wrap |
| Hero slider slide 4 | `src/assets/photos/stationery-flatlay.jpg` | Stationery | Print flatlay / branded collateral |
| Intro feature image | `home.hero` → `src/assets/photos/branded-packaging.jpg` | Packaging boxes | A strong behind-the-scenes or workshop shot |
| Services teaser cards | `services.signage` etc. | See service pages below | One hero per service |

### Services overview `/services`
| Purpose | Slot | Current image | Recommended subject |
|---|---|---|---|
| Signage card | `services.signage` | `lit-letters.jpg` | 3D shopfront / illuminated sign |
| Vehicle card | `services.vehicle` | `vehicle.jpg` | Van / car wrap |
| Promo card | `services.promo` | `promo-tags.jpg` | Promo items flatlay |
| Print card | `services.print` | `stationery-flatlay.jpg` | Stationery spread |
| Design card | `services.design` | `color-wheel.jpg` | Designer at work / brand identity sheet |
| Marketing wear card | `services.marketing` | `expo-stand.jpg` | Event activation / media wall |

### Service detail pages `/services/<slug>`
Each page reuses the same image as the services overview card for its hero and feature image.

| Slug | Recommended hero image |
|---|---|
| `/services/signage` | Fabricated 3D sign or shopfront |
| `/services/vehicle` | Branded vehicle wrap |
| `/services/promo` | Promo items or branded apparel |
| `/services/print` | Print / stationery flatlay |
| `/services/design` | Brand identity / design mockup |
| `/services/marketing` | Event backdrop / banner setup |

### About `/about`
| Purpose | Slot | Current image | Recommended subject |
|---|---|---|---|
| Page hero | `src/assets/photos/studio-designer.jpg` | Designer at desk | Team / workshop wide shot |
| Team photo | `about.team` → `studio-designer.jpg` | Designer | Actual team photo or office culture shot |
| Workshop photo | `about.workshop` → `src/assets/photos/workshop-crew.jpg` | Workshop crew | Workshop floor / machines / crew |

### Process `/process`
| Purpose | Slot | Current image | Recommended subject |
|---|---|---|---|
| Page hero | `src/assets/photos/branding-sheet.jpg` | Branding sheet | Process overview / timeline collage |
| Step 1: Brief | `process.brief` → `branding-sheet.jpg` | Branding sheet | Client meeting / site survey |
| Step 2: Design | `process.design` → `design.jpg` | Design | Monitor showing mockups |
| Step 3: Produce | `process.produce` → `workshop-crew.jpg` | Workshop crew | Printing / fabrication in action |
| Step 4: Install | `process.install` → `install-crew.jpg` | Install crew | Riggers installing signage |

### Clients `/clients`
| Purpose | Slot | Current image | Recommended subject |
|---|---|---|---|
| Page hero | `src/assets/photos/building-branding.jpg` | Building branding | Impressive building / wall branding |
| Case gallery | Portfolio images | 54 project photos | Keep or add fresh project photos |

### Contact `/contact`
| Purpose | Slot | Current image | Recommended subject |
|---|---|---|---|
| Page hero | `src/assets/photos/client-smile.jpg` | Client | Friendly client / team photo |
| Map | `contact.map` → `nairobi-map.jpg` | Nairobi map | Google Maps screenshot or custom location illustration of Haji House, Kirinyaga Road |

## Recommended image specs
- **Hero / page headers:** 1920×1080 px or 1600×900 px, landscape.
- **Card / feature images:** 1200×800 px or 4:3 aspect ratio.
- **Service detail feature images:** 4:5 or 3:4 portrait works well.
- **Portfolio gallery:** At least 1200 px wide, any ratio; currently mostly 4:3 and 3:2.
- **Client logos:** SVG preferred; otherwise PNG with transparent background, 400×200 px.
- **Logo:** PNG or SVG, transparent background, at least 400 px wide.

## Priority replacements (if you only send a few)
1. **Logo** — send a high-resolution SVG or transparent PNG.
2. **Homepage hero images** — the four slider images set the first impression.
3. **About team / workshop** — currently uses the same designer photo for two slots.
4. **Contact map** — replace the generic Nairobi map with an actual map to Haji House.
5. **Service detail heroes** — one strong photo per service makes each detail page distinct.

## What to send next
Send images as a `.zip` or upload them here. For each file, include a short note about which slot/page it should replace, or I can match them based on filenames if you name them clearly (e.g. `home-hero-signage.jpg`, `about-team.jpg`, `service-vehicle.jpg`).
