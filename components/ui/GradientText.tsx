import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  pulse?: boolean;
};

export function GradientText({
  children,
  as: Tag = "span",
  className,
  pulse = false,
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "text-gradient bg-[length:200%_auto]",
        pulse && "animate-[gradient-shift_6s_ease_infinite]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
