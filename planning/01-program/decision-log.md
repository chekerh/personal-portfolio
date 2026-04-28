# Decision Log

Status: Active V1
Owner: Codex + Cheker Hassan
Last updated: 2026-04-27
Depends on: `program-charter.md`
Feeds into: All downstream strategy and implementation docs

## Purpose
Track major program decisions so the brand system stays coherent as implementation moves across website, CV, GitHub, LinkedIn, and project inventory.

## Status key
- Proposed
- Approved
- Superseded

## Decisions
### DEC-001
- Date: 2026-04-27
- Status: Approved
- Decision: The program covers website, CV, GitHub, LinkedIn, and project inventory as one integrated personal brand system.
- Reason: Recruiters evaluate these surfaces together.
- Impact: Content should be authored once in planning and adapted outward, not invented separately.

### DEC-002
- Date: 2026-04-27
- Status: Approved
- Decision: The primary positioning is product engineer plus operator-builder, not a generic “full-stack developer” profile.
- Reason: This is the strongest differentiator shown by the current portfolio direction and project mix.
- Impact: Messaging must emphasize structured execution, ownership, delivery supervision, and launch readiness.

### DEC-003
- Date: 2026-04-27
- Status: Approved
- Decision: The existing `salimov` Next.js site will be adapted rather than replaced in the first execution cycle.
- Reason: Faster path to a polished result with lower implementation risk.
- Impact: Changes should prioritize content, hierarchy, and selective component/layout refactors over replatforming.

### DEC-004
- Date: 2026-04-27
- Status: Approved
- Decision: Featured projects will be curated into a premium shortlist rather than exposing the entire project universe equally.
- Reason: Too many projects weaken signal quality and recruiter comprehension.
- Impact: The homepage, GitHub pins, LinkedIn Featured, and CV emphasis must all follow the same hierarchy.

### DEC-005
- Date: 2026-04-27
- Status: Approved
- Decision: All outward-facing claims must be proof-backed by repos, deliverables, screenshots, docs, or direct experience.
- Reason: Premium positioning fails if credibility is weak.
- Impact: Vague claims should be tightened or deferred until proof exists.

### DEC-006
- Date: 2026-04-27
- Status: Approved
- Decision: Greece-based and remote-first opportunities remain the primary market context.
- Reason: Current application strategy depends on this target.
- Impact: CV wording, website positioning, and LinkedIn summary should support this direction without over-narrowing role fit.

### DEC-007
- Date: 2026-04-27
- Status: Approved
- Decision: The V1 flagship set defaults to `CheckAuto TN`, `DevisPilot`, `Sahara`, `graphify`, and one AI-media flagship (`Local-Arcads` or `FlashForge`).
- Reason: These currently offer the strongest combination of clarity, technical depth, and differentiating narrative from the confirmed local repo set.
- Impact: GitHub pins, homepage emphasis, and future case-study work should prioritize these entries first.

## Open decisions
- Final choice between `Local-Arcads` and `FlashForge` as the AI-media flagship
- Whether the first implementation pass should introduce dedicated project detail pages
- Whether one CV version is enough initially or role-specific variants should be built immediately
- Whether `Sahara` should remain the sole public name or reference “MyOwnCursor” secondarily for continuity

## Change rule
Add a new entry whenever any of the following changes:
- positioning statement
- target audience
- featured-project set
- platform choice for the website
- proof standard for public claims
