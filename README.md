# Black Bag Security Website (Jekyll + GitHub Pages)

## Overview
- Static Jekyll site served from the /docs directory for GitHub Pages.
- No third-party JS, analytics, or CDN assets; fonts and media are local.
- Content is primarily Markdown/HTML with a single shared layout.

## Repository layout
- docs/ (Jekyll site root)
  - index.html (home)
  - services.md, methodology.md, industries.md, trust.md, research.md, about.md, contact.md
  - _layouts/default.html (base layout)
  - assets/css/style.css (core theme), assets/css/site.css (utilities)
  - assets/js/app.js (reveal animation + year)
  - assets/fonts/ (local fonts)
  - robots.txt, security.txt, .well-known/security.txt
- nginx/blackbagsecurity.com.conf (legacy self-hosting example; not used for GitHub Pages)

## Local preview
Requires Ruby + Jekyll installed:
- jekyll serve --source docs
- open http://127.0.0.1:4000

## Build
- jekyll build --source docs

## Deployment (GitHub Pages)
1) Repository settings -> Pages:
   - Source: Deploy from a branch
   - Branch: main /docs
2) Custom domain: www.blackbagsecurity.com
3) Enforce HTTPS.
4) Keep docs/CNAME set to www.blackbagsecurity.com.
5) Ensure docs/_config.yml includes .well-known so /.well-known/security.txt is served.

## Content and contribution notes
- Use front matter title/description for SEO and social metadata.
- Reveal animation uses the reveal class plus delay-* utilities in docs/assets/css/site.css.
- Avoid introducing inline scripts/styles to keep CSP compatibility for self-hosted deployments.

## Security posture
- No external dependencies or analytics.
- security.txt is served at both /security.txt and /.well-known/security.txt; keep content aligned.
- If self-hosting, add CSP and security headers at the reverse proxy and allow the JSON-LD script in docs/_layouts/default.html (either by hash or by moving it to a separate file).
