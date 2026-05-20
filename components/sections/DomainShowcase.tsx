"use client";

import { CheckCircle2 } from "lucide-react";
import { DOMAIN, TRUST_SIGNALS } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";

export function DomainShowcase() {
  return (
    <section
      id="showcase"
      className="relative px-4 py-24 md:py-32"
      aria-labelledby="showcase-heading"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <GlassCard className="text-center">
            <Badge className="mb-6">For Sale — Premium Asset</Badge>
            <h2 id="showcase-heading" className="sr-only">
              Premium domain showcase
            </h2>
            <p
              className="font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              aria-hidden
            >
              <GradientText pulse>{DOMAIN}</GradientText>
            </p>
            <p className="mx-auto mt-6 max-w-xl text-soft/70">
              An investment-grade digital asset at the intersection of artificial
              intelligence and human desire. This premium domain is available for
              direct acquisition.
            </p>

            <ul
              className="mt-10 grid gap-4 sm:grid-cols-2"
              role="list"
              aria-label="Domain trust signals"
            >
              {TRUST_SIGNALS.map((signal) => (
                <li
                  key={signal}
                  className="flex items-center gap-3 rounded-xl border border-glass-border bg-glass px-4 py-3 text-left text-sm text-soft/90"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-secondary"
                    aria-hidden
                  />
                  {signal}
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
