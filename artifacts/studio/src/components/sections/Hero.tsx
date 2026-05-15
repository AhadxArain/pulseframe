import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Waveform from "@/components/effects/Waveform";
import { fadeInUp, staggerContainer, wordRise } from "@/lib/motion";

const headlineLine1 = ["Sound", "That", "Sells."];
const headlineLine2 = ["Visuals", "That", "Stick."];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      {/* Background Image (Parallax) */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-background/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container relative z-20 mx-auto px-5 sm:px-6 md:px-12 text-center flex flex-col items-center"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-3 px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <Waveform bars={4} className="h-3" />
          <span className="text-[10px] sm:text-xs font-display tracking-widest text-primary uppercase">Accepting New Projects</span>
        </motion.div>

        <motion.h1 
          className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.05] md:leading-none tracking-tight mb-5 sm:mb-6 max-w-5xl"
        >
          <span className="block overflow-hidden">
            <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
              {headlineLine1.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span variants={wordRise} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </span>
          <span className="block mt-1 sm:mt-2 overflow-hidden">
            <span className="relative inline-flex flex-wrap justify-center gap-x-[0.25em]">
              {headlineLine2.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    variants={wordRise}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <div className="absolute -inset-x-8 -inset-y-4 bg-primary/20 blur-2xl sm:blur-3xl -z-10 rounded-[100%] opacity-30" />
            </span>
          </span>
        </motion.h1>

        <motion.p 
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 sm:mb-12 font-light leading-relaxed"
        >
          We are an artist-driven creative studio blending high-end commercial production with raw, unforgettable aesthetic power. Your brand deserves more than noise.
        </motion.p>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          <Button
            onClick={() => scrollTo("#portfolio")}
            size="lg"
            className="btn-premium px-10 py-7 min-h-[56px] rounded-none shadow-xl"
          >
            View Work
          </Button>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full font-display font-bold uppercase tracking-[0.2em] text-[11px] rounded-none border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 px-10 py-7 min-h-[56px]"
            >
              Get a Quote
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator (Static) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
