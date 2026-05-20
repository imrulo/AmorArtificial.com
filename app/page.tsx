import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { DomainShowcase } from "@/components/sections/DomainShowcase";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { MarketOpportunity } from "@/components/sections/MarketOpportunity";
import { WhyDomain } from "@/components/sections/WhyDomain";
import { SocialProof } from "@/components/sections/SocialProof";
import { AcquisitionCTA } from "@/components/sections/AcquisitionCTA";
import { MakeOffer } from "@/components/sections/MakeOffer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <DomainShowcase />
        <ValueProposition />
        <MarketOpportunity />
        <WhyDomain />
        <SocialProof />
        <AcquisitionCTA />
        <MakeOffer />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
