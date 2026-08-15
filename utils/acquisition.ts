export const acquisitionChannels = [
  "direct",
  "github",
  "x",
  "reddit",
  "hackernews",
  "newsletter",
  "referral",
  "other",
] as const;

export type AcquisitionChannel = typeof acquisitionChannels[number];

const acquisitionChannelSet = new Set<string>(acquisitionChannels);
const aliases: Record<string, AcquisitionChannel> = {
  email: "newsletter",
  githubcom: "github",
  hn: "hackernews",
  twitter: "x",
};

export const acquisitionStorageKey = "gitreader-acquisition-channel";

export function normalizeAcquisitionChannel(value: unknown, referrer = ""): AcquisitionChannel {
  const raw = Array.isArray(value) ? value[0] : value;
  if (typeof raw === "string" && raw.trim()) {
    const normalized = raw.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    const alias = aliases[normalized];
    if (alias) return alias;
    if (acquisitionChannelSet.has(normalized)) return normalized as AcquisitionChannel;
    return "other";
  }

  if (!referrer) return "direct";
  try {
    const hostname = new URL(referrer).hostname.toLowerCase();
    if (!hostname || hostname === "k7y.space" || hostname.endsWith(".k7y.space")) return "direct";
    if (hostname === "github.com" || hostname.endsWith(".github.com")) return "github";
    if (hostname === "x.com" || hostname.endsWith(".x.com") || hostname === "twitter.com") return "x";
    if (hostname === "reddit.com" || hostname.endsWith(".reddit.com")) return "reddit";
    if (hostname === "news.ycombinator.com") return "hackernews";
    return "referral";
  } catch {
    return "direct";
  }
}
