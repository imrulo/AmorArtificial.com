"use client";

import {
  TrendingUp,
  Heart,
  Sparkles,
  Search,
  Gem,
} from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";

const iconMap = {
  trending: TrendingUp,
  heart: Heart,
  sparkles: Sparkles,
  search: Search,
  gem: Gem,
} as const;

export function ValueProposition() {
  return (
    <section
      id="value"
      className="relative px-4 py-24 md:py-32"
      aria-labelledby="value-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            id="value-heading"
            eyebrow="Investment Thesis"
            title="Why"
            highlight="AmorArtificial.com Is Invaluable"
            description="Every dimension of this name compounds — market timing, emotional resonance, linguistic reach, and search authority."
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((prop) => {
            const Icon = iconMap[prop.icon];
            return (
              <StaggerItem key={prop.title}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-bold text-soft">
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-soft/65">
                    {prop.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
