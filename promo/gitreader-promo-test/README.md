# GitReader promotion test

Reproducible Remotion source for the 18-second GitReader private-beta promotion test.

## Render

```sh
npm ci
npm run render
```

The output is written to `out/gitreader-promo-test.mp4`. Remotion downloads its compatible headless browser on first use when no browser executable is configured.

## Composition

- 1920×1080 at 30 FPS
- 540 frames / 18 seconds
- H.264, intentionally without audio
- Five separately registered scenes: title, problem, product, workflow, and call to action

The composition reuses the public GitReader app icon and sample repository-library screenshot. It contains no private repository data.
