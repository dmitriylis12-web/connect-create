const SiteFooter = () => {
  return (
    <footer className="py-10 px-4 border-t border-border space-y-6 text-center max-w-4xl mx-auto">
      <p className="text-muted-foreground text-xs leading-relaxed">
        "Testimonials shown are real experiences from paying clients. Their results are not typical and your experience will vary based upon your effort, education, business model, and market forces beyond our control. We make no earnings claims or return on investment claims, and you may not make your money back."
      </p>
      <div className="space-y-2">
        <p className="text-foreground font-bold font-['Oswald']">Personal Brand Secrets</p>
        <p className="text-muted-foreground text-sm">400 NW 26th St, Miami, FL 33127</p>
      </div>
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Terms</a>
        <span>•</span>
        <a href="#" className="hover:text-primary transition-colors">Support</a>
        <span>•</span>
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <span>•</span>
        <a href="#" className="hover:text-primary transition-colors">Affiliates</a>
        <span>•</span>
        <a href="#" className="hover:text-primary transition-colors">Careers</a>
      </div>
      <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default SiteFooter;
