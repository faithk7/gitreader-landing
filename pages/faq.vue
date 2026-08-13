<script setup lang="ts">
useSeoMeta({ title: "GitReader FAQ", description: "Answers about GitReader’s private beta, macOS support, repository privacy, AI guides, pricing, trial, and licensing." });
const faqs = [
  ["What is GitReader?", "GitReader is a native macOS workspace for recovering, reading, organizing, and annotating GitHub repositories. It focuses on repository research rather than commits, branches, or pull-request authoring."],
  ["Is GitReader available now?", "GitReader is currently in private beta. There is no public download, checkout, or guaranteed admission yet."],
  ["Which macOS versions are supported?", "The current build targets macOS 14 or later."],
  ["Does it work with private repositories?", "GitReader can display repositories allowed by the GitHub credential you provide. Access remains limited by that credential and your GitHub permissions."],
  ["Where are credentials stored?", "GitHub and AI-provider credentials are stored in macOS Keychain, not in the landing-page repository or website form."],
  ["Are notes local?", "Repository notes are ordinary files in your chosen sync location or GitReader’s local fallback folder. If you select an iCloud-backed folder, Apple handles that synchronization."],
  ["Does GitReader send my code to AI providers?", "Only when you configure an AI provider and approve using it. Relevant context and prompts are sent to that provider for AI-assisted features. You can use GitReader’s non-AI reading and organization workflows without configuring a provider."],
  ["Is the price final?", "No. The current $39 / ¥199 launch price is a public hypothesis for the first 100 customers. It will be validated with beta users before checkout opens."],
  ["What will a license include?", "The planned personal license covers one person on up to three Macs, permanent use of the purchased major version, and twelve months of updates."],
  ["Will there be a trial?", "A seven-day full-feature trial without a card is planned for public launch. It is not available yet."],
  ["Is GitReader open source?", "The landing-page source is public. The GitReader macOS application is currently private and is not offered under the MIT License."],
  ["Does GitReader replace my editor or Git client?", "No. GitReader is optimized for repository discovery, reading, notes, guides, and context reuse. Use your editor and Git client for changing code and managing Git history."],
];
</script>

<template>
  <main class="px-6 pb-28 pt-32 sm:pt-40">
    <div class="mx-auto max-w-5xl">
      <header class="max-w-3xl"><p class="eyebrow mb-5">Questions, answered</p><h1 class="font-display text-5xl leading-tight tracking-tight sm:text-6xl">Know what is real now—and what is still planned.</h1><p class="mt-6 text-lg leading-8 text-text-secondary">The beta is early. These answers keep product, privacy, and pricing claims precise.</p></header>
      <dl class="mt-16 grid gap-px overflow-hidden rounded-[22px] border border-border-subtle bg-border-subtle md:grid-cols-2">
        <div v-for="item in faqs" :key="item[0]" class="bg-bg p-7 sm:p-8"><dt class="text-base font-semibold text-text-primary">{{ item[0] }}</dt><dd class="mt-3 text-sm leading-6 text-text-secondary">{{ item[1] }}</dd></div>
      </dl>
      <div class="mt-12 flex flex-col items-start gap-4 border-t border-border-subtle pt-10 sm:flex-row sm:items-center sm:justify-between"><p class="text-text-secondary">Still deciding whether the beta fits your workflow?</p><div class="flex gap-3"><NuxtLink to="/support" class="button-secondary">Get support</NuxtLink><NuxtLink to="/beta" class="button-primary">Request beta</NuxtLink></div></div>
    </div>
  </main>
</template>
