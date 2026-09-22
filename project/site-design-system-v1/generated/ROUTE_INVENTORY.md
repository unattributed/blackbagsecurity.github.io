# Site Design System V1 Route Inventory

Baseline source: `230499fb260786d555177154178edad074038a86`

Slice start: `531968e6588ef611dc50d7e4dfdebf08ac5af280`

Build: `jekyll build --source docs` — PASS

Inventory: 33 generated public routes, 10 page families, 90 localized source pages excluded by the accepted configuration

This inventory covers every HTML page, redirect, static support endpoint, generated sitemap, and hosting-control endpoint emitted outside `/assets/`. Asset URLs are delivery resources rather than page routes. Exact ordered stylesheet lists and computed desktop geometry are preserved in the local `route-inventory.csv` and `visual-system-inventory.csv` evidence.

## Page families

| Family | Routes | Active layout systems | Representative baseline |
|---|---:|---|---|
| MAIN | 1 | `main-locked` | `/` |
| SERVICES | 1 | `services-locked` | `/services/` |
| SERVICE_CHILD | 9 | `service-child`, `home-v2` | `/services/penetration-testing/`, `/services/ai-security/` |
| CAPABILITY | 1 | `capability-v3` | `/capability/` |
| CAPABILITY_SUBPAGE | 6 | `aotp-v4`, `home-v2` | `/arsenal/aotp/`, `/arsenal/osmap/` |
| ABOUT | 1 | `about-v3` | `/about/` |
| SECONDARY_PUBLIC | 5 | `home-v2`, `marketing` | `/trust/`, `/methodology/` |
| PUBLIC_REDIRECT | 1 | no layout | `/research/` |
| INTERNAL_COMPARISON | 1 | `home-v2` | `/compare/services-before-technical-writing/` |
| PUBLIC_SUPPORT_ENDPOINT | 7 | no layout | `/security.txt` |

## Generated route map

| Route | Family | Source | Layout | CSS system |
|---|---|---|---|---|
| `/` | MAIN | `docs/index.html` | `main-locked` | `main-locked.css` |
| `/services/` | SERVICES | `docs/services.md` | `services-locked` | `services-locked.css` |
| `/services/penetration-testing/` | SERVICE_CHILD | `docs/services/penetration-testing.md` | `service-child` | `service-child.css` |
| `/services/red-teaming/` | SERVICE_CHILD | `docs/services/red-teaming.md` | `service-child` | `service-child.css` |
| `/services/reverse-engineering/` | SERVICE_CHILD | `docs/services/reverse-engineering.md` | `service-child` | `service-child.css` |
| `/services/secure-code-review/` | SERVICE_CHILD | `docs/services/secure-code-review.md` | `service-child` | `service-child.css` |
| `/services/secure-engineering/` | SERVICE_CHILD | `docs/services/secure-engineering.md` | `service-child` | `service-child.css` |
| `/services/adversary-validation/` | SERVICE_CHILD | `docs/services/adversary-validation.md` | `home-v2` | legacy `home-v2` stack |
| `/services/ai-security/` | SERVICE_CHILD | `docs/services/ai-security.md` | `home-v2` | legacy `home-v2` stack |
| `/services/application-api-security/` | SERVICE_CHILD | `docs/services/application-api-security.md` | `home-v2` | legacy `home-v2` stack |
| `/services/secure-systems-engineering/` | SERVICE_CHILD | `docs/services/secure-systems-engineering.md` | `home-v2` | legacy `home-v2` stack |
| `/capability/` | CAPABILITY | `docs/arsenal/index.html` | `capability-v3` | `capability-v3.css` |
| `/arsenal/` | CAPABILITY_SUBPAGE | `docs/research.md` | `home-v2` | legacy `home-v2` stack |
| `/arsenal/aotp/` | CAPABILITY_SUBPAGE | `docs/arsenal/aotp.md` | `aotp-v4` | `aotp-v4.css` |
| `/arsenal/browser-safe-ai-security/` | CAPABILITY_SUBPAGE | `docs/arsenal/browser-safe-ai-security.md` | `home-v2` | legacy `home-v2` stack |
| `/arsenal/openbsd-mailstack/` | CAPABILITY_SUBPAGE | `docs/arsenal/openbsd-mailstack.md` | `home-v2` | legacy `home-v2` stack |
| `/arsenal/osmap/` | CAPABILITY_SUBPAGE | `docs/arsenal/osmap.md` | `home-v2` | legacy `home-v2` stack |
| `/arsenal/security-engagement-platform/` | CAPABILITY_SUBPAGE | `docs/arsenal/security-engagement-platform.md` | `home-v2` | legacy `home-v2` stack |
| `/about/` | ABOUT | `docs/about.md` | `about-v3` | `about-v3.css` |
| `/industries/` | SECONDARY_PUBLIC | `docs/industries.md` | `home-v2` | legacy `home-v2` plus `supporting-v2.css` |
| `/methodology/` | SECONDARY_PUBLIC | `docs/methodology.md` | `marketing` | `style.css`, `site.css`, `marketing.css` |
| `/on-site-engagements/` | SECONDARY_PUBLIC | `docs/on-site-engagements.md` | `home-v2` | legacy `home-v2` plus `supporting-v2.css` |
| `/policies/` | SECONDARY_PUBLIC | `docs/policies.md` | `home-v2` | legacy `home-v2` plus `supporting-v2.css` |
| `/trust/` | SECONDARY_PUBLIC | `docs/trust.md` | `home-v2` | legacy `home-v2` plus `supporting-v2.css` |
| `/research/` | PUBLIC_REDIRECT | `docs/research/index.html` | none | none; 200 client redirect to `/arsenal/` |
| `/compare/services-before-technical-writing/` | INTERNAL_COMPARISON | `docs/compare/services-before-technical-writing.md` | `home-v2` | legacy `home-v2` plus `services-v2.css` |
| `/CNAME` | PUBLIC_SUPPORT_ENDPOINT | `docs/CNAME` | none | none |
| `/llms.txt` | PUBLIC_SUPPORT_ENDPOINT | `docs/llms.txt` | none | none |
| `/robots.txt` | PUBLIC_SUPPORT_ENDPOINT | `docs/robots.txt` | none | none |
| `/security.txt` | PUBLIC_SUPPORT_ENDPOINT | `docs/security.txt` | none | none |
| `/.well-known/security.txt` | PUBLIC_SUPPORT_ENDPOINT | `docs/.well-known/security.txt` | none | none |
| `/.well-known/autoconfig/mail/config-v1.1.xml` | PUBLIC_SUPPORT_ENDPOINT | `docs/.well-known/autoconfig/mail/config-v1.1.xml` | none | none |
| `/sitemap.xml` | PUBLIC_SUPPORT_ENDPOINT | `jekyll-sitemap` | none | none |

## Localized source boundary

The accepted `docs/_config.yml` explicitly excludes nine locale directories: `ar`, `de`, `es`, `fr`, `he`, `ja`, `ko`, `pt-br`, and `th`. Those directories contain 90 preserved source pages, but the accepted build emits zero localized public routes. No translated content was changed.

## Baseline conclusions

- All 33 non-asset public outputs returned HTTP 200 from the accepted local build.
- The 26 HTML routes use eight active layout implementations.
- MAIN, SERVICES, SERVICE_CHILD, CAPABILITY, CAPABILITY_SUBPAGE, ABOUT, SECONDARY_PUBLIC, redirect, comparison, and support endpoint families all have representative baseline evidence.
- `/compare/services-before-technical-writing/` is public and indexed but has no confirmed current authority.
- `/research/` is indexed while resolving in-browser to `/arsenal/` through a client redirect.
- No source rendering file was changed and no deployment occurred.
