# Flagship Proof Bank

Status: Active V1.2
Owner: Codex + Cheker Hassan
Last updated: 2026-04-28
Depends on: `project-inventory.md`, `featured-projects.md`, `naming-normalization.md`
Feeds into: Homepage flagship blocks, project detail pages, CV bullets, LinkedIn Featured, GitHub pins

## Purpose
Record proof quality, safe claims, and CTA policy for each flagship so public copy stays ambitious but interview-defensible.

## Proof levels
- `Confirmed`: supported by README, architecture, code structure, or visible artifact
- `Strong local proof`: deeply supported locally but weaker as public proof
- `Public proof`: repo/demo/README is strong enough for public-first presentation
- `Sensitive`: needs careful ownership or maturity framing

## Flagship records
### CheckAuto TN
- Internal repo: `autoverif`
- Proof level: Confirmed + public-proof ready
- Sources:
  - `/Users/mac/autoverif/README.md`
  - `/Users/mac/autoverif/checkauto-tn-workspace/AGENTS.md`
  - repo structure with web/api/packages and release-hardening workspace
- Safe claims:
  - trusted used-car verification platform
  - monorepo with Next.js, NestJS, Prisma, PostgreSQL, Redis, BullMQ
  - auth, RBAC, reports, billing foundations, admin operations
  - production-oriented system with async workflows
- Avoid:
  - claiming live commercial traction unless separately proven
  - claiming solo ownership of every implementation detail
- CTA type:
  - primary `View code`
  - secondary `Case study` when detail page exists
- Interview-safe emphasis:
  - strong system thinking
  - trust workflow
  - admin-heavy product maturity

### DevisPilot
- Internal repo: `DevisPilot`
- Proof level: Confirmed + public-proof ready
- Sources:
  - `/Users/mac/DevisPilot/README.md`
  - `/Users/mac/DevisPilot/docs/ROADMAP.md`
  - `/Users/mac/DevisPilot/AGENTS.md`
- Safe claims:
  - multi-tenant SaaS for Tunisian service businesses
  - lead capture, mini-CRM, onboarding, demo-oriented commercial logic
  - WhatsApp-first product distribution thinking
- Avoid:
  - claiming paying customers without evidence
- CTA type:
  - primary `View code`
  - secondary `Case study`
- Interview-safe emphasis:
  - SaaS logic
  - operator workflows
  - local-market product judgment

### Sahara / MyOwnCursor
- Internal repo: `myownide`
- Public name: `Sahara`
- Continuity note: mention `MyOwnCursor` secondarily only where legacy naming matters
- Proof level: Confirmed + public-proof ready
- Sources:
  - `/Users/mac/myownide/README.md`
  - `/Users/mac/myownide/docs/project-architecture`
  - Electron/renderer/server/shared structure
- Safe claims:
  - local AI-powered IDE / developer tool
  - Electron, React, TypeScript, Monaco, local agent workflows
  - serious tooling ambition beyond standard app CRUD
- Avoid:
  - claiming full market adoption
  - splitting `Sahara` and `MyOwnCursor` into separate products
- CTA type:
  - primary `View code`
  - secondary `Case study`
- Interview-safe emphasis:
  - developer-tool ambition
  - local-first architecture
  - product thinking beyond CRUD

### graphify
- Internal repo: `graphify`
- Proof level: Sensitive but technically strong
- Sources:
  - repo structure
  - public GitHub visibility
- Safe claims:
  - knowledge-graph and analysis-oriented developer tooling
  - strong technical-reference project
- Avoid:
  - presenting as the cleanest ownership-first flagship until repo framing is tightened
- CTA type:
  - primary `View code`
  - secondary `Technical reference`
- Interview-safe emphasis:
  - analysis workflows
  - technical range
  - tooling seriousness

### TrustKit
- Internal repo: `trustkit`
- Proof level: Confirmed + strong public-proof candidate
- Sources:
  - `/Users/mac/trustkit/README.md`
  - `/Users/mac/trustkit/docs`
- Safe claims:
  - testimonial collection SaaS
  - embeddable wall/widget
  - billing and trial logic
  - crisp buyer story for SMBs
- Avoid:
  - overstating scale or adoption
- CTA type:
  - primary `View code`
  - secondary `View project`
- Interview-safe emphasis:
  - crisp SMB buyer story
  - monetization logic
  - proof-focused product thinking

### PricePilot
- Internal repo: `pricepilot`
- Proof level: Confirmed + support-ready
- Sources:
  - local repo structure
  - stack visibility
- Safe claims:
  - SaaS pricing and commercial workflow product
  - React/Vite plus NestJS/Prisma/PostgreSQL stack
- Avoid:
  - overstating product maturity if assets remain thin
- CTA type:
  - primary `View code`
  - secondary `Case study` only if visuals improve

### DentoFlow
- Internal repo: `dentistmanagmentsystem`
- Proof level: Confirmed + support-ready
- Sources:
  - local repo structure
  - stack and workflow visibility
- Safe claims:
  - clinic operations system
  - patient, staff, and admin workflow handling
  - operational SaaS logic in a healthcare context
- Avoid:
  - implying real clinic deployment unless separately shown
- CTA type:
  - primary `View code` or `View project`
  - secondary `Case study`

### Local-Arcads
- Internal repo: `sonofarcads`
- Proof level: Strong local proof, sensitive public maturity
- Sources:
  - `/Users/mac/sonofarcads/README.md`
  - `/Users/mac/sonofarcads/architecture/documentation/README.md`
  - `/Users/mac/sonofarcads/architecture/documentation/system-overview.md`
  - `/Users/mac/sonofarcads/architecture/documentation/runtime-profiles.md`
  - `/Users/mac/sonofarcads/architecture/documentation/monetization-and-ops.md`
  - `/Users/mac/sonofarcads/architecture/documentation/roadmap.md`
  - `/Users/mac/sonofarcads/config.yaml`
  - `/Users/mac/sonofarcads/pyproject.toml`
  - `/Users/mac/sonofarcads/web/package.json`
- Safe claims:
  - cross-hardware local video ad generation platform in active development
  - Apple Silicon-first with broader runtime-profile design
  - local-first subscription software direction
  - architecture, monetization, runtime, and pipeline thinking already documented
- Avoid:
  - implying a public launch or broad public availability
  - pretending it is already mature consumer software
- CTA type:
  - primary `Case study`
  - secondary `Request walkthrough`
- Interview-safe emphasis:
  - supervised product direction
  - architecture maturity
  - local-first runtime strategy

### FlashForge
- Internal repo: `replicate`
- Proof level: Strong local proof
- Sources:
  - `/Users/mac/replicate/README.md`
  - `/Users/mac/replicate/architecture.md`
  - `/Users/mac/replicate/docs/architecture.md`
  - `/Users/mac/replicate/docs/PROJECT_STATE.md`
  - `/Users/mac/replicate/docs/roadmap.md`
- Safe claims:
  - local-first short-video production pipeline
  - API/web/shared/pipeline architecture
  - active supervised development with documented structure
- Avoid:
  - implying finished public product maturity
- CTA type:
  - primary `Case study`
  - secondary `Request walkthrough`

## Homepage proof policy
- Flagship blocks can use:
  - `View code`
  - `Case study`
- Directed-product blocks default to:
  - `Case study`
  - `Request walkthrough`
- `View project` should only appear when there is a real public destination worth opening

## Proof-strip candidate signals
- 11 years coding
- multiple architecture/delivery/release-hardening workspaces across products
- multilingual communication
- Greece + remote readiness
