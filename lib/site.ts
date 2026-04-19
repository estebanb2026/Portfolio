export const site = {
  name: "Esteban Barrera",
  title: "Senior Product Designer",
  portfolio: "https://barreraesteban.com",
  github: "https://github.com/barreraesteban",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com",
  designDeck:
    process.env.NEXT_PUBLIC_DESIGN_DECK_URL ?? "https://barreraesteban.com",
  ndaPortfolio:
    process.env.NEXT_PUBLIC_NDA_PORTFOLIO_URL ?? "https://barreraesteban.com",
  canonical:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://barreraesteban.com",
} as const;
