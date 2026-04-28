# Featured Projects

Status: Active V1
Owner: Codex + Cheker Hassan
Last updated: 2026-04-27
Depends on: `project-inventory.md`, `project-families.md`
Feeds into: Homepage structure, project gallery, pinned repos, resume emphasis, LinkedIn featured items

## Selection logic
Projects are featured based on:
- clarity of buyer or user
- clarity of problem solved
- technical depth
- demoability in a short review
- strength of public narrative
- relevance to the target brand system

## Visibility tiers
- `Flagship`: appears in large, narrative format on the site and anchors public brand perception
- `Top Support`: appears prominently and reinforces the flagship narrative with strong public proof
- `Support Project`: appears publicly but reinforces a stronger flagship narrative
- `Directed Product`: active product in supervised development; public-facing with clear in-development framing
- `Product Family Member`: catalog-level visibility only
- `Hidden / Internal`: tracked in planning, not surfaced as a primary public project

## V1 flagship set
### 1. CheckAuto TN
- Internal repo: `autoverif`
- Family: Trust / Verification / Security
- Why it leads: mature monorepo, real market problem, billing/admin/reporting foundation, strong operations story
- Public use: homepage flagship, CV mention, GitHub pin candidate, LinkedIn featured candidate

### 2. DevisPilot
- Internal repo: `DevisPilot`
- Family: SMB SaaS Operations
- Why it leads: clear SMB SaaS value, WhatsApp-first local-market distribution angle, multi-tenant commercial logic
- Public use: homepage flagship, CV mention, GitHub pin candidate, LinkedIn featured candidate

### 3. Sahara
- Internal repo: `myownide`
- Family: Developer Tools / Infrastructure
- Why it leads: high technical ambition, developer-tool differentiation, strong “serious builder” signal
- Public use: homepage flagship, CV mention, GitHub pin candidate, technical interview anchor

### 4. graphify
- Internal repo: `graphify`
- Family: Developer Tools / Infrastructure
- Why it leads: distinctive tooling story, broad artifact analysis, easy-to-explain technical moat, but use with public-framing caution
- Public use: homepage top support, GitHub pin candidate

## V1 top-support set
- `graphify`
- `TrustKit`
- `PricePilot`
- `DentoFlow`

## V1 support set
- `UtopiaHire`
- `UberMoto`
- `Attaque`

## V1 directed-product set
### 1. Local-Arcads
- Internal repo: `sonofarcads`
- Family: AI Creative Tools / Local-First Media
- Why it is featured: architecture docs, runtime profiles, monetization thinking, and active supervised development make it a strong ecosystem bet even before public maturity
- Public use: homepage directed-product section, detail-page candidate, CV selective

### 2. FlashForge
- Internal repo: `replicate`
- Family: AI Creative Tools / Local-First Media
- Why it is featured: clearer API/web/shared pipeline structure and easier short-form explanation than many experimental AI repos
- Public use: homepage directed-product section, detail-page candidate

### 3. Context Assistant
- Internal repo: `AI-interview`
- Family: Developer Tools / Productivity
- Why it is featured: strong local supervision signals across QA, improvement, and release-hardening workspaces
- Public use: directed-product section or support catalog

### 4. SignLik
- Internal repo: `/Users/mac/IEEE/IEEE-SightAIModel`
- Family: Health / Social Impact
- Why it is featured: meaningful accessibility angle, multiple technical surfaces, and credible builder + director framing
- Public use: directed-product section, CV selective

### 5. CogniCare
- Internal repos:
  - `cognicare`
  - `/Users/mac/IEEE/cognicare-ieee`
- Family: Health / Social Impact
- Why it is featured: strong social-impact narrative and enough local/public evidence to keep it visible as an active product direction
- Public use: directed-product section or support catalog

## Current hidden/internal defaults
- `adcreation`
- `coffeewebsite`
- `trackhub` unless its product story is normalized
- nested internal workspaces such as `continuation-workspace`, `delivery-workspace`, `full-app-qa-workspace`, `improvement-workspace`, `release-hardening-workspace`, `project-architecture`

## Promotion rules
A project can move from `Support Project` to `Flagship` only if:
- it has a clear product story
- at least one strong visual asset exists
- the stack and contribution framing are confirmed
- it can be explained in under three minutes without confusion

A project can move from `Directed Product` to `Flagship` or `Top Support` only if:
- the in-development story becomes publicly legible
- the role framing stays interview-defensible
- there is enough proof to avoid speculative founder-style positioning

## Demotion rules
A project should move down if:
- it duplicates a stronger project story
- public proof is too weak
- the product name is confusing
- it creates more questions than confidence
