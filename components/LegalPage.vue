<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  summary: string;
  updated?: string;
}>();
</script>

<template>
  <main class="px-6 pb-28 pt-32 sm:pt-40">
    <article class="mx-auto max-w-4xl">
      <header class="border-b border-border-subtle pb-12">
        <p class="eyebrow mb-5">{{ eyebrow }}</p>
        <h1 class="font-display text-5xl leading-tight tracking-tight sm:text-6xl">{{ title }}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">{{ summary }}</p>
        <p v-if="updated" class="mt-5 font-mono text-[10px] uppercase tracking-wider text-text-muted">Last updated {{ updated }}</p>
      </header>
      <div class="legal-copy pt-12">
        <slot />
      </div>
    </article>
  </main>
</template>
