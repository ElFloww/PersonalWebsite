# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Vue 3 + TypeScript + Vite + vue-router + vue-i18n + Vuetify, as on `develop`. A Tailwind-based rebuild with a "market stall" look was tried and rejected by the user; do not revisit it. Stack for any future change is open (Tailwind was requested earlier).

## Users
Primary: recruiters, tech hiring teams and peers who want to know who Florent Dubut is. He is now a Full-Stack .NET software engineer on a permanent contract (CDI) at Orange Business since September 2026; the site is no longer a job search. Bilingual audience (FR primary, EN available).

## Product Purpose
Personal portfolio of Florent Dubut, Full-Stack .NET & DevOps developer. Success: a visitor understands his profile and contacts him or downloads the CV. Do not present him as job-seeking or give availability dates.

## Positioning
Full-stack .NET plus DevOps: backend APIs and clean architecture, through to CI/CD and containerised deployment, with enough Vue.js to work well with front-end teams. Approach: understand the business need first, design the database and API contracts, build clean testable code, fix bugs at the root and add a test.

## Operating Context
Visitors are recruiters short on time, often on first contact with his name. The site must state the job search and location immediately. FR and EN versions both exist.

## Capabilities and Constraints
- Sections to preserve in content: about, experience, education, skills, projects, contact, CV PDF download.
- Contact form via EmailJS (see README-EMAIL.md).
- FR/EN i18n with vue-i18n; locale files in `src/assets/locales/`.
- Light/dark theme support (`useAppTheme`).
- Google Analytics gated by a consent banner (`CookieConsent.vue`, `analyticsConsent.ts`); this consent behaviour must be preserved.
- External links: GitHub, LinkedIn, Mastodon, email.
- Layout, visual style and component library are open to full replacement.

## Brand Commitments
Name: Florent Dubut. The visual spirit is the one on `develop`: modern, white, with his green (user confirmed; the dark "market stall" direction was rejected). His green is his signature colour ("MA COULEUR", user confirmed) and must stay the main accent of the whole site. Current values: #4a8f68 (accent), #2f6d4e (strong), #e8f4ee (soft). Exact shades may be refined, but the hue family stays.

## Evidence on Hand
Real content in `src/assets/locales/{fr,en}.json`. Images in `src/assets/images/`: profile photos, project visuals (kairos, tuuuur, homelab), school and employer logos (Orange Business, INSSET, UPJV). CV PDF in `public/files`. No testimonials, client names or metrics are on hand; do not invent any.

## Product Principles
1. Say the essentials in the first viewport: who, what role, where, available when.
2. Prove with real projects and experience, never with invented claims.
3. Show engineering rigour (architecture, tests, CI/CD) in the site's own craft.
4. Make contacting him or getting the CV one step from anywhere.
5. FR and EN are equal citizens.

## Accessibility & Inclusion
No specific standard was requested. Treat WCAG AA as the baseline.
