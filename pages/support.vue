<script setup lang="ts">
useSeoMeta({ title: "GitReader support", description: "Get help with the GitReader beta, report a website problem, ask a pre-sales question, or privately report a security issue." });
const supportURL = "https://github.com/faithk7/git-reader/issues/new?labels=support&title=Support%3A%20&body=%23%23%20What%20do%20you%20need%20help%20with%3F%0A%0A%23%23%20macOS%20version%0A%0A%23%23%20What%20happened%3F%0A%0APlease%20do%20not%20include%20tokens%2C%20private%20repository%20names%2C%20or%20confidential%20information.%0A";
const websiteURL = "https://github.com/faithk7/git-reader/issues/new?labels=website&title=Website%3A%20&body=%23%23%20Page%20or%20link%0A%0A%23%23%20What%20did%20you%20expect%3F%0A%0A%23%23%20What%20happened%3F%0A";
</script>

<template>
  <main class="px-6 pb-28 pt-32 sm:pt-40">
    <div class="mx-auto max-w-5xl">
      <header class="max-w-3xl"><p class="eyebrow mb-5">Support</p><h1 class="font-display text-5xl leading-tight tracking-tight sm:text-6xl">Choose the right route.</h1><p class="mt-6 text-lg leading-8 text-text-secondary">GitReader is founder-supported during beta. Public questions and reproducible reports help build a useful knowledge base.</p></header>
      <div class="mt-14 grid gap-5 md:grid-cols-2">
        <section class="rounded-[22px] border border-border-subtle bg-surface p-7"><p class="eyebrow">Product support</p><h2 class="mt-5 font-display text-3xl">Beta help and pre-sales questions</h2><p class="mt-4 text-sm leading-6 text-text-secondary">Ask about setup, supported workflows, provisional pricing, or a problem you can describe without confidential data.</p><a :href="supportURL" target="_blank" rel="noreferrer" class="button-primary mt-7">Open a support request ↗</a></section>
        <section class="rounded-[22px] border border-border-subtle bg-surface p-7"><p class="eyebrow">Website</p><h2 class="mt-5 font-display text-3xl">Broken link or unclear claim</h2><p class="mt-4 text-sm leading-6 text-text-secondary">Report an accessibility, rendering, copy, or navigation problem in the public website repository.</p><a :href="websiteURL" target="_blank" rel="noreferrer" class="button-secondary mt-7">Report a website issue ↗</a></section>
        <section class="rounded-[22px] border border-border-active bg-accent/[.04] p-7 md:col-span-2"><p class="eyebrow">Security and privacy</p><h2 class="mt-5 font-display text-3xl">Do not disclose vulnerabilities publicly.</h2><p class="mt-4 max-w-2xl text-sm leading-6 text-text-secondary">Use GitHub’s private vulnerability reporting for the public website repository. Do not include live credentials, exploit public systems, or test against data you do not own.</p><a href="https://github.com/faithk7/git-reader/security/advisories/new" target="_blank" rel="noreferrer" class="button-secondary mt-7">Report privately on GitHub ↗</a></section>
      </div>
      <p class="mt-8 text-xs leading-5 text-text-muted">GitHub requests are processed under GitHub’s terms and privacy policy. Never paste access tokens, AI keys, license data, or private repository content into an issue.</p>
    </div>
  </main>
</template>
