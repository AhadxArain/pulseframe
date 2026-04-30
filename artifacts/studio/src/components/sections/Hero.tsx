import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-background/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-5 sm:px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="inline-flex items-center gap-3 px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,42,42,0.8)]" />
          <span className="text-[10px] sm:text-xs font-display tracking-widest text-primary uppercase">Accepting New Projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.05] md:leading-none tracking-tight mb-5 sm:mb-6 max-w-5xl"
        >
          Sound That Sells. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 relative">
            Visuals That Stick.
            <div className="absolute -inset-x-8 -inset-y-4 bg-primary/20 blur-3xl -z-10 rounded-[100%] opacity-50" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 sm:mb-12 font-light leading-relaxed"
        >
          We are an artist-driven creative studio blending high-end commercial production with raw, unforgettable aesthetic power. Your brand deserves more than noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          <Button
            onClick={() => scrollTo("#portfolio")}
            size="lg"
            className="w-full sm:w-auto font-display font-medium uppercase tracking-wider text-sm rounded-none bg-primary text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,42,42,0.6)] transition-all duration-500 px-8 sm:px-10 py-6 sm:py-7 min-h-[52px]"
          >
            View Work
          </Button>
          <Button
            onClick={() => scrollTo("#contact")}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto font-display font-medium uppercase tracking-wider text-sm rounded-none border-white/20 text-white hover:bg-white/10 hover:text-primary hover:border-primary/50 transition-all duration-500 px-8 sm:px-10 py-6 sm:py-7 min-h-[52px]"
          >
            Get a Quote
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
