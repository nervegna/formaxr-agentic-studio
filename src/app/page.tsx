"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { IndustryProvider } from "@/context/IndustryContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustrySelector from "@/components/IndustrySelector";
import StatsBar from "@/components/StatsBar";
import ProblemStatement from "@/components/ProblemStatement";
import FeatureCards from "@/components/FeatureCards";
import ProfessionalRoles from "@/components/ProfessionalRoles";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import Compliance from "@/components/Compliance";
import WhiteLabel from "@/components/WhiteLabel";
import ClosingStatement from "@/components/ClosingStatement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <IndustryProvider>
        <Navbar />
        <main>
          <Hero />
          <IndustrySelector />
          <StatsBar />
          <ProblemStatement />
          <FeatureCards />
          <ProfessionalRoles />
          <HowItWorks />
          <Security />
          <Compliance />
          <WhiteLabel />
          <ClosingStatement />
          <Contact />
        </main>
        <Footer />
      </IndustryProvider>
    </LanguageProvider>
  );
}
