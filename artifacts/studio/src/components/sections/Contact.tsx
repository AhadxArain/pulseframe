import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Transmission received.",
        description: "We'll be in touch shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 sm:py-24 md:py-28 lg:py-32 relative bg-background overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-5 sm:mb-6">
              <div className="w-10 sm:w-12 h-[1px] bg-primary" />
              <span className="font-display tracking-widest text-primary uppercase text-xs sm:text-sm font-semibold">Initiate</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] md:leading-tight mb-6 sm:mb-8">
              Let's make <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">some noise.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light mb-10 sm:mb-12 max-w-md">
              Ready to elevate your brand's audio-visual presence? Tell us about your project.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-2">Direct Line</p>
                <a href="mailto:hello@pulseandframe.com" className="text-lg sm:text-xl md:text-2xl font-display text-white hover:text-primary transition-colors duration-300 flex items-center gap-2 group break-all sm:break-normal">
                  hello@pulseandframe.com
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                </a>
              </div>

              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-2">Studio</p>
                <p className="text-base sm:text-lg text-white font-light">
                  Los Angeles, CA<br />
                  <span className="text-muted-foreground">Available Worldwide</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card/30 backdrop-blur-sm border border-white/5 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-display">Name / Company</label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 sm:py-4 text-white focus-visible:ring-0 focus-visible:border-primary text-base sm:text-lg h-auto min-h-[48px]"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-display">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 sm:py-4 text-white focus-visible:ring-0 focus-visible:border-primary text-base sm:text-lg h-auto min-h-[48px]"
                    placeholder="hello@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-display">Project Details</label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 sm:py-4 text-white focus-visible:ring-0 focus-visible:border-primary text-base sm:text-lg min-h-[130px] sm:min-h-[150px] resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-magnetic w-full font-display font-medium uppercase tracking-wider text-sm rounded-none bg-primary text-white hover:bg-white hover:text-black transition-all duration-500 py-6 sm:py-8 mt-4 min-h-[56px] relative overflow-hidden"
                >
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Submit Request"}</span>
                  <span aria-hidden className="btn-shimmer" />
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
