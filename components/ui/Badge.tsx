import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        variant === "default" &&
          "bg-primary/15 text-primary border border-primary/30",
        variant === "success" &&
          "bg-secondary/15 text-secondary border border-secondary/30",
        variant === "outline" &&
          "border border-glass-border text-soft/80 bg-glass",
        className
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-current animate-pulse"
        aria-hidden
      />
      {children}
    </span>
  );
}
