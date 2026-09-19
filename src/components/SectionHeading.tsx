export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="eyebrow mb-4">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</Heading>
      {description && (
        <p className={`mt-4 max-w-2xl text-secondary ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
