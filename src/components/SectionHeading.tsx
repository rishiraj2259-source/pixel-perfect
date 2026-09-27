import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
          tone === "dark" ? "text-charcoal-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-charcoal-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
