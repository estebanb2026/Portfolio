"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  FileStack,
  LayoutGrid,
  MousePointer2,
  PenLine,
  Search,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionLabel } from "@/components/SectionLabel";
import { inViewBlock } from "@/lib/motion";
import type { LucideIcon } from "lucide-react";

const TOOLS: { name: string; description: string; Icon: LucideIcon }[] = [
  {
    name: "Figma",
    description: "Where systems, components, and flows get structured",
    Icon: PenLine,
  },
  {
    name: "Claude Code",
    description: "My second pair of hands in the terminal and in Figma via MCP",
    Icon: Bot,
  },
  {
    name: "Cursor",
    description: "AI-assisted code editing for prototypes and production",
    Icon: MousePointer2,
  },
  {
    name: "Lovable",
    description: "Fast 0→1 UI scaffolding for rapid concept validation",
    Icon: LayoutGrid,
  },
  {
    name: "V0",
    description: "Component generation for quick visual exploration",
    Icon: Code2,
  },
  {
    name: "Paper.design",
    description: "Bridging Figma and live browser for real-feel prototyping",
    Icon: FileStack,
  },
  {
    name: "Perplexity",
    description: "Research, competitor analysis, and fast fact-checking",
    Icon: Search,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Understand the problem space",
    body: "Research, competitive audit, stakeholder alignment — before touching Figma.",
  },
  {
    n: "02",
    title: "Rapid concept exploration",
    body: "AI-assisted sketching in Lovable or V0 to get ugly-but-directional fast. I'm not married to sketch #1.",
  },
  {
    n: "03",
    title: "Design with structure",
    body: "Systems-first in Figma. Components, states, edge cases, data-heavy layouts. Real spacing, real type, real hierarchy.",
  },
  {
    n: "04",
    title: "Prototype in the browser",
    body: "Claude Code + Cursor + Paper to build interactive prototypes that feel real — not clickable mockups.",
  },
  {
    n: "05",
    title: "Iterate with data",
    body: "Usability sessions, PM feedback loops, and metric review. Ship, measure, repeat.",
  },
];

export function HowItWorksSection() {
  return (
    <motion.section
      id="how-it-works"
      className="scroll-mt-20 border-b border-app-border-subtle px-5 py-16 md:scroll-mt-8 md:px-10 md:py-24 lg:px-16"
      variants={inViewBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mx-auto max-w-content">
        <SectionLabel label="PROCESS" title="How I design and ship" />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {TOOLS.map(({ name, description, Icon }) => (
            <GlassCard key={name} className="p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-app-border-glass text-app-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-medium text-app-text">{name}</h3>
              <p className="mt-2 text-sm text-app-muted">{description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <ol className="space-y-10 md:space-y-12">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="grid gap-4 border-t border-app-border-subtle pt-10 md:grid-cols-[minmax(0,5rem)_1fr] md:gap-10 md:pt-12"
              >
                <span className="font-mono-label text-app-faint">{step.n}</span>
                <div>
                  <p className="text-lg font-medium text-app-text">{step.title}</p>
                  <p className="mt-3 max-w-3xl text-app-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.section>
  );
}
