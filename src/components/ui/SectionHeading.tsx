import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Reveal>
        <span className={`label-eyebrow ${invert ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display text-3xl leading-[1.1] text-balance sm:text-4xl md:text-5xl ${
            invert ? "text-paper" : "text-ink"
          } ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 max-w-lg text-base leading-relaxed ${
              invert ? "text-paper/70" : "text-ink/60"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
