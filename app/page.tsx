import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkSection from "@/components/WorkSection";
import KitSection from "@/components/KitSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-lime selection:text-black">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Services ("The Feed") */}
      <Services />

      {/* 4. Work ("Reels") */}
      <WorkSection />

      {/* 5. The Kit (Gear & Software) */}
      <KitSection />

      {/* 6. Process (4 Short Steps with Timecodes) */}
      <ProcessSection />

      {/* 7. Testimonials ("DMs") */}
      <TestimonialsSection />

      {/* 8. Contact ("Slide into the DMs") */}
      <ContactSection />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
