"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const spring = { type: "spring" as const, stiffness: 380, damping: 30 };

/**
 * Outer pill matches thumb: 1px border (light #E5E7EB / dark #272727).
 * Fixed h-10 + shrink-0 avoids layout shift when switching themes or animating.
 */
const trackClass =
  "relative flex h-10 w-full min-w-[11rem] shrink-0 items-stretch overflow-hidden rounded-full border border-[#E5E7EB] bg-white p-1 " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-[#272727] dark:bg-[#141414] dark:shadow-none";

const thumbClass =
  "absolute left-1 top-1 z-0 h-[calc(100%-0.5rem)] w-[calc(50%-0.5rem)] rounded-full " +
  "border border-[#D1D5DB] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.1)] " +
  "dark:border-white/20 dark:bg-white/[0.12] dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]";

const iconBtn =
  "relative z-10 flex h-full min-h-0 flex-1 items-center justify-center py-0 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9CA3AF] dark:focus-visible:outline-white/40";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={`h-10 w-full min-w-[11rem] shrink-0 rounded-full border border-[#E5E7EB] bg-white dark:border-[#272727] dark:bg-[#141414] ${className}`}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const iconActive = "text-[#1F2937] dark:text-white";
  const iconInactive = "text-[#6B7280] dark:text-[#8a8a8a]";

  return (
    <div className={`w-full shrink-0 ${className}`}>
      <div role="tablist" aria-label="Color theme" className={trackClass}>
        <motion.div
          aria-hidden
          className={thumbClass}
          initial={false}
          animate={{ x: isDark ? 0 : "100%" }}
          transition={reduceMotion ? { duration: 0 } : spring}
        />
        <div className="relative z-10 flex h-full min-h-0 w-full items-stretch">
          <button
            type="button"
            role="tab"
            aria-selected={isDark}
            aria-label="Dark mode"
            tabIndex={isDark ? 0 : -1}
            onClick={() => setTheme("dark")}
            className={`${iconBtn} ${isDark ? iconActive : iconInactive}`}
          >
            <Moon className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={!isDark}
            aria-label="Light mode"
            tabIndex={!isDark ? 0 : -1}
            onClick={() => setTheme("light")}
            className={`${iconBtn} ${!isDark ? iconActive : iconInactive}`}
          >
            <Sun className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
