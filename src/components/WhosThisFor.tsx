import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const targets = [
  "Coaches",
  "Business Owners",
  "Personal Brand Experts",
  "Authors",
  "Speakers",
  "Agency Owners",
  "Influencers",
  "Service Providers",
  "Consultants",
];

const WhosThisFor = () => {
  return (
    <section className="px-4 py-20 max-w-4xl mx-auto text-center space-y-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold uppercase"
      >
        Who's This For?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3"
      >
        {targets.map((t, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border px-5 py-3 rounded-full font-semibold text-foreground hover:border-primary/50 transition-colors"
          >
            {t}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6 max-w-2xl mx-auto"
      >
        <p className="text-muted-foreground text-lg">
          If You Are In Any Of Those Categories... And You REALLY Want To Unlock Your Genius Potential...
        </p>
      </motion.div>
    </section>
  );
};

export default WhosThisFor;
