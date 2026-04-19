"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionLabel } from "@/components/SectionLabel";
import { inViewBlock } from "@/lib/motion";
import { site } from "@/lib/site";

const PROJECTS = [
  {
    name: "GetFiber.ai",
    type: "AI · Fintech",
    role: "Senior Product Designer (Contract)",
    headline: "Financial intake that actually makes sense",
    description:
      "Led end-to-end design for AI-powered financial intake workflows — income, expenses, assets, liabilities, document linking. Turned legally and financially complex flows into something a real person can complete without calling support.",
    impact:
      "~25% increase in completed intakes · ~30% fewer support tickets · ~20% increase in successful document-linking",
    href: "https://getfiber.ai",
    linkLabel: "getfiber.ai ↗",
  },
  {
    name: "Pidwin (Runestake, RBXGold, Chicken.gg)",
    type: "iGaming · Consumer",
    role: "Senior Product Designer (Contract, 2 years) — First design hire",
    headline: "Built a design system for a $2M+ revenue gaming platform",
    description:
      "First design hire across three products and 75K+ MAUs. Built the cross-product design system from scratch, redesigned core wallet and transaction flows, and managed junior designers.",
    impact:
      "18% revenue lift · 20% churn reduction · 35% faster handoff",
    href: "https://pidwin.com",
    linkLabel: "pidwin.com ↗",
  },
  {
    name: "AE Studio / BranchPrompt",
    type: "AI · Developer Tools",
    role: "Senior Product Designer (Contract)",
    headline: "Interaction design for multi-model AI chat",
    description:
      "Designed BranchPrompt — a multi-model AI canvas tool for branching conversations across LLMs. Defined IA, interaction models, and power-user workflows. Delivered dev-ready prototypes.",
    impact: "17% faster design-to-dev cycles · 25% better early activation",
    href: "https://branchprompt.com",
    linkLabel: "branchprompt.com ↗",
  },
  {
    name: "Duffl",
    type: "Consumer Marketplace · Mobile",
    role: "Senior Product Designer (Contract)",
    headline:
      "Redesigned a mobile shopping experience and launched a subscription product",
    description:
      "Replaced a legacy sidebar UI with a card-based shopping experience. Launched DufflPass — a subscription and referral program — end to end.",
    impact: "13% retention increase · 12–16% subscription revenue lift",
    href: "https://duffl.com",
    linkLabel: "duffl.com ↗",
  },
  {
    name: "Crewfare",
    type: "B2B2C · Travel",
    role: "Senior Product Designer (Contract)",
    headline: "Group travel UX for festivals and live events at scale",
    description:
      "Designed attendee-facing booking portals and enterprise dashboards used by thousands of travelers across festivals, sports, and brand activations.",
    impact: "~8% conversion lift · improved enterprise client retention",
    href: "https://crewfare.com",
    linkLabel: "crewfare.com ↗",
  },
];

export function MyWorksSection() {
  return (
    <motion.section
      id="my-works"
      className="scroll-mt-20 border-b border-app-border-subtle px-5 py-16 md:scroll-mt-8 md:px-10 md:py-24 lg:px-16"
      variants={inViewBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mx-auto max-w-content">
        <SectionLabel
          label="SELECTED WORK"
          title="Products I've designed and shipped"
        />

        <div className="space-y-12 md:space-y-16">
          {PROJECTS.map((project, index) => (
            <GlassCard
              key={project.name}
              hover
              className={`overflow-hidden p-0 lg:flex lg:divide-x lg:divide-app-border-glass ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <PlaceholderMedia
                  label="[placeholder]"
                  aspectRatio="16 / 9"
                  className="min-h-[12rem] rounded-none border-0 lg:min-h-[20rem]"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-6 md:p-8 lg:w-1/2 lg:gap-5">
                <p className="font-mono-label text-app-faint">{project.type}</p>
                <p className="text-sm text-app-muted">{project.role}</p>
                <h3 className="text-lg font-medium leading-snug text-app-text">
                  {project.headline}
                </h3>
                <p className="text-sm text-app-muted md:text-base">{project.description}</p>
                <p className="text-sm text-app-muted">{project.impact}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex font-mono-label text-app-faint transition hover:text-app-text"
                >
                  {project.linkLabel}
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-app-border-subtle pt-10 md:mt-20 md:flex-row md:items-center md:gap-10 md:pt-14">
          <p className="font-mono-label text-app-faint">Want the full picture?</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            <a
              href={site.designDeck}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label text-app-faint transition hover:text-app-text"
            >
              View Design Deck ↗
            </a>
            <a
              href={site.ndaPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label text-app-faint transition hover:text-app-text"
            >
              View NDA Portfolio ↗
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label text-app-faint transition hover:text-app-text"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
