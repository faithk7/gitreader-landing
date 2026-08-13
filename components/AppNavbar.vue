<script setup lang="ts">
const scrolled = ref(false);
const baseURL = useRuntimeConfig().app.baseURL;
onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 20; };
  window.addEventListener("scroll", onScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 transition-all duration-300" :class="scrolled ? 'border-b border-border-subtle bg-bg/85 backdrop-blur-xl' : 'bg-transparent'">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a :href="baseURL" class="group flex items-center gap-3" aria-label="GitReader home">
        <img :src="`${baseURL}app-icon.png`" alt="" class="h-8 w-8 rounded-lg transition-transform group-hover:scale-105" />
        <span class="text-lg font-semibold">GitReader</span>
      </a>
      <div class="flex items-center gap-5 sm:gap-8">
        <a href="#features" class="hidden text-sm text-text-secondary transition-colors hover:text-text-primary sm:block">Workflow</a>
        <a href="#pricing" class="hidden text-sm text-text-secondary transition-colors hover:text-text-primary sm:block">Pricing</a>
        <a href="https://github.com/faithk7/gitreader-landing/issues/new?title=Beta%20access%20request&body=I%27d%20like%20to%20try%20GitReader%20on%20macOS.%0A%0AmacOS%20version%3A%20%0AWhat%20I%20want%20to%20use%20GitReader%20for%3A%20" target="_blank" rel="noreferrer" class="button-primary !px-5 !py-2">Request beta</a>
      </div>
    </div>
  </nav>
</template>
