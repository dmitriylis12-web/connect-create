import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

const benefits = [
  "9x Your Opportunities",
  "Help You Become The Go-To Authority In Your Industry",
  "13x Your Credibility",
  "Give You An Unfair Advantage Over Your Competitors",
  "Allow You To Easily Network With Top Performers",
  "Allow You To Collaborate With Business Moguls & Brands",
  "Position Yourself As The TOP Expert In Your Niche",
  "Up to 7x Your Income",
  "Build Relationships On Autopilot, Even While You Sleep!",
  "Consistently Work With Dream Clients",
];

const DigitalCloning = () => {
  return (
    <section className="px-4 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-3">
            Our Training Will Teach You{" "}
            <span className="text-accent">"The Art Of Digital Cloning"</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Instantly 10X Your Credibility & Opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50"
            >
              <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">{b}</span>
            </motion.div>
          ))}
        </div>

        <CTAButton text="THIS IS ENOUGH, I'M IN!" />
      </div>
    </section>
  );
};

export default DigitalCloning;
