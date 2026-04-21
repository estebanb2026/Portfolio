import type { SVGProps } from "react";
import { BRAND_ICON_PATHS } from "@/lib/brand-icon-paths";

const markClass = "h-8 w-8 shrink-0 text-app-muted";

function SimpleBrandSvg({
  path,
  className,
  ...props
}: { path: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      className={className ?? markClass}
      fill="currentColor"
      {...props}
    >
      <path d={path} />
    </svg>
  );
}

/** Cursor — Simple Icons / Iconify `simple-icons:cursor` (monochrome). */
function CursorBrand(props: SVGProps<SVGSVGElement>) {
  const d =
    "M11.503.131L1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23";
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      className={markClass}
      fill="currentColor"
      {...props}
    >
      <path d={d} />
    </svg>
  );
}

/** Lovable — Devicon plain (128×128), scaled via viewBox. */
function LovableBrand(props: SVGProps<SVGSVGElement>) {
  const d =
    "M38.743 0A37.874 38.028 0 0 0 .895 37.766H.873v.24a37.874 38.028 0 0 0-.002.022a37.874 38.028 0 0 0 .002.022V128h67.094v-.024h22.251v-.119a37.76 37.802 0 0 0 36.91-37.727a37.76 37.802 0 0 0-37.482-37.778v-.147H76.62V36.514h-.05A37.874 38.028 0 0 0 38.742 0Z";
  return (
    <svg
      viewBox="0 0 128 128"
      role="img"
      aria-hidden
      className={markClass}
      fill="currentColor"
      {...props}
    >
      <path d={d} />
    </svg>
  );
}

/** v0 by Vercel — Simple Icons `v0` (24×24). */
function V0LogoMark(props: SVGProps<SVGSVGElement>) {
  const d =
    "M14.066 6.028v2.22h5.729q.075-.001.148.005l-5.853 5.752a2 2 0 0 1-.024-.309V8.247h-2.353v5.45c0 2.322 1.935 4.222 4.258 4.222h5.675v-2.22h-5.675q-.03 0-.059-.003l5.729-5.629q.006.082.006.166v5.465H24v-5.465a4.204 4.204 0 0 0-4.205-4.205zM0 8.245l8.28 9.266c.839.94 2.396.346 2.396-.914V8.245H8.19v5.44l-4.86-5.44Z";
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      className={markClass}
      fill="currentColor"
      {...props}
    >
      <path d={d} />
    </svg>
  );
}

/** Paper.design — Boxicons `bxl:paper-design`. */
function PaperBrand(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      className={markClass}
      fill="currentColor"
      {...props}
    >
      <path d="M21 14.08h-6.92V5.77H5.77v8.31h8.31V21H3V5.77h2.77V3H21z" />
    </svg>
  );
}

export const brandLogoByName = {
  Cursor: CursorBrand,
  Claude: () => <SimpleBrandSvg path={BRAND_ICON_PATHS.claude} />,
  Figma: () => <SimpleBrandSvg path={BRAND_ICON_PATHS.figma} />,
  Lovable: LovableBrand,
  Paper: PaperBrand,
  Notion: () => <SimpleBrandSvg path={BRAND_ICON_PATHS.notion} />,
  Vercel: V0LogoMark,
  Perplexity: () => <SimpleBrandSvg path={BRAND_ICON_PATHS.perplexity} />,
} as const;

export type BrandLogoKey = keyof typeof brandLogoByName;
