import {
  acquisitionStorageKey,
  normalizeAcquisitionChannel,
} from "~/utils/acquisition";

export default defineNuxtPlugin((nuxtApp) => {
  const capture = (query: Record<string, unknown>) => {
    const explicitSource = query.utm_source;
    if (explicitSource == null && sessionStorage.getItem(acquisitionStorageKey)) return;
    const channel = normalizeAcquisitionChannel(explicitSource, document.referrer);
    sessionStorage.setItem(acquisitionStorageKey, channel);
  };

  capture(nuxtApp.$router.currentRoute.value.query);
  nuxtApp.$router.afterEach((route) => capture(route.query));
});
