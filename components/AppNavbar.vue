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
      <NuxtLink to="/" class="group flex items-center gap-3" aria-label="GitReader home">
        <img :src="`${baseURL}app-icon.png`" alt="" class="h-8 w-8 rounded-lg transition-transform group-hover:scale-105" />
        <span class="text-lg font-semibold">GitReader</span>
      </NuxtLink>
      <div class="flex items-center gap-5 sm:gap-8">
        <NuxtLink :to="{ path: '/', hash: '#features' }" class="hidden text-sm text-text-secondary transition-colors hover:text-text-primary sm:block">Workflow</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#pricing' }" class="hidden text-sm text-text-secondary transition-colors hover:text-text-primary sm:block">Pricing</NuxtLink>
        <NuxtLink to="/faq" class="hidden text-sm text-text-secondary transition-colors hover:text-text-primary md:block">FAQ</NuxtLink>
        <NuxtLink to="/beta" class="button-primary !px-5 !py-2">Request beta</NuxtLink>
      </div>
    </div>
  </nav>
</template>
