# S1.1B — Header, Navigation and Favicon

SPRINT=1
SLICE=S1.1B
TYPE=implementation
DEPLOYMENT_ALLOWED=no

## Objective

Normalize the entire site's header/navigation chassis and eliminate graphical-logo/favicon inconsistency while preserving approved descriptor content.

## Authorized roles

- header height
- header horizontal padding
- brand position/geometry
- descriptor slot geometry
- nav position
- nav font role
- nav gap
- active-state underline
- nav hover/focus
- header border
- non-graphical favicon behavior
- responsive header mechanics only where required to keep header usable

## Descriptor rule

Content may remain page-family specific when approved:
- PEOPLE / PERSPECTIVE / PROGRESS
- RESEARCH | ENGINEERING | OPERATIONS
- SECURITY ENGINEERING / FOR A MORE RESILIENT WORLD

But each descriptor must occupy the governed descriptor role and geometry unless listed as an exception.

## No-logo rule

Black Bag Security has no graphical logo.

Remove page-by-page graphical favicon behavior.
Use one site-wide non-graphical favicon policy.
Do not create a replacement logo.

## Prohibited changes

No body-section layout changes.
No footer changes.
No CTA or card changes.
No content rewrite.
No future-slice work.

## Evidence

Capture header-only before/after screenshots for every page family at desktop and mobile.
Create header-alignment matrix with x/y positions, heights, nav baseline and underline placement.

## Acceptance

PASS only if:
- one header chassis governs all families except named exceptions
- nav no longer visibly changes scale/position between pages
- active state is consistent
- no graphical BBS logo/favicon remains
- all routes remain navigable
- signed commit verifies
- production untouched

Suggested commit:
 normalize site header navigation and favicon

## Final block

SITE_DS_V1_S1_1B_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<sha>
SIGNED_COMMIT=pass
HEADER_CONTRACT=pass
NAV_CONTRACT=pass
NO_GRAPHICAL_LOGO=pass
HEADER_REGRESSION=pass
MOBILE_HEADER_QA=pass
ALLOWED_PATHS_MATCH=pass
DEV_DEPLOYMENT=no
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
