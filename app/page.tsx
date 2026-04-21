import { NavSidebar } from "@/components/NavSidebar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MyWorksSection } from "@/components/MyWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <NavSidebar />
      <main className="min-h-screen bg-app-bg pt-14 md:pl-56 md:pt-0">
        <HeroSection />
        <HowItWorksSection />
        <MyWorksSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
