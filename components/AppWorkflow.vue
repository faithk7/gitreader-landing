<script setup lang="ts">
const visible = ref(false);
const section = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) visible.value = true;
    },
    { threshold: 0.2 }
  );
  if (section.value) observer.observe(section.value);
  onUnmounted(() => observer.disconnect());
});

const steps = [
  {
    number: "01",
    title: "Connect GitHub",
    description: "Sign in with a personal access token. Your data stays local.",
    code: "Settings → Connect to GitHub",
  },
  {
    number: "02",
    title: "Browse your stars",
    description: "All your starred repos in a beautiful grid with metadata.",
    code: "2,847 starred repositories loaded",
  },
  {
    number: "03",
    title: "Search, filter, organize",
    description: "Filter by language or topic. Create collections. Browse code.",
    code: 'filter: language="rust" topic="cli"',
  },
];
</script>

<template>
  <section ref="section" class="relative py-32 px-6 bg-surface/50">
    <div class="max-w-5xl mx-auto">
      <div
        class="text-center mb-20 transition-all duration-700 ease-out"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          Three steps. That's it.
        </h2>
        <p class="text-text-secondary text-lg">
          From zero to organized in under a minute.
        </p>
      </div>

      <div class="space-y-6">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          class="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-container border border-border-subtle bg-bg/60 transition-all duration-700 ease-out"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{ transitionDelay: `${200 + i * 150}ms` }"
        >
          <span
            class="text-accent font-mono text-sm font-medium shrink-0 mt-1"
          >
            {{ step.number }}
          </span>

          <div class="flex-1 min-w-0">
            <h3 class="text-lg font-medium mb-1">{{ step.title }}</h3>
            <p class="text-text-secondary text-sm mb-4">
              {{ step.description }}
            </p>
            <div
              class="font-mono text-sm text-text-muted bg-surface px-4 py-2.5 rounded-container border border-border-subtle inline-block"
            >
              {{ step.code }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
