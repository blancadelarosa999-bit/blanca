export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow ? (
        <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.26em] text-teal">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={`gold-line mt-4 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal-light sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
