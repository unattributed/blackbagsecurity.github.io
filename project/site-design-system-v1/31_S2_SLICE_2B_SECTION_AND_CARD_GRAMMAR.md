# S2.2B — Section and Card Grammar

SPRINT=2
SLICE=S2.2B
TYPE=implementation
DEPLOYMENT_ALLOWED=no

## Objective

Normalize shared section-label, divider, card and surface language while preserving page-specific composition.

## Authorized section roles

- eyebrow
- eyebrow lime rule
- section heading
- directional microcopy
- section divider
- technical accent treatment

## Authorized card roles

- border thickness/color
- dark surface family
- corner radius
- hover/focus response
- image framing
- internal title/body hierarchy where not separately approved

## Principle

Cards may have different composition.
They must still look like members of the same institution.

Do not force:
- AOTP UX screenshot cards
- service cards
- evidence cards
- value cards

into one identical component.

Normalize grammar, not composition.

## Prohibited changes

No content rewrite.
No section order change.
No image substitution.
No route changes.
No responsive convergence work except preventing regressions.

## Evidence

Create:
- section-grammar matrix
- card-family matrix
- before/after representative screenshots
- exception updates if needed

## Acceptance

PASS only if:
- eyebrow/divider grammar is coherent
- borders/radii/surfaces visibly belong to one family
- distinct card types preserve their purpose
- signed commit verifies
- no deployment
- production untouched

Suggested commit:
 normalize site section and card grammar

## Final block

SITE_DS_V1_S2_2B_STATUS=PASS
START_SHA=<sha>
FINAL_SHA=<sha>
SIGNED_COMMIT=pass
SECTION_GRAMMAR=pass
CARD_GRAMMAR=pass
PAGE_IDENTITY_PRESERVED=pass
ALLOWED_PATHS_MATCH=pass
DEV_DEPLOYMENT=no
PRODUCTION_TOUCHED=no
EVIDENCE=<path>
