"use client";

import { useActiveSection, type SectionId } from "@/hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { EASE } from "@/lib/motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV: { id: SectionId | null; label: string; href: string; external?: boolean }[] = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
  { id: "my-works", label: "My Works", href: "#my-works" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: null, label: "GitHub ↗", href: "https://github.com/barreraesteban", external: true },
];

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function NavSidebar() {
  const activeId = useActiveSection();
  const [open, setOpen] = useState(false);

  const onNavigate = useCallback(
    (href: string, external?: boolean) => {
      if (external) {
        setOpen(false);
        return;
      }
      scrollToHash(href);
      setOpen(false);
    },
    []
  );

  const linkClass = (id: SectionId | null, external?: boolean) => {
    const isActive = id && activeId === id;
    const base =
      "block py-2 text-left font-mono-label transition-colors duration-300";
    if (external) {
      return `${base} text-app-faint hover:text-app-text`;
    }
    return `${base} ${
      isActive ? "text-app-text" : "text-app-faint hover:text-app-muted"
    }`;
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-40 flex h-14 w-full items-center justify-between border-b border-app-border-subtle bg-app-bg/90 px-4 backdrop-blur-md md:hidden">
        <span className="font-mono-label text-app-faint">Esteban Barrera</span>
        <button
          type="button"
          className="rounded-lg border border-app-border-glass p-2 text-app-text"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <aside className="hidden md:fixed md:left-0 md:top-0 md:z-30 md:flex md:h-screen md:w-56 md:flex-col md:border-r md:border-app-border-subtle md:bg-app-bg/80 md:px-6 md:py-10 md:backdrop-blur-sm">
        <p className="font-mono-label text-app-faint">Navigation</p>
        <nav
          className="mt-10 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto"
          aria-label="Primary"
        >
          {NAV.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass(null, true)}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={linkClass(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.href);
                }}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
        <div className="mt-auto shrink-0 border-t border-app-border-subtle pt-6">
          <ThemeToggle />
        </div>
      </aside>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-app-border-subtle bg-app-bg px-6 pb-8 pt-24"
              aria-label="Mobile primary"
            >
              <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
                {NAV.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass(null, true)}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      className={linkClass(item.id)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
              <div className="mt-6 shrink-0 border-t border-app-border-subtle pt-6">
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
