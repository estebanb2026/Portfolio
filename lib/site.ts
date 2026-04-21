/**
 * Env vars are often set to "" in hosting UIs; `??` does not fall through empty string.
 * Invalid URLs must not reach `new URL()` in layout metadata (that throws → HTTP 500).
 */
function absoluteUrlFromEnv(
  value: string | undefined,
  fallback: string
): string {
  const raw = typeof value === "string" ? value.trim() : "";
  if (!raw) return fallback;
  try {
    new URL(raw);
    return raw;
  } catch {
    return fallback;
  }
}

export const site = {
  name: "Esteban Barrera",
  title: "Senior Product Designer",
  portfolio: "https://barreraesteban.com",
  github: "https://github.com/estebanb2026",
  linkedin: absoluteUrlFromEnv(
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    "https://linkedin.com/in/barreraesteban"
  ),
  designDeck: absoluteUrlFromEnv(
    process.env.NEXT_PUBLIC_DESIGN_DECK_URL,
    "https://barreraesteban.com"
  ),
  ndaPortfolio: absoluteUrlFromEnv(
    process.env.NEXT_PUBLIC_NDA_PORTFOLIO_URL,
    "https://barreraesteban.com"
  ),
  canonical: absoluteUrlFromEnv(
    process.env.NEXT_PUBLIC_SITE_URL,
    "https://barreraesteban.com"
  ),
} as const;
