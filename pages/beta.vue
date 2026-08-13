<script setup lang="ts">
useSeoMeta({
  title: "Request GitReader beta access",
  description: "Tell us how you research GitHub repositories and request access to the private GitReader beta for macOS.",
});

const githubHandle = ref("");
const macOSVersion = ref("macOS 15");
const repositoryVolume = ref("100–499");
const workflow = ref("");
const consent = ref(false);

const readyToRequest = computed(() => Boolean(
  consent.value && githubHandle.value.trim() && workflow.value.trim(),
));

const requestURL = computed(() => {
  const title = `Beta request: ${githubHandle.value.trim() || "GitHub user"}`;
  const body = [
    "## GitReader beta request",
    "",
    `**GitHub handle:** @${githubHandle.value.trim().replace(/^@/, "") || "not provided"}`,
    `**macOS version:** ${macOSVersion.value}`,
    `**Repository library size:** ${repositoryVolume.value}`,
    "",
    "### What I want to use GitReader for",
    workflow.value.trim() || "Not provided",
    "",
    "---",
    "I understand this request will be public on GitHub and contains no confidential information.",
  ].join("\n");
  return `https://github.com/faithk7/gitreader-landing/issues/new?labels=beta-request&title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
});

function openRequest() {
  if (!readyToRequest.value) return;
  window.open(requestURL.value, "_blank", "noopener,noreferrer")?.focus();
}
</script>

<template>
  <main class="px-6 pb-28 pt-32 sm:pt-40">
    <div class="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
      <header>
        <p class="eyebrow mb-5">Private beta</p>
        <h1 class="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">Help shape the repository-reading workflow.</h1>
        <p class="mt-7 text-lg leading-8 text-text-secondary">The first beta is for macOS developers who regularly return to saved repositories and want a better bridge between reading, notes, and coding agents.</p>
        <div class="legal-note">
          <strong class="text-text-primary">How this request works</strong>
          <p class="mt-2">This static site does not store your form data. The button opens a prefilled public GitHub issue for you to review and submit. Do not include private repository names, credentials, employer information, or confidential project details.</p>
        </div>
      </header>

      <form class="rounded-[22px] border border-border-subtle bg-surface p-6 sm:p-9" @submit.prevent="openRequest">
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <label for="github-handle" class="field-label">GitHub handle</label>
            <input id="github-handle" v-model="githubHandle" class="field-control" required autocomplete="username" placeholder="octocat" />
          </div>
          <div>
            <label for="macos-version" class="field-label">macOS version</label>
            <select id="macos-version" v-model="macOSVersion" class="field-control">
              <option>macOS 14</option><option>macOS 15</option><option>macOS 16</option><option>macOS 17 beta</option>
            </select>
          </div>
          <div>
            <label for="repository-volume" class="field-label">Saved repositories</label>
            <select id="repository-volume" v-model="repositoryVolume" class="field-control">
              <option>Under 100</option><option>100–499</option><option>500–999</option><option>1,000+</option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <label for="workflow" class="field-label">What do you want to do with GitReader?</label>
            <textarea id="workflow" v-model="workflow" class="field-control min-h-36 resize-y" required maxlength="1000" placeholder="For example: compare open-source libraries, save notes against source files, and reuse that context with coding agents." />
            <p class="mt-2 text-xs text-text-muted">Keep it general and non-confidential. Maximum 1,000 characters.</p>
          </div>
        </div>

        <label class="mt-6 flex items-start gap-3 text-sm leading-6 text-text-secondary">
          <input v-model="consent" type="checkbox" required class="mt-1 h-4 w-4 accent-[#ff7a1a]" />
          <span>I understand the request is public on GitHub and I have not included confidential information.</span>
        </label>

        <button type="submit" class="button-primary mt-8 w-full">
          Review request on GitHub <span aria-hidden="true">↗</span>
        </button>
        <p class="mt-4 text-center text-xs text-text-muted">Submitting the GitHub issue does not guarantee beta admission. No card is required.</p>
      </form>
    </div>
  </main>
</template>
