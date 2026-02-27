import { motion } from "framer-motion";
import CTAButton from "./CTAButton";


const moreTestimonials = [
  { name: "Julio", role: "500K Subs Youtuber • Content Creator", quote: "I just crossed 40K Followers! Thank you Joe!" },
  { name: "Sharlene", role: "Actress • Entrepreneur • Artist", quote: "Finally reaching 100K! So happy! Joe is helping me and a group of influencers scale our social media" },
  { name: "Jarxiel", role: "Entrepreneur • Artist", quote: "Joe is the Best Social Media Marketer I know" },
];

const systemAllows = [
  "Network with $100 Million+ CEOS",
  "4,000+ Real Estate Properties Bought & Sold",
  "Built 11 Businesses $3 Million - $1.8 Billion",
  "Sold 1st company for $1 Billion",
  "13X Inc 500/5000",
  "Managing $160 Million+ Assets",
  "Raised $250M before age 30",
  "Top 100 Company in Inc 5000",
  "$0 to $50M in 20 months",
  "$100M by age 28",
  "Founder of Snap Fitness",
  "Partner #1 Wellness Franchise (6,000+ locations)",
];

const MoreProof = () => {
  return (
    <section className="px-4 py-20 space-y-16 max-w-5xl mx-auto">
      {/* More quotes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {moreTestimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 text-left space-y-4"
          >
            <p className="text-foreground italic text-sm leading-relaxed">"{t.quote}"</p>
            <div>
              <p className="text-primary font-bold font-['Oswald']">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <CTAButton text="ONLY APPLY IF YOU LOVE MONEY & HELPING PEOPLE!" />

      {/* System achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase">
          This System <span className="text-primary">Allows You To</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {systemAllows.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-card border border-border rounded-xl p-4 text-center"
            >
              <p className="text-accent font-bold text-sm font-['Oswald'] uppercase">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="text-center">
        <p className="text-2xl font-bold font-['Oswald'] uppercase text-muted-foreground mb-4">
          DAMN! You're Hard To Convince! Keep Going!
        </p>
        <CTAButton />
      </div>

      {/* Reach Millions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-6 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl p-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase">
          This System Allows You To Reach{" "}
          <span className="text-primary">Millions Of People</span>
        </h2>
        <p className="text-accent font-bold text-xl font-['Oswald'] uppercase">For Real!?!?!?</p>
        <CTAButton text="JUST CLICK THE BUTTON" />
      </motion.div>
    </section>
  );
};

export default MoreProof;
