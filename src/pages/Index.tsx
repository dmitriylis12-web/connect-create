import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import DigitalCloning from "@/components/DigitalCloning";
import WhosThisFor from "@/components/WhosThisFor";
import NetworkSection from "@/components/NetworkSection";
import TrustSection from "@/components/TrustSection";
import Warning from "@/components/Warning";
import NetworkProof from "@/components/NetworkProof";
import MoreProof from "@/components/MoreProof";
import WorksFor from "@/components/WorksFor";
import MyJourney from "@/components/MyJourney";
import SiteFooter from "@/components/SiteFooter";
import CTAButton from "@/components/CTAButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <Testimonials />
      <CTAButton text="GET THE FORMULA NOW" />
      <DigitalCloning />
      <WhosThisFor />
      <NetworkSection />
      <TrustSection />
      <Warning />
      <NetworkProof />
      <MoreProof />
      <WorksFor />
      <MyJourney />
      <SiteFooter />
    </main>
  );
};

export default Index;
