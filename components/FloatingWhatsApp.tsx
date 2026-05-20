"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

/** Sticky floating orb — always visible, subtle pulse for conversion */
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Negotiate AmorArtificial.com on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF2D95,#00E5FF)] text-white shadow-lg shadow-primary/40 md:bottom-8 md:right-8 md:h-16 md:w-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-primary/50"
        animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <MessageCircle className="relative h-6 w-6 md:h-7 md:w-7" aria-hidden />
    </motion.a>
  );
}
