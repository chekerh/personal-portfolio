# Project Inventory

Status: Active V1
Owner: Codex + Cheker Hassan
Last updated: 2026-04-27
Depends on: `master-profile.md`
Feeds into: Family taxonomy, featured selection, website catalog, CV selection, GitHub and LinkedIn strategy

## Inventory rules
- One row represents one public-facing product entity.
- Nested workspaces are not separate products.
- Visibility now supports an explicit supervised-development layer:
  - `Flagship`
  - `Top Support`
  - `Support`
  - `Directed Product`
  - `Product Family Member`
  - `Hidden / Internal`
- `Evidence` reflects current confidence:
  - `Confirmed`
  - `Partially confirmed`
  - `Narrative-only`

## Current V1 inventory
| Public name | Internal repo | Family | Visibility | Evidence | Stack / product notes | Public use |
| --- | --- | --- | --- | --- | --- | --- |
| CheckAuto TN | `autoverif` | Trust / Verification / Security | Flagship | Confirmed | Next.js 15, React 19, NestJS 11, Prisma, PostgreSQL, Redis, BullMQ | Site flagship, CV, GitHub pin, LinkedIn featured |
| DevisPilot | `DevisPilot` | SMB SaaS Operations | Flagship | Confirmed | Next.js SaaS, Prisma, PostgreSQL, Clerk, WhatsApp-first local-market flow | Site flagship, CV, GitHub pin, LinkedIn featured |
| Sahara | `myownide` | Developer Tools / Infrastructure | Flagship | Confirmed | Electron, React, TypeScript, Monaco, local AI and agent workflows | Site flagship, CV, GitHub pin, interview anchor |
| graphify | `graphify` | Developer Tools / Infrastructure | Top Support | Confirmed | Knowledge-graph tooling, multimodal codebase analysis, Python packaging; treat as a strong technical reference with public-framing caution where needed | Site top support, GitHub pin candidate |
| TrustKit | `trustkit` | SMB SaaS Operations | Top Support | Confirmed | Testimonial collection SaaS, billing, widgets, Flask app | Site support, SaaS proof |
| PricePilot | `pricepilot` | SMB SaaS Operations | Top Support | Confirmed | React + Vite, NestJS, Prisma, PostgreSQL, Stripe | Site support, SaaS proof |
| DentoFlow | `dentistmanagmentsystem` | SMB SaaS Operations | Top Support | Confirmed | React, TypeScript, Vite, Express, Prisma, SQLite, clinic SaaS | Site support, healthcare operations proof |
| UtopiaHire | `UtopiaHire` | SMB SaaS Operations | Support | Confirmed | React, TypeScript, Node, Express, MongoDB, resume workflows | Site support, CV candidate |
| UberMoto | `ubermoto` | Marketplace / Logistics / Mobility | Support | Confirmed | Delivery marketplace, tracking, NestJS backend, mobile workflows | Site support, systems proof |
| Attaque | `attaque` | Trust / Verification / Security | Support | Confirmed | Fastify, Prisma, PostgreSQL, Redis, BullMQ, Protect/Learn/Community model | Site support, systems proof |
| Local-Arcads | `sonofarcads` | AI Creative Tools / Local-First Media | Directed Product | Confirmed | Local ad-generation platform with architecture, runtime, roadmap, and monetization documentation | Homepage directed-product section, detail-page candidate, CV selective |
| FlashForge | `replicate` | AI Creative Tools / Local-First Media | Directed Product | Confirmed | Local-first short-video production pipeline with API/web/shared architecture | Homepage directed-product section, detail-page candidate |
| YouClipper | `ytbshorts` | AI Creative Tools / Local-First Media | Directed Product | Confirmed | Unified clip workflow with frontend, backend, AI editor service, and delivery workspaces | Directed-product section or catalog |
| Context Assistant | `AI-interview` | Developer Tools / Productivity | Directed Product | Confirmed | Local product direction with context-assistant surfaces, QA and release-hardening workspaces | Directed-product section or support catalog |
| WayFinder | `wayfinder-mobile-dam` | Marketplace / Logistics / Mobility | Directed Product | Partially confirmed | Mobile/logistics direction with project-architecture and backend planning | Directed-product section or later support |
| SignLik | `/Users/mac/IEEE/IEEE-SightAIModel` | Health / Social Impact | Directed Product | Confirmed | Accessibility and ML product ecosystem with backend/frontend/mobile subprojects | Directed-product section, CV selective |
| CogniCare | `cognicare` + `/Users/mac/IEEE/cognicare-ieee` | Health / Social Impact | Directed Product | Confirmed | Health-tech direction with public and local IEEE-linked evidence | Directed-product section, support candidate |
| TrackHub | `trackhub` | Marketplace / Logistics / Mobility | Product Family Member | Confirmed | Monorepo with Expo app and Fastify API; stronger product story still needed | Internal or later directed-product review |
| ForMe | `noor` | Education / Platform | Product Family Member | Partially confirmed | Separate front/back structure, still needs narrative normalization | Later audit |
| adcreation | `adcreation` | AI Creative Tools / Local-First Media | Hidden / Internal | Confirmed | Powerful but broad multi-system media tooling with third-party integrations | Internal reference only for now |
| La Storia Di JoJo | `coffeewebsite` | SMB SaaS Operations | Hidden / Internal | Confirmed | Restaurant/coworking web product with reservations and admin | Internal unless sharper business story is needed |
| openwork-dev | `openwork-dev` | Product Family Member | Partially confirmed | Partially confirmed | Local repo discovered; public narrative not yet normalized | Later audit |
| ideabycursor | `ideabycursor` | Product Family Member | Partially confirmed | Partially confirmed | Local repo discovered; likely tooling/IDE adjacent | Later audit |
| mehdi | `mehdi` | Hidden / Internal | Narrative-only | Needs stronger audit | Later audit |
| flutter | `flutter` | Hidden / Internal | Narrative-only | Generic local folder, likely ecosystem workspace not product | Keep internal |
| python | `python` | Hidden / Internal | Narrative-only | Generic local folder, likely training or experiments | Keep internal |
| portfolio-main | `portfolio-main` | Hidden / Internal | Partially confirmed | Older portfolio-related workspace | Reference only |

## Inventory notes
- The current V1 package is intentionally biased toward projects with real repo structure and readable documentation.
- The inventory now separates mature public anchors from supervised in-development products so the portfolio can show both shipped proof and active ecosystem building without pretending every product is already public-ready.
- Older GitHub-only projects named in `finalportfoliomastersheet.md` remain useful as historical raw inputs, but they are not all in the current local confirmed set.
- A later pass should merge the local confirmed inventory with a refreshed public GitHub audit once tooling or connector access makes that easier.

## Immediate next audit targets
- Reconcile `TrackHub`, `ForMe`, and other partially normalized local products
- Decide which directed products deserve homepage cards versus catalog-only exposure
- Audit `openwork-dev`, `ideabycursor`, and other local directories not yet normalized
- Keep the flagship proof-bank and directed-product registry in sync as hierarchy decisions change
