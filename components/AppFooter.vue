<template>
  <footer class="border-t border-border-subtle py-8 px-6">
    <div
      class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div class="flex items-center gap-2 text-text-muted text-sm">
        <span>Built with SwiftUI</span>
        <span class="text-border-subtle">&middot;</span>
        <span>MIT License</span>
      </div>
      <div class="text-text-muted text-sm">
        &copy; {{ new Date().getFullYear() }} GitReader
      </div>
    </div>
  </footer>
</template>
