# Site Architecture

Status: Active V1
Owner: Codex + Cheker Hassan
Last updated: 2026-04-27
Depends on: `../02-strategy/positioning.md`, `../03-content/featured-projects.md`
Feeds into: Future site implementation in `salimov`

## Purpose
Define the target structure for the portfolio site rebuild inside `/Users/mac/PersonalPortfolio/salimov`, replacing the current trapped project carousel and horizontal-scroll assumptions with a fully scroll-native, section-based experience.

## Current constraints
- App is a Next.js 13 `pages/` router site, not an App Router build
- Main page composition lives in `pages/index.js`
- Desktop navigation and active-state logic are coupled to jQuery/custom scrolling assumptions
- The project gallery is currently a `Swiper` slider in `src/components/sections/Portfolio.js`
- Skills are currently rendered from simple tuple data and decorative template structure

## Architecture decision
### Primary direction
Use a native vertical document flow for all breakpoints.

### Non-goals
- Do not preserve horizontal desktop scrolling
- Do not replace the current carousel with another carousel
- Do not add modal-first navigation as the primary way to explore projects
- Do not split the portfolio into many routes unless a clear content need emerges later

## Target page model
### Single-page structure
Keep the site as a single landing page with semantic sections and anchor navigation.

Proposed section order:
1. Hero
2. About / Positioning
3. Skills
4. Flagship Projects
5. Product Families / Full Project Catalog
6. Proof / credibility strip
7. Contact / CTA
8. Footer

### Navigation model
- Header links should use native anchor links to section ids
- Active section state should be driven by `IntersectionObserver`, not width math
- Mobile and desktop nav should share the same section ids and state rules
- Sticky header behavior is acceptable if it improves orientation

## Component boundaries
### Page shell
`pages/index.js`

Responsibilities:
- compose page sections in vertical order
- avoid layout-specific scroll logic
- keep section imports explicit and predictable

### Global behavior
Create a lightweight client behavior layer for:
- nav active state
- optional reveal-on-scroll
- optional progress indicator

This behavior should not depend on jQuery, `mCustomScrollbar`, or section width calculations.

### Section ownership
- `Home` becomes hero and top-level CTA only
- `About` focuses on identity, positioning, and concise background
- `Skills` becomes its own section or a clearly isolated subsection with its own data shape
- `Portfolio` becomes a scroll-native project gallery and catalog section
- `Contact` stays as the closing conversion section
- `Testimonials`, `Clients`, and `Blog` should be retained only if they strengthen the hiring narrative

## Data architecture
Centralize content in `src/content/portfolioData.js` until the file becomes too dense. If needed later, split by concern:
- `profile`
- `skills`
- `projects`
- `proof`
- `contact`

### Project data shape
Required fields:
- `slug`
- `title`
- `tagline`
- `summary`
- `image`
- `alt`
- `role`
- `stack`
- `categories`
- `links`
- `status`
- `featured`
- `sortOrder`

Optional fields:
- `outcome`
- `year`
- `team`
- `problem`
- `solution`
- `highlights`
- `metrics`
- `availabilityNote`

### Skills data shape
Replace the current tuple array with grouped objects so the section can communicate capability rather than decoration.

## Rendering strategy
### Scroll-native gallery
Projects should render as standard DOM blocks in a vertical list or responsive grid.

Recommended behavior:
- mobile: single-column cards
- tablet: single-column or two-column cards depending on readability
- desktop: two-column rhythm or editorial vertical list
- no hidden projects behind gestures
- all featured projects reachable by normal scroll, keyboard tabbing, and browser find

### Progressive disclosure
Each project card should expose:
- title
- short value statement
- stack
- role or product type
- primary CTA

Optional later:
- expandable highlights
- inline “what I built”
- detail route if the content justifies it

## Styling direction
- Preserve only the useful parts of the template
- Treat existing CSS as source material, not architecture
- Prefer section-scoped class naming over selector chains based on layout nesting
- Remove layout dependencies on fixed widths and section-width calculations
- Design for vertical spacing rhythm first

## Dependency direction
Phase out:
- `malihu-custom-scrollbar-plugin`
- `jquery-mousewheel`
- horizontal scroll assumptions in `src/utilits.js`
- Swiper for the main project gallery

Keep only if still justified:
- `wowjs`
- jQuery in general

Preferred future direction:
- remove both if reveal animations can be replaced with CSS plus `IntersectionObserver`

## Accessibility requirements
- Use semantic `section`, `nav`, `header`, `main`, and `footer`
- Every section must have a stable id for anchor navigation
- Header navigation must be keyboard reachable
- Project cards must preserve readable heading hierarchy
- Images need meaningful `alt` text
- Motion must respect `prefers-reduced-motion`
- No content may require drag, swipe, or hover to access core information

## Acceptance criteria
- Desktop and mobile both use native vertical page scrolling
- No portfolio content is trapped inside a carousel
- Header links scroll to sections reliably
- Active nav state updates based on visible section
- Featured projects are fully visible in normal document flow
- Skills are rendered from a grouped, extensible data model
