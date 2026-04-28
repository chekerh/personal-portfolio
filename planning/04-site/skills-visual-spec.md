# Skills Visual Spec

Status: Active V1
Owner: Codex + Cheker Hassan
Last updated: 2026-04-27
Depends on: `site-architecture.md`, `../03-content/master-profile.md`
Feeds into: Future `About`/skills section rebuild in `salimov`

## Objective
Replace the current decorative skills block with a clearer, more credible skills section that supports scanning, grouping, and narrative positioning.

## Problem to solve
Current issues:
- skills are stored as two-item tuples with no grouping logic
- every item uses the same generic code icon
- the layout looks decorative but says little about depth
- ordering and relationships between technologies are unclear
- the section does not communicate strength areas versus supporting tools

## Section goal
The skills section should communicate capability, not just inventory.

It must show:
- core engineering domains
- strongest technologies
- supporting tools and ecosystems
- enough structure to reinforce the operator-builder positioning

## Recommended content model
Use grouped skills instead of flat pairs.

Suggested top-level groups:
- Frontend
- Backend
- Data
- Mobile / Platform
- Delivery / Product Systems

## Recommended initial grouping
- Frontend: React, Next.js, JavaScript, TypeScript
- Backend: Node.js, NestJS, Spring Boot, Express
- Data: PostgreSQL, MongoDB, SQLite, Prisma
- Mobile / Platform: Android, SwiftUI, Electron, Arduino
- Delivery / Product Systems: Jira planning, GitHub workflows, roadmap framing, QA coordination

## Visual direction
Preferred pattern:
- section title
- short intro sentence
- vertical list of groups
- each group contains a heading, optional descriptor, and wrap layout of skill items

Why:
- reads naturally in vertical page flow
- scales better than paired columns
- supports future edits without redesign
- lets non-code strengths appear concretely without feeling fake

## Skill item variants
### Core
- highest visual emphasis
- used for strongest tools and languages

### Strong
- medium emphasis

### Working
- lighter emphasis

Do not show numeric proficiency bars or percentages.

## Icon rules
- use recognizable icons when available
- no icon should be required for comprehension
- if icons are mixed quality, prefer text-first chips over noisy inconsistency
- avoid repeating the same generic code icon for every item

## Copy rules
- keep item labels short
- use group descriptions sparingly
- avoid empty soft-skill lists
- if delivery/system abilities are included, word them concretely

## Responsive behavior
### Mobile
- single-column group stack
- chips wrap naturally
- no horizontal overflow

### Tablet and desktop
- still primarily vertical
- group cards may render in two columns if readability stays high
- item chips should wrap within the card rather than force equal-width columns

## Motion
Allowed:
- subtle reveal on scroll
- small hover/focus lift
- staggered group entrance if reduced motion is respected

Not allowed:
- constant floating motion
- flip effects
- motion that makes labels harder to read

## Acceptance criteria
- skills are rendered from grouped objects, not two-item tuples
- the section works naturally in vertical scroll
- users can identify strongest capability areas quickly
- the UI looks structured and credible without relying on decorative geometry
- desktop and mobile both avoid awkward overflow
