<script setup lang="ts">
type CheckoutConfig = {
  enabled: boolean;
  environment?: "sandbox" | "production";
  clientToken?: string;
  prices?: { USD: string; CNY: string };
  successURL?: string;
};

type PaddleAPI = {
  Environment: { set: (environment: "sandbox") => void };
  Initialize: (options: { token: string }) => void;
  Checkout: { open: (options: Record<string, unknown>) => void };
};

const config = useRuntimeConfig();
const apiBaseURL = String(config.public.commercialApiBaseURL || "").replace(/\/$/, "");
const checkout = ref<CheckoutConfig>({ enabled: false });
const isOpening = ref(false);
const errorMessage = ref("");

onMounted(async () => {
  if (!apiBaseURL) return;
  try {
    const response = await fetch(`${apiBaseURL}/v1/checkout-config`, { headers: { accept: "application/json" } });
    if (response.ok) checkout.value = await response.json() as CheckoutConfig;
  } catch {
    checkout.value = { enabled: false };
  }
});

function loadPaddle(): Promise<PaddleAPI> {
  return new Promise((resolve, reject) => {
    const current = (window as typeof window & { Paddle?: PaddleAPI }).Paddle;
    if (current) return resolve(current);
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = () => {
      const paddle = (window as typeof window & { Paddle?: PaddleAPI }).Paddle;
      paddle ? resolve(paddle) : reject(new Error("checkout_unavailable"));
    };
    script.onerror = () => reject(new Error("checkout_unavailable"));
    document.head.appendChild(script);
  });
}

async function openCheckout() {
  if (!checkout.value.enabled || !checkout.value.clientToken || !checkout.value.prices) return;
  isOpening.value = true;
  errorMessage.value = "";
  try {
    const paddle = await loadPaddle();
    if (checkout.value.environment === "sandbox") paddle.Environment.set("sandbox");
    paddle.Initialize({ token: checkout.value.clientToken });
    const useCNY = navigator.language.toLowerCase().startsWith("zh");
    paddle.Checkout.open({
      items: [{ priceId: useCNY ? checkout.value.prices.CNY : checkout.value.prices.USD, quantity: 1 }],
      settings: { successUrl: checkout.value.successURL },
    });
  } catch {
    errorMessage.value = "Checkout could not open. No payment was attempted.";
  } finally {
    isOpening.value = false;
  }
}
</script>

<template>
  <div class="self-end text-right">
    <button v-if="checkout.enabled" type="button" class="button-primary whitespace-nowrap" :disabled="isOpening" @click="openCheckout">
      {{ isOpening ? "Opening secure checkout…" : "Buy GitReader" }}
    </button>
    <NuxtLink v-else to="/beta" class="button-primary whitespace-nowrap">Join the beta</NuxtLink>
    <p v-if="errorMessage" class="mt-3 max-w-xs text-xs leading-5 text-red-300" role="alert">{{ errorMessage }}</p>
  </div>
</template>
