"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { inViewBlock } from "@/lib/motion";

const BLOCKS = [
  {
    eyebrow: "Block 1 — Figma + Claude Code MCP",
    caption:
      "I run Claude Code inside Figma via MCP integration. Design changes reflect in real components without a handoff doc.",
  },
  {
    eyebrow: "Block 2 — Cursor + Claude for prototyping",
    caption:
      "Cursor as editor, Claude as pair programmer. I prompt features into existence, then refine with design judgment — not guesswork.",
  },
  {
    eyebrow: "Block 3 — Paper.design for real-feel testing",
    caption:
      "Paper lets me test Figma flows in a real browser. I validate interaction feel before writing a single line of production code.",
  },
];

export function DesignToCodeSection() {
  return (
    <motion.section
      id="design-to-code"
      className="scroll-mt-20 border-b border-app-border-subtle px-5 py-16 md:scroll-mt-8 md:px-10 md:py-24 lg:px-16"
      variants={inViewBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mx-auto max-w-content">
        <SectionLabel
          label="WORKFLOW"
          title="From Figma to the browser in one loop"
        />

        <div className="space-y-10 md:space-y-14">
          {BLOCKS.map((block) => (
            <article key={block.eyebrow} className="glass-card overflow-hidden">
              <div className="relative">
                <PlaceholderMedia
                  label="[PLACEHOLDER — replace with media]"
                  aspectRatio="16 / 9"
                  className="rounded-none border-0"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-app-bg via-app-bg/85 to-transparent px-5 pb-6 pt-16 md:px-8 md:pb-8 md:pt-24">
                  <p className="pointer-events-auto mb-2 font-mono-label text-app-faint">
                    {block.eyebrow}
                  </p>
                  <p className="pointer-events-auto max-w-3xl text-sm text-app-muted md:text-base">
                    {block.caption}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center font-mono-label text-app-faint">
          This site was built using this exact workflow.
        </p>
      </div>
    </motion.section>
  );
}
