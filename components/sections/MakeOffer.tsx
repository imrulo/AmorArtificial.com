"use client";

import { Send } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GlassCard } from "@/components/ui/GlassCard";

export function MakeOffer() {
  return (
    <section
      className="relative px-4 pb-24 md:pb-32"
      aria-labelledby="offer-heading"
    >
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <GlassCard className="text-center">
            <h2
              id="offer-heading"
              className="font-display text-2xl font-bold text-soft md:text-3xl"
            >
              Make an Offer
            </h2>
            <p className="mt-3 text-sm text-soft/60">
              Serious inquiries only. All negotiations happen securely via
              WhatsApp — fast, direct, confidential.
            </p>

            <div
              className="mt-8 space-y-4 rounded-xl border border-dashed border-glass-border bg-space/50 p-6"
              role="group"
              aria-label="Offer submission via WhatsApp"
            >
              <div className="text-left">
                <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-soft/50">
                  Domain
                </label>
                <p className="rounded-lg border border-glass-border bg-glass px-4 py-3 text-soft">
                  AmorArtificial.com
                </p>
              </div>
              <div className="text-left">
                <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-soft/50">
                  Your message (prefilled)
                </label>
                <p className="rounded-lg border border-glass-border bg-glass px-4 py-3 text-sm text-soft/70">
                  Hello, I am interested in purchasing AmorArtificial.com
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <WhatsAppButton
                label="Negotiate Directly on WhatsApp"
                size="lg"
                className="w-full"
              />
              <WhatsAppButton
                label="Contact Owner via WhatsApp"
                variant="ghost"
                size="md"
                className="w-full"
              />
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-soft/40">
              <Send className="h-3 w-3" aria-hidden />
              Not a live business — domain for sale only
            </p>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
