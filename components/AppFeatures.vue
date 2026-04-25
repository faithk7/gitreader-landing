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

const features = [
  {
    icon: "search",
    title: "Smart Search & Filter",
    description:
      "Find any repo instantly. Filter by language, topics, or custom labels.",
  },
  {
    icon: "folder",
    title: "Collections & Labels",
    description:
      "Organize starred repos into collections. Tag and categorize your way.",
  },
  {
    icon: "code",
    title: "Code Browser",
    description:
      "Browse repository code with syntax highlighting, right from the app.",
  },
];
</script>

<template>
  <section id="features" ref="section" class="relative py-32 px-6">
    <div class="max-w-6xl mx-auto">
      <div
        class="text-center mb-20 transition-all duration-700 ease-out"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          Everything you need to manage your stars
        </h2>
        <p class="text-text-secondary text-lg max-w-lg mx-auto">
          Built for developers who star more repos than they can remember.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          class="text-center md:text-left transition-all duration-700 ease-out"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + i * 100}ms` }"
        >
          <div
            class="w-12 h-12 rounded-container bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 mx-auto md:mx-0"
          >
            <svg
              v-if="feature.icon === 'search'"
              class="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" stroke-linecap="round" />
            </svg>
            <svg
              v-else-if="feature.icon === 'folder'"
              class="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <polyline
                points="16 18 22 12 16 6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <polyline
                points="8 6 2 12 8 18"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h3 class="text-lg font-medium mb-2">{{ feature.title }}</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
  </section>
</template>
