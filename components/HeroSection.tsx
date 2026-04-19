"use client";

import { motion } from "framer-motion";
import { EASE, heroContainer, heroItem } from "@/lib/motion";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

export function HeroSection() {
  const goWorks = () => {
    document.getElementById("my-works")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="overview"
      className="scroll-mt-20 border-b border-app-border-subtle px-5 pb-16 pt-24 md:scroll-mt-8 md:px-10 md:pb-24 md:pt-16 lg:px-16"
    >
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          className="flex flex-col gap-8"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="hero-title text-balance"
            variants={heroItem}
          >
            Designed for humans.
            <br />
            Built with AI.
          </motion.h1>

          <motion.p
            className="max-w-xl text-base text-app-muted"
            variants={heroItem}
          >
            I use Claude Code, Cursor, and Figma to take ideas from concept to working
            product — faster than most teams, without sacrificing craft. 6+ years
            designing AI, fintech, consumer, and enterprise products. Open to senior IC
            and founding designer roles.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
            variants={heroItem}
          >
            <button
              type="button"
              onClick={goWorks}
              className="inline-flex items-center justify-center rounded-full border border-app-border-glass bg-app-glass px-6 py-3 text-sm font-medium text-app-text backdrop-blur-md transition hover:border-app-accent hover:text-app-accent"
              style={{ transitionTimingFunction: `cubic-bezier(${EASE.join(",")})` }}
            >
              View My Work
            </button>
            <a
              href="https://barreraesteban.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label text-app-faint transition hover:text-app-text"
            >
              barreraesteban.com ↗
            </a>
          </motion.div>

          <motion.p className="font-mono-label text-app-faint" variants={heroItem}>
            Senior Product Designer · Orlando, FL · Open to Remote
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          <PlaceholderMedia label="[Product image — replace me]" aspectRatio="16 / 9" />
        </motion.div>
      </div>
    </section>
  );
}
