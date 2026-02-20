import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTAButton = ({ text = "APPLY NOW TO GET THE SYSTEM" }: { text?: string }) => (
  <div className="text-center space-y-2">
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-10 py-7 rounded-lg shadow-[0_0_30px_hsl(142,72%,45%,0.3)] hover:shadow-[0_0_50px_hsl(142,72%,45%,0.5)] transition-all duration-300 font-['Oswald'] uppercase tracking-wider"
    >
      {text}
    </Button>
    <p className="text-muted-foreground text-sm italic">
      This Service Is Limited To Only 20 People At A Time... Apply To See If There Are Any Open Spots
    </p>
  </div>
);

export default CTAButton;
