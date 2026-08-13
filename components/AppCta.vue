<template>
  <section class="section-rule relative overflow-hidden px-6 py-28 sm:py-36">
    <div class="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[.08] blur-3xl" />
    <div class="relative z-10 mx-auto max-w-3xl text-center">
      <p class="eyebrow mb-5">Private beta</p>
      <h2 class="font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl">Your repository library<br />deserves a memory.</h2>
      <p class="mx-auto mt-7 max-w-xl text-lg leading-8 text-text-secondary">GitReader is preparing for its first public macOS release. Tell us about your repository-reading workflow and help shape the beta.</p>
      <div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <NuxtLink to="/beta" class="button-primary">Request beta access <span aria-hidden="true">→</span></NuxtLink>
        <NuxtLink to="/faq" class="button-secondary">Read the FAQ</NuxtLink>
      </div>
      <p class="mt-5 font-mono text-xs text-text-muted">Requires a GitHub account · macOS 14+</p>
    </div>
  </section>
</template>
