<script setup lang="ts">
useSeoMeta({ title: "GitReader privacy", description: "How the GitReader website and macOS app handle repository data, credentials, notes, AI requests, and beta applications." });
</script>

<template>
  <LegalPage eyebrow="Trust center" title="Privacy, without euphemisms." summary="GitReader is designed around local files and explicit connections. This page separates what the current website does from what the macOS app does." updated="August 13, 2026">
    <h2>Website</h2>
    <p>The GitReader website is a static site hosted with GitHub Pages. It does not include advertising scripts, behavioral analytics, cookies set by GitReader, or a GitReader-operated form backend.</p>
    <p>The beta application is assembled in your browser and opens a prefilled GitHub issue. The site does not transmit or store the fields itself. If you submit the issue, the information becomes public and is processed under GitHub’s policies.</p>

    <h2>macOS app</h2>
    <h3>GitHub access</h3>
    <p>GitReader connects to GitHub to retrieve repository and account information allowed by the credential you provide. The GitHub access token is stored in macOS Keychain. GitReader does not ask you to paste credentials into this website.</p>

    <h3>Repositories, collections, and notes</h3>
    <p>Repository clones stay in folders you choose or authorize. Collections and settings are stored on your Mac. Repository notes are regular files in your selected sync location or GitReader’s local fallback folder, so you can inspect and back them up yourself.</p>
    <p>If you choose an iCloud-backed or other synchronized folder, that storage provider handles synchronization under its own terms. GitReader does not operate a cloud account service for your notes.</p>

    <h3>AI-assisted guides</h3>
    <p>AI features are optional. When you configure and approve a remote AI provider, relevant repository context and prompts are sent to that provider to produce a guide or response. Provider credentials are stored in macOS Keychain. Review the provider’s privacy and retention terms before enabling it. Localhost providers do not leave your machine through GitReader.</p>

    <h3>Local integrations</h3>
    <p>The browser extension and <code>gr</code> CLI connect to a local GitReader bridge. Pairing credentials are stored in Keychain. Do not expose the bridge port to untrusted networks.</p>

    <h2>Telemetry</h2>
    <p>The current public website does not install GitReader analytics. A future app telemetry system is planned but is not represented here as shipped. If introduced, it will require explicit disclosure and consent before collecting product-usage events.</p>

    <h2>Deletion and questions</h2>
    <p>You can remove local GitReader files using Finder and revoke GitReader’s GitHub access from your GitHub account. GitHub issues can be edited or closed through GitHub. For a privacy question or removal request concerning a public beta issue, use the routes on the <NuxtLink to="/support">support page</NuxtLink>.</p>
  </LegalPage>
</template>
