import { motion } from "framer-motion";
import page2 from "@/assets/page-2.png";
import page3 from "@/assets/page-3.png";
import page4 from "@/assets/page-4.png";

const testimonials = [
  {
    name: "Rudy Mawer",
    title: "Now the CEO of 5 Companies, Author, Top Trainer In The Automotive Industry, Speaker, Investor, Influencer",
    result: "$250K To $4 Million In Less Than 2 Years",
  },
  {
    name: "Daven Michaels",
    title: "NY Best Selling Author, 30 Year Business Veteran And CEO Of 123Employee With Over 500 Employees",
    result: "$500K Closed Deal On His 1st Call",
  },
  {
    name: "Jeff Lerner",
    title: "100 Million CEO/Founder, Speaker, Investor, Influencer, Creative Trainer To Over 150,000 Awesome Life Seekers",
    result: "From Stuck at 5K To 208K On IG In 9 Months",
  },
  {
    name: "Beate",
    title: "Successful Business Strategist, Author, Speaker. Sold Her First Multi-Million Dollar Business To Bill Gates",
    result: "From 2K To 50K On IG In 45 Days",
  },
  {
    name: "Leo",
    title: "Scales E-com Brands & Now Launching New Ventures. Taking It To 7 Figures In The First Year",
    result: "From $6K/Month to $42K/Month In Less Than 55 Days",
  },
  {
    name: "Dr. James Neilson",
    title: "Multi 7 Figures CEO, Speaker, Author, Investor, Influencer",
    result: "16X His Audience in 3 Months",
  },
  {
    name: "Trent",
    title: "Founder Flowster.app #254 on Inc 5000, Helped 27,000 founders, Investor, Influencer",
    result: "1950% Social Media Growth in 90 Days",
  },
  {
    name: "Rudy",
    title: "CEO of 5 Companies, Author, Top Trainer In The Automotive Industry, Speaker, Investor",
    result: "7X His Income in 14 Months",
  },
  {
    name: "Dropified",
    title: "Named #55 Fastest Growing Private Company In 2019 With Billions Of Dollars In Transactions",
    result: "Quickly Connect & Collaborate With Industry Giants",
  },
];

const Testimonials = () => {
  return (
    <section className="px-4 py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
          This System Can Add Another{" "}
          <span className="text-primary">ZERO</span> To Your Bank Account
        </h2>
        <p className="text-xl text-muted-foreground">
          In As Little As 90 Days, No Matter What You Do For A Living
        </p>
      </motion.div>


      {/* Screenshot proof */}
      <div className="space-y-6 mb-12">
        {[page2, page3, page4].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border"
          >
            <img src={src} alt={`Testimonial proof ${i + 1}`} className="w-full h-auto" loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* Text-based testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-card border border-border rounded-xl p-6 space-y-3"
          >
            <h3 className="text-primary font-bold text-lg font-['Oswald'] uppercase">{t.result}</h3>
            <p className="text-foreground font-semibold">{t.name}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
