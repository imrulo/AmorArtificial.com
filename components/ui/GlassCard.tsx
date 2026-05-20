"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn("glass-card neon-border rounded-2xl p-6 md:p-8", className)}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow:
                "0 20px 60px -15px rgba(255, 45, 149, 0.35), 0 0 40px -10px rgba(0, 229, 255, 0.2)",
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
