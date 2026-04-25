<script setup lang="ts">
const scrolled = ref(false);

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'bg-bg/80 backdrop-blur-xl border-b border-border-subtle'
        : 'bg-transparent'
    "
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3 group">
        <img
          src="/app-icon.png"
          alt="GitReader"
          class="w-8 h-8 rounded-lg transition-transform duration-200 group-hover:scale-105"
        />
        <span class="text-text-primary font-semibold text-lg">GitReader</span>
      </a>

      <div class="flex items-center gap-8">
        <a
          href="#features"
          class="text-text-secondary hover:text-text-primary transition-colors text-sm"
        >
          Features
        </a>
        <a
          href="#"
          class="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2 rounded-pill transition-all duration-200 hover:scale-[1.02]"
        >
          Download for macOS
        </a>
      </div>
    </div>
  </nav>
</template>
