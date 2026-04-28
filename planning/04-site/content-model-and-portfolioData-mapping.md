# Content Model and portfolioData Mapping

Status: Active V1.2
Owner: Codex + Cheker Hassan
Last updated: 2026-04-28
Depends on: `site-architecture.md`, `homepage-copy-spec.md`, `../03-content/project-inventory.md`
Feeds into: `src/content/portfolioData.js`, section components, future detail-page routing

## Goal
Define the target schema for the next major `portfolioData.js` revision so implementation can happen without content-model guesswork.

## Data groups
- `profile`
- `hero`
- `about`
- `flagshipProjects`
- `directedProducts`
- `supportProjects`
- `skillGroups`
- `proofStrip`
- `contact`
- `navigation`
- `siteMeta`

## Profile
Fields:
- name
- firstName
- lastName
- location
- email
- linkedin
- github
- yearsCoding
- role
- targetMarket
- narrativeShort
- narrativeMedium

## Hero
Fields:
- eyebrow
- headlineOptions
- selectedHeadline
- roleBadge
- subheadline
- supportLine
- primaryCta
- secondaryCta
- spotlightStrengths

## Flagship project item
Fields:
- slug
- title
- legacyNames
- tagline
- summary
- problem
- audience
- image
- alt
- role
- roleDetails
- type
- stack
- family
- proofLevel
- proofLabel
- status
- ctaPrimary
- ctaSecondary
- detailPageEnabled
- detailPageSlug
- proofArtifacts

## Directed product item
Fields:
- slug
- title
- internalRepo
- legacyNames
- summary
- problem
- audience
- status
- roleFraming
- roleDetails
- proofLevel
- publicVisibility
- homepageEligible
- detailPageEligible
- ctaPrimary
- ctaSecondary
- proofArtifacts

## Support project item
Fields:
- slug
- title
- summary
- image
- family
- role
- stack
- proofLevel
- ctaPrimary

## About
Fields:
- heading
- body
- positioningCards
- experienceStrip
- infoPoints

## Skill group
Fields:
- id
- title
- description
- items[]
- relatedProjects[]

## Proof strip item
Fields:
- value
- label
- qualifier

## Contact
Fields:
- heading
- body
- primaryLink
- secondaryLinks

## Navigation
Fields:
- items[]
- resumeLink

## SiteMeta
Fields:
- title
- description
- ogImage
- keywords
- locationLabel

## CTA object shape
Fields:
- label
- href
- kind
- external

## Component mapping
- `Home` consumes `hero`
- `About` consumes `about`
- `Portfolio` splits into `flagshipProjects`, `directedProducts`, and `supportProjects`
- `Facts` or replacement proof section consumes `proofStrip`
- skills section consumes `skillGroups`
- `Header` consumes `navigation`
- `<Head />` metadata consumes `siteMeta`

## Detail-page feed
- `flagshipProjects` and selected `directedProducts` should include enough fields for detail pages
- support projects can remain card-only initially

## Implementation defaults
- first content rebuild should keep one source file:
  - `src/content/portfolioData.js`
- if the file grows too large, split later into:
  - `profile.js`
  - `projects.js`
  - `skills.js`
  - `meta.js`
- do not split early if it slows the rebuild

## Minimum viable data for the next code pass
- `hero`
- `about`
- `flagshipProjects`
- `directedProducts`
- `supportProjects`
- `skillGroups`
- `proofStrip`
- `contact`
- `navigation`
