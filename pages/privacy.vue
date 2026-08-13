<script setup lang="ts">
useSeoMeta({ title: "GitReader privacy", description: "How the GitReader website and macOS app handle repository data, credentials, notes, AI requests, and beta applications." });
</script>

<template>
  <LegalPage eyebrow="Trust center" title="Privacy, without euphemisms." summary="GitReader is designed around local files and explicit connections. This page separates what the current website does from what the macOS app does." updated="August 13, 2026">
    <h2>Website</h2>
    <p>The GitReader website is a static site hosted with GitHub Pages. It includes no advertising network, tracking cookie, or third-party behavioral analytics SDK.</p>
    <p>When private signup is enabled, the beta form sends your email, optional GitHub handle, macOS version, repository-count range, bounded workflow description, consent choices, and Cloudflare Turnstile token to GitReader’s Cloudflare Worker. The request is stored privately in Cloudflare D1 and is not posted to GitHub.</p>
    <p>Declined or inactive requests are deleted or anonymized within 90 days. Accepted beta records are deleted or anonymized within 12 months after the last beta interaction. Short-lived pseudonymous abuse counters expire after 24 hours. Contact support to request deletion.</p>

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
    <p>Website and app product analytics are optional and off by default. With separate consent, GitReader accepts only fixed event names and low-cardinality page/source labels, then stores daily aggregate counts. It does not send form fields, repository details, paths, code, email, GitHub identity, or a stable device/session identifier. Failed app events remain only in bounded memory and are not written to disk.</p>

    <h2>Deletion and questions</h2>
    <p>You can remove local GitReader files using Finder and revoke GitReader’s GitHub access from your GitHub account. Private signup will remain closed until a monitored private deletion contact is shown here; do not put a privacy request containing personal data in a public GitHub issue.</p>
  </LegalPage>
</template>
