<script setup lang="ts">
useSeoMeta({ title: "Claim your GitReader license", robots: "noindex,nofollow" });
const route = useRoute();
const config = useRuntimeConfig();
const apiBaseURL = String(config.public.commercialApiBaseURL || "").replace(/\/$/, "");
const transactionID = computed(() => String(route.query._ptxn || route.query.transaction_id || ""));
const email = ref("");
const licenseKey = ref("");
const message = ref("");
const isClaiming = ref(false);

async function claimLicense() {
  if (!apiBaseURL || !transactionID.value || !email.value.trim()) return;
  isClaiming.value = true;
  message.value = "";
  try {
    const response = await fetch(`${apiBaseURL}/v1/licenses/claim`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ transactionID: transactionID.value, email: email.value.trim() }),
    });
    const result = await response.json() as { licenseKey?: string; error?: string };
    if (!response.ok || !result.licenseKey) throw new Error(result.error || "claim_failed");
    licenseKey.value = result.licenseKey;
  } catch {
    message.value = "The purchase could not be verified automatically. Keep your receipt and contact support; do not post the receipt or transaction ID publicly.";
  } finally {
    isClaiming.value = false;
  }
}

async function copyLicense() {
  if (!licenseKey.value) return;
  await navigator.clipboard.writeText(licenseKey.value);
  message.value = "License key copied. Store it with your purchase receipt.";
}
</script>

<template>
  <main class="px-6 pb-28 pt-32 sm:pt-40">
    <div class="mx-auto max-w-2xl rounded-[22px] border border-border-subtle bg-surface p-7 sm:p-10">
      <p class="eyebrow mb-5">Purchase verification</p>
      <h1 class="font-display text-4xl tracking-tight sm:text-5xl">Claim your license securely.</h1>
      <p class="mt-6 leading-7 text-text-secondary">Enter the email used at Paddle checkout. GitReader verifies the completed transaction server-side; the browser return URL alone cannot issue a license.</p>

      <div v-if="!transactionID || !apiBaseURL" class="legal-note" role="status">License claiming is not available from this page. No charge is being processed.</div>
      <form v-else-if="!licenseKey" class="mt-8" @submit.prevent="claimLicense">
        <label for="purchase-email" class="field-label">Purchase email</label>
        <input id="purchase-email" v-model="email" class="field-control" type="email" autocomplete="email" required maxlength="254" />
        <button type="submit" class="button-primary mt-6 w-full" :disabled="isClaiming">{{ isClaiming ? "Verifying…" : "Claim license" }}</button>
      </form>
      <div v-else class="mt-8">
        <p class="text-sm font-semibold text-green-300">Purchase verified</p>
        <label for="license-key" class="field-label mt-5">License key — shown once</label>
        <input id="license-key" :value="licenseKey" class="field-control font-mono" readonly />
        <button type="button" class="button-primary mt-5" @click="copyLicense">Copy license key</button>
        <p class="mt-5 text-sm leading-6 text-text-secondary">Open GitReader → Settings → License, paste the key, and activate. The key is stored in this device’s Keychain.</p>
      </div>
      <p v-if="message" class="mt-5 text-sm leading-6 text-text-secondary" aria-live="polite">{{ message }}</p>
    </div>
  </main>
</template>
