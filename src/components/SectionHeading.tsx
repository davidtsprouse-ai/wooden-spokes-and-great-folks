type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{subtitle}</p>
      )}
      <div
        className={`section-rule mt-6 ${align === "center" ? "mx-auto w-24" : "w-24"}`}
        aria-hidden="true"
      />
    </div>
  );
}
