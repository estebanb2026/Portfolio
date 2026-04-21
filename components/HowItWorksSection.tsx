"use client";

import {
  Bot,
  FileStack,
  Layers,
  MousePointer2,
  PenLine,
  Search,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionLabel } from "@/components/SectionLabel";
import type { LucideIcon } from "lucide-react";

const TOOLS: { name: string; description: string; Icon: LucideIcon }[] = [
  {
    name: "Figma",
    description:
      "My design source of truth. Every component, variant, token, and spec lives here — pixel-perfect, version-controlled, and always handoff-ready. It's not where I start exploring; it's where decisions become real.",
    Icon: PenLine,
  },
  {
    name: "Claude Code",
    description:
      "Two superpowers in one tool. Through Figma MCP, I edit designs, inject mock data, and generate components without leaving my editor. Through the terminal — mine or Cursor's — I can build anything from scratch: prototypes, full features, entire sites.",
    Icon: Bot,
  },
  {
    name: "Cursor",
    description:
      "My primary IDE. I write, debug, and ship code here with Claude running inline as a pair programmer. It handles everything from quick component edits to full feature builds — including the site you're looking at right now.",
    Icon: MousePointer2,
  },
  {
    name: "Lovable & v0",
    description:
      "When I need a directional concept in under an hour. I use Lovable and v0 to generate ugly-but-functional UI scaffolding fast — so teams can react to something real instead of a static mockup.",
    Icon: Layers,
  },
  {
    name: "Paper.design",
    description:
      "Connected to Claude Code via MCP, Paper becomes my live visual editor in the browser. I can build and see changes in real time — often skipping Figma entirely when I need to arrive at a solution fast, while still keeping full control to refine the details.",
    Icon: FileStack,
  },
  {
    name: "Perplexity & Claude",
    description:
      "For research, competitive audits, and fast fact-checking. I also use Claude's Cowork to run persistent background tasks — daily competitor analyses, hypothetical user tests, content audits — so I arrive at work already informed, not just getting started.",
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
    <section
      id="how-it-works"
      className="scroll-mt-20 border-b border-app-border-subtle px-5 py-16 md:scroll-mt-8 md:px-10 md:py-24 lg:px-16"
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
    </section>
  );
}
