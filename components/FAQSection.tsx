"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionLabel } from "@/components/SectionLabel";
import { EASE, inViewBlock } from "@/lib/motion";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do you work with product managers?",
    a: "Closely and early. I don't wait for a PRD to start thinking. My best work happens when I'm in the room (or Slack thread) when the problem is being defined — not handed a brief after the fact. I push back when I think something is wrong, back it up with data or precedent, and then execute fast once we're aligned.",
  },
  {
    q: "How do you work with engineers?",
    a: "I treat engineers as design partners, not ticket-takers. I share work early and often — in Figma, in the browser, in Loom — and I ask about constraints before I fall in love with a solution. I've used Claude Code and Cursor long enough to understand what \"hard to implement\" actually means, which makes the conversation a lot more productive.",
  },
  {
    q: "Do you have experience with design systems?",
    a: "Yes — building them from scratch and scaling existing ones. At Pidwin I built a cross-product system across three products from zero. I think in components, states, and tokens before I think in screens.",
  },
  {
    q: "Can you own a product end to end?",
    a: "That's where I do my best work. I've been a first design hire multiple times. I'm comfortable owning research, IA, visual design, prototyping, and working directly with engineering through launch — without someone telling me what to do next.",
  },
  {
    q: "What kinds of products do you design best?",
    a: "Data-heavy UX, AI-native products, consumer mobile, and anything where the interaction model is genuinely new. I've shipped across fintech, iGaming, AI tooling, healthcare, and marketplaces. I get up to speed fast in complex domains.",
  },
  {
    q: "Are you open to full-time roles?",
    a: "Yes. I'm currently contracting while I look for the right full-time senior IC or founding designer opportunity — remote, with a team that moves fast and cares about craft.",
  },
  {
    q: "What time zones do you work in?",
    a: "I'm in Orlando (ET) and comfortable across North American, South American, and European time zones. Async-first is fine; I overlap well with most teams.",
  },
  {
    q: "What's your design process when joining a new team?",
    a: "First two weeks: listen more than I talk. I audit what exists, understand the codebase at a surface level, map the current user flows, and find the biggest point of friction. Then I propose a clear first project — something real, shippable, and visible — to build trust and momentum.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="faq"
      className="scroll-mt-20 px-5 py-16 md:scroll-mt-8 md:px-10 md:py-24 lg:px-16"
      variants={inViewBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mx-auto max-w-content">
        <SectionLabel
          label="FAQ"
          title="Things you'd probably ask me anyway"
        />

        <div className="space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <GlassCard key={item.q} hover={false} className="p-0">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-app-text">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="mt-0.5 shrink-0 text-app-faint"
                  >
                    <ChevronDown className="h-5 w-5" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden border-t border-app-border-glass"
                    >
                      <p className="px-5 pb-5 pt-1 text-sm text-app-muted md:px-6 md:pb-6 md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
