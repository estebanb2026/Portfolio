# Esteban Barrera — Portfolio Build Plan

This document inventories every section, component, and file to be created for the Next.js 14 portfolio. **No application source files have been written yet** (only this plan and the empty git repo from project bootstrap).

**Proposed project root:** `/Users/estebanbarrera/Projects/esteban-barrera-portfolio`

---

## 1. Pages & Sections (single-page app)

| Order | Section ID      | Purpose                          | Primary component        |
|------:|-----------------|----------------------------------|--------------------------|
| 1     | `#overview`     | Hero + first impression          | `HeroSection`            |
| 2     | `#how-it-works` | Tools + process                  | `HowItWorksSection`      |
| 3     | `#design-to-code` | Workflow showcase + placeholders | `DesignToCodeSection`  |
| 4     | `#my-works`     | Curated projects                 | `MyWorksSection`         |
| 5     | `#faq`          | Accordion Q&A                    | `FAQSection`             |
| —     | (footer)        | Name, links, attribution         | `Footer`                 |

**Navigation (not a separate route):** Fixed left `NavSidebar` on desktop; hamburger drawer on mobile. Items: Overview, How It Works, Design to Code, My Works, FAQ, GitHub (external). **Excluded per spec:** version label, music/audio, bottom-right widget.

**Active section:** `IntersectionObserver` driving which nav link uses `var(--text-primary)`.

---

## 2. Components (`/components`)

| File | Responsibility |
|------|----------------|
| `NavSidebar.tsx` | Fixed left rail (desktop); mobile overlay drawer; smooth scroll to `#` anchors; GitHub opens new tab; DM Mono link styles; active state from observer |
| `HeroSection.tsx` | Two-column desktop / stacked mobile; Instrument Serif italic headline (two lines); body copy; primary CTA → `#my-works`; secondary link `barreraesteban.com`; supporting detail row (Senior Product Designer · Orlando, FL · Open to Remote); right: `PlaceholderMedia` for product image |
| `HowItWorksSection.tsx` | `SectionLabel` (PROCESS / How I design and ship); Block A: 7 tool `GlassCard`s in responsive grid; Block B: 5 numbered process steps (editorial layout, exact copy from spec) |
| `DesignToCodeSection.tsx` | `SectionLabel` (WORKFLOW / From Figma…); three Arc-style blocks with `PlaceholderMedia` + caption overlay each; bottom callout: “This site was built using this exact workflow.” |
| `MyWorksSection.tsx` | `SectionLabel` (SELECTED WORK / Products I've…); five project cards (order: GetFiber.ai, Pidwin, AE Studio/branchprompt, Duffl, Crewfare); each: type, role, headline, description, impact, placeholder image via `next/image` placeholder pattern or `PlaceholderMedia` as specified; external link labels; CTA row with three links (URLs TBD or env — see Open questions) |
| `FAQSection.tsx` | `SectionLabel`; 8 Q&As in `GlassCard` rows; expand/collapse with Framer Motion `AnimatePresence`; controlled state (no `<form>`) |
| `Footer.tsx` | Two-column: left name/title; right three external links; bottom centered DM Mono line |
| `GlassCard.tsx` | Wrapper: `.glass-card` styles + optional `motion` props for hover lift (`y: -4`, border brighten) |
| `SectionLabel.tsx` | Reusable: DM Mono uppercase muted label + DM Sans H2 |
| `PlaceholderMedia.tsx` | Dashed border, dark bg, centered DM Mono muted label; `aspectRatio` prop; used everywhere media is TBD |

**Supporting hooks/util (if needed, minimal):**

| File | Purpose |
|------|---------|
| `hooks/useActiveSection.ts` (optional) | Encapsulate `IntersectionObserver` + section id list for `NavSidebar` |

*If logic stays small, it can live inside `NavSidebar.tsx` to avoid extra files.*

---

## 3. Files to Create (full tree)

```
/Users/estebanbarrera/Projects/esteban-barrera-portfolio/
├── PLAN.md                          ← this file (approved before implementation)
├── package.json
├── package-lock.json                ← via npm install
├── tsconfig.json
├── next.config.js                   ← or .mjs; image domains if needed later
├── postcss.config.js
├── tailwind.config.ts               ← colors map to CSS variables
├── .gitignore                       ← Next.js defaults
├── README.md                        ← minimal: how to run, deploy note (optional; spec didn’t require — skip if user prefers no extra markdown)
├── app/
│   ├── layout.tsx                   ← Instrument Serif, DM Sans, DM Mono via next/font; metadata export; import ../styles/globals.css
│   ├── page.tsx                     ← composes NavSidebar + all sections + Footer; main scroll container / padding for sidebar offset
│   └── favicon.ico                  ← or app/icon — Next 14 convention
├── components/
│   ├── NavSidebar.tsx
│   ├── HeroSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── DesignToCodeSection.tsx
│   ├── MyWorksSection.tsx
│   ├── FAQSection.tsx
│   ├── Footer.tsx
│   ├── GlassCard.tsx
│   ├── SectionLabel.tsx
│   └── PlaceholderMedia.tsx
├── styles/
│   └── globals.css                  ← :root tokens, reset, .glass-card, base typography utilities
└── public/
    └── images/                      ← empty; user drops assets here; any static OG image later
```

**No placeholder components:** each section uses real copy from the spec only.

---

## 4. Styling & Tokens

- **globals.css:** All palette variables exactly as spec (§2.1); `.glass-card` rule (§2.3); no hex in TSX beyond this file.
- **tailwind.config.ts:** Extend theme with `colors` referencing `var(--*)` where practical for utilities; font families bound to CSS variables set from `next/font` class names in `layout.tsx`.

---

## 5. Motion (Framer Motion)

- **Ease:** `[0.16, 1, 0.3, 1]` everywhere; no bounce/spring.
- **Page load:** Staggered fade-up on above-fold hero elements (delays 0, 0.1, 0.2s).
- **Scroll:** `whileInView` on each section (and key blocks as needed) with fade + translateY.
- **Cards:** Hover lift `y: -4` + border/brightness on `GlassCard`.
- **FAQ:** `AnimatePresence` for height/opacity on open/close.

---

## 6. Images & Fonts

- **next/font/google:** `Instrument_Serif` (italic for hero), `DM_Sans` (300,400,500), `DM_Mono` (400). Apply via CSS variables or className on `body`.
- **next/image:** Used for any non-placeholder images; for placeholders, `PlaceholderMedia` uses no bitmap (dashed box). When real images are added to `/public/images`, project cards use `<Image>` with width/height or fill + aspect ratio.

---

## 7. Metadata (`app/layout.tsx`)

Export `metadata` per spec §7; `openGraph.url` — use `https://barreraesteban.com` or placeholder env `NEXT_PUBLIC_SITE_URL` (confirm domain).

---

## 8. External URLs (from spec)

| Label | URL |
|-------|-----|
| GitHub | `https://github.com/barreraesteban` |
| Portfolio | `https://barreraesteban.com` |
| GetFiber | `https://getfiber.ai` (verify https) |
| Pidwin | `https://pidwin.com` |
| BranchPrompt | `https://branchprompt.com` |
| Duffl | `https://duffl.com` |
| Crewfare | `https://crewfare.com` |

---

## 9. Open Questions (resolve before or during implementation)

1. **LinkedIn URL** — not in spec; user to provide.
2. **“View Design Deck” / “View NDA Portfolio”** — target URLs or mailto; otherwise disabled-styled `#` with comment to replace.
3. **OG `url` / production domain** — confirm canonical (e.g. Vercel default vs custom domain).

---

## 10. Launch Verification (from spec §10)

- [ ] All sections + copy match spec
- [ ] Responsive at 375 / 768 / 1440
- [ ] `next/image` + `next/font` rules satisfied
- [ ] Framer Motion on sections + FAQ
- [ ] Nav active section on scroll
- [ ] `npm run build` clean
- [ ] Deploy to Vercel (user action)

---

## 11. Confirmation Gate

**Please confirm:**

1. This file tree and component split.
2. Project path: `~/Projects/esteban-barrera-portfolio`.
3. Answers to open questions in §9 (or “use sensible placeholders”).

After confirmation, implementation proceeds in order: `npm create next-app@14` (App Router, TS, Tailwind, no src dir to match spec), add `framer-motion` + `lucide-react`, then files above.
