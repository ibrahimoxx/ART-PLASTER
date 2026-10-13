import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
// HIDDEN — portfolio is empty (no confirmed post-02/2023 projects). Restore by uncommenting.
// import PortfolioPreview from "@/components/sections/PortfolioPreview";
// const GrandProjects = dynamic(
//   () => import("@/components/sections/GrandProjects"),
//   { loading: () => <div className="h-96" />, ssr: false }
// );
// HIDDEN — no confirmed testimonials/partners. Restore by uncommenting.
// const Testimonials = dynamic(
//   () => import("@/components/sections/Testimonials"),
//   { loading: () => <div className="h-64" />, ssr: false }
// );
// const Partners = dynamic(
//   () => import("@/components/sections/Partners"),
//   { loading: () => <div className="h-32" />, ssr: false }
// );
const CareerTeaser = dynamic(
  () => import("@/components/sections/CareerTeaser"),
  { loading: () => <div className="h-64" />, ssr: false }
);
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
      {/* HIDDEN — portfolio preview, GrandProjects, Testimonials, Partners: see commented imports above. */}
      <CareerTeaser />
      <ContactSection />
      <CTABanner />
    </div>
  );
}
