<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL;
</script>

<template>
  <section class="section-rule px-6 py-28 sm:py-36" aria-labelledby="product-preview-title">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="eyebrow mb-4">The native workspace</p>
          <h2 id="product-preview-title" class="font-display text-4xl tracking-tight sm:text-5xl">One library. Fewer loose ends.</h2>
        </div>
        <p class="max-w-md text-sm leading-6 text-text-secondary">Browse public and private repositories permitted by your GitHub token, then keep collections and reading context close at hand.</p>
      </div>
      <figure>
        <div class="overflow-hidden rounded-[22px] border border-white/10 bg-surface shadow-2xl shadow-black/40">
          <img
            :src="`${baseURL}screenshots/gitreader-library.jpg`"
            width="1400"
            height="900"
            loading="lazy"
            decoding="async"
            alt="GitReader on macOS showing a repository library with collections and public Swift repositories"
            class="h-auto w-full"
          />
        </div>
        <figcaption class="mt-4 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-wider text-text-muted sm:flex-row sm:justify-between">
          <span>Real GitReader interface · dark appearance</span>
          <span>Sample public repository data · no personal content</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
