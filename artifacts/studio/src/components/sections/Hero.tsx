import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Waveform from "@/components/effects/Waveform";
import { easeExpo, staggerParentSlow, wordRise } from "@/lib/motion";

const headlineLine1 = ["Sound", "That", "Sells."];
const headlineLine2 = ["Visuals", "That", "Stick."];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "-12%"]);

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
      {/* Parallax Background Image */}
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

      {/* Animated Aurora Layers */}
      <div aria-hidden="true" className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <div
          className="absolute -top-1/3 -left-1/4 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full blur-[120px] bg-primary/20 will-change-transform"
          style={{ animation: "aurora-drift 18s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[140px] bg-primary/10 will-change-transform"
          style={{ animation: "aurora-drift-slow 26s ease-in-out infinite" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="container relative z-20 mx-auto px-5 sm:px-6 md:px-12 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeExpo, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <Waveform bars={4} className="h-3" />
          <span className="text-[10px] sm:text-xs font-display tracking-widest text-primary uppercase">Accepting New Projects</span>
        </motion.div>

        <motion.h1
          variants={staggerParentSlow}
          initial="hidden"
          animate="show"
          className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.05] md:leading-none tracking-tight mb-5 sm:mb-6 max-w-5xl"
        >
          <span className="block overflow-hidden">
            <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
              {headlineLine1.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.05em]">
                  <motion.span variants={wordRise} className="inline-block will-change-transform">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </span>
          <span className="block overflow-hidden mt-1 sm:mt-2">
            <span className="relative inline-flex flex-wrap justify-center gap-x-[0.25em]">
              {headlineLine2.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.05em]">
                  <motion.span
                    variants={wordRise}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 will-change-transform"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <div className="absolute -inset-x-8 -inset-y-4 bg-primary/20 blur-3xl -z-10 rounded-[100%] opacity-50" />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeExpo, delay: 1.1 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 sm:mb-12 font-light leading-relaxed"
        >
          We are an artist-driven creative studio blending high-end commercial production with raw, unforgettable aesthetic power. Your brand deserves more than noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeExpo, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          <Button
            onClick={() => scrollTo("#portfolio")}
            size="lg"
            className="btn-magnetic w-full sm:w-auto font-display font-medium uppercase tracking-wider text-sm rounded-none bg-primary text-white hover:bg-white hover:text-black transition-all duration-500 px-8 sm:px-10 py-6 sm:py-7 min-h-[52px] relative overflow-hidden"
          >
            <span className="relative z-10">View Work</span>
            <span aria-hidden className="btn-shimmer" />
          </Button>
          <Button
            onClick={() => scrollTo("#contact")}
            variant="outline"
            size="lg"
            className="btn-magnetic w-full sm:w-auto font-display font-medium uppercase tracking-wider text-sm rounded-none border-white/20 text-white hover:bg-white/10 hover:text-primary hover:border-primary/50 transition-all duration-500 px-8 sm:px-10 py-6 sm:py-7 min-h-[52px]"
          >
            Get a Quote
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary" style={{ animation: "scroll 2s ease-in-out infinite" }} />
        </div>
      </motion.div>
    </section>
  );
}
