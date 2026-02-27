import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import pdfPage4 from "@/assets/pdf-page-4.jpg";
import pdfPage5 from "@/assets/pdf-page-5.jpg";

const categories = [
  {
    title: "YOU & YOUR Company",
    items: ["Health & Fitness", "Multi 8-Figure Entrepreneur", "TV Host", "Founder of Yes You Can", "20+ Arrests to Forbes", "Founder of Nutrition Solutions", "Top Podcast Host", "Founder & CEO @gymguyz"],
  },
  {
    title: "SPEAKERS",
    items: ["Multi 8-Figure Entrepreneur", "World-Leading Life Coach To Top Leaders", "International Speaker, Best Selling Author", "Helped 1,000,000+ people", "NBA Starter", "Best Selling Author, World-class Speaker"],
  },
  {
    title: "COACHES",
    items: ["Elite Performance Coach to Pro Athletes & Fortune 500", "16X Author, International Speaker", "Multi-Million Dollar Business Coach", "From Trash Man To Multi 8 Figure Coach", "Best Selling Author, Speaker"],
  },
  {
    title: "PODCASTERS & ONLINE SHOWS",
    items: ["Multi 8-Figure Entrepreneur, Podcaster", "4X Best-Selling Author", "Voted #1 Performance Coach for Men in Biz", "Drug Addict to Millionaire", "$50M before 30", "Public Company On His 28th Birthday"],
  },
  {
    title: "REAL ESTATE",
    items: ["Vietnamese refugee to TOP Real Estate Millionaire by age 27", "Multi 8-Figure Entrepreneur", "Nine 7-Figure Companies"],
  },
  {
    title: "AUTHORS",
    items: ["28 Best-Sellers & 5 Motion Pictures", "Award-Winning Author Published In Over 56 Books", "VP At World's Largest Real Estate Company", "Best Selling Author of The One Thing"],
  },
  {
    title: "EDUCATORS",
    items: ["Five Time 8-Figure Club", "Top Marketer In The World", "Founder of three 8-figure businesses", "Top 10 Personal Development Podcast in the World"],
  },
];

const funCTAs = [
  "OK! I'M READY TO SKYROCKET MY CREDIBILITY",
  "ONLY CLICK IF YOU CAN READ",
  "CLICK HERE IF YOU DON'T HATE PUPPIES",
  "I CAN'T BELIEVE YOU'RE STILL SCROLLING",
  "JK, THIS COULD BE LEGIT...",
  "IT'S ONLY 20 SPOTS! SURE YOU WANNA MISS OUT?",
  "MORE TESTIMONIALS? JUST KIDDING! I'M IN!",
];

const WorksFor = () => {
  return (
    <section className="px-4 py-20 max-w-5xl mx-auto space-y-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold uppercase text-center"
      >
        Our System Works For
      </motion.h2>

      {/* Original page screenshots */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border"
        >
          <img src={pdfPage4} alt="System works for companies, speakers, coaches" className="w-full h-auto" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border"
        >
          <img src={pdfPage5} alt="System works for podcasters, real estate, authors, educators" className="w-full h-auto" loading="lazy" />
        </motion.div>
      </div>

      {categories.map((cat, ci) => (
        <motion.div
          key={ci}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold uppercase text-center">
            <span className="text-primary">{cat.title}</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {cat.items.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-4 text-center"
              >
                <p className="text-foreground font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
          {ci < categories.length - 1 && ci % 2 === 0 && (
            <CTAButton text={funCTAs[ci] || "APPLY NOW TO GET THE SYSTEM"} />
          )}
        </motion.div>
      ))}

      <CTAButton text="IT'S ONLY 20 SPOTS! SURE YOU WANNA MISS OUT?" />

      {/* KLT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-b from-primary/10 to-transparent rounded-2xl p-12 space-y-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase">
          This System Allows You To Get People To
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {["KNOW", "LIKE", "TRUST"].map((word) => (
            <span key={word} className="text-primary font-bold text-4xl md:text-6xl font-['Oswald']">{word}</span>
          ))}
        </div>
        <p className="text-foreground text-xl">YOU</p>
        <CTAButton text="WANNA SEE MORE??? CLICK HERE" />
      </motion.div>
    </section>
  );
};

export default WorksFor;
