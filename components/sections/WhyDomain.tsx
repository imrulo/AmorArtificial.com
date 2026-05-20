"use client";

import { motion } from "framer-motion";
import { DOMAIN_SCORES } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

function ScoreBar({ score, max }: { score: number; max: number }) {
  const pct = (score / max) * 100;
  return (
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-space/80">
      <motion.div
        className="h-full rounded-full bg-[linear-gradient(90deg,#FF2D95,#00E5FF,#7B2CBF)]"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </div>
  );
}

export function WhyDomain() {
  return (
    <section
      id="why"
      className="relative px-4 py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            id="why-heading"
            eyebrow="Domain Intelligence"
            title="Why This"
            highlight="Domain?"
            description="A rigorous scoring framework for premium digital assets — AmorArtificial.com excels across every dimension that matters to founders and investors."
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOMAIN_SCORES.map((item) => (
            <StaggerItem key={item.label}>
              <GlassCard className="h-full">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-soft/90">
                    {item.label}
                  </h3>
                  <span className="text-gradient font-display text-2xl font-extrabold">
                    {item.score}
                    <span className="text-sm text-soft/40">/{item.max}</span>
                  </span>
                </div>
                <ScoreBar score={item.score} max={item.max} />
                <p className="mt-4 text-xs leading-relaxed text-soft/55">
                  {item.justification}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
