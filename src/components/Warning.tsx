import { motion } from "framer-motion";
import { X } from "lucide-react";
import CTAButton from "./CTAButton";

const notList = [
  "Spending A Single Cent On Ads",
  "Email Sequences",
  "Writing An E-Book",
  "Using Bots",
  "Time Consuming Content Marketing",
  "Complicated Funnels",
  "Weird, Shady Strategies",
  "AI",
  "Recording A Webinar",
  "Email Marketing",
  "Posting 100 Times On Social Media",
  "Technical Skill Required",
  "Fluff",
  "B.S.",
];

const Warning = () => {
  return (
    <section className="px-4 py-20 max-w-4xl mx-auto space-y-16">
      {/* Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-destructive/10 border border-destructive/30 rounded-xl p-8 text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-destructive">⚠️ WARNING:</h2>
        <p className="text-foreground leading-relaxed">
          Implementing This System Into Your Business Will Drastically Increase Your Tax Expense. It Will Require At Least 1 Hour Per Week During 8 Weeks. It Doesn't Work For People That Don't Have Anything To Sell Or Scammers. If You're Using These Powers For Evil, We Will Automatically Kick You Out Of The Program And Report You...
        </p>
        <p className="text-primary font-bold text-lg font-['Oswald'] uppercase">
          But, It Will Be The Time That You Make The Most Money In Your Life
        </p>
      </motion.div>

      <CTAButton text="CLICK HERE TO GET DIGITALLY CLONED" />

      {/* This Is Not */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase">This Is <span className="text-destructive">Not:</span></h2>
        <p className="text-muted-foreground">We Know You're Busy Running A Business, So We're Not Going To Waste Your Time!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
          {notList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50"
            >
              <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <span className="text-foreground font-medium text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <CTAButton text="YES! I WANT TO LEARN HOW" />
    </section>
  );
};

export default Warning;
