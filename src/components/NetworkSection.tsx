import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const NetworkSection = () => {
  return (
    <section className="px-4 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            YOUR NETWORK ={" "}
            <span className="text-accent">YOUR NETWORTH</span>
          </h2>
          <p className="text-xl text-muted-foreground">Ready To Scale Your Network?</p>
        </motion.div>

        <CTAButton />
      </div>
    </section>
  );
};

export default NetworkSection;
