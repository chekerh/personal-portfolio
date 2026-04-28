# Project Gallery Spec

Status: Active V1
Owner: Codex + Cheker Hassan
Last updated: 2026-04-27
Depends on: `site-architecture.md`, `../03-content/featured-projects.md`
Feeds into: Future `Portfolio` section rebuild in `salimov`

## Objective
Replace the current `Swiper` portfolio carousel with a scroll-native gallery that presents featured work clearly, quickly, and without interaction traps.

## Problem to solve
Current gallery issues:
- projects are hidden behind carousel navigation
- desktop gallery behavior is coupled to the old template layout
- content density is too high inside a single slide
- users cannot easily scan or compare projects
- keyboard and scroll exploration are weaker than they should be

## Gallery role in the site
The gallery is the main proof section of the portfolio.

It must answer:
- What has he built?
- What kind of products does he work on?
- How technical is the work?
- What role did he play?
- Which projects deserve a deeper look?

## Content scope
### Items shown
Show only featured and support projects in the main gallery/catalog experience.

Initial count target:
- 5 flagship projects in large format
- 6 to 10 support or family projects in grouped catalog format

### Ordering rule
Sort manually by strongest hiring signal, not alphabetically.

Recommended order logic:
1. flagship product depth
2. strongest engineering credibility
3. clearest product ownership
4. breadth across SaaS, AI, systems, and operations

## Card model
Each project card must include:
- project title
- one-line positioning or tagline
- preview image
- short summary, 2 to 3 lines max
- project type
- stack
- role or product focus
- primary CTA

Optional:
- status badge
- year
- outcome or proof point
- secondary CTA such as source code or walkthrough request

## CTA rules
### Primary CTA
Use one clear primary action per card:
- `View project`
- `View code`
- `Request walkthrough`

### Secondary CTA
Optional and lower emphasis:
- `GitHub`
- `Case study`
- `Live demo`

If a public link does not exist, fall back to a contact-oriented CTA instead of rendering empty buttons.

## Layout specification
### Mobile
- single-column stack
- full-width cards
- image first
- generous spacing to prevent crowding

### Tablet
- prefer single-column if card content is text-heavy
- two-column layout is acceptable only if summaries remain easy to scan

### Desktop
Preferred default:
- editorial vertical flagship blocks followed by a two-column responsive support grid

Not allowed:
- horizontal scroll region
- snap carousel as primary layout
- cards that require hover to reveal core text

## Interaction model
- native page scroll reveals projects in order
- cards may have subtle hover/focus treatment
- no swipe dependency
- no pagination dots
- no prev/next arrows
- no nested scroll containers for the gallery

Optional later:
- filter chips if they help and do not hide projects by default
- expandable inline details if they remain accessible

## Visual hierarchy
Per card, priority order is:
1. title
2. value statement
3. image
4. stack and metadata
5. CTA

Avoid long metadata lists copied from the current slide design. Compress information into scannable labels.

## Data notes
- Source should begin from `featuredProjects` and later evolve into a richer project model
- Every featured project needs one large image and one compact metadata set
- Card copy should align with the same naming normalization used by the CV and profiles

## Empty / missing data rules
- if no public link exists, show `Request walkthrough`
- if no outcome metric exists, omit the outcome row
- if image is missing, use a stable placeholder with project title
- if stack is long, trim on card and reserve the full list for later detail views

## Acceptance criteria
- gallery uses normal document flow on all breakpoints
- every featured project is visible without carousel interaction
- cards are easy to compare while scrolling
- CTA logic handles public and private projects cleanly
- no layout depends on Swiper
- card content remains readable at mobile widths
- keyboard users can traverse the gallery without confusion
