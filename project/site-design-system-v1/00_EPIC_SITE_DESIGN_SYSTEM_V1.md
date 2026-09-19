# EPIC — Black Bag Security Site Design System V1

## Epic objective

Remediate whole-site style and formatting continuity without redesigning approved pages.

The result must make the entire Black Bag Security website read as one coherent institutional design system while preserving the approved identity of each page and page family.

## Problem statement

The site has accumulated multiple page-specific implementations. Individual pages are strong, but shared presentation varies across:
- shell widths and margins
- header geometry
- brand placement
- descriptor placement
- navigation scale and gaps
- active underline treatment
- footer geometry
- favicon behavior
- typography scale
- CTA geometry
- eyebrow and section-label grammar
- card borders/radii/surfaces
- breakpoint behavior

The drift is implementation debt, not authorization to redesign.

## Authority hierarchy

1. Current explicit owner direction.
2. Approved page mockups and page-specific governed bundles.
3. This Site Design System V1 epic and its accepted slice outputs.
4. Current accepted dev rendering.
5. Historical implementations and stale reviews.

If normalization conflicts with an approved page reference, preserve the approved page and record a named exception. Do not silently override the page.

## Whole-site scope

Scope is every public route generated from source, not only the currently accepted headline pages.

At minimum the inventory must include:
- /
- /services/
- all SERVICES child pages
- /capability/
- /about/
- all /arsenal/ capability/product pages
- public policy/contact/support routes
- localized public routes

Generated _site output is evidence/build output, not authoritative source.

Localized pages:
- shared chrome/system behavior is in scope
- translated content is not to be rewritten

## Non-goals

Do not:
- rewrite marketing copy
- reorder approved sections
- replace approved imagery
- merge all layouts into one generic template
- change routes
- change product claims
- redesign page-specific heroes or product stories
- modify production
- perform opportunistic code cleanup unrelated to continuity
- work ahead into future slices

## Design-system target

Normalize these roles:
- desktop shell
- header
- brand lockup geometry
- descriptor slot geometry
- primary navigation
- active navigation state
- global no-graphical-logo/favicon behavior
- footer
- serif and sans typography roles
- primary/secondary/tertiary CTA grammar
- eyebrow and section-label grammar
- dividers/borders
- card/surface family
- focus states
- shared responsive breakpoints and reflow behavior

## Allowed page-family identity

Different page families may keep distinct internal composition:
- MAIN
- SERVICES
- SERVICE CHILDREN
- CAPABILITY
- CAPABILITY SUBPAGES
- ABOUT
- future explicitly approved families

Distinctive imagery, layouts, product UX and editorial composition remain valid.

## Sprints

### Sprint 0 — Baseline and contract
Goal:
Create an objective whole-site inventory, baseline evidence, deviation matrix and explicit design-system contract before visual mutations.

Slices:
- S0.0A Baseline Inventory
- S0.0B Design System Contract

Exit:
No unresolved authority conflicts. Route inventory and exception model are complete.

### Sprint 1 — Global chassis
Goal:
Normalize the shared frame seen on every page.

Slices:
- S1.1A Global Tokens and Shell
- S1.1B Header, Navigation and Favicon
- S1.1C Footer and Sprint Qualification

Exit:
Shell/header/nav/footer are consistent across the whole site, with documented approved exceptions only.

### Sprint 2 — Content grammar
Goal:
Normalize shared visual language inside page content without flattening page identity.

Slices:
- S2.2A Typography and CTAs
- S2.2B Section and Card Grammar
- S2.2C Sprint Qualification

Exit:
Typography, actions, labels, dividers, cards and surfaces form one coherent system.

### Sprint 3 — Responsive convergence and final qualification
Goal:
Converge responsive behavior and qualify the entire dev site.

Slices:
- S3.3A Responsive Convergence
- S3.3B Full-Site Qualification
- S3.3C Freeze and Handoff

Exit:
Whole-site design-system qualification PASS with evidence and explicit exceptions ledger.

## Commit strategy

Each visual slice gets its own signed commit.
Do not combine slices.

Preferred commit progression:
- define site design system v1 baseline
- define site design system v1 contract
- normalize site shell and tokens
- normalize site header navigation and favicon
- normalize site footer
- normalize site typography and actions
- normalize site section and card grammar
- normalize site responsive behavior
- qualify site design system v1
- freeze site design system v1

A slice cannot begin until the previous slice has PASS evidence and its commit SHA is recorded in STATUS_LEDGER.md.

## Deployment strategy

Efficiency rule:
- diagnostic/document-only slices do not deploy
- implementation slices build and run local real-browser QA
- the final slice of each sprint may update dev preview and perform deployed regression
- production is never touched by this epic

## Epic completion

The epic is complete only when:
- all public routes are inventoried
- no unexplained chrome variants remain
- no graphical BBS logo/favicon remains where prohibited
- design tokens are documented and enforced
- typography/CTA/section/card grammars are coherent
- responsive behavior converges
- every public route passes automated/real-browser smoke QA appropriate to its family
- all approved flagship pages receive before/after regression evidence
- all intentional exceptions are documented
- dev source SHA is proven
- production remains unchanged
