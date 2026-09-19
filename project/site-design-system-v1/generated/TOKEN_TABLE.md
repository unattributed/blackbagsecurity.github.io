# Design System V1 Token Table

SLICE=S0.0B
START_SHA=8a196b81ef927236d6327e98557795454fc4b96c
TOKEN_ENTRIES=75
GLOBAL_ROLES_DEFINED=22

These are the normative values for the roles in [DESIGN_SYSTEM_V1_CONTRACT.md](DESIGN_SYSTEM_V1_CONTRACT.md). The notation is not an instruction to mutate CSS in S0.0B. One value exists per named token. Existing per-page aliases are not an exception registry.

MAIN/SERVICES establish the 1320px / 92vw desktop shell, 64px header, 82px footer baseline, 14px brand, 12px navigation, 46px actions and readable editorial scale. Their common baseline informs this table; remaining differences are resolved here as explicit governance defaults. Cyan is the single contextual technical accent selected from the accepted capability family. There is no claim of exact equality to every historic stylesheet.

All px values are CSS pixels. cqw values are relative to the established shell inline-size container, never a scaled screenshot. Fixed dimensional values are baseline/minimums where content, keyboard focus or text enlargement requires intrinsic growth. Approved content cannot be cropped to satisfy a measurement. Ratios used to compare 1024px approved rasters at 1320px do not create alternative token systems.

| Token | Default value | Roles | Interpretation |
|---|---|---|---|
| shell.max | 1320px | G01 | Accepted MAIN/SERVICES desktop ceiling |
| shell.desktop-width | min(92vw,1320px) | G01 | Shared accepted desktop shell |
| shell.bottom-gap | 30px | G01 | Desktop only; 0 below 1100px |
| shell.frame | 1px solid #294656 | G01/G12 | Outer frame; remove side/bottom frame below desktop |
| shell.radius | 0 0 7px 7px | G01 | Desktop only; 0 below desktop |
| header.min-height | 64px | G02 | Common default at desktop, may grow intrinsically; not a fixed clipping height |
| header.padding-inline | 32px | G02 | 16px below desktop |
| header.columns | 230px minmax(0,1fr) 280px | G02-G04 | Default brand/nav/descriptor; registered compound lockups may redistribute existing tracks |
| brand.type | 14px / 1.2; 700; .16em | G03 | Sans; 13px below desktop; never pictorial |
| descriptor.type | 10px / 1.4; 700; .15em | G04 | Sans; preserve approved strings and explicit absence |
| nav.type | 12px / 1.4; 700; .12em | G05 | Sans; 11px below desktop; labels never scaled to fit |
| nav.gap | clamp(22px,2.2cqw,34px) | G05 | 18px below desktop |
| nav.compact-row-min | 40px | G05/G21 | Room for labels and focus; grow when wrapping |
| nav.underline | 2px solid #d7ff22; label width + 12px | G06 | Centered, bottom aligned; no color-only state |
| favicon.href | data:, | G07 | One empty non-graphical icon declaration per HTML document |
| footer.min-height | 82px | G08 | Shared content-driven minimum, never a route-specific fixed band |
| footer.padding | 0 30px desktop; 20px 16px below desktop | G08 | Add shared intrinsic block space if content wraps |
| footer.columns | 200px minmax(0,1fr) auto | G08 | One column below desktop; content exceptions use the same tracks |
| footer.gap | 22px desktop columns; 13px compact rows | G08 | Wrap legal and navigation contents |
| footer.brand-type | 13px / 1.2; 700; .16em | G08 | Text only |
| footer.descriptor-type | 10px / 1.4; 400; .15em | G08 | Preserve approved wording |
| footer.nav-type | 10.5px / 1.4; 400; .08em | G08 | 22px link gap; no clipped focus |
| font.serif | Georgia, "Times New Roman", Times, serif | G09 | Editorial display; weight 400 |
| font.sans | Arial, Helvetica, sans-serif | G10 | Body, navigation, labels, controls; no remote font dependency |
| type.h1 | clamp(39px,4.4cqw,58px) / 1.05; 400; -.025em | G09 | Editorial role; approved product-name hierarchy preserved |
| type.h2 | clamp(28px,2.8cqw,37px) / 1.1; 400; -.02em | G09/G17 | Editorial section heading |
| type.body | 16px / 1.5; 400 | G10 | Readable prose; never shrink to a mockup grid |
| type.lead | 17px / 1.4; 400 | G10 | Hero/supporting lead |
| type.card-title | 15px / 1.2; 700 | G10/G19 | Sans unless registered serif product-title exception |
| type.card-body | 13px / 1.4; 400 | G10/G19 | Maintain title/body hierarchy and approved density |
| type.support | 12px / 1.4; 400 | G10 | Secondary support, not a replacement for main prose |
| color.page | #06111a | G11 | Deep navy outer foundation |
| surface.base | #07131c | G11/G19 | Base panel |
| surface.raised | #091823 | G11/G19 | Default card/surface |
| surface.emphasis | #0b1c28 | G11/G19 | Subtle hierarchy, not a new color family |
| surface.chrome | #06121b | G02/G08/G11 | Shared header/footer surface |
| color.text | #f2f5f5 | G10/G11 | Primary readable text |
| color.muted | #a8b5bd | G10/G11 | Secondary text on dark surfaces |
| color.micro | #8ca0ac | G04/G18 | Small descriptive text; cannot replace essential prose |
| color.lime | #d7ff22 | G06/G11/G13/G20 | Single primary interaction/current-location accent |
| color.cyan | #39c9ff | G11/G15 | Technical support only; does not replace primary lime |
| color.on-lime | #071016 | G13 | Primary CTA text |
| border.structural | #244150 | G12 | Continuous dividers; ornamental, not sole control affordance |
| border.strong | #315466 | G12/G19 | Card/surface edges |
| border.frame | #294656 | G01/G12 | Outer frame |
| border.control | #577180 | G14 | Interactive outline role |
| border.hover | #5e8497 | G19/G22 | Actionable cards only |
| border.weight | 1px | G12/G19 | Default solid structural/card edge |
| border.emphasis-weight | 2px | G06/G12/G20 | Rules and focus; no arbitrary heavy border family |
| radius.square | 0 | G19 | Structural bands and contiguous panels |
| radius.control | 2px | G13/G14 | CTA/control role |
| radius.card | 4px | G19 | Independent cards; no universal pill treatment |
| radius.shell | 7px | G01 | Lower desktop outer corners only |
| radius.circular | 50% | G19 | Only genuinely circular markers/icon actions; not rectangular cards |
| cta.height | 46px minimum | G13/G14 | Grow for wrapping; no fixed text clipping |
| cta.primary-min-width | 220px | G13 | Limited by available width; full width below 500px |
| cta.secondary-min-width | 202px | G14 | Limited by available width; full width below 500px |
| cta.padding-inline | 20px | G13/G14 | Shared spacing |
| cta.gap | 16px | G13/G14 | Label/arrow spacing; preserve existing icon meaning |
| cta.type | 13px / 1.4; 700 | G13-G15 | Sans; keep approved text and action semantics |
| eyebrow.type | 11px / 1.4; 700; .16em | G16 | Uppercase visual treatment; not copy rewriting |
| eyebrow.rule | 28px x 2px; lime; 14px gap | G16 | Leading rule |
| section.label-type | 11px / 1.4; 700; .14em | G17 | Compact indexing role, not all H2 elements |
| section.label-rule | 30px x 2px; lime | G17 | Adjacent compact label rule |
| directional.type | 10px / 1.4; 700; .13em | G18 | Uppercase visual treatment; wrap if needed |
| focus.ring | 2px solid #d7ff22 | G20 | Retain fallback in forced-colors modes |
| focus.offset | 3px | G20 | Must remain visible outside control border |
| motion.duration | 160ms | G22 | Color/border/surface only by default |
| motion.easing | ease | G22 | No mandatory positional movement |
| motion.reduced | 0ms transitions; auto scrolling | G22 | When prefers-reduced-motion:reduce |
| breakpoint.desktop | 1100px | G21 | Desktop >=1100; compact chrome below |
| breakpoint.tablet | 760px | G21 | Tablet 760..1099; mobile 500..759 |
| breakpoint.narrow | 500px | G21 | Narrow mobile <500; no additional global threshold |
| spacing.base | 4px | G19/G21 | Shared rhythm unit |
| spacing.scale | 4, 8, 12, 16, 20, 24, 32px | G19/G21 | Role-based spacing; does not change approved information arrangement |

## Application boundaries

Use the same structural border family and named radius role across unrelated card types; do not unify their content architecture. Zero-radius structural panels, 4px standalone cards and circular process markers are semantic roles within one family. Use primary/secondary/tertiary action semantics consistently while preserving approved labels and purpose.

The canonical shared responsive thresholds are exactly 500px, 760px and 1100px. Intrinsic content reflow can occur between them without adding another global breakpoint. Registered inner brand lockups may redistribute existing tracks; that does not establish an independent fixed header height or footer grid.

Contrast, focus visibility, reflow and cross-browser rendering must be verified when these tokens are implemented. S0.0B establishes the contract and asserts no completed visual remediation or compliance certification.
