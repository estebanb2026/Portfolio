"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionLabel } from "@/components/SectionLabel";
import { EASE, inViewBlock } from "@/lib/motion";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do you manage speed without compromising quality?",
    a: "By separating the two jobs. Speed lives in the process — AI-assisted scaffolding, reusable systems, fast prototypes that teams can react to instead of imagine. Quality lives in the judgment — knowing when a layout is wrong, when a flow has a gap, when something ships too early. I've built enough products to know the difference between moving fast with intention and cutting corners. The goal is always both.",
  },
  {
    q: "How do you use AI in your day to day?",
    a: "It's embedded in everything. Claude Code runs in my terminal and inside Figma via MCP — I use it to generate components, inject mock data, and build prototypes without switching contexts. Cursor is my IDE for writing and shipping code. Perplexity handles research and competitive audits. Claude's Cowork runs background tasks — daily comp analysis, hypothetical user tests — so I arrive informed. AI handles the drag. I handle the direction.",
  },
  {
    q: "Have you ever pushed back on a PM or founder? What happened?",
    a: "Regularly. At one of my contracts, a PM had already committed to a direction for a complex workflow — breaking it into a multi-step modal flow. I thought it was the wrong call for the use case: too much context-switching for a task that needed full focus. I documented my reasoning, referenced comparable patterns in enterprise tools, and proposed a full-screen overlay instead. It wasn't a quick conversation, but we aligned and shipped my version. Document submission rates went up, support tickets went down. Pushback without a better answer is just friction — pushback with one is how good products get made.",
  },
  {
    q: "Can you own a product end to end?",
    a: "Yes — and it's where I do my best work. I've been a first design hire multiple times, which means I'm used to operating without a playbook. When the brief is thin or the problem space is undefined, I don't wait for clarity to find me — I go find it. I'm comfortable owning research, IA, visual design, prototyping, and seeing it through with engineering all the way to launch. Ambiguity doesn't slow me down; it's usually where the most interesting design decisions live.",
  },
  {
    q: "How do you work with engineers?",
    a: "I treat them as design partners from the start. That means bringing them into the process early — sharing rough flows before anything is polished, asking about constraints before I get attached to a solution, and being willing to redesign when something doesn't hold up technically. Using Claude Code and Cursor in my own workflow means I have a real sense of what's complex to build and what isn't, which changes the conversation entirely. Less back-and-forth, more building.",
  },
  {
    q: "How do you work with product managers?",
    a: "Best case, I'm in the room when the problem is still being defined — before the brief exists, when the thinking is messy and the direction isn't set. That's where design has the most leverage. But I've also jumped into projects with nothing more than a one-liner and a deadline, and I can work with that too. I know how to ask the right questions fast, fill in the gaps with judgment and research, and get to something real without needing everything handed to me upfront.",
  },
  {
    q: "Do you have experience with design systems?",
    a: "Yes — building them from scratch and inheriting broken ones. My approach is always systems-first: every design decision gets made with scale in mind, so components, states, and tokens are defined before screens are. That discipline is what makes design actually usable by engineering — consistent behavior, predictable patterns, faster handoff, and room to grow without refactoring everything every quarter.",
  },
  {
    q: "What kinds of products do you design best?",
    a: "I've shipped across fintech, iGaming, AI tooling, healthcare, consumer mobile, and B2B SaaS — so the honest answer is: a wide range. I'm most energized by products with real complexity — data-heavy interfaces, AI-native workflows, or interaction models that don't have an obvious precedent. But I've also done the unglamorous work: onboarding flows, dashboard UX, billing and permissions, support tooling. That breadth matters. I get up to speed fast in complex domains.",
  },
  {
    q: "What's your design process when joining a new team?",
    a: "I treat the first few weeks like a research sprint. I audit what exists, map the current user flows, get time with any and all stakeholders, and look for the gap between what the product does and what users actually need. I'm not waiting to be told what to work on. By the time I've gotten my bearings I usually already have a proposal on the table — something real, shippable, and visible that builds trust and creates momentum. I absorb context fast and I take initiative early.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="faq"
      className="relative scroll-mt-20 px-5 py-16 md:scroll-mt-8 md:px-10 md:py-24 lg:px-16"
      variants={inViewBlock}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div
        aria-hidden
        data-code={`<AnimatePresence> <FAQAccordion /> </AnimatePresence>`}
        className="pointer-events-none absolute inset-0 z-0 opacity-0"
      />
      <div className="mx-auto max-w-content">
        <SectionLabel
          label="FAQ"
          title="You probably already have questions. Here are the answers."
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
                      <p className="px-5 py-5 text-sm text-app-muted md:px-6 md:py-6 md:text-base">
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
