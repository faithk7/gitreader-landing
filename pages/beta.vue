<script setup lang="ts">
import {
  acquisitionStorageKey,
  type AcquisitionChannel,
} from "~/utils/acquisition";

useSeoMeta({
  title: "Request GitReader beta access",
  description: "Tell us how you research GitHub repositories and request access to the private GitReader beta for macOS.",
});

type TurnstileAPI = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetID: string) => void;
};

const config = useRuntimeConfig();
const apiBaseURL = String(config.public.commercialApiBaseURL || "").replace(/\/$/, "");
const turnstileSiteKey = String(config.public.turnstileSiteKey || "");
const backendReady = Boolean(apiBaseURL && turnstileSiteKey);

const email = ref("");
const githubHandle = ref("");
const macOSVersion = ref("macOS 15");
const repositoryVolume = ref("100–499");
const workflow = ref("");
const website = ref("");
const privacyConsent = ref(false);
const interviewConsent = ref(false);
const analyticsConsent = ref(false);
const acquisitionChannel = ref<AcquisitionChannel>("direct");
const turnstileToken = ref("");
const turnstileContainer = ref<HTMLElement | null>(null);
const turnstileWidgetID = ref("");
const submitState = ref<"idle" | "submitting" | "success" | "error">("idle");
const submitMessage = ref("");
let analyticsStartSent = false;

const readyToRequest = computed(() => Boolean(
  backendReady
  && submitState.value !== "submitting"
  && email.value.trim()
  && workflow.value.trim().length >= 10
  && privacyConsent.value
  && turnstileToken.value,
));

function loadTurnstile(): Promise<TurnstileAPI> {
  return new Promise((resolve, reject) => {
    const existing = (window as typeof window & { turnstile?: TurnstileAPI }).turnstile;
    if (existing) return resolve(existing);
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const api = (window as typeof window & { turnstile?: TurnstileAPI }).turnstile;
      api ? resolve(api) : reject(new Error("verification_unavailable"));
    };
    script.onerror = () => reject(new Error("verification_unavailable"));
    document.head.appendChild(script);
  });
}

async function renderTurnstile() {
  if (!backendReady || !turnstileContainer.value) return;
  try {
    const turnstile = await loadTurnstile();
    turnstileWidgetID.value = turnstile.render(turnstileContainer.value, {
      sitekey: turnstileSiteKey,
      theme: "dark",
      callback: (token: string) => { turnstileToken.value = token; },
      "expired-callback": () => { turnstileToken.value = ""; },
      "error-callback": () => { turnstileToken.value = ""; },
    });
  } catch {
    submitState.value = "error";
    submitMessage.value = "Private verification could not load. Check content blockers or try again later.";
  }
}

function sendAnalytics(events: Array<{ name: string; source: string }>) {
  if (!backendReady || !analyticsConsent.value) return;
  void fetch(`${apiBaseURL}/v1/events`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ events }),
    keepalive: true,
  }).catch(() => undefined);
}

watch(analyticsConsent, (enabled) => {
  if (!enabled || analyticsStartSent) return;
  analyticsStartSent = true;
  sendAnalytics([
    { name: "page_viewed", source: "beta" },
    { name: "beta_form_started", source: acquisitionChannel.value },
  ]);
});

async function submitRequest() {
  if (!readyToRequest.value) return;
  submitState.value = "submitting";
  submitMessage.value = "";
  try {
    const response = await fetch(`${apiBaseURL}/v1/beta-requests`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email.value.trim(),
        githubHandle: githubHandle.value.trim(),
        macOSVersion: macOSVersion.value,
        repositoryVolume: repositoryVolume.value,
        workflow: workflow.value.trim(),
        interviewConsent: interviewConsent.value,
        privacyConsent: privacyConsent.value,
        turnstileToken: turnstileToken.value,
        website: website.value,
      }),
    });
    if (!response.ok) throw new Error(`request_${response.status}`);
    submitState.value = "success";
    submitMessage.value = "Your private beta request was received. We will contact selected participants by email.";
    sendAnalytics([{ name: "beta_form_completed", source: acquisitionChannel.value }]);
  } catch {
    submitState.value = "error";
    submitMessage.value = "The private request could not be saved. Nothing was posted publicly. Please try again later.";
    const turnstile = (window as typeof window & { turnstile?: TurnstileAPI }).turnstile;
    if (turnstile && turnstileWidgetID.value) turnstile.reset(turnstileWidgetID.value);
    turnstileToken.value = "";
  }
}

onMounted(() => {
  const storedChannel = sessionStorage.getItem(acquisitionStorageKey);
  if (storedChannel) acquisitionChannel.value = storedChannel as AcquisitionChannel;
  void renderTurnstile();
});
</script>

<template>
  <main class="px-6 pb-28 pt-32 sm:pt-40">
    <div class="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
      <header>
        <p class="eyebrow mb-5">Private beta</p>
        <h1 class="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">Help shape the repository-reading workflow.</h1>
        <p class="mt-7 text-lg leading-8 text-text-secondary">The first beta is for macOS developers who regularly return to saved repositories and want a better bridge between reading, notes, and coding agents.</p>
        <div class="legal-note">
          <strong class="text-text-primary">Private by design</strong>
          <p class="mt-2">Requests are sent to GitReader’s private application database—not GitHub issues. Do not include repository names, credentials, employer secrets, or confidential project details.</p>
        </div>
      </header>

      <form class="rounded-[22px] border border-border-subtle bg-surface p-6 sm:p-9" @submit.prevent="submitRequest">
        <div v-if="!backendReady" class="rounded-container border border-border-active bg-accent/[.05] p-5 text-sm leading-6 text-text-secondary" role="status">
          Private signup is being configured. The form will open after storage, deletion, and abuse-protection checks pass; requests will not fall back to public GitHub issues.
        </div>
        <div class="grid gap-6" :class="{ 'mt-7': !backendReady }">
          <div>
            <label for="email" class="field-label">Email</label>
            <input id="email" v-model="email" class="field-control" type="email" required autocomplete="email" maxlength="254" placeholder="you@example.com" :disabled="!backendReady || submitState === 'success'" />
          </div>
          <div>
            <label for="github-handle" class="field-label">GitHub handle <span class="text-text-muted">(optional)</span></label>
            <input id="github-handle" v-model="githubHandle" class="field-control" autocomplete="username" maxlength="39" placeholder="octocat" :disabled="!backendReady || submitState === 'success'" />
          </div>
          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <label for="macos-version" class="field-label">macOS version</label>
              <select id="macos-version" v-model="macOSVersion" class="field-control" :disabled="!backendReady || submitState === 'success'">
                <option>macOS 14</option><option>macOS 15</option><option>macOS 16</option><option>macOS 17 beta</option>
              </select>
            </div>
            <div>
              <label for="repository-volume" class="field-label">Saved repositories</label>
              <select id="repository-volume" v-model="repositoryVolume" class="field-control" :disabled="!backendReady || submitState === 'success'">
                <option>Under 100</option><option>100–499</option><option>500–999</option><option>1,000+</option>
              </select>
            </div>
          </div>
          <div>
            <label for="workflow" class="field-label">What do you want to do with GitReader?</label>
            <textarea id="workflow" v-model="workflow" class="field-control min-h-36 resize-y" required minlength="10" maxlength="1000" placeholder="For example: compare open-source libraries, save notes against source files, and reuse that context with coding agents." :disabled="!backendReady || submitState === 'success'" />
            <p class="mt-2 text-xs text-text-muted">Keep it general and non-confidential. 10–1,000 characters.</p>
          </div>
          <div class="absolute -left-[10000px]" aria-hidden="true">
            <label for="website">Website</label><input id="website" v-model="website" tabindex="-1" autocomplete="off" />
          </div>
        </div>

        <div class="mt-6 space-y-4">
          <label class="flex items-start gap-3 text-sm leading-6 text-text-secondary">
            <input v-model="privacyConsent" type="checkbox" required class="mt-1 h-4 w-4 accent-[#ff7a1a]" :disabled="!backendReady || submitState === 'success'" />
            <span>I agree to the <NuxtLink to="/privacy" class="text-accent underline">privacy notice</NuxtLink> and understand GitReader will store this request privately to manage the beta.</span>
          </label>
          <label class="flex items-start gap-3 text-sm leading-6 text-text-secondary">
            <input v-model="interviewConsent" type="checkbox" class="mt-1 h-4 w-4 accent-[#ff7a1a]" :disabled="!backendReady || submitState === 'success'" />
            <span>GitReader may invite me to an optional 30-minute research interview.</span>
          </label>
          <label class="flex items-start gap-3 text-sm leading-6 text-text-secondary">
            <input v-model="analyticsConsent" type="checkbox" class="mt-1 h-4 w-4 accent-[#ff7a1a]" :disabled="!backendReady || submitState === 'success'" />
            <span>Share anonymous beta-form conversion events. This sends only fixed event names and page labels—no form fields or identifier.</span>
          </label>
        </div>

        <div v-if="backendReady && submitState !== 'success'" ref="turnstileContainer" class="mt-7 min-h-[65px]" aria-label="Abuse-prevention verification" />
        <button v-if="submitState !== 'success'" type="submit" class="button-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-50" :disabled="!readyToRequest">
          {{ submitState === "submitting" ? "Saving privately…" : "Request private beta access" }}
        </button>
        <p v-if="submitMessage" class="mt-5 rounded-container border p-4 text-sm leading-6" :class="submitState === 'success' ? 'border-green-700/60 text-green-300' : 'border-red-700/60 text-red-300'" aria-live="polite">{{ submitMessage }}</p>
        <p class="mt-4 text-center text-xs text-text-muted">A request does not guarantee admission. No card is required.</p>
      </form>
    </div>
  </main>
</template>
