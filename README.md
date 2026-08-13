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
