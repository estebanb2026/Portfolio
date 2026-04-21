import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-app-border-subtle px-5 pb-16 pt-12 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-content flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <p className="shrink-0 text-lg font-medium text-app-text">Esteban Barrera</p>
        <p className="max-w-xl text-sm leading-relaxed text-app-muted md:flex-1 md:text-center">
          Designed with Figma. Built with Cursor/Claude Code.
        </p>
        <div className="flex shrink-0 flex-col gap-3 font-mono-label md:flex-row md:gap-8">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-app-faint transition hover:text-app-text"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-app-faint transition hover:text-app-text"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
