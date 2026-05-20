"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { DOMAIN } from "@/lib/constants";
import { GradientText } from "@/components/ui/GradientText";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroParticles } from "@/components/animations/HeroParticles";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 hero-mesh"
      aria-labelledby="hero-heading"
    >
      <HeroParticles />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Premium domain available for direct acquisition
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="font-display text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          <GradientText pulse className="block">
            {DOMAIN}
          </GradientText>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg font-medium text-soft md:text-xl lg:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          The Ultimate Domain for Artificial Love — Own the Future of Emotional AI
        </motion.p>

        <motion.p
          className="mt-3 text-base italic text-soft/60 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Where technology meets the heart.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <WhatsAppButton label="Acquire This Domain" size="lg" />
          <WhatsAppButton
            label="Negotiate on WhatsApp"
            variant="secondary"
            size="lg"
          />
        </motion.div>

        <motion.p
          className="mt-6 text-xs text-soft/50 md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Not a live business — this premium domain is available for acquisition only.
        </motion.p>
      </div>

      <motion.a
        href="#showcase"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-soft/50 transition-colors hover:text-secondary"
        aria-label="Scroll to domain showcase"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8" aria-hidden />
      </motion.a>
    </section>
  );
}
