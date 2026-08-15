# GitReader landing page

Public landing page for GitReader, a native repository research workspace for macOS.

## Local development

```sh
npm ci
npm run dev
```

## Production build

GitHub Pages hosts this repository at `/gitreader-landing/`, so validate that base path before publishing:

```sh
NUXT_APP_BASE_URL=/gitreader-landing/ npm run generate
```

The generated static site is written to `.output/public` and deployed by `.github/workflows/deploy-pages.yml` on pushes to `main`.

## Promotion video

The first 18-second product-promotion test is available at `/videos/gitreader-promo-test.mp4`. Its reproducible Remotion source lives in [`promo/gitreader-promo-test`](promo/gitreader-promo-test/README.md).

## Public routes

- `/` — product overview, workflow, product screenshot, and provisional pricing
- `/beta` — browser-local beta request form that opens a prefilled public GitHub issue
- `/faq` — product, privacy, platform, and pricing questions
- `/privacy` — current website and application data practices
- `/license` — provisional personal-license and refund terms
- `/support` — public support routes and private vulnerability reporting

The site uses the private GitReader commercial API only when both deployment variables are configured:

- `GITREADER_COMMERCIAL_API_BASE_URL`
- `GITREADER_TURNSTILE_SITE_KEY`

The beta form never falls back to public GitHub issues. Optional analytics is off by default and sends only fixed event names, page labels, and a normalized acquisition channel after explicit consent. It stores no cookies, form fields, raw UTM values, repository details, or stable visitor identifiers.
