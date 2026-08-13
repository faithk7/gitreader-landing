<script setup lang="ts">
const steps = [
  { number: "01", title: "Recover", description: "Find the repository you saved months ago and recover why it mattered.", code: 'collection:"local-first" language:swift' },
  { number: "02", title: "Understand", description: "Move from README to architecture to relevant source with a focused reading guide.", code: "Guide → Storage model → OrderedSet.swift" },
  { number: "03", title: "Preserve", description: "Attach your conclusion to its source so future-you starts with context, not tabs.", code: "Note saved at OrderedSet.swift:42" },
  { number: "04", title: "Reuse", description: "Bring that durable context into your next agent session through gr.", code: "gr repo show apple/swift-collections" },
];
</script>

<template>
  <section id="workflow" class="section-rule relative bg-surface/40 px-6 py-28 sm:py-36">
    <div class="mx-auto max-w-6xl">
      <div class="mb-16 max-w-2xl"><p class="eyebrow mb-4">One continuous workflow</p><h2 class="font-display text-4xl tracking-tight sm:text-5xl">Keep the thread.</h2><p class="mt-5 text-lg leading-8 text-text-secondary">Stop rebuilding the same mental model every time a repository becomes relevant again.</p></div>
      <div class="grid md:grid-cols-2">
        <div v-for="step in steps" :key="step.number" class="-mt-px border border-border-subtle bg-bg/50 p-7 md:-ml-px">
          <div class="flex items-center justify-between"><span class="font-mono text-xs text-accent">{{ step.number }}</span><span class="h-px w-12 bg-border-subtle" /></div>
          <div class="mt-9"><h3 class="font-display text-3xl">{{ step.title }}</h3><p class="mt-3 max-w-md text-sm leading-6 text-text-secondary">{{ step.description }}</p><div class="mt-6 inline-block border border-border-subtle bg-surface px-3 py-2 font-mono text-[10px] text-text-muted">{{ step.code }}</div></div>
        </div>
      </div>
    </div>
  </section>
</template>
