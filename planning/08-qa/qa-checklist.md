# QA Checklist

Status: Active V1
Owner: Codex + Cheker Hassan
Last updated: 2026-04-27
Depends on: `../04-site/site-architecture.md`, `../03-content/project-inventory.md`
Feeds into: Future implementation QA and launch readiness

## Purpose
Validate the portfolio rebuild after replacing the trapped project carousel and old layout assumptions with a scroll-native structure.

## Test scope
Primary scope:
- page layout and native scrolling
- section navigation
- project gallery behavior
- skills section behavior
- responsive layout
- accessibility basics
- regression risks from removing old jQuery and Swiper assumptions

## Environments
Test at minimum:
- desktop Chrome
- desktop Safari
- mobile Safari
- mobile Chrome

Recommended viewport set:
- 390 x 844
- 768 x 1024
- 1280 x 800
- 1440 x 900

## Pre-flight
- install dependencies successfully
- run local dev server
- confirm no fatal console errors on initial load
- confirm page renders without waiting on custom scroll plugins

## Core functional checks
### Page flow
- page scrolls vertically using native browser scrolling
- no section is trapped inside a nested scroll area
- no horizontal scrolling appears at standard breakpoints
- section order matches the approved architecture

### Header / nav
- header links navigate to the correct section ids
- mobile and desktop nav target the same anchors
- active nav state updates when the visible section changes
- sticky header, if used, does not cover section headings
- browser back/forward behavior remains sensible after anchor navigation

### Hero
- primary CTA works
- secondary CTA works
- headline wraps cleanly at small widths
- no animation blocks interaction

## Project gallery checks
- gallery is rendered in normal document flow
- all featured projects are visible through standard scrolling
- no Swiper controls, pagination dots, or trapped slide behavior remain
- each project card shows title, summary, stack, and CTA clearly
- cards remain readable on mobile without clipping
- images load without severe layout shift
- cards do not require hover to expose essential information
- CTA fallback works for projects without public links

## Skills section checks
- skills render from grouped data without broken ordering
- no horizontal overflow from chips or tiles
- group headings are clear
- visual emphasis for core skills is consistent
- icons, if present, align with the correct skill labels
- section remains readable with icons disabled or missing

## Accessibility checks
### Keyboard
- tab order is logical from header through footer
- all interactive elements are reachable
- visible focus state is present
- gallery CTAs are reachable without confusion
- no keyboard trap exists

### Screen reader / semantics
- page contains a single main content region
- sections have meaningful headings
- nav landmarks are present
- images have useful alt text
- links and buttons have descriptive labels

### Motion
- `prefers-reduced-motion` is respected
- reveal animations do not hide content permanently if JS fails
- no core interaction depends on animation finishing

## Responsive checks
### Mobile
- text does not overlap images
- cards stack cleanly
- header menu is usable
- no accidental sideways scroll
- tap targets are comfortably usable

### Tablet
- spacing remains intentional
- gallery layout does not become awkwardly half-broken
- section padding is consistent

### Desktop
- layout does not leave excessive dead space
- nav remains aligned and readable
- project and skills sections feel balanced, not stretched from old template assumptions

## Regression checks from old template
- `src/utilits.js` no longer assumes section widths for nav state
- removal or reduction of jQuery behavior does not break initial load
- old custom scrollbar plugin is not required for navigation
- old portfolio slider props are no longer needed for the main gallery
- no CSS selectors depend on old `.swiper` structure for layout-critical styling

## Content checks
- project order matches approved priority
- project titles and summaries are typo-free
- CTA labels match destination type
- resume and social links point to the right targets
- section labels use consistent naming between nav and headings

## Console / technical checks
- no hydration warnings
- no missing key warnings in mapped lists
- no broken asset URLs for project images
- no 404s for fonts, CSS, or media required by the revised sections

## Acceptance gate
Release is ready only if:
- native vertical scrolling works on all target devices
- project gallery is fully scroll-native
- section navigation works reliably
- skills section is structured and responsive
- no high-severity accessibility blockers remain
- no old horizontal-scroll dependency is required for normal use
