<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL;
</script>

<template>
  <section class="relative min-h-screen overflow-hidden px-6 pb-24 pt-32 sm:pt-40">
    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div class="mb-7 flex items-center gap-3">
            <img :src="`${baseURL}app-icon.png`" alt="" class="h-10 w-10 rounded-xl" />
            <span class="eyebrow">Native repository research</span>
          </div>
          <h1 class="font-display text-6xl leading-[.94] tracking-[-.045em] sm:text-7xl lg:text-[5.4rem]">
            Read less<br /><em class="font-normal text-accent">twice.</em>
          </h1>
          <p class="mt-8 max-w-xl text-lg leading-8 text-text-secondary">
            GitReader turns saved GitHub repositories into durable working knowledge—code, source-linked notes, reading guides, and agent-ready context in one calm macOS workspace.
          </p>
          <div class="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#workflow" class="button-primary">See the workflow <span aria-hidden="true">↓</span></a>
            <a href="https://github.com/faithk7/gitreader-landing/issues/new?title=Beta%20access%20request&body=I%27d%20like%20to%20try%20GitReader%20on%20macOS.%0A%0AmacOS%20version%3A%20%0AWhat%20I%20want%20to%20use%20GitReader%20for%3A%20" target="_blank" rel="noreferrer" class="button-secondary">Request beta access</a>
          </div>
          <p class="mt-5 font-mono text-xs text-text-muted">macOS 14+ · Private beta · No card required</p>
        </div>

        <div class="relative">
          <div class="absolute -inset-10 rounded-full bg-accent/[.06] blur-3xl" />
          <div class="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#101216] shadow-2xl shadow-black/50">
            <div class="flex h-11 items-center gap-2 border-b border-white/[.07] px-4"><span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span class="h-2.5 w-2.5 rounded-full bg-[#28c840]" /><span class="ml-4 font-mono text-[10px] text-text-muted">GitReader / swift-collections</span></div>
            <div class="grid min-h-[420px] grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr]">
              <aside class="border-r border-white/[.07] p-3 sm:p-4">
                <p class="mb-4 font-mono text-[9px] uppercase tracking-widest text-text-muted">Collection / Research</p>
                <div class="space-y-1 font-mono text-[10px] text-text-secondary"><p class="rounded bg-accent/10 px-2 py-2 text-accent">swift-collections</p><p class="px-2 py-2">swift-algorithms</p><p class="px-2 py-2">swift-syntax</p><p class="px-2 py-2">swift-testing</p></div>
              </aside>
              <div class="min-w-0 p-4 sm:p-6">
                <div class="mb-5 flex items-start justify-between gap-4"><div><p class="font-mono text-[9px] uppercase tracking-widest text-accent">Reading guide · 4 of 7</p><h2 class="mt-2 text-lg font-semibold">How OrderedSet stores identity</h2></div><span class="rounded-full border border-white/10 px-2 py-1 font-mono text-[9px] text-text-muted">local</span></div>
                <div class="space-y-2 font-mono text-[10px] leading-5 sm:text-[11px]"><p><span class="text-[#c586c0]">struct</span> <span class="text-[#4ec9b0]">OrderedSet</span>&lt;Element&gt; {</p><p class="pl-4 text-text-muted">// Dense storage preserves order</p><p class="pl-4"><span class="text-[#569cd6]">internal var</span> _elements: ContiguousArray&lt;Element&gt;</p><p class="pl-4"><span class="text-[#569cd6]">internal var</span> _table: _HashTable</p><p>}</p></div>
                <div class="mt-8 border-l-2 border-accent bg-accent/[.05] p-4"><p class="font-mono text-[9px] uppercase tracking-widest text-accent">Source-linked note</p><p class="mt-2 text-xs leading-5 text-text-secondary">The array owns iteration order; the hash table maps membership back to offsets.</p><p class="mt-3 font-mono text-[9px] text-text-muted">OrderedSet.swift · L42–61</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
