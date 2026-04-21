import {
  brandLogoByName,
  type BrandLogoKey,
} from "@/components/BrandLogoMarks";

const ITEMS: { name: string; key: BrandLogoKey }[] = [
  { name: "Cursor", key: "Cursor" },
  { name: "Claude", key: "Claude" },
  { name: "Figma", key: "Figma" },
  { name: "Lovable", key: "Lovable" },
  { name: "Paper", key: "Paper" },
  { name: "Notion", key: "Notion" },
  { name: "Vercel", key: "Vercel" },
  { name: "Perplexity", key: "Perplexity" },
];

const contentShell = "mx-auto w-full max-w-content";

export default function LogoCarousel() {
  return (
    <div className="-mx-5 border-t border-app-border-subtle bg-app-bg md:-mx-10 lg:-mx-16">
      <div className={contentShell}>
        <div className="logo-marquee-fade relative overflow-hidden py-6 md:py-8">
          <div className="logo-marquee-track flex w-max items-center gap-12 md:gap-20 lg:gap-24">
            {[...ITEMS, ...ITEMS].map((item, index) => {
              const Logo = brandLogoByName[item.key];
              return (
                <div
                  key={`${item.name}-${index}`}
                  className="flex shrink-0 items-center gap-3 text-app-muted"
                >
                  <Logo />
                  <span className="whitespace-nowrap text-sm font-medium tracking-tight text-app-muted md:text-base">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
