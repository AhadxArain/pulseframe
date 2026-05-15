import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, inViewOnce } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
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
    <section id="contact" className="py-20 sm:py-24 md:py-28 lg:py-32 relative bg-background overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
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
                <a href="mailto:hello@pulseandframe.com" className="text-lg sm:text-xl md:text-2xl font-display text-white flex items-center gap-2 group break-all sm:break-normal">
                  hello@pulseandframe.com
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
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
            transition={{ delay: 0.2 }}
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
                  className="btn-premium w-full py-8 mt-4 min-h-[60px] shadow-2xl"
                >
                  <span className="relative z-10 tracking-[0.2em]">{isSubmitting ? "Sending..." : "Submit Request"}</span>
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
