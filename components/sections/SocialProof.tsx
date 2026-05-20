"use client";

import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

export function SocialProof() {
  return (
    <section
      className="relative px-4 py-24 md:py-32"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            id="proof-heading"
            eyebrow="Industry Perspective"
            title="Leaders Understand"
            highlight="Emotional AI Branding"
            description="Fictional perspectives illustrating how category-defining names shape perception before a single line of code ships."
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <GlassCard className="flex h-full flex-col">
                <Quote
                  className="mb-4 h-8 w-8 text-primary/60"
                  aria-hidden
                />
                <blockquote className="flex-1 text-sm leading-relaxed text-soft/75 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3 border-t border-glass-border pt-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF2D95,#7B2CBF)] text-xs font-bold text-white"
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-soft text-sm">
                      {t.name}
                    </cite>
                    <p className="text-xs text-soft/50">{t.role}</p>
                  </div>
                </footer>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
