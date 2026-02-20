import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import DigitalCloning from "@/components/DigitalCloning";
import WhosThisFor from "@/components/WhosThisFor";
import NetworkSection from "@/components/NetworkSection";
import TrustSection from "@/components/TrustSection";
import Warning from "@/components/Warning";
import NetworkProof from "@/components/NetworkProof";
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

      {/* Footer */}
      <footer className="py-10 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Personal Brand Secrets. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
