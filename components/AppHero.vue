<script setup lang="ts">
const show = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    show.value = true;
  });
});
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none"
    />

    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-32">
      <div
        class="transition-all duration-700 ease-out"
        :class="show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <img
          src="/app-icon.png"
          alt="GitReader"
          class="w-32 h-32 mx-auto rounded-3xl mb-10"
          :style="{
            filter: show ? 'drop-shadow(0 0 40px rgba(249,115,22,0.15))' : 'none',
          }"
        />
      </div>

      <h1
        class="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 transition-all duration-700 delay-100 ease-out"
        :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        Your starred repos,
        <span class="text-accent">organized.</span>
      </h1>

      <p
        class="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto mb-10 transition-all duration-700 delay-200 ease-out"
        :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        A modern macOS app to browse, search, and organize your starred GitHub
        repositories. Beautiful, fast, and built with SwiftUI.
      </p>

      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ease-out"
        :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <a
          href="#"
          class="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3.5 rounded-pill text-base transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
            />
          </svg>
          Download for macOS
        </a>
        <span class="text-text-muted text-sm">Requires macOS 13.0+</span>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
  </section>
</template>
