import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebflowScripts from "@/components/scripts/WebflowScripts";
import {
  HeroSection,
  FeaturesSection,
  ProcessSection,
  IntegrationsSection,
  UseCasesSection,
  CtaSection,
  AboutVideoSection,
  TestimonialsSection,
  BlogSection,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <FeaturesSection />
        <ProcessSection />
        <IntegrationsSection />
        <UseCasesSection />
        <div id="pricing">
          <CtaSection />
        </div>
        <div id="about">
          <AboutVideoSection />
        </div>
        <TestimonialsSection />
        <div id="blog">
          <BlogSection />
        </div>
      </main>
      <Footer />
      <WebflowScripts />
    </div>
  );
}
