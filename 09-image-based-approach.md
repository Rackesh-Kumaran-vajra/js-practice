# 3D Door Designer — Project Documentation

**Version:** 1.0 | **Date:** July 2026

---

## 1. Project Overview

The website stacks **transparent PNG layers** in the browser. The client supplies separate images for door shape, glass, hardware, and frame. **Door colour is applied in code** (tint/texture overlay) — so you do **not** need 140 separate door JPEGs.

### Layer stack (bottom → top)

| Order | Layer | Format | When it changes |
|-------|-------|--------|-----------------|
| 0 | Background | JPG | Room / studio scene (fixed) |
| 1 | Frame | PNG | Frame colour changes |
| 2 | Door base | PNG | Door style changes (shape/moulding) |
| 3 | Door colour | Code | Colour tint or woodgrain texture overlay |
| 4 | Glass | PNG | Glass design changes |
| 5 | Hardware | PNG | Handle / knocker changes |

**Pros:** Fewer images from client (~65–95 vs ~240–300)  
**Cons:** More development time (Canvas/CSS compositor, colour accuracy, layer alignment)

---

## 2. How Colour Works (No 140 Door JPEGs)

| Colour type | How it works | Extra images |
|-------------|--------------|--------------|
| Solid colours (White, Black, Grey, Cream, etc.) | CSS/Canvas **colour tint** on neutral door base | **0** |
| Woodgrain colours (Irish Oak, Light Oak, Rosewood) | **Texture overlay PNG** per colour (14 total, shared across all styles) | **14 PNG** |

The door base PNG is exported in **neutral grey** so tints look correct.

---

## 3. Image Formats & Specifications

### Format rules

| Layer | Format | Transparency | Notes |
|-------|--------|--------------|-------|
| Door base (shape/moulding) | **PNG** | Yes (alpha) | Neutral grey, no colour baked in |
| Colour texture (woodgrain only) | **PNG** | Optional | Tileable foil/woodgrain pattern |
| Glass overlay | **PNG** | Yes (alpha) | Must align pixel-perfect with door base |
| Hardware overlay | **PNG** | Yes (alpha) | Handle position fixed per style |
| Frame overlay | **PNG** | Yes (alpha) | Or 1 neutral frame + code tint |
| Background scene | **JPEG** | No | Room / studio backdrop |
| UI swatches | **PNG** | No | 512×512 official colour chips |
| Style thumbnails | **JPEG** | No | Picker preview images |
| Logo | **SVG + PNG** | Yes | Branding |

### Dimensions

| Asset | Min size (pilot) | Production size | Max file size |
|-------|------------------|-----------------|---------------|
| Door base PNG | 1200 × 2400 px | 2000 × 4000 px | 1.5 MB |
| Glass / hardware / frame PNG | Same as door base | Same as door base | 800 KB each |
| Woodgrain texture PNG | 1024 × 1024 px | 2048 × 2048 px | 500 KB |
| Background JPEG | 1920 × 1080 px | 2560 × 1440 px | 1 MB |
| Colour swatch | 512 × 512 px | 512 × 512 px | 100 KB |
| Style thumbnail | 400 × 600 px | 400 × 600 px | 80 KB |

### Technical requirements

- **Colour space:** sRGB  
- **PNG:** 24-bit RGB + 8-bit alpha channel  
- **JPEG:** Quality 85–90%  
- **Alignment:** All layers must share the **exact same canvas size** and door position  
- **Lighting:** Consistent studio lighting across all assets from the same photoshoot/render  
- **No watermarks** on production files  

---

## 4. File Naming Convention

| Asset type | Naming pattern | Example |
|------------|----------------|---------|
| Door base | `layers/door-base/{style}.png` | `layers/door-base/vogue.png` |
| Woodgrain texture | `layers/textures/{colour}.png` | `layers/textures/irish-oak.png` |
| Glass overlay | `layers/glass/{glass-id}.png` | `layers/glass/shade.png` |
| Hardware overlay | `layers/hardware/{type}-{finish}.png` | `layers/hardware/lever-lever-chrome.png` |
| Frame overlay | `layers/frames/{colour}.png` | `layers/frames/white.png` |
| Background scene | `backgrounds/scene-01.jpg` | `backgrounds/scene-01.jpg` |
| Colour swatch | `swatches/{colour-id}.png` | `swatches/anthracite-grey.png` |
| Style thumbnail | `thumbnails/styles/{style}.jpg` | `thumbnails/styles/vogue.jpg` |
| Logo | `logo.png` | `logo.png` |

---

## 5. Images Required — Pilot Phase

**Scope:** 3 door styles, 5 colours, 3 glass types — prove layering works.

| # | Layer / Asset | Qty | Format | Notes |
|---|---------------|-----|--------|-------|
| 1 | Door base (shape only, neutral grey) | **3** | PNG | One per style: manhattan, vogue, vermont |
| 2 | Woodgrain texture (if testing oak/wood) | **2** | PNG | Optional in pilot |
| 3 | Glass overlay | **3** | PNG | clear, shade, misted |
| 4 | Hardware overlay | **2** | PNG | lever-chrome, knocker-chrome |
| 5 | Frame overlay | **2** | PNG | white, anthracite-grey |
| 6 | Background scene | **1** | JPEG | Studio or house front |
| 7 | Colour swatches (UI picker) | **5** | PNG | For sidebar colour buttons |
| 8 | Style thumbnails | **3** | JPEG | Style picker preview |
| 9 | Logo | **1** | PNG/SVG | Branding |

### Pilot image total

| Scenario | Total images |
|----------|--------------|
| Pilot (solid colours only, code tint) | **~20 images** |
| Pilot (including 2 woodgrain textures) | **~22 images** |

---

## 6. Images Required — Full MVP (10 Styles)

| # | Layer / Asset | Qty | Format |
|---|---------------|-----|--------|
| 1 | Door base PNG (one per style, neutral grey) | **10** | PNG |
| 2 | Woodgrain texture PNG (shared across styles) | **14** | PNG |
| 3 | Glass overlay PNG | **7** | PNG |
| 4 | Hardware PNG (7 types × 5 finishes) | **35** | PNG |
| 5 | Frame PNG (14 colours) OR 1 neutral + tint | **14** or **1** | PNG |
| 6 | Threshold / cill | **1** | PNG |
| 7 | Background scenes | **2** | JPEG |
| 8 | Colour swatches (UI) | **14** | PNG |
| 9 | Style thumbnails | **10** | JPEG |
| 10 | Hardware thumbnails (UI) | **7** | PNG |
| 11 | Glass thumbnails (UI) | **7** | PNG |
| 12 | Logo + favicon | **2** | PNG/SVG |
| 13 | Style–glass compatibility matrix | **1** | Excel/CSV |
| 14 | Layer alignment guide (optional) | **1** | PDF/PSD |

### MVP image total

| Scenario | Total images |
|----------|--------------|
| MVP — solid colours only (code tint, 1 frame PNG) | **~65 images** |
| MVP — with woodgrain textures + 14 frame PNGs | **~95 images** |
| MVP — recommended (woodgrain + full frames) | **~95 images** |

> Compare to Strategy B (flat JPEG): **~240–300 images** for the same MVP.

---

## 7. Full Rockdoor Parity (28 Styles)

| Layer / Asset | Quantity | Format |
|---------------|----------|--------|
| Door base PNG | **28** | PNG |
| Woodgrain textures | **14** | PNG |
| Glass overlays | **30** | PNG |
| Hardware overlays | **75** | PNG |
| Frame PNGs | **14** | PNG |
| Backgrounds + UI assets | **~40** | JPEG/PNG |
| Compatibility matrix | **1** | Excel |

**Full parity total: ~200–210 images** (vs ~620–700 for Strategy B)

---

## 8. Combination Counts

The app generates all combinations by swapping layers — no extra images per combo.

| Option | Count |
|--------|-------|
| Door styles | 10 |
| Door colours | 14 (10 solid tint + 4 woodgrain texture) |
| Glass types | 7 |
| Hardware types | 7 |
| Hardware finishes | 5 |
| Frame colours | 14 |
| Hinge colours | 4 |
| Opening direction | 2 |

**Valid combinations (MVP):** ~150,000 – 300,000  
**Images client supplies:** ~95 (not 150,000)

---

## 9. Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | React + TypeScript | Configurator UI |
| Build | Vite | Dev server & deploy |
| Layer compositor | **HTML Canvas API** | Stack PNG layers in correct order |
| Colour tint | Canvas `globalCompositeOperation` | Apply solid RAL colours to door base |
| Woodgrain | Canvas texture overlay | Apply foil pattern PNG |
| State | Zustand | Track selected options |
| Styling | Tailwind CSS | Rockdoor-style UI |
| Image preload | Custom hook | Preload layers on option hover |
| CDN | Cloudflare / AWS S3 | Host PNG library |
| Backend (phase 2) | Node.js / Laravel | Save design, send quote |
| Database | PostgreSQL | Designs & quotes |

**No Three.js or GLB models required.**

---

## 10. Project Timeline & ETA

### Phase summary

| Phase | Description | Duration |
|-------|-------------|----------|
| Phase 0 | Discovery + layer spec to client | 1 week |
| Phase 1 | **Pilot** (3 styles, layer compositor) | **3–4 weeks** |
| Phase 2 | **Full MVP** (10 styles, all layers) | **6–8 weeks** |
| Phase 3 | Backend + quote flow | 2–3 weeks |
| Phase 4 | QA, UAT, launch | 2 weeks |

> Strategy A pilot takes **~1 week longer** than Strategy B because of Canvas compositor development.

### ETA summary

| Deliverable | ETA |
|-------------|-----|
| **Pilot testing** | **3 – 4 weeks** |
| **Full MVP** (no backend) | **9 – 11 weeks** |
| **Full project + backend** | **12 – 15 weeks** |
| **Go live** | **Week 13–15** |

---

### Phase 1 — Pilot (3–4 weeks)

| Task | Days | Owner |
|------|------|-------|
| Layer spec + alignment guide to client | 2 | PM / Dev |
| Client delivers pilot PNGs (~22) | 3–5 | Client |
| Canvas layer compositor engine | 5–7 | Frontend dev |
| Colour tint system (solid RAL colours) | 3–4 | Frontend dev |
| Woodgrain texture overlay | 2–3 | Frontend dev |
| Configurator UI (3 styles, 5 colours) | 3–4 | Frontend dev |
| Glass + hardware layer swap | 2–3 | Frontend dev |
| Layer alignment QA | 2 | QA |
| Client pilot review | 2–3 | Client |

**Pilot deliverables:**
- [ ] Working layer compositor (all layers align pixel-perfect)
- [ ] 3 door styles with colour tint working
- [ ] Glass and hardware swap correctly
- [ ] Page loads all layers under 3 seconds
- [ ] Client approves image quality

---

### Phase 2 — Full MVP (6–8 weeks)

| Task | Days |
|------|------|
| Client delivers full PNG set (~95) | 5–10 (client) |
| Import & optimise all layers (CDN) | 3–4 |
| 10 door styles + all 14 colours | 4–5 |
| All 7 glass + 35 hardware layers | 3–4 |
| Frame + threshold layers | 2 |
| Multi-step wizard UI | 5–7 |
| Mobile responsive layout | 3–4 |
| Image preloading & performance | 3–4 |
| Style–glass compatibility rules | 2–3 |

---

### Phase 3 — Backend (2–3 weeks)

| Task | Days |
|------|------|
| Save / load design API | 4–5 |
| Share design URL | 2–3 |
| Quote form + email to installer | 4–5 |
| Installer map (Google Maps) | 5–7 |

---

## 11. Client Delivery Checklist

```
3D DOOR DESIGNER — CLIENT IMAGE DELIVERABLES

IMPORTANT
□ All PNG layers must be the SAME canvas size (e.g. 2000×4000 px)
□ Door base exported in NEUTRAL GREY (not coloured)
□ All layers pixel-aligned (same door position in every file)
□ PNG with transparent background (alpha channel)

PILOT PHASE (~22 images) — deliver first
□ 3 door base PNGs (neutral grey, transparent) — manhattan, vogue, vermont
□ 3 glass PNG overlays (transparent)
□ 2 hardware PNG overlays (transparent)
□ 2 frame PNG overlays (transparent)
□ 1 background JPEG (1920×1080)
□ 5 colour swatch PNGs (512×512)
□ 3 style thumbnail JPEGs
□ 1 logo (PNG or SVG)
□ Optional: 2 woodgrain texture PNGs (irish-oak, light-oak)

FULL MVP (~95 images) — after pilot approval
□ 10 door base PNGs (one per style, neutral grey)
□ 14 woodgrain texture PNGs (irish-oak, light-oak, rosewood, etc.)
□ 7 glass PNG overlays
□ 35 hardware PNG overlays (7 types × 5 finishes)
□ 14 frame PNG overlays (one per colour)
□ 1 threshold PNG
□ 2 background JPEGs
□ 14 colour swatches + 10 style thumbnails
□ 7 hardware + 7 glass UI thumbnails
□ Logo + favicon
□ Style–glass compatibility spreadsheet (Excel/CSV)

FORMAT
□ sRGB colour space
□ PNG-24 with alpha for all layers
□ JPEG quality 85%+ for backgrounds
□ Max 1.5 MB per door layer PNG
```

---

## 12. Summary for Client Proposal

| Question | Answer |
|----------|--------|
| Approach | Layered transparent PNG + code colour tint |
| Pilot images | **~22 images** |
| MVP images | **~95 images** |
| Full parity images | **~200–210 images** |
| Door base format | **PNG** neutral grey, transparent, 2000×4000 px |
| Overlay format | **PNG** transparent, same canvas size as door base |
| Woodgrain colours | **14 texture PNGs** (shared across all styles) |
| Pilot testing ETA | **3 – 4 weeks** |
| Full MVP ETA | **9 – 11 weeks** |
| Full project + backend | **12 – 15 weeks** |
| vs Strategy B image count | **~95 vs ~300 images** (68% fewer) |
| Trade-off | More development time for layer compositor |

---

*3D Door Designer documentation v1.0 — July 2026*
