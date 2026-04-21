"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { SectionLabel } from "@/components/SectionLabel";
import { inViewBlock } from "@/lib/motion";

const PROJECTS = [
  {
    name: "GetFiber.ai",
    type: "AI · Fintech",
    role: "Senior Product Designer (Contract)",
    headline: "Financial intake that actually makes sense",
    description:
      "End-to-end design for AI intake across income, expenses, assets, liabilities, and documents—making complex legal and financial flows completable without support.",
    impact:
      "~25% increase in completed intakes · ~30% fewer support tickets · ~20% increase in successful document-linking",
    href: "https://getfiber.ai",
    screenshotSrc: "/images/work/getfiber.png",
  },
  {
    name: "Pidwin (Runestake, RBXGold, Chicken.gg)",
    type: "iGaming · Consumer",
    role: "Senior Product Designer (Contract, 2 years) — First design hire",
    headline: "Built a design system for a $2M+ revenue gaming platform",
    description:
      "First design hire across three products (75K+ MAUs): built the shared design system, redesigned wallet and transaction flows, and managed junior designers.",
    impact:
      "18% revenue lift · 20% churn reduction · 35% faster handoff",
    href: "https://pidwin.com",
    screenshotSrc: "/images/work/pidwin.png",
  },
  {
    name: "AE Studio / BranchPrompt",
    type: "AI · Developer Tools",
    role: "Senior Product Designer (Contract)",
    headline: "Interaction design for multi-model AI chat",
    description:
      "BranchPrompt: a multi-model AI canvas for branching LLM conversations—IA, interactions, power-user workflows, and dev-ready prototypes.",
    impact: "17% faster design-to-dev cycles · 25% better early activation",
    href: "https://branchprompt.com",
    screenshotSrc: "/images/work/branchprompt.png",
  },
  {
    name: "Fitted Closet",
    type: "Consumer · AI",
    role: "Senior Product Designer (Contract)",
    headline:
      "Redesigned an AI styling platform from digital closet to social commerce",
    description:
      "From POC to MVP: evolved the product from wardrobe organizer into style, social, and commerce. Owned onboarding, personalization, and AI recommendations end to end.",
    impact:
      "~25% increase in weekly active users · ~30% improvement in onboarding completion · ~20% increase in interaction with AI-driven recommendations",
    href: "https://www.fittedcloset.com",
    screenshotSrc: "/images/work/fitted-closet.png",
  },
  {
    name: "Crewfare",
    type: "B2B2C · Live Events",
    role: "Senior Product Designer (Contract)",
    headline: "Group travel UX for festivals and live events at scale",
    description:
      "Booking portals and enterprise dashboards for festivals, sports, and brand activations—thousands of travelers at scale.",
    impact: "~8% conversion lift · improved enterprise client retention",
    href: "https://crewfare.com",
    screenshotSrc: "/images/work/crewfare.png",
  },
  {
    name: "Duffl",
    type: "Consumer Marketplace · Mobile",
    role: "Senior Product Designer (Contract)",
    headline:
      "Redesigned a mobile shopping experience and launched a subscription product",
    description:
      "Card-based shopping replacing legacy sidebar UI; shipped DufflPass (subscription and referrals) end to end.",
    impact: "13% retention increase · 12–16% subscription revenue lift",
    href: "https://duffl.com",
    screenshotSrc: "/images/work/duffl.png",
  },
];

function ProjectScreenshot({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative min-h-[12rem] w-full flex-1 bg-app-surface lg:min-h-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export function MyWorksSection() {
  return (
    <motion.section
      id="my-works"
      className="relative scroll-mt-20 border-b border-app-border-subtle px-5 py-16 md:scroll-mt-8 md:px-10 md:py-24 lg:px-16"
      variants={inViewBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div
        aria-hidden
        data-code={`projects.filter(p => p.featured).map(renderProjectCard)`}
        className="pointer-events-none absolute inset-0 z-0 opacity-0"
      />
      <div className="mx-auto max-w-content">
        <SectionLabel
          label="SELECTED WORK"
          title="Products I've designed and shipped"
        />

        <div className="space-y-12 md:space-y-16">
          {PROJECTS.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer rounded-xl outline-none transition duration-300 hover:scale-[1.008] hover:ring-1 hover:ring-white/15"
              aria-label={`${project.name} — open site in new tab`}
            >
              <GlassCard
                hover={false}
                className={`overflow-hidden p-0 lg:flex lg:items-stretch lg:divide-x lg:divide-app-border-glass ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative min-h-0 min-w-0 shrink-0 lg:flex lg:w-1/2 lg:flex-col lg:self-stretch">
                  <ProjectScreenshot
                    src={project.screenshotSrc}
                    alt={project.name}
                    priority={index === 0}
                  />
                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/75 via-black/45 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span
                      className="text-sm text-app-text"
                      style={{ fontFamily: "var(--font-dm-mono), ui-monospace, monospace" }}
                    >
                      View Site ↗
                    </span>
                  </div>
                </div>
                <div className="flex min-h-0 flex-1 flex-col justify-center gap-4 p-6 md:p-8 lg:w-1/2 lg:min-w-0 lg:gap-5">
                  <p className="font-mono-label text-app-faint">{project.type}</p>
                  <p className="text-sm text-app-muted">{project.role}</p>
                  <h3 className="text-lg font-medium leading-snug text-app-text">
                    {project.headline}
                  </h3>
                  <p className="text-sm text-app-muted md:text-base">{project.description}</p>
                  <p className="text-sm text-app-muted">{project.impact}</p>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
