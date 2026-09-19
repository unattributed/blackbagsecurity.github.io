# S1.1A — Global Tokens and Shell

SPRINT=1
SLICE=S1.1A
TYPE=implementation
DEPLOYMENT_ALLOWED=no

## Objective

Implement the shared design tokens and desktop shell contract across all page families with zero page-content redesign.

## Preconditions

S0.0B=PASS.
Use only values from the accepted Design System V1 contract.

## Authorized roles

- shell width/max-width
- shell margins
- shell border/radius/shadow rules
- shared color tokens
- shared type-family tokens
- shared focus token
- supporting token plumbing required by these roles

## Prohibited roles

Do not change:
- header/nav visual geometry yet
- footer visual geometry
- page section dimensions unless shell correction requires mathematically equivalent adjustment
- typography sizes
- CTA geometry
- page copy
- imagery
- routes
- responsive behavior beyond shell containment

## Focus evidence

For each page family capture before/after shell bounds at desktop.

A shell correction is successful when the page content remains visually equivalent inside the normalized chassis.

## Acceptance

PASS only if:
- all page families use the governed shell contract or an explicit exception
- no page content reflow beyond documented shell consequences
- MAIN, SERVICES, service children, CAPABILITY, ABOUT and capability subpages pass desktop regression
- all changed paths match focus
- signed commit verifies
- no dev deployment
- production untouched

Suggested commit:
 normalize site shell and tokens

## Final block

SITE_DS_V1_S1_1A_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<sha>
SIGNED_COMMIT=pass
SHELL_CONTRACT=pass
TOKEN_CONTRACT=pass
DESKTOP_REGRESSION=pass
ALLOWED_PATHS_MATCH=pass
DEV_DEPLOYMENT=no
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
