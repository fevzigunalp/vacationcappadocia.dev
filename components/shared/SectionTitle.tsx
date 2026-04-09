interface SectionTitleProps {
  overline?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  overline,
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {overline && (
        <span className="inline-block text-primary text-[13px] font-semibold uppercase tracking-[0.2em] mb-2">
          {overline}
        </span>
      )}
      <h2 className="text-accent text-3xl md:text-4xl mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body-text text-base max-w-2xl ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
