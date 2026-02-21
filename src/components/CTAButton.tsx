import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { useState } from "react";

const CTAButton = ({ text = "APPLY NOW TO GET THE SYSTEM" }: { text?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center space-y-2 relative z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-10 py-7 rounded-lg shadow-[0_0_30px_hsl(142,72%,45%,0.3)] hover:shadow-[0_0_50px_hsl(142,72%,45%,0.5)] transition-all duration-300 font-['Oswald'] uppercase tracking-wider"
          >
            {text}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-secondary/95 border-primary/20 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-['Oswald'] uppercase text-center text-primary">Apply Now</DialogTitle>
            <DialogDescription className="text-center text-foreground/80">
              Fill out the form below to secure your spot.
            </DialogDescription>
          </DialogHeader>
          <LeadCaptureForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
      <p className="text-muted-foreground text-sm italic">
        This Service Is Limited To Only 20 People At A Time... Apply To See If There Are Any Open Spots
      </p>
    </div>
  );
};

export default CTAButton;
