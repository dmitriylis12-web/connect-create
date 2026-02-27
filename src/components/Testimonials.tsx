import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  result: string;
  duration: string;
  embedUrl?: string;
  /** e.g. "9/16" for portrait, "4/5" for IG post, "16/9" for landscape */
  ratio?: string;
}

const TestimonialCard = ({ name, title, result, duration, embedUrl, ratio = "9/16" }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-card border border-border rounded-xl overflow-hidden group"
  >
    {embedUrl ? (
      <div className="w-full overflow-hidden" style={{ aspectRatio: ratio }}>
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    ) : (
      <div
        className="relative bg-secondary flex items-center justify-center cursor-pointer group-hover:bg-secondary/80 transition-colors"
        style={{ aspectRatio: ratio }}
      >
        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="w-7 h-7 text-primary-foreground ml-1" />
        </div>
        <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
    )}
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
    embedUrl: "https://www.instagram.com/tv/CSX1Y63H1Kb/embed",
    ratio: "4/5",
  },
  {
    name: "Daven Michaels",
    title: "NY Best Selling Author, 30 Year Business Veteran And CEO Of 123Employee With Over 500 Employees",
    result: "$500K Closed Deal On His 1st Call",
    duration: "00:42",
    embedUrl: "https://www.instagram.com/p/CNaP-mCnhts/embed",
    ratio: "4/5",
  },
  {
    name: "Jeff Lerner",
    title: "100 Million CEO/Founder, Speaker, Investor, Influencer, Creative Trainer To Over 150,000 Awesome Life Seekers",
    result: "From Stuck at 5K To 208K On IG In 9 Months",
    duration: "03:13",
    embedUrl: "https://www.instagram.com/p/CNaUL6wJ1ib/embed",
    ratio: "4/5",
  },
  {
    name: "Beate",
    title: "Successful Business Strategist, Author, Speaker. Sold Her First Multi-Million Dollar Business To Bill Gates",
    result: "From 2K To 50K On IG In 45 Days",
    duration: "01:05",
    embedUrl: "https://drive.google.com/file/d/1YnjYzZdqp8DIKjl0q4bYtoygPVtKxyDx/preview",
    ratio: "9/16",
  },
  {
    name: "Leo",
    title: "Scales E-com Brands & Now Launching New Ventures. Taking It To 7 Figures In The First Year",
    result: "From $6K/Month to $42K/Month In Less Than 55 Days",
    duration: "02:06",
    embedUrl: "https://drive.google.com/file/d/1DahuSg-bnHNvHStnjIX1gjs8u5NTnOWT/preview",
    ratio: "9/16",
  },
  {
    name: "Dr. James Neilson",
    title: "Multi 7 Figures CEO, Speaker, Author, Investor, Influencer",
    result: "16X His Audience in 3 Months",
    duration: "02:06",
    embedUrl: "https://drive.google.com/file/d/1vX89C21d2TY7Szbm3Gswnud6_az-GB5u/preview",
    ratio: "9/16",
  },
  {
    name: "Trent",
    title: "Founder Flowster.app #254 on Inc 5000, Helped 27,000 founders, Investor, Influencer",
    result: "1950% Social Media Growth in 90 Days",
    duration: "01:30",
    embedUrl: "https://drive.google.com/file/d/1HkpHhrDTPVXF77VYS_fuypd9PoonvFfI/preview",
    ratio: "9/16",
  },
  {
    name: "Rudy",
    title: "CEO of 5 Companies, Author, Top Trainer In The Automotive Industry, Speaker, Investor",
    result: "7X His Income in 14 Months",
    duration: "00:31",
    embedUrl: "https://drive.google.com/file/d/1qD-V_lT77rPvTIpDuxDkIfEXPj1znpqq/preview",
    ratio: "9/16",
  },
  {
    name: "Testimonial",
    title: "Real results from the Personal Brand Secrets system",
    result: "Amazing Transformation",
    duration: "01:00",
    embedUrl: "https://drive.google.com/file/d/1upPw01gzthKl8HmxYRJXbUGKAaN12Af-/preview",
    ratio: "9/16",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
