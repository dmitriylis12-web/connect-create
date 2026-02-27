import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import page5 from "@/assets/page-5.png";
import page18 from "@/assets/page-18.png";
import page7 from "@/assets/page-7.png";
import page8 from "@/assets/page-8.png";
import page9 from "@/assets/page-9.png";
import page10 from "@/assets/page-10.png";
import page11 from "@/assets/page-11.png";


const topPerformers = [
  { title: "Multi 8-Figure Entrepreneur" },
  { title: "4X Best-Selling Author" },
  { title: "Co-Founder & CEO of Cardone Ventures" },
  { title: "Sold Last Business For $150 Million" },
  { title: "Lost $100 Million and Got Back $120 Million" },
  { title: "3X Best Selling Author, Speaker" },
  { title: "Helped 100K People Achieve Health Goals" },
  { title: "2X New York Times Best-Selling Author" },
  { title: "Founder & CEO of Holiday Swap" },
  { title: "Guinness World Record" },
  { title: "First IPO at 38" },
  { title: "3X Author, World-Class Speaker, Investor" },
];

const moguls = [
  { name: "ClickFunnels CEO", desc: "Current ClickFunnels CEO, Top Business Podcast Host, ClickFunnels Valuation ~$1 Billion" },
  { name: "Zimmerman Advertising", desc: "$4 Billion Dollar Empire Founder, Top Business Speaker" },
  { name: "Primerica", desc: "Former Primerica® CEO, Coach, Keynote Speaker, Author — $5 Billion Dollar Public Company" },
];

const brandTestimonials = [
  { name: "Funky", role: "World Record Holder • Content Creator • Entrepreneur", quote: "Every time I've worked with Joe on my social media I get more than I expected" },
  { name: "Sharlene", role: "Actress • Entrepreneur • Artist", quote: "Together we are developing a whole new strategy and a campaign" },
  { name: "JR", role: "Business Owner • Content Creator with over 2 Billion views", quote: "He's the best at social networks, specifically Instagram" },
  { name: "Noelia", role: "Luxury Real Estate • Model", quote: "I'm learning how to grow my Instagram account and marketing strategies from Joe" },
  { name: "Tiby", role: "Business Owner • Viral Content Creator", quote: "Joe is helping me grow my account, last month I grew 57,450 new followers" },
  { name: "JD", role: "Viral Youtuber • Entrepreneur", quote: "Joe Cury is helping me to maximize my social media accounts to grow in giant steps" },
];

const NetworkProof = () => {
  return (
    <section className="px-4 py-20 space-y-20">
      {/* Screenshot proof */}
      <div className="max-w-5xl mx-auto space-y-6">
        {[page5, page18, page7, page8, page9, page10, page11].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border"
          >
            <img src={src} alt={`Network proof ${i + 1}`} className="w-full h-auto" loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* Top Performers */}
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold uppercase"
        >
          This System Allows You To Network With{" "}
          <span className="text-primary">Top Performers</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topPerformers.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-card border border-border rounded-xl p-5 flex items-center justify-center"
            >
              <p className="text-foreground font-medium text-sm text-center">{p.title}</p>
            </motion.div>
          ))}
        </div>

        <CTAButton text="THIS IS ENOUGH, I'M IN" />
      </div>

      {/* Business Moguls */}
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold uppercase"
        >
          Collaborate With{" "}
          <span className="text-accent">Business Moguls & Brands</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moguls.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 space-y-3"
            >
              <h3 className="text-primary font-bold text-lg font-['Oswald'] uppercase">{m.name}</h3>
              <p className="text-muted-foreground text-sm">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent font-bold text-2xl font-['Oswald'] uppercase"
        >
          Networking With Billion Dollar Companies Too???
        </motion.p>

        <CTAButton />
      </div>

      {/* Brand Testimonials */}
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold uppercase"
        >
          Scale Your Brand To{" "}
          <span className="text-primary">Category King</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
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

        <CTAButton text="YES! I WANNA LEARN HOW TO LEVERAGE OTHER PEOPLE'S AUDIENCES" />
      </div>
    </section>
  );
};

export default NetworkProof;
