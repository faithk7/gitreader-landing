const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-04-25",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      commercialApiBaseURL: process.env.NUXT_PUBLIC_COMMERCIAL_API_BASE_URL || "",
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || "",
    },
  },
  app: {
    baseURL,
    head: {
      title: "GitReader — A repository research workspace for macOS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Turn saved GitHub repositories into durable working knowledge with native code reading, source-linked notes, repository guides, and agent-ready context." },
        { name: "theme-color", content: "#0c0d0f" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "GitReader — Read less twice" },
        { property: "og:description", content: "A calm, native repository research workspace for developers on macOS." },
        { property: "og:image", content: "https://k7y.space/git-reader/screenshots/gitreader-library.jpg" },
        { property: "og:image:width", content: "1400" },
        { property: "og:image:height", content: "900" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://k7y.space/git-reader/screenshots/gitreader-library.jpg" },
      ],
      link: [{ rel: "icon", type: "image/png", href: `${baseURL}app-icon.png` }],
    },
  },
});
