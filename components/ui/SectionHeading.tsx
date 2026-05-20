import { GradientText } from "./GradientText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase text-secondary">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-3xl font-bold tracking-tight text-soft md:text-4xl lg:text-5xl"
      >
        {title}{" "}
        {highlight && (
          <GradientText as="span" className="block md:inline">
            {highlight}
          </GradientText>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-soft/70 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
