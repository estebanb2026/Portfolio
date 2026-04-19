"use client";

import { useCallback, useEffect, useState } from "react";

export const SECTION_IDS = [
  "overview",
  "how-it-works",
  "design-to-code",
  "my-works",
  "faq",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>(SECTION_IDS[0]);

  const updateActive = useCallback(() => {
    const trigger = window.innerHeight * 0.35;
    let current: SectionId = SECTION_IDS[0];

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= trigger) {
        current = id;
      }
    }

    setActiveId(current);
  }, []);

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  return activeId;
}
