import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const TrustSection = () => {
  return (
    <section className="px-4 py-20 max-w-4xl mx-auto text-center space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase">
          When Do People Make A Decision To{" "}
          <span className="text-primary">Buy From You?</span>
        </h2>
        <p className="text-2xl text-accent font-bold font-['Oswald'] uppercase">
          When They Know, Like & Trust You!!!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
      >
        <p>
          What If I Tell You That Our Proven Methodology Can Get{" "}
          <span className="text-foreground font-semibold">Thousands Of People</span>, At The Same Time, To Get To Know Who You Are, Like & Trust You?
        </p>
        <p>
          ...And, To Get Them To Do The Actions You Ask So You Can Impact Their Lives.
        </p>
        <p className="text-sm">
          I Spent The Last 4 Years And Over $600,000 Of My Own Money, Sweat And Tears, Developing This Formula.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-8 space-y-4 max-w-2xl mx-auto"
      >
        <p className="text-foreground text-lg">
          This System, Ethically Executed, Triggers The Human Brain In A Way That Allows People To:
        </p>
        <div className="space-y-2">
          {["Really Feel They Know You", "Really Feel That They Like You", "Feel They Trust You"].map((item, i) => (
            <p key={i} className="text-primary font-bold font-['Oswald'] text-xl uppercase">{item}</p>
          ))}
        </div>
        <p className="text-accent font-bold text-lg">
          This Trust Is Built In Their Subconscious Mind In Less Than 5 Seconds
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className="text-foreground text-xl">
          If I Can Show You A Way To{" "}
          <span className="text-primary font-bold">Digitally Clone Yourself</span>{" "}
          And Have 10 Or 100 Of You, Doing Sales And Marketing For You...
        </p>
        <p className="text-muted-foreground text-lg">
          How Much More Money Could You Make? How Much More Efficient Could You Be?
        </p>
        <p className="text-accent font-bold text-2xl font-['Oswald'] uppercase">
          You'd Be 100 Times More Effective!
        </p>
      </motion.div>

      <CTAButton text="YES! I WANT THE SYSTEM!" />
    </section>
  );
};

export default TrustSection;
