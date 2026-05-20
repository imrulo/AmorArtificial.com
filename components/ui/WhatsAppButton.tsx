"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  iconOnly?: boolean;
};

export function WhatsAppButton({
  label,
  variant = "primary",
  size = "md",
  className,
  iconOnly = false,
}: WhatsAppButtonProps) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconOnly ? label : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-sm md:text-base",
        size === "lg" && "px-8 py-4 text-base md:text-lg",
        variant === "primary" &&
          "bg-[linear-gradient(135deg,#FF2D95,#7B2CBF)] text-white shadow-lg shadow-primary/25",
        variant === "secondary" &&
          "glass-card border border-secondary/40 text-secondary hover:bg-secondary/10",
        variant === "ghost" &&
          "border border-glass-border text-soft hover:bg-glass",
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className={cn(size === "lg" ? "h-5 w-5" : "h-4 w-4")} aria-hidden />
      {!iconOnly && <span>{label}</span>}
    </motion.a>
  );
}
