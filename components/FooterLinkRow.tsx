"use client";

import { useState } from "react";
import { NdaPortfolioModal } from "@/components/NdaPortfolioModal";
import { site } from "@/lib/site";

const linkClass = "text-app-faint transition hover:text-app-text";

export function FooterLinkRow() {
  const [ndaOpen, setNdaOpen] = useState(false);

  return (
    <div className="shrink-0">
      <div className="flex flex-col gap-3 font-mono-label md:flex-row md:gap-8">
        <button
          type="button"
          onClick={() => setNdaOpen(true)}
          className={`text-left ${linkClass}`}
        >
          NDA Portfolio ↗
        </button>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Resume ↗
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          LinkedIn ↗
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub ↗
        </a>
      </div>
      <NdaPortfolioModal
        open={ndaOpen}
        onClose={() => setNdaOpen(false)}
        onVerified={() => {
          window.open(site.ndaPortfolio, "_blank", "noopener,noreferrer");
        }}
      />
    </div>
  );
}
