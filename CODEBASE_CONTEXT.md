# orbbt. Landing Page — Codebase Context

> Single-source context document for sharing the orbbt. landing page codebase with other LLMs.
> Product: **orbbt.** — a job application tracker / job hunt organizer SaaS landing page prototype.

---

## 1. Project Overview

**orbbt.** (built by **Zyntro**) is a calm job application tracker and job hunt organizer SaaS. This repository is the **static landing page prototype** — a multi-page marketing site built as self-contained HTML files (no build step, no framework, no backend).

### Product positioning
- Tagline: *"Your job hunt, organized."*
- Description: A calm job application tracker and job hunt organizer with AI company research, deadline reminders, contact notes, and job search tracking across **web, mobile, and Chrome extension**.
- Target audience: students, graduates, active job seekers, career switchers, repeat applicants.
- Core promise: brings scattered job-hunt artifacts (tabs, emails, notes, calendars, spreadsheets) into one calm place.

---

## 2. Tech Stack & Architecture

- **Pure static HTML/CSS/JS** — no framework, no bundler, no package manager.
- Each page is a standalone `.html` file with inline `<style>` and `<script>` blocks.
- No shared component system; styling/markup is duplicated per page but kept visually consistent via shared CSS custom properties and class names.
- Fonts loaded from Google Fonts CDN (`Inter`, `Geist Mono`, `Instrument Serif`), saved locally per page in `*_files/css2` and `*_files/css2(1)`.
- Logo asset `orbbt-logo.png` lives in each page's `*_files/` folder.
- Production/deployed URL root: `https://danish-shah-cyber.github.io/orbbt-landing-page/`
- Forms are **demo-only** — JS intercepts submit, shows "Saved for demo. Connect this form to your backend later." No real submission logic.

---

## 3. File Structure

```
landing-page-prototype/
├── index.html                  # Main landing page (hero, features, pricing, FAQ, footer)
├── auth.html                   # Sign up / Log in page
├── waitlist.html               # Mobile app waitlist signup
├── privacy-policy.html
├── refund-policy.html
├── terms-and-conditions.html
├── auth_files/                 # Local font CSS + logo for auth.html
├── waitlist_files/             # Local font CSS + logo for waitlist.html
├── privacy-policy_files/
├── refund-policy_files/
└── terms-and-conditions_files/
```

Note: `index.html` references its assets (`orbbt-logo.png`, `app-preview.png`) relative to its own folder (not a `*_files/` subfolder), while the other pages reference their `*_files/` subfolders because they were saved from the deployed GitHub Pages URL.

---

## 4. Design System

### Color tokens (CSS custom properties)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#fbfaf6` | Page background (warm off-white) |
| `--paper` | `#ffffff` | Cards / panels |
| `--ink` | `#111111` | Primary text, featured card |
| `--muted` | `#6d6a64` | Body / paragraph text |
| `--soft` | `#a6a19a` | Eyebrow labels, faint text |
| `--line` | `#e8e2d8` | Borders / dividers |
| `--violet` | `#4d1fe8` (index) / `#5b24ff` (subpages) | Primary accent / buttons |
| `--violet-soft` | `#f0ebff` | Accent fills |
| `--mint` / `--mint-soft` | `#b9f2cc` / `#effcf4` | Decorative |
| `--pearl` | `#fff6db` | Decorative background wash |
| `--green` / `--green-soft` | `#168a45` / `#effaf1` | Positive comparison col |
| `--red` / `--red-soft` | `#bd3f32` / `#fff0ed` | Negative comparison col |
| `--max` | `1040px` (index) / `980px` / `760px` | Content width |

> Note: `index.html` uses `--violet: #4d1fe8`; the subpages use `--violet: #5b24ff`. Minor inconsistency — index is the source of truth for the richer palette.

### Typography
- Primary font: **Inter** (400–800) — body, headings, UI.
- Mono accent: **Geist Mono** (500–700) — eyebrow labels, step numbers, footer-small.
- Serif accent: **Instrument Serif** (italic available) — referenced though lightly used.
- Type scale uses `clamp()`: h1 `clamp(33px, 5.8vw, 65px)`, h2 `clamp(25px, 3.8vw, 43px)`.

### Visual language
- Animated gradient "page wash" background (violet → mint → pearl) with `pageWash` and `pageVeil` keyframes.
- Orbital motif: concentric `border-radius: 50%` rings + orbiting dots (`orbitBreathe`, `orbitSpin`) in the hero and waitlist orbit graphic.
- Floating "signal" chips in hero (Track applications / Research companies / Remember deadlines / Follow up) — **pointer-draggable** via JS pointer events.
- Reveal-on-scroll using `IntersectionObserver` adding `.visible` to `.reveal` elements.
- Pills, soft shadows, blurred accent halos behind image cards (`::before` blur halos).
- All buttons are pill-shaped (`border-radius: 999px`). Primary = filled violet; secondary = white with line border.
- Responsive: mobile breakpoint at `max-width: 860px` collapses grids to single column, swaps nav links to a mobile menu.

---

## 5. Page-by-Page Breakdown

### 5.1 `index.html` — Main landing page
The flagship page. Sections in order:

1. **Topbar / Nav** (sticky, blur backdrop)
   - Brand: `orbbt.` logo + `by zyntro` sub-label.
   - Links: Features, Pricing, Contact, Waitlist (mobile app), Policies dropdown (Privacy / Terms / Refund).
   - Actions: `Log in` + `Sign up — for free` (stacked primary btn).
   - Mobile hamburger toggles `.nav-links.open`.

2. **Hero** (`#home`)
   - Eyebrow: "Job application tracker and job hunt organizer".
   - H1: "Your job hunt, organized."
   - Lead: "Track applications, research companies, remember deadlines, and follow up from one calm place."
   - Benefit row: Job application tracker · AI company research · Deadline reminders · Contact management.
   - CTAs: "Try free on web" (→ auth.html), "Join mobile app waitlist" (→ waitlist.html).
   - Draggable floating signal chips + animated orbit rings/dots.
   - Small note: "Built by Zyntro for students, graduates, active job seekers, and career switchers."

3. **Product preview** — H2 "A quiet place for a very busy search." + `app-preview.png` in a framed card with blurred violet halo.

4. **Trust strip** — 3-col grid: "Built by Zyntro", "Early access opening soon", "Made for active job seekers".

5. **Problem statement** (narrow) — "Your job search should not live in ten places."

6. **Our story** (2-col) — "We wanted the job hunt to feel lighter." + narrative copy.

7. **Features** (`#features`)
   - Tabbed showcase with 4 features, JS swaps content on click:
     - **Tracker (Feature 01)** — "Track every role without losing the thread."
     - **Research (Feature 02)** — "Know the company before you apply." (AI company research)
     - **Deadlines (Feature 03)** — "Never let the next step go quiet."
     - **Contacts (Feature 04)** — "Remember the people behind the process."
   - Each tab populates eyebrow/title/body/points list/image via `featureData` JS object.

8. **How it works** (narrow) — 3 steps: Save a role → Get the context → Know what is next. Platform pills: Mobile app · Web · Chrome extension.

9. **Before & after comparison** — "Spreadsheets track data. orbbt. tracks momentum."
   - Bad col (red): jobs scattered, research repeated, deadlines rely on memory, contacts disappear.
   - Good col (green): every application has a home, company context ready, follow-ups visible, relationships organized.

10. **Pricing** (`#pricing`) — "Free during early access." 3 tiers:
    - **Early Access** — $0/mo: job tracking, basic reminders, contacts/notes, web. CTA: Try free.
    - **Planned Pro** (featured, dark card, "Soon"): unlimited jobs, AI company research, advanced reminders, mobile app + Chrome extension. CTA: Go Pro.
    - **Campus and Teams** — "Custom": shared workspace, member insights, priority support. CTA: Send enquiry (→ contact).

11. **Contact** (`#contact`)
    - Links: hello@orbbt.co (Contact), support@orbbt.co (Support), Instagram @orbbt, LinkedIn orbbt.
    - Demo form: Name / Email / Message → "Saved for demo…"

12. **Final CTA** — "Ease your mind. Focus on what matters." + Try free / Waitlist buttons.

13. **FAQ** (`#faq`) — accordion (click to toggle `.open`). 4 Q&As:
    - What is orbbt.? / Is orbbt. a job tracker? / Does orbbt. have a mobile app? / How is orbbt. different?

14. **Footer** — 3 cols: Product (Features, Pricing, Try it) · Resources (Privacy, Support, Terms, Refunds) · Connect (Instagram, X, LinkedIn, YouTube). Bottom: brand logo + "Copyright 2026 orbbt."

### 5.2 `auth.html` — Sign up / Log in
- 2-col grid: left = headline "Start organizing your job hunt." + explainer; right = auth panel.
- Tabs: **Sign up** (Name/Email/Password → Create account) and **Log in** (Email/Password → Log in). JS toggles `.active` on forms and tabs.
- Demo note: "Saved for demo. Connect this form to your backend later."
- Footer link to waitlist for early access.

### 5.3 `waitlist.html` — Mobile app waitlist
- 2-col grid: left = headline "Get early access to the orbbt. mobile app." + animated orbit graphic with App Store / Play Store chips; right = form (Name / Email / "What describes you?" → Join mobile app waitlist).
- Demo submit note: "Connect this form to your waitlist backend later."
- Waitlist targets App Store + Play Store early-access waves (iOS + Android planned).

### 5.4 `privacy-policy.html`
- Short policy: data used (account, job entries, contacts, notes, form messages) for tracking, research, reminders, account access, support, analytics, security.
- "We do not sell your personal job hunt data."
- Control: request deletion/correction via support@orbbt.co.
- Cross-links to Terms and Refund.

### 5.5 `refund-policy.html`
- Future paid-plan refund eligibility depends on plan, billing period, usage.
- Billing issues: contact support@orbbt.co within 14 days.
- Free trial allowed before upgrading.
- Exceptions: no refunds for abuse, policy violations, or completed custom campus/team services.

### 5.6 `terms-and-conditions.html`
- Responsible use + accurate account info required.
- Product scope: organizes job hunt, **does not guarantee** interviews/offers/employer responses.
- Acceptable use: no misuse, unauthorized access, scraping restricted systems, or uploading content without permission.
- Service changes: features/plans/availability may evolve.

---

## 6. Key Interactions / JS (index.html)

- **Mobile menu**: `#menu` toggles `.open` on `#navLinks`, updates `aria-expanded`.
- **Reveal on scroll**: `IntersectionObserver` (threshold 0.12) adds `.visible` to all `.reveal` elements.
- **Feature tabs**: `featureTabs.forEach` swaps `featureEyebrow`, `featureTitle`, `featureBody`, `featurePoints` (rebuilt list), `featureImage` src/alt from the `featureData` object.
- **Draggable hero signals**: each `.hero-signal` uses pointer events (`pointerdown`/`pointermove`/`pointerup`/`pointercancel`) with `setPointerCapture` to translate the chip; adds `.dragging` class to disable transition while dragging.
- **FAQ accordion**: `.faq-question` toggles `.open` on parent `.faq-item`; answer uses `grid-template-rows: 0fr → 1fr` transition.
- **Demo forms**: all `<form>` submits `preventDefault()` and inject a violet `.form-note` saying forms are demo-only.

---

## 7. Brand & Copy Voice

- Name: **orbbt.** (always with trailing period in copy). Parent: **Zyntro** ("by zyntro").
- Support emails: `hello@orbbt.co`, `support@orbbt.co`.
- Socials placeholder: Instagram `@orbbt`, LinkedIn `orbbt.`, X, YouTube (links are `#` placeholders).
- Tone: calm, light, confident, slightly poetic ("a quiet place for a very busy search", "Spreadsheets track data. orbbt. tracks momentum.").
- Copyright: "Copyright 2026 orbbt."

---

## 8. Known Inconsistencies / Notes for LLMs

1. **Violet hex differs**: `index.html` `--violet: #4d1fe8`; subpages `--violet: #5b24ff`. Pick `#4d1fe8` for canonical index redesigns.
2. **Asset paths**: `index.html` uses bare `orbbt-logo.png` / `app-preview.png`; the other 5 pages use `./<page>_files/...` (saved-from-URL artifacts). When editing `index.html`, keep bare paths; when editing subpages, keep `*_files/` paths — or normalize all to a single `/assets` folder in a future refactor.
3. **`app-preview.png`** is referenced in `index.html` but lives only at the repo root (used by hero product preview + all 4 feature tab images, which all point at the same file).
4. References to deployed URLs (`https://danish-shah-cyber.github.io/orbbt-landing-page/...`) are baked into the saved subpages' internal links; `index.html` uses clean relative paths (`auth.html`, `waitlist.html`, `privacy-policy.html`, etc.). Prefer the clean relative form.
5. **No real backend / form handling** — every form is a demo stub. Auth, waitlist, and contact all need wiring.
6. The subpages contain an empty `<style>undefined</style>` tag — inert artifact from the page-saver tool; safe to remove.
7. Mobile app is **planned** (iOS + Android), not yet shipped — only the waitlist exists.

---

## 9. How to Use This Context

When asking another LLM to extend or modify this codebase:
- Treat `index.html` as the design-system source of truth (palette, type scale, component styles).
- Keep the calm, minimal aesthetic — no heavy dashboards, no cluttered tables.
- Preserve the orbital / signal-chip motif and reveal-on-scroll behavior for brand consistency.
- Wire demo forms to a real backend only when explicitly requested.
- Keep pages self-contained static HTML unless migrating to a component framework.

---

*Generated from the `landing-page-prototype/` workspace. All copy, structure, and interactions reflect the current state of the HTML files as of this document's creation.*