# GitReader Website Path

- Scope: Rename the public website repository from `faithk7/gitreader-landing` to `faithk7/git-reader` and publish the site at `/git-reader/`.
- Resources and environment: GitHub repository name, GitHub Pages deployment workflow, generated Nuxt base URL, `https://k7y.space/git-reader/`, sitemap, robots file, support links, and Open Graph image URLs.
- Verification: `npm ci`; `NUXT_APP_BASE_URL=/git-reader/ NUXT_TELEMETRY_DISABLED=1 npm run generate` completed successfully; generated HTML, `robots.txt`, and `sitemap.xml` contain `/git-reader/` paths; post-deploy HTTP checks are required after the repository rename.
- User-visible impact: GitReader's website has a product-specific URL and no longer exposes the `gitreader-landing` path as its canonical address.
- Rollback: Rename the GitHub repository back to `gitreader-landing`, restore `NUXT_APP_BASE_URL=/gitreader-landing/`, and redeploy the previous commit. The previous route remains the reference for rollback while GitHub's rename redirect is available.
- Next dependency: Confirm the Cloudflare/custom-domain path proxy serves `/git-reader/` after Pages completes deployment, then update any external campaign links that still use `/gitreader-landing/`.
