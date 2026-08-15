<template>
  <footer class="border-t border-border-subtle px-6 py-10">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:items-start">
        <div>
          <p class="text-sm font-semibold text-text-primary">GitReader</p>
          <p class="mt-2 max-w-xs text-sm leading-6 text-text-muted">A native repository research workspace for macOS.</p>
        </div>
        <nav aria-label="Footer" class="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-text-muted sm:grid-cols-3">
          <NuxtLink to="/beta" class="transition-colors hover:text-text-primary">Beta</NuxtLink>
          <NuxtLink to="/faq" class="transition-colors hover:text-text-primary">FAQ</NuxtLink>
          <NuxtLink to="/support" class="transition-colors hover:text-text-primary">Support</NuxtLink>
          <NuxtLink to="/privacy" class="transition-colors hover:text-text-primary">Privacy</NuxtLink>
          <NuxtLink to="/license" class="transition-colors hover:text-text-primary">License & refunds</NuxtLink>
          <a href="https://github.com/faithk7/git-reader" target="_blank" rel="noreferrer" class="transition-colors hover:text-text-primary">Website source</a>
        </nav>
      </div>
      <div class="mt-10 flex flex-col gap-3 border-t border-border-subtle pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>Native SwiftUI app · Local-first by design</span>
        <span>&copy; {{ new Date().getFullYear() }} GitReader</span>
      </div>
    </div>
  </footer>
</template>
