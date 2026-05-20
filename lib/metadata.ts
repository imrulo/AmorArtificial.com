import type { Metadata } from "next";
import { DOMAIN } from "./constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amorartificial.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AmorArtificial.com | Premium Domain for Artificial Love & Emotional AI",
  description:
    "Acquire AmorArtificial.com — the ultimate premium domain for AI romance, emotional intelligence, virtual companionship, and the future of artificial love. Available for direct acquisition.",
  keywords: [
    "amor artificial",
    "artificial love",
    "AI love",
    "AI girlfriend",
    "emotional AI",
    "virtual companionship",
    "premium domain for sale",
    "AI romance startup",
    "synthetic romance",
  ],
  authors: [{ name: "AmorArtificial.com" }],
  creator: "AmorArtificial.com",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: DOMAIN,
    title: "AmorArtificial.com | Premium Domain for Artificial Love & Emotional AI",
    description:
      "Own the future of emotional AI. This premium domain is available for direct acquisition — not a live business.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AmorArtificial.com — Premium Domain for Artificial Love",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AmorArtificial.com | Premium Domain for Artificial Love",
    description:
      "The ultimate domain for AI romance and emotional AI. Available for acquisition.",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: siteUrl },
  category: "technology",
};

export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "AmorArtificial.com — Premium Domain",
    description:
      "Premium domain available for acquisition. Ideal for AI companion apps, emotional AI SaaS, virtual dating, and digital intimacy products.",
    url: siteUrl,
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Product",
      name: "AmorArtificial.com",
      description: "Premium .com domain for the artificial love and emotional AI market",
      category: "Digital Asset",
    },
    seller: {
      "@type": "Organization",
      name: "AmorArtificial.com Domain Owner",
    },
  };
}
