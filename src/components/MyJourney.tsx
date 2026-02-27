import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import pdfPage6 from "@/assets/pdf-page-6.jpg";

const MyJourney = () => {
  return (
    <section className="px-4 py-20 max-w-4xl mx-auto space-y-16">
      {/* Original page screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl overflow-hidden border border-border"
      >
        <img src={pdfPage6} alt="Joe Cury's journey from homeless to $18 million" className="w-full h-auto" loading="lazy" />
      </motion.div>

      {/* Journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase">MY JOURNEY</h2>
        <h3 className="text-2xl md:text-4xl font-bold uppercase">
          FROM <span className="text-destructive">HOMELESS</span> TO{" "}
          <span className="text-primary">$18 MILLION</span> & HELPING 1000's
        </h3>
        <p className="text-accent font-bold text-lg font-['Oswald']">Joe Cury - Founder & CEO</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 max-w-2xl mx-auto"
      >
        {[
          "IMPACT HEROES Agency: Producing daily content for 14M followers in the business niche (2018 - Present)",
          "ENTRE Institute: Growth Manager for a $100M Educational Company (2020-2021)",
          "From Homeless to $18MM in Sales In 6 Years",
          "Clients growing up to 50K new followers a month virtually for FREE (since 2017)",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
            <span className="text-primary font-bold text-lg mt-0.5">→</span>
            <p className="text-foreground font-medium">{item}</p>
          </div>
        ))}
      </motion.div>

      <CTAButton text="OK! I GET IT! YOU'RE LEGIT, I'M IN!" />

      {/* Final push */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-6 bg-gradient-to-b from-accent/10 to-transparent rounded-2xl p-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase">Boom!</h2>
        <p className="text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
          You've Made It! I Really Like To Work With Smart People That Do Their Due Diligence!
        </p>
        <p className="text-accent font-bold text-2xl font-['Oswald'] uppercase">
          Now You Know This System Is Legit! See You On The Other Side!
        </p>
        <CTAButton text="LET'S DO THIS! I'M IN!" />
      </motion.div>
    </section>
  );
};

export default MyJourney;
