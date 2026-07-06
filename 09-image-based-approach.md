# 9. Image-Based Door Configurator (JPEG / PNG)

[← Back to Index](index.md)

**Approach:** Build the door designer using **client-supplied JPEG and PNG images** instead of real-time 3D models.  
**Reference:** [rockdoor.com/3d-door-designer](https://www.rockdoor.com/3d-door-designer)

---

## 1. How This Approach Works

Instead of Three.js / GLB models, the website **layers or swaps flat images** in the browser:

```
┌─────────────────────────────────────────┐
│  Background (house / studio JPG)        │
│  ┌─────────────────────────────────┐   │
│  │  Frame layer (PNG)               │   │
│  │  ┌───────────────────────────┐  │   │
│  │  │  Door body (JPEG/PNG)      │  │   │
│  │  │  + Glass overlay (PNG)     │  │   │
│  │  │  + Hardware overlay (PNG)  │  │   │
│  │  └───────────────────────────┘  │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

When the user changes an option, the app swaps the matching image file. No 3D engine required for production (optional 360° if client supplies angle sets).

---

## 2. Two Image Strategies (Choose One)

### Strategy A — Layered PNG (Fewer Images, More Dev Work)

Separate transparent PNG layers composited in the browser.

| Layer | Images needed (MVP) | Format |
|-------|---------------------|--------|
| Door shape per style (no colour) | 10 | PNG transparent |
| Colour applied in code (tint) | 0 extra | — |
| OR colour baked per style | 10 × 14 = 140 | JPEG |
| Glass overlay | 7 | PNG transparent |
| Hardware | 7 × 5 finishes = 35 | PNG transparent |
| Frame | 1–14 | PNG transparent |
| Background scene | 1–2 | JPEG |

**MVP total (with code tint):** ~65 images  
**MVP total (baked colour):** ~195 images  
**Quality:** Good for modern doors; woodgrain needs baked colours

---

### Strategy B — Flat Pre-Rendered (More Images, Simpler Code) — RECOMMENDED

One full door image per valid **style + colour** combination. Easiest to match Rockdoor quality.

| Asset | MVP count | Full parity |
|-------|-----------|-------------|
| Door body (style + colour) | 10 × 14 = **140** | 28 × 14 = **392** |
| Glass variant (per door or generic overlay) | **7–70** | **30–200** |
| Hardware (type + finish) | **35** | **75–100** |
| Frame (colour) | **14** | **14** |
| Threshold / cill | **1** | **2–3** |
| Background / room scene | **2** | **3–5** |
| UI icons & swatches | **14** | **14** |
| Logo & branding | **1** | **1** |

**MVP total: ~200–275 images**  
**Full Rockdoor parity: ~500–700 images**

---

## 3. Image Formats & Specifications

### Required formats

| Use case | Format | Why |
|----------|--------|-----|
| Door body (full render) | **JPEG** | Smaller file size, photographic quality |
| Glass, hardware, frame overlays | **PNG** | Transparency required for layering |
| Colour swatches (UI picker) | **PNG** | Accurate colour + optional transparency |
| Logo | **SVG + PNG** | Sharp at all sizes |
| Optional 360° rotation | **PNG or JPEG** sequence | One image per angle |

### Image specifications

| Asset type | Dimensions | Resolution | Max file size |
|------------|------------|------------|---------------|
| Door body (front view) | **1200 × 2400 px** min | 150 DPI | 500 KB (JPEG quality 85%) |
| Door body (production) | **2000 × 4000 px** | 300 DPI | 1.5 MB |
| Glass / hardware overlay | Same as door body | 300 DPI | 800 KB (PNG) |
| Frame overlay | Same as door body | 300 DPI | 500 KB |
| Background scene | **1920 × 1080** or **2560 × 1440** | 72–150 DPI | 1 MB |
| Colour swatch (UI) | **512 × 512 px** | — | 100 KB |
| Thumbnail (style picker) | **400 × 600 px** | — | 80 KB |

### Colour & quality rules

- **Colour space:** sRGB
- **JPEG:** Quality 85–90%, progressive
- **PNG:** 24-bit + alpha channel for overlays
- **No watermarks** on production assets
- **Consistent lighting** across all door renders (same studio setup)
- **Same camera angle** for every door in the same view set

### File naming convention (required)

```
doors/{style}/{colour}.jpg
Example: doors/vogue/anthracite-grey.jpg

glass/{glass-id}.png
Example: glass/shade.png

hardware/{type}-{finish}.png
Example: hardware/lever-lever-chrome.png

frames/{colour}.png
Example: frames/white.png

backgrounds/scene-01.jpg
swatches/{colour-id}.png
thumbnails/styles/{style}.jpg
```

---

## 4. Complete Image List for Client

### 4.1 Pilot phase (minimum to test)

Use **3 door styles** and **5 colours** to validate before full production.

| # | Asset | Qty | Format | Example filename |
|---|-------|-----|--------|------------------|
| 1 | Door front render (style + colour) | 3 × 5 = **15** | JPEG | `doors/vogue/white.jpg` |
| 2 | Glass overlay | **3** | PNG | `glass/shade.png` |
| 3 | Hardware overlay | **2** | PNG | `hardware/lever-chrome.png` |
| 4 | Frame overlay | **2** | PNG | `frames/white.png` |
| 5 | Background scene | **1** | JPEG | `backgrounds/studio.jpg` |
| 6 | Colour swatches | **5** | PNG | `swatches/white.png` |
| 7 | Style thumbnails | **3** | JPEG | `thumbnails/vogue.jpg` |
| 8 | Logo | **1** | PNG/SVG | `logo.png` |

**Pilot phase total: ~32 images**

---

### 4.2 MVP production (10 styles)

| # | Asset | Qty | Format |
|---|-------|-----|--------|
| 1 | Door body (10 styles × 14 colours) | **140** | JPEG |
| 2 | Glass overlays (7 types; generic or per style) | **7–70** | PNG |
| 3 | Hardware (7 types × 5 finishes) | **35** | PNG |
| 4 | Frame (14 colours) | **14** | PNG |
| 5 | Threshold | **1** | PNG |
| 6 | Background scenes | **2** | JPEG |
| 7 | Colour swatches | **14** | PNG |
| 8 | Style thumbnails | **10** | JPEG |
| 9 | Hardware thumbnails (UI) | **7** | PNG |
| 10 | Glass thumbnails (UI) | **7** | PNG |
| 11 | Logo + favicon | **2** | PNG/SVG |
| 12 | Style–glass compatibility sheet | **1** | Excel/CSV |

**MVP production total: ~240–300 images + 1 spreadsheet**

---

### 4.3 Full Rockdoor parity (28 styles)

| # | Asset | Qty | Format |
|---|-------|-----|--------|
| 1 | Door body (28 × 14 colours) | **392** | JPEG |
| 2 | Glass overlays (style-specific) | **80–150** | PNG |
| 3 | Hardware (15 types × 5 finishes) | **75** | PNG |
| 4 | Frame + threshold | **16** | PNG |
| 5 | Backgrounds + “view on home” | **5** | JPEG |
| 6 | UI swatches & thumbnails | **50** | PNG/JPEG |
| 7 | Logo & brand assets | **3** | SVG/PNG |
| 8 | Compatibility matrix | **1** | Excel/CSV |

**Full parity total: ~620–700 images + 1 spreadsheet**

---

### 4.4 Optional — 360° rotation (if required)

If the client wants rotate-like-3D using images only:

| Asset | Qty per door | MVP total (10 styles) |
|-------|--------------|------------------------|
| 36 angles × 1 colour (white) | 36 images | 360 JPEGs |
| 36 angles × 14 colours | 504 per style | 5,040 JPEGs |

> **Recommendation:** Use **8–12 angles** (not 36) for image-based rotation, or keep a single front view for MVP.

**8 angles × 10 styles × 14 colours = 1,120 images** (optional add-on)

---

## 5. Combination Counts (Image-Based)

The website does **not** need one image per full combination if using layers:

| Component | Options | Images needed |
|-----------|---------|---------------|
| Door style + colour | 10 × 14 = 140 combos | **140 JPEGs** (flat) OR **10 PNGs** (layered) |
| Glass | 7 | **7 PNG overlays** |
| Hardware + finish | 7 × 5 = 35 | **35 PNG overlays** |
| Frame colour | 14 | **14 PNGs** |

**Valid full combinations (MVP):** ~150,000 – 300,000  
**Images client supplies:** ~240–300 (not 150,000)

---

## 6. Technology Stack (Image-Based Build)

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | **React** + **TypeScript** | Configurator UI |
| Build | **Vite** | Fast dev & deploy |
| Image compositing | **HTML Canvas** or **CSS layers** | Stack PNG overlays |
| State | **Zustand** | Selected options |
| Styling | **Tailwind CSS** | Rockdoor-style UI |
| Image lazy load | **native loading="lazy"** | Performance |
| Backend (phase 2) | **Node.js / Laravel** | Save design, send quote |
| Database | **PostgreSQL** | Designs & quotes |
| CDN | **Cloudflare / S3** | Host image library |
| Maps | **Google Maps API** | Find installer |

**No Three.js required** for the image-based approach (unless you add 3D later).

---

## 7. Project Timeline & ETA

### 7.1 Phase overview

| Phase | Description | Duration |
|-------|-------------|----------|
| Phase 0 | Discovery + image brief to client | 1 week |
| Phase 1 | **Pilot** (3 styles, image compositor) | **2–3 weeks** |
| Phase 2 | **Full MVP** (10 styles, all options) | **5–7 weeks** |
| Phase 3 | Backend + quote flow | 2–3 weeks |
| Phase 4 | QA, UAT, launch | 2 weeks |

---

### 7.2 Pilot testing ETA — **2 to 3 weeks**

**Goal:** Prove image swapping, UI flow, and client image quality with a small image set (~32 images).

| Task | Days |
|------|------|
| Image brief & naming spec to client | 1–2 |
| Client delivers pilot images (32) | 3–5 (client) |
| Image compositor prototype (Canvas/CSS) | 4–5 |
| Configurator UI (3 styles, 5 colours) | 3–4 |
| Glass + hardware layer swap | 2–3 |
| Internal testing | 2 |
| Client pilot review & sign-off | 2–3 |

**Pilot ETA: 2 – 3 weeks** (after client delivers pilot images)

#### Pilot deliverables

- [ ] Working local website with 3 door styles
- [ ] Colour / glass / hardware swap using client PNG/JPEG
- [ ] Responsive sidebar configurator
- [ ] Image loading performance check
- [ ] Client approves image quality and format

---

### 7.3 Full project development ETA — **10 to 14 weeks**

| Phase | Task | Weeks |
|-------|------|-------|
| **1 — Pilot** | 3-style image compositor + testing | 2–3 |
| **2 — Image library** | Import 240–300 MVP images, optimise, CDN | 1–2 |
| **3 — Full UI** | 10 styles, 14 colours, wizard steps | 2–3 |
| **4 — All options** | Glass, hardware, frame, hinges UI | 1–2 |
| **5 — Polish** | Mobile, lazy load, preload, animations | 1–2 |
| **6 — Backend** | Save design, quote form, email | 2–3 |
| **7 — QA & launch** | Cross-browser, UAT, deploy | 2 |

| Scope | Total ETA |
|-------|-----------|
| **MVP** (10 styles, image-based, no backend) | **7 – 9 weeks** |
| **MVP + backend + quote flow** | **10 – 12 weeks** |
| **Full parity** (28 styles, 600+ images) | **14 – 18 weeks** |

---

### 7.4 Master timeline

```
Week   1   2   3   4   5   6   7   8   9  10  11  12  13  14
       ├───┤
       Image brief → client delivers pilot images (32)
           ├───────────┤
           PILOT build + pilot testing (2–3 weeks)
                       ├───────────────────────┤
                       Client delivers full image set (240–300)
                       Full MVP development (5–7 weeks)
                                               ├─────────┤
                                               Backend + quote
                                                         ├────┤
                                                         QA + Launch
```

| Milestone | Week |
|-----------|------|
| Image brief sent to client | Week 1 |
| Pilot images received | Week 1–2 |
| **Pilot demo ready** | **Week 3** |
| Pilot sign-off | Week 3–4 |
| Full image library received | Week 4–6 |
| **MVP beta** | **Week 9–10** |
| Backend live | Week 11–12 |
| **Go live** | **Week 12–14** |

---

## 8. Client Image Delivery Checklist

```
IMAGE-BASED 3D DOOR DESIGNER — CLIENT DELIVERABLES

PILOT PHASE (~32 images) — Required first
□ 15 door JPEGs (3 styles × 5 colours, front view, 1200×2400 min)
□ 3 glass PNGs (transparent background)
□ 2 hardware PNGs (transparent background)
□ 2 frame PNGs (transparent background)
□ 1 background JPEG (1920×1080)
□ 5 colour swatch PNGs (512×512)
□ 3 style thumbnail JPEGs (400×600)
□ 1 logo (PNG or SVG)

FULL MVP (~240–300 images) — After pilot approval
□ 140 door JPEGs (10 styles × 14 colours)
□ 7–70 glass PNG overlays
□ 35 hardware PNG overlays (7 types × 5 finishes)
□ 14 frame PNGs
□ 1 threshold PNG
□ 2 background JPEGs
□ 14 colour swatches + 10 style thumbnails
□ Style–glass compatibility matrix (Excel/CSV)
□ Brand guidelines PDF

FORMAT RULES
□ sRGB colour space
□ JPEG quality 85%+ for door bodies
□ PNG with alpha for all overlays
□ Consistent camera angle and lighting
□ File names follow naming convention (see Section 3)
```

---

## 9. Summary for Client Proposal

| Question | Answer |
|----------|--------|
| Approach | JPEG/PNG image compositing (no 3D models) |
| Pilot images needed | **~32 images** |
| MVP images needed | **~240–300 images** |
| Full parity images | **~620–700 images** |
| Door body format | **JPEG** 1200×2400 min (2000×4000 production) |
| Overlay format | **PNG** with transparent background |
| Pilot testing ETA | **2 – 3 weeks** |
| Full MVP ETA | **7 – 9 weeks** |
| Full project + backend ETA | **10 – 14 weeks** |
| Backend in pilot? | No — frontend image compositor only |

---

*Documentation v2.1 — Image-based approach — July 2026*
