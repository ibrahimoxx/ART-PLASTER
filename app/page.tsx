import Hero from "@/components/sections/Hero";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import GrandProjects from "@/components/sections/GrandProjects";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CareerTeaser from "@/components/sections/CareerTeaser";
import ContactSection from "@/components/sections/ContactSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MarqueeTicker speed="normal" variant="dark" />
      <AboutTeaser />
      <ServicesGrid />
      <ProcessTimeline />
      <PortfolioPreview />
      <GrandProjects />
      <Testimonials />
      <Partners />
      <CareerTeaser />
      <ContactSection />
      <CTABanner />
    </div>
  );
}
