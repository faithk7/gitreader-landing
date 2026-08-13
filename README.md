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

## Public routes

- `/` — product overview, workflow, product screenshot, and provisional pricing
- `/beta` — browser-local beta request form that opens a prefilled public GitHub issue
- `/faq` — product, privacy, platform, and pricing questions
- `/privacy` — current website and application data practices
- `/license` — provisional personal-license and refund terms
- `/support` — public support routes and private vulnerability reporting

The site has no form backend, cookies, or analytics. Beta-form values remain in the browser until the visitor chooses to review the prefilled request on GitHub.
