export const DOMAIN = "AmorArtificial.com";

export const COLORS = {
  primary: "#FF2D95",
  secondary: "#00E5FF",
  accent: "#7B2CBF",
  neutralDark: "#0A0A0A",
  neutralLight: "#F8F1FF",
} as const;

export const WHATSAPP_NUMBER = "+381641409093";
export const WHATSAPP_BASE = "https://wa.me/381641409093";
export const WHATSAPP_MESSAGE =
  "Hello, I am interested in purchasing AmorArtificial.com";
export const WHATSAPP_URL = `${WHATSAPP_BASE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#why", label: "Why This Domain" },
  { href: "#value", label: "Value" },
  { href: "#acquire", label: "Acquire" },
] as const;

export const DOMAIN_SCORES = [
  {
    label: "Brandability",
    score: 98,
    max: 100,
    justification:
      "Poetic, bilingual-ready, and instantly evocative of AI romance.",
  },
  {
    label: "Commercial Intent",
    score: 99,
    max: 100,
    justification:
      "Exact-match for the multi-billion AI companion and emotional AI market.",
  },
  {
    label: "SEO Potential",
    score: 97,
    max: 100,
    justification:
      "Captures high-volume queries: amor artificial, artificial love, AI love.",
  },
  {
    label: "Memorability",
    score: 100,
    max: 100,
    justification: "Short, lyrical, unforgettable across Latin languages.",
  },
  {
    label: "Startup Potential",
    score: 99,
    max: 100,
    justification:
      "Perfect umbrella brand for companions, dating, emotional AI SaaS.",
  },
  {
    label: "Marketability",
    score: 98,
    max: 100,
    justification:
      "Premium positioning for investors, founders, and luxury tech romance.",
  },
  {
    label: "Luxury / Emotional Appeal",
    score: 100,
    max: 100,
    justification:
      "Balances seductive intimacy with cutting-edge AI credibility.",
  },
  {
    label: "Investor Appeal",
    score: 97,
    max: 100,
    justification:
      "Signals category leadership in the fastest-growing intimacy vertical.",
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "AI Romance Market Explosion",
    description:
      "Virtual companions and emotional AI are projected to exceed billions in value. AmorArtificial.com owns the narrative.",
    icon: "trending" as const,
  },
  {
    title: "Emotional Branding Power",
    description:
      "Love meets artificial intelligence in one unforgettable phrase — desire, hope, and futuristic intimacy unified.",
    icon: "heart" as const,
  },
  {
    title: "Instant Memorability",
    description:
      "Ten syllables of poetry. Understood in Spanish, Portuguese, Italian, and English-speaking markets worldwide.",
    icon: "sparkles" as const,
  },
  {
    title: "SEO Dominance",
    description:
      "Exact-match keywords for artificial love, AI girlfriend, synthetic romance, and emotional AI discovery.",
    icon: "search" as const,
  },
  {
    title: "Investment Upside",
    description:
      "Premium .com assets in hyper-growth categories appreciate as categories mature. This is a once-in-a-cycle name.",
    icon: "gem" as const,
  },
] as const;

export const TRUST_SIGNALS = [
  "Exact-match .com",
  "High commercial intent",
  "Brandable across 5+ languages",
  "Perfect for AI romance startups",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Emotional AI needs brands that feel human before the product launches. AmorArtificial.com is that brand.",
    name: "Dr. Elena Voss",
    role: "Chief AI Ethics Officer, SynthMind Labs",
    initials: "EV",
  },
  {
    quote:
      "In virtual companionship, the domain is the first date. This name wins instantly.",
    name: "Marcus Chen",
    role: "Founder, Nexus Companion",
    initials: "MC",
  },
  {
    quote:
      "Investors fund categories. AmorArtificial.com defines the category of artificial love.",
    name: "Sofia Ramirez",
    role: "Partner, Horizon Ventures",
    initials: "SR",
  },
] as const;
