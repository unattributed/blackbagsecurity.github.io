# Design System V1 Exception Registry

SLICE=S0.0B
START_SHA=8a196b81ef927236d6327e98557795454fc4b96c
EXCEPTIONS=10
UNRESOLVED_CONFLICTS=0

## Registry rules

An exception is a narrow, authority-backed difference from a named default. Existing CSS, a different template, an old acceptance log or a broad S0.0A classification does not establish one. The current owner and the cited approved-reference requirements establish the entries below. Each permanent entry remains subordinate to later explicit owner direction.

Scope/applicability entries EX-008 through EX-010 keep all public routes accounted for. They are not blanket visual exemptions. No graphical-logo/favicon exception exists. No numerical footer-geometry or fixed header-height exception is registered. Content-only exceptions retain the shared chassis.

The evidence directory contains snapshots of the cited authority texts and a checksum-bearing authority register. Public governance uses stable bundle-relative document identities rather than private runtime paths.

| Authority ID | Source | Applicable requirement |
|---|---|---|
| OWNER-S0B | Current owner instruction, 2026-09-19 | Four explicit DSV1 resolutions; whole-site scope; content/rendering/deployment boundaries |
| EPIC | 00_EPIC_SITE_DESIGN_SYSTEM_V1.md | Authority hierarchy, scope, page-family identity and non-goals |
| ABOUT-CONTENT / ABOUT-STYLE / ABOUT-LAYOUT | ABOUT_V3_CONTENT_SPEC.md; ABOUT_V3_STYLE_ALIGNMENT.md; ABOUT_V3_LAYOUT_HANDOFF.md | Header identity, content preservation and comparison-only mapped geometry |
| CAP-CONTENT / CAP-STYLE | CAPABILITY_V3_CONTENT_SPEC.md; CAPABILITY_V3_STYLE_ALIGNMENT.md | Brand subline, serif product titles, AOTP dominance |
| SE-CONTENT / SE-LAYOUT | SECURE_ENGINEERING_V2_CONTENT_SPEC.md; SECURE_ENGINEERING_V2_LAYOUT_HANDOFF.md | Header/footer subline and reference coordinate context |
| AOTP-CONTENT / AOTP-STYLE / AOTP-LAYOUT | AOTP_V4_CONTENT_SPEC.md; AOTP_V4_STYLE_ALIGNMENT.md; AOTP_V4_LAYOUT_HANDOFF.md | No header philosophy, real UX, product density, derived geometry |
| RT-CONTENT / RT-LAYOUT | RED_TEAMING_V2_CONTENT_SPEC.md; RED_TEAMING_V2_LAYOUT_HANDOFF.md | Exact legal footer wording; shared footer and comparison-only coordinate scale |

## Operative exceptions

### EX-001

| Required field | Value |
|---|---|
| exception_id | EX-001 |
| route/family | /about/ (ABOUT) |
| role | G03/G04 compound brand lockup |
| default_contract | Single text brand left; institutional descriptor in right slot. |
| exception_value | Retain SECURITY ENGINEERING / FOR A MORE RESILIENT WORLD beside the brand and the separating lime vertical rule. This is a compound lockup inside the header, not a 93px-header exemption. Preserve the contact anchor and approved content composition. |
| approved_authority | ABOUT-CONTENT: Header and Route; ABOUT-STYLE: Header identity; OWNER-S0B: no content changes. |
| reason | The approved specification explicitly requires this wording and separation and prohibits replacing it with the other descriptor strings. |
| permanent_or_temporary | permanent until owner/reference supersession |

### EX-002

| Required field | Value |
|---|---|
| exception_id | EX-002 |
| route/family | /capability/ and /services/secure-engineering/ |
| role | G03/G04 descriptor; G08 footer content |
| default_contract | Institutional descriptor with the shared header/footer slots. |
| exception_value | Preserve RESEARCH &#124; ENGINEERING &#124; OPERATIONS as a supporting brand subline. Header may use a two-line brand lockup in its allocated region; footer uses the common chassis with the approved wording. No separate footer grid, height or padding is authorized by this content exception. |
| approved_authority | CAP-CONTENT: Header/Footer; CAP-STYLE: Visual family; SE-CONTENT: Header/Footer; OWNER-S0B: DSV1-010. |
| reason | Both approved content specifications name this subline; current owner permits footer wording exceptions while requiring common geometry. |
| permanent_or_temporary | permanent until owner/reference supersession |

### EX-003

| Required field | Value |
|---|---|
| exception_id | EX-003 |
| route/family | /arsenal/aotp/ (CAPABILITY_SUBPAGE) |
| role | G04 descriptor occupancy |
| default_contract | Institutional descriptor in a reserved desktop slot. |
| exception_value | No right-side header philosophy text. Leave that content slot unfilled or donate its free track to the existing navigation without shrinking the shared brand/nav tokens. No 50px-header exemption. |
| approved_authority | AOTP-CONTENT: Header explicitly says no right-side header philosophy text. |
| reason | Adding the default slogan would violate an explicit approved content prohibition. |
| permanent_or_temporary | permanent until owner/reference supersession |

### EX-004

| Required field | Value |
|---|---|
| exception_id | EX-004 |
| route/family | /services/red-teaming/ (SERVICE_CHILD) |
| role | G08 footer wording/legal navigation |
| default_contract | Institutional descriptor and standard site navigation within the common footer chassis. |
| exception_value | Retain DEEP EXPERTISE. PRACTICAL OUTCOMES. A MORE SECURE TOMORROW. and the Privacy/Terms links with current legal/year treatment. Place those contents into the common footer slots; wrap long wording rather than grant a separate geometry. |
| approved_authority | RT-CONTENT: Footer; OWNER-S0B: DSV1-010. |
| reason | The approved content is explicit; owner separates content permission from chassis permission. |
| permanent_or_temporary | permanent until owner/reference supersession |

### EX-005

| Required field | Value |
|---|---|
| exception_id | EX-005 |
| route/family | All content-bearing families; each route's existing approved composition |
| role | G09/G13-G19 composition boundary |
| default_contract | Shared typography relationships, CTA roles and card/surface tokens; no universal card component. |
| exception_value | Preserve card information architecture, imagery, real product UX, density, section order and approved internal arrangement. Preserve page-specific CTA hierarchy, including an approved outlined primary action, while applying common dimensions/type/focus. Do not reinterpret this as permission for arbitrary palette, border, radius or chrome variants. |
| approved_authority | OWNER-S0B: DSV1-014; EPIC: Allowed page-family identity and Non-goals. |
| reason | Current owner explicitly protects composition while naming the grammar that must converge. |
| permanent_or_temporary | permanent for this approved design identity |

### EX-006

| Required field | Value |
|---|---|
| exception_id | EX-006 |
| route/family | /capability/ (CAPABILITY) |
| role | G09/G19 product hierarchy |
| default_contract | Card headings use the default sans role; card grammar does not specify a universal grid. |
| exception_value | Preserve editorial serif product titles, the dominant AOTP flagship at roughly half the desktop product band, and four supporting cards in their approved 2x2 arrangement. Apply shared surfaces/edges/states without equalizing all five products. |
| approved_authority | CAP-STYLE: Visual family and Page identity; CAP-CONTENT: Our Capability; OWNER-S0B: DSV1-014. |
| reason | Approved reference requirements explicitly distinguish product-title typography and unequal product hierarchy. |
| permanent_or_temporary | permanent until owner/reference supersession |

### EX-007

| Required field | Value |
|---|---|
| exception_id | EX-007 |
| route/family | /arsenal/aotp/ and any actual product UX imagery in CAPABILITY_SUBPAGE |
| role | G09-G12/G19 embedded product UI |
| default_contract | Live website typography, borders and surfaces use the global token roles. |
| exception_value | Genuine product screenshots keep their native fonts, colors, controls, density and pixels; the surrounding site frame follows the contract. AOTP preserves its compact product-name/headline relationship, operator workspace and ordered Targets/Evidence/Findings/Retests/Settings story. Do not recreate screenshots as generic cards or turn pictured controls into fake controls. |
| approved_authority | AOTP-STYLE: AOTP product identity and Real UX rule; AOTP-CONTENT: Hero and Operator Workspace; OWNER-S0B: DSV1-014. |
| reason | The approved product story intentionally uses dense real UX. Site normalization cannot rewrite that UI. |
| permanent_or_temporary | permanent until owner/reference supersession |

### EX-008

| Required field | Value |
|---|---|
| exception_id | EX-008 |
| route/family | /compare/services-before-technical-writing/ (INTERNAL_COMPARISON) |
| role | Publication/indexing disposition; all applicable visual roles still apply |
| default_contract | All generated public pages participate in coverage and the shared design system. |
| exception_value | Treat as an existing public route throughout this epic. Preserve status, URL, publication, indexing, canonical/robots behavior, redirects (none) and existing page content/composition. No removal, redirection, noindex or redesign. Future shared grammar work is bounded by those prohibitions; publication hygiene needs separate owner authorization. |
| approved_authority | OWNER-S0B: DSV1-017, resolved for this epic only. |
| reason | Current owner explicitly separates regression coverage from the site's publication/indexing debt. |
| permanent_or_temporary | temporary for this epic; expiry does not authorize mutation |

### EX-009

| Required field | Value |
|---|---|
| exception_id | EX-009 |
| route/family | /research/ (PUBLIC_REDIRECT) |
| role | G01-G22 applicability to redirect document; route governance |
| default_contract | Content-bearing HTML pages render the shared chrome and content grammar. |
| exception_value | Preserve the existing HTTP 200 client redirect to /arsenal/ and its route/sitemap/publication behavior. Do not inject a visible chassis into the redirect document. Test the redirect document and destination distinctly; /arsenal/ remains subject to the full contract. |
| approved_authority | OWNER-S0B: explicit /research/ disposition; EPIC: no route changes. |
| reason | Existing route-governance debt is not remediation authority in this slice. |
| permanent_or_temporary | temporary until separately authorized route-governance work |

### EX-010

| Required field | Value |
|---|---|
| exception_id | EX-010 |
| route/family | PUBLIC_SUPPORT_ENDPOINT: seven routes enumerated in scope matrix |
| role | G01-G22 visual applicability |
| default_contract | Rendered HTML pages expose the common visual system. |
| exception_value | Non-HTML resources /CNAME, /llms.txt, /robots.txt, /security.txt, /.well-known/security.txt, /.well-known/autoconfig/mail/config-v1.1.xml and /sitemap.xml retain their existing formats and behavior; no injected HTML chrome/CSS/favicon. Include all seven in build/output regression coverage. |
| approved_authority | OWNER-S0B: entire generated public site; EPIC: preserve routes and content. |
| reason | Whole-site coverage includes machine-readable and hosting resources without converting their content type. |
| permanent_or_temporary | permanent while these resources remain non-HTML |

## Exception admission and known baseline variants

All 18 S0.0A findings are dispositioned in [DESIGN_SYSTEM_V1_CONTRACT.md](DESIGN_SYSTEM_V1_CONTRACT.md). The approved ABOUT and AOTP identities are represented by EX-001, EX-003 and EX-007. Their current header CSS numbers do not silently become exceptions. Red Teaming wording is EX-004; its 104px observed footer is not the exception value.

Localizing a future authorized route preserves translated content and writing direction while applying shared chrome. The current nine locale-directory exclusions remain unchanged; excluded source pages are explicitly tracked as non-generated, not omitted public routes.

An additional exception requires a specific approved-reference requirement or explicit owner direction, a named role and bounded value, an expiry/review condition, and regression coverage. Mandatory reference requirements take precedence; discoverable new conflicts must be recorded before any implementation rather than normalized away. No current unresolved conflict is hidden behind that future procedure.

EX-008 lasts for this epic only; expiry does not authorize publication changes. EX-009 lasts until separately authorized route-governance work. Existing routes, indexing and redirects are not remediated by this registry.
