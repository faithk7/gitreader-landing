<script setup lang="ts">
const included = ["One person · up to 3 Macs", "Permanent use of the purchased major version", "12 months of updates", "Full repository reading and organization workflow", "gr CLI and GitReader Agent Skill"];
</script>

<template>
  <section id="pricing" class="section-rule px-6 py-28 sm:py-36">
    <div class="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
      <div><p class="eyebrow mb-4">Planned launch offer</p><h2 class="font-display text-4xl leading-tight tracking-tight sm:text-5xl">Own your tools.<br /><em class="font-normal text-accent">Keep your context.</em></h2><p class="mt-6 max-w-lg text-base leading-7 text-text-secondary">GitReader is planned as a straightforward one-time purchase—not a subscription for opening your own repository library.</p><p class="mt-5 max-w-lg text-xs leading-5 text-text-muted">Pricing is a launch plan and may change before public availability. Beta access is currently free.</p></div>
      <div class="overflow-hidden rounded-[22px] border border-border-active bg-surface shadow-2xl shadow-black/30">
        <div class="flex flex-col gap-6 border-b border-border-subtle p-7 sm:flex-row sm:items-end sm:justify-between sm:p-9"><div><span class="rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">First 100 customers</span><p class="mt-5 text-sm text-text-secondary">Personal license</p><div class="mt-1 flex items-baseline gap-3"><strong class="font-display text-6xl font-normal tracking-tight">$39</strong><span class="font-mono text-sm text-text-muted">or ¥199</span></div></div><div class="font-mono text-xs leading-5 text-text-muted sm:text-right"><p>7-day full trial planned</p><p>No card to try</p></div></div>
        <div class="grid gap-8 p-7 sm:grid-cols-[1fr_auto] sm:p-9"><ul class="space-y-3"><li v-for="item in included" :key="item" class="flex gap-3 text-sm text-text-secondary"><span class="text-accent" aria-hidden="true">✓</span><span>{{ item }}</span></li></ul><PurchaseButton /></div>
      </div>
    </div>
  </section>
</template>
