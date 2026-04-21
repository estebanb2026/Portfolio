"use client";

import { motion } from "framer-motion";
import { EASE, heroContainer, heroItem } from "@/lib/motion";
import LogoCarousel from "@/components/LogoCarousel";

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
      className="scroll-mt-20 border-b border-app-border-subtle px-5 pt-8 md:scroll-mt-8 md:px-10 md:pt-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-content pb-0">
        <motion.div
          className="flex w-full max-w-none flex-col gap-8 pb-12 md:pb-16"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="hero-title max-w-none text-balance"
            variants={heroItem}
          >
            Designed for humans.
            <br />
            <span className="font-light italic">Built with AI.</span>
          </motion.h1>

          <motion.p
            className="max-w-none text-base text-app-muted md:text-lg"
            variants={heroItem}
          >
            I use Claude Code, Cursor, and Figma to take ideas from concept to working
            product — faster than most teams, without sacrificing craft. 6+ years
            designing AI, fintech, consumer, and enterprise products. Open to senior IC
            and founding designer roles.
          </motion.p>

          <motion.div variants={heroItem}>
            <button
              type="button"
              onClick={goWorks}
              className="inline-flex items-center justify-center rounded-full border border-app-border-glass bg-app-glass px-6 py-3 text-sm font-medium text-app-text backdrop-blur-md transition hover:border-app-accent hover:text-app-accent"
              style={{ transitionTimingFunction: `cubic-bezier(${EASE.join(",")})` }}
            >
              View My Work
            </button>
          </motion.div>

          <motion.p className="font-mono-label text-app-faint" variants={heroItem}>
            Senior Product Designer · Orlando, FL · Remote Only
          </motion.p>
        </motion.div>
      </div>

      <LogoCarousel />
    </section>
  );
}
