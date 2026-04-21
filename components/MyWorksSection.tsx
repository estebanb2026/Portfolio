"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { SectionLabel } from "@/components/SectionLabel";
import { inViewBlock } from "@/lib/motion";

type ProjectEntry = {
  name: string;
  type: string;
  role: string;
  headline: string;
  description: string;
  impact: string;
  href: string;
  screenshotSrc: string;
  /** Horizontal inset so screenshots aren’t edge-to-edge (avoids logo/UI crop on sides). */
  screenshotInsetClassName?: string;
  /** Extra classes for the image (object-fit / object-position). */
  screenshotImageClassName?: string;
};

/** Matches reference: subtle fill, 1px border, ~6px radius, sans caps, 8px gap between tags. */
function ProjectTypeTags({ type }: { type: string }) {
  const tags = type
    .split(/\s*·\s*/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center rounded-md border border-[#d4d4d0] bg-[#f0f0ee] px-2.5 py-1 text-[11px] font-normal uppercase leading-none tracking-[0.06em] text-[#5c5c5a] dark:border-[#2e2e2e] dark:bg-[#141414] dark:text-[#a1a1aa]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

const PROJECTS: ProjectEntry[] = [
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
    screenshotInsetClassName: "px-[5%] sm:px-[6%]",
    screenshotImageClassName: "object-left",
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
    screenshotInsetClassName: "px-[5%] sm:px-[6%]",
    screenshotImageClassName: "object-left",
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
    screenshotInsetClassName: "pt-[2.5%]",
    screenshotImageClassName: "object-top",
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
    screenshotInsetClassName: "pt-[2%] pl-[12%] pr-[5%] sm:pl-[14%]",
    screenshotImageClassName: "object-contain object-left object-top",
  },
];

function ProjectScreenshot({
  src,
  alt,
  priority,
  insetClassName,
  imageClassName,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  insetClassName?: string;
  imageClassName?: string;
}) {
  // Default object-contain in data; add object-cover in data for explicit fill-crop.
  const imgClass =
    imageClassName?.includes("object-cover") ||
    imageClassName?.includes("object-contain")
      ? (imageClassName ?? "")
      : `object-contain ${imageClassName ?? ""}`.trim();

  const usesCover = imageClassName?.includes("object-cover");
  // Mobile: object-fill removes letterboxing. Desktop (lg+): object-cover fills the slot; object-left/top from data set focal point.
  const imageFitClass = usesCover
    ? imgClass
    : `${imgClass} max-lg:object-fill lg:object-cover`.trim();

  return (
    <div className="relative w-full overflow-hidden bg-app-surface aspect-[16/9] min-h-[14rem] sm:min-h-[15rem] lg:aspect-[2/1] lg:min-h-[220px]">
      <div
        className={`absolute inset-0 ${insetClassName ?? ""}`.trim()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 42vw, 100vw"
          className={imageFitClass}
        />
      </div>
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

        <div className="grid grid-cols-1 gap-12 md:gap-14 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 xl:gap-x-10">
          {PROJECTS.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full cursor-pointer flex-col rounded-xl outline-none transition duration-300 hover:scale-[1.008] hover:ring-1 hover:ring-white/15"
              aria-label={`${project.name} — open site in new tab`}
            >
              <GlassCard
                hover={false}
                className="flex h-full flex-col overflow-hidden p-0 divide-y divide-app-border-glass"
              >
                <div className="relative w-full shrink-0">
                  <ProjectScreenshot
                    src={project.screenshotSrc}
                    alt={project.name}
                    priority={index === 0}
                    insetClassName={project.screenshotInsetClassName}
                    imageClassName={project.screenshotImageClassName}
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
                <div className="flex min-h-0 flex-1 flex-col justify-center gap-4 p-6 md:p-8 lg:gap-5">
                  <ProjectTypeTags type={project.type} />
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
