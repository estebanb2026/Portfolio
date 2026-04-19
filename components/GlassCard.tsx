"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE } from "@/lib/motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

export function GlassCard({
  children,
  className = "",
  hover = true,
  ...rest
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: "var(--accent)",
              transition: { duration: 0.35, ease: EASE },
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}
