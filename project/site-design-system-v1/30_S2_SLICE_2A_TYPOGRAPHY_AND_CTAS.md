# S2.2A — Typography and CTA Grammar

SPRINT=2
SLICE=S2.2A
TYPE=implementation
DEPLOYMENT_ALLOWED=no

## Objective

Normalize shared type roles and action grammar without changing approved wording, page composition or imagery.

## Authorized roles

Typography:
- hero-h1
- section-h2
- panel-h2
- card-h3
- body-large
- body
- card-body
- nav
- eyebrow
- microcopy
- footer

Actions:
- primary CTA
- secondary CTA
- tertiary text-arrow action

Normalize:
- font family role
- size within governed range
- line height
- weight
- letter spacing
- button height
- padding
- radius
- arrow scale
- focus/hover behavior

## Critical exception rule

Approved reference line wrapping wins over the default scale.

If a page needs an exception to preserve an approved wrap, record it. Do not rewrite copy.

## Prohibited changes

No section/card geometry normalization beyond what is strictly necessary for the type/CTA role.
No page copy changes.
No imagery changes.
No responsive convergence beyond preventing breakage.

## Evidence

Before/after typography-role matrix.
CTA inventory before/after.
Screenshots for representative pages from every family.

## Acceptance

PASS only if:
- type hierarchy reads consistently sitewide
- actions belong to one three-role family
- approved headline wrapping remains intact or explicitly excepted
- signed commit verifies
- no deployment
- production untouched

Suggested commit:
 normalize site typography and actions

## Final block

SITE_DS_V1_S2_2A_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<sha>
SIGNED_COMMIT=pass
TYPOGRAPHY_CONTRACT=pass
CTA_CONTRACT=pass
REFERENCE_WRAP_QA=pass
ALLOWED_PATHS_MATCH=pass
DEV_DEPLOYMENT=no
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
