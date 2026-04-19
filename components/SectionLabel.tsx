type SectionLabelProps = {
  label: string;
  title: string;
  className?: string;
};

export function SectionLabel({ label, title, className = "" }: SectionLabelProps) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <p className="font-mono-label text-app-faint">{label}</p>
      <h2 className="section-title mt-3">{title}</h2>
    </div>
  );
}
