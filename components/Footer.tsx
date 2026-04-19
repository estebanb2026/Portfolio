import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-app-border-subtle px-5 pb-16 pt-12 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-content flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-medium text-app-text">{site.name}</p>
          <p className="mt-2 text-sm text-app-muted">{site.title}</p>
        </div>
        <div className="flex flex-col gap-3 font-mono-label md:flex-row md:gap-8">
          <a
            href={site.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-app-faint transition hover:text-app-text"
          >
            barreraesteban.com ↗
          </a>
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
      <p className="mx-auto mt-14 max-w-content text-center font-mono-label text-app-faint">
        Created by Esteban Barrera · Designed with Claude Code & Cursor
      </p>
    </footer>
  );
}
