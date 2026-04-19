type PlaceholderMediaProps = {
  label: string;
  aspectRatio?: string;
  className?: string;
};

export function PlaceholderMedia({
  label,
  aspectRatio = "16 / 9",
  className = "",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed border-app-border-glass bg-app-surface/80 px-4 py-8 text-center font-mono-label text-app-faint ${className}`}
      style={{ aspectRatio }}
    >
      {label}
    </div>
  );
}
