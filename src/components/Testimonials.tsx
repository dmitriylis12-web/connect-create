import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  result: string;
  duration: string;
}

const TestimonialCard = ({ name, title, result, duration }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-card border border-border rounded-xl overflow-hidden group"
  >
    {/* Video placeholder */}
    <div className="relative aspect-video bg-secondary flex items-center justify-center cursor-pointer group-hover:bg-secondary/80 transition-colors">
      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Play className="w-7 h-7 text-primary-foreground ml-1" />
      </div>
      <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs px-2 py-1 rounded">
        {duration}
      </span>
    </div>
    <div className="p-5 space-y-2">
      <h3 className="text-primary font-bold text-lg font-['Oswald'] uppercase">{result}</h3>
      <p className="text-foreground font-semibold">{name}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{title}</p>
    </div>
  </motion.div>
);

const testimonials: TestimonialCardProps[] = [
  {
    name: "Rudy Mawer",
    title: "Now the CEO of 5 Companies, Author, Top Trainer In The Automotive Industry, Speaker, Investor, Influencer",
    result: "$250K To $4 Million In Less Than 2 Years",
    duration: "05:26",
  },
  {
    name: "Daven Michaels",
    title: "NY Best Selling Author, 30 Year Business Veteran And CEO Of 123Employee With Over 500 Employees",
    result: "$500K Closed Deal On His 1st Call",
    duration: "00:42",
  },
  {
    name: "Jeff Lerner",
    title: "100 Million CEO/Founder, Speaker, Investor, Influencer, Creative Trainer To Over 150,000 Awesome Life Seekers",
    result: "From Stuck at 5K To 208K On IG In 9 Months",
    duration: "03:13",
  },
  {
    name: "Beate",
    title: "Successful Business Strategist, Author, Speaker. Sold Her First Multi-Million Dollar Business To Bill Gates",
    result: "From 2K To 50K On IG In 45 Days",
    duration: "01:05",
  },
  {
    name: "Leo",
    title: "Scales E-com Brands & Now Launching New Ventures. Taking It To 7 Figures In The First Year",
    result: "From $6K/Month to $42K/Month In Less Than 55 Days",
    duration: "02:06",
  },
  {
    name: "Dr. James Neilson",
    title: "Multi 7 Figures CEO, Speaker, Author, Investor, Influencer",
    result: "16X His Audience in 3 Months",
    duration: "02:06",
  },
  {
    name: "Trent",
    title: "Founder Flowster.app #254 on Inc 5000, Helped 27,000 founders, Investor, Influencer",
    result: "1950% Social Media Growth in 90 Days",
    duration: "01:30",
  },
  {
    name: "Rudy",
    title: "CEO of 5 Companies, Author, Top Trainer In The Automotive Industry, Speaker, Investor",
    result: "7X His Income in 14 Months",
    duration: "00:31",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
