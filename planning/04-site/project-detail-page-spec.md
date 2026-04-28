# Project Detail Page Spec

Status: Active V1.2
Owner: Codex + Cheker Hassan
Last updated: 2026-04-28
Depends on: `project-gallery-spec.md`, `content-model-and-portfolioData-mapping.md`, `../03-content/flagship-project-briefs.md`
Feeds into: Future project detail page implementation

## Scope
Detail pages are in scope for:
- flagship projects
- selected directed products

## Default detail-page set
- `checkauto-tn`
- `devispilot`
- `sahara`
- optional directed-product detail pages:
  - `local-arcads`
  - `flashforge`
  - `context-assistant`

## Page structure
1. Hero
2. Problem
3. System framing
4. What I built / What I directed
5. Architecture summary
6. Stack
7. Proof and media
8. Current status
9. CTA footer

## Hero
Must include:
- project title
- concise tagline
- maturity signal
- primary CTA
- secondary CTA when safe
- quick stack strip
- one role summary line

## Problem
- what real problem the product addresses
- who the user or buyer is
- why the workflow is painful without the product

## System framing
- what kind of product/system this is
- why the workflow matters
- what makes it operationally serious rather than demo-like

## What I built / What I directed
- separate hands-on work from product/delivery direction
- use builder + director framing where relevant
- preferred split:
  - `Built`
  - `Directed`
  - `Structured`

## Architecture summary
- short explanation, not a full engineering document
- mention notable subsystems and orchestration patterns
- 80 to 160 words target
- include 3 to 6 bullet signals max

## Proof and media
- screenshots
- architecture references
- repo/docs/demo links
- include a proof note if public code is partial or sensitive

## Current status
Use one of:
- active
- in development
- private demo
- concept with working architecture

## CTA footer
Allowed CTAs:
- View code
- Request walkthrough
- View project
- Back to portfolio

## Content limits
- do not turn detail pages into engineering essays
- each page should be scannable in under 90 seconds
- every section must earn its space with proof or clarity

## Routing recommendation
- use stable slugs based on public names
- route examples:
  - `/projects/checkauto-tn`
  - `/projects/devispilot`
  - `/projects/sahara`
- legacy names should redirect or be mentioned inside content, not own duplicate routes
