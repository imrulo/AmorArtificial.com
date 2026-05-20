"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GradientText } from "@/components/ui/GradientText";

export function AcquisitionCTA() {
  return (
    <section
      id="acquire"
      className="relative px-4 py-24 md:py-32"
      aria-labelledby="acquire-heading"
    >
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <motion.div
            className="glass-card neon-border relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-12 md:py-20"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,45,149,0.2),transparent_55%)]"
              aria-hidden
            />

            <h2
              id="acquire-heading"
              className="relative font-display text-3xl font-bold text-soft md:text-5xl"
            >
              Ready to own the{" "}
              <GradientText as="span">future of love?</GradientText>
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-soft/70">
              Secure AmorArtificial.com before the AI intimacy revolution
              prices premium names beyond reach. Negotiate directly — no
              intermediaries, no ambiguity.
            </p>
            <p className="relative mt-2 text-sm text-primary/90">
              This premium domain is available for direct acquisition.
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppButton label="Acquire This Domain" size="lg" />
              <WhatsAppButton
                label="Contact Owner via WhatsApp"
                variant="secondary"
                size="lg"
              />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
