import { motion } from "framer-motion";
import CTAButton from "./CTAButton";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />


      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold text-sm md:text-base uppercase tracking-widest"
        >
          This Training Is Limited To Only 20 People At A Time... Apply Now!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight"
        >
          Ethically{" "}
          <span className="text-primary">"Steal"</span> The System
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold uppercase leading-tight text-foreground/90"
        >
          The TOP{" "}
          <span className="text-accent">0.5% OF ENTREPRENEURS</span>{" "}
          Are Using To Hit 8 Figures With{" "}
          <span className="text-primary">ZERO Ad Spend</span>{" "}
          And Without Complicated Funnels!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-border"
          style={{ aspectRatio: "9/16", maxHeight: "70vh" }}
        >
          <iframe
            src="https://www.instagram.com/reel/DVKIgoDAV_N/embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CTAButton />
        </motion.div>

        {/* As Seen On */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">As Seen On</p>
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-50">
            {["Forbes", "Inc", "Bloomberg", "Entrepreneur", "Fox News"].map((name) => (
              <span key={name} className="text-foreground/40 font-['Oswald'] text-lg font-bold uppercase">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
