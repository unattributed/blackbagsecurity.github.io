# S3.3A — Responsive Convergence

SPRINT=3
SLICE=S3.3A
TYPE=implementation
DEPLOYMENT_ALLOWED=no

## Objective

Converge responsive behavior across all page families while preserving each accepted desktop composition.

## Required breakpoint model

Use the accepted Design System V1 contract.
Do not invent page-specific breakpoints unless a recorded exception is required.

Normalize:
- shell collapse
- header/nav behavior
- descriptor behavior
- card wrapping
- multi-column stacking
- CTA width behavior
- footer wrapping
- editorial callout hiding/reflow
- section padding
- image focal behavior

## Principle

Responsive behavior reflows the desktop design.
It does not create a separate mobile design language.

## Prohibited changes

Do not change desktop composition except to fix a proven responsive/shared defect.
Do not rewrite content.
Do not replace images.
Do not modify routes.

## Required viewport matrix

At minimum:
- 2560x1440
- 1920x1080
- 1440x900
- 1280x800
- representative tablet portrait
- representative tablet landscape
- narrow mobile
- wide mobile

## Evidence

For every page family:
- responsive screenshots
- overflow report
- navigation usability report
- CTA behavior report
- exceptions

## Acceptance

PASS only if:
- breakpoint system converges
- no horizontal overflow
- no inaccessible navigation
- content order preserved
- approved page identity preserved
- signed commit verifies
- no deployment
- production untouched

Suggested commit:
 normalize site responsive behavior

## Final block

SITE_DS_V1_S3_3A_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<sha>
SIGNED_COMMIT=pass
BREAKPOINT_CONTRACT=pass
NAV_RESPONSIVE_QA=pass
NO_HORIZONTAL_OVERFLOW=pass
CONTENT_ORDER_QA=pass
ALLOWED_PATHS_MATCH=pass
DEV_DEPLOYMENT=no
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
