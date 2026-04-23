import { FooterLinkRow } from "@/components/FooterLinkRow";

export function Footer() {
  return (
    <footer className="border-t border-app-border-subtle px-5 pb-16 pt-12 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-content flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <p className="shrink-0 text-lg font-medium text-app-text">Esteban Barrera</p>
        <p className="max-w-xl text-sm leading-relaxed text-app-muted md:flex-1 md:text-center">
          Designed with Figma. Built with Cursor/Claude Code.
        </p>
        <FooterLinkRow />
      </div>
    </footer>
  );
}
