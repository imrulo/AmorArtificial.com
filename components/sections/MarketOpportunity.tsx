"use client";

import { Brain, Users, Infinity } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function MarketOpportunity() {
  return (
    <section
      className="relative overflow-hidden px-4 py-24 md:py-32"
      aria-labelledby="market-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(123,44,191,0.25), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeading
            id="market-heading"
            eyebrow="The Future of Intimacy"
            title="The Perfect Brand for the"
            highlight="AI Love Revolution"
            description="Tomorrow's relationships will be augmented, virtual, and deeply emotional. The brands that define this era will sound like poetry and feel like destiny."
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-soft/75 md:text-lg">
            <p>
              Virtual companions are no longer science fiction — they are a
              multi-billion-dollar reality. Millions seek connection through AI
              girlfriends, boyfriends, coaches, and soulmates. Emotional AI is
              becoming infrastructure for loneliness, creativity, and digital
              intimacy.
            </p>
            <p>
              <strong className="text-soft">AmorArtificial.com</strong> captures
              that revolution in two words: love, rendered artificial. It is the
              ideal launchpad for an AI companion app, a virtual dating platform,
              emotional intelligence SaaS, or metaverse romance — a name investors
              remember and users feel in their chest.
            </p>
            <p className="text-secondary/90">
              This is not a product demo. This premium domain is available for
              direct acquisition — your once-in-a-generation brand, waiting.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3" role="list">
            {[
              { icon: Brain, label: "Emotional AI platforms" },
              { icon: Users, label: "Virtual companions & dating" },
              { icon: Infinity, label: "Metaverse romance & intimacy" },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass-card flex flex-col items-center gap-3 rounded-2xl p-6 text-center"
              >
                <Icon className="h-8 w-8 text-primary" aria-hidden />
                <span className="text-sm font-medium text-soft/80">{label}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-12 flex justify-center">
          <WhatsAppButton label="Let's Make This Yours" size="lg" />
        </FadeIn>
      </div>
    </section>
  );
}
