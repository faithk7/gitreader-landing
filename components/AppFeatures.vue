<script setup lang="ts">
const features = [
  { index: "01", title: "Recover the right repository", description: "Search your library, filter by language and topic, and keep purpose-built collections for the work you return to." },
  { index: "02", title: "Read code without ceremony", description: "Clone locally, navigate the file tree and outline, and read syntax-highlighted source without setting up a full IDE project." },
  { index: "03", title: "Keep knowledge attached", description: "Write Markdown notes linked to the exact source that made the idea click, then find that context again later." },
  { index: "04", title: "Follow a reading guide", description: "Turn an unfamiliar codebase into a deliberate sequence of files, concepts, and questions with AI-assisted repository guides." },
  { index: "05", title: "See architecture clearly", description: "Read rendered Markdown and Mermaid diagrams beside the code instead of bouncing between tabs and tools." },
  { index: "06", title: "Hand context to your agent", description: "Use the gr CLI and GitReader Agent Skill to let coding agents inspect your library, collections, and repository context." },
];
</script>

<template>
  <section id="features" class="section-rule relative px-6 py-28 sm:py-36">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-6 border-b border-border-subtle pb-12 md:grid-cols-2">
        <div><p class="eyebrow mb-4">A complete research loop</p><h2 class="font-display text-4xl leading-tight tracking-tight sm:text-5xl">From “save this” to<br /><em class="font-normal text-accent">“I understand it.”</em></h2></div>
        <p class="max-w-lg text-lg leading-8 text-text-secondary md:justify-self-end md:self-end">GitReader keeps discovery, reading, interpretation, and recall in one native flow—without trying to replace your editor or Git client.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3">
        <div v-for="feature in features" :key="feature.title" class="group border-b border-border-subtle py-9 md:px-8 md:first:pl-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0">
          <span class="font-mono text-[10px] text-accent">{{ feature.index }}</span>
          <h3 class="mt-8 text-lg font-semibold transition-colors group-hover:text-accent">{{ feature.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-text-secondary">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
