export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-belmar-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
