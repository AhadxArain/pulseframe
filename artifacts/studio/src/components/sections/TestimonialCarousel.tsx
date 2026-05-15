import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { easeExpo } from "@/lib/motion";

const TESTIMONIALS = [
  {
    quote: "Working with Pulse & Frame was a game-changer. The soundtrack they produced gave our brand an identity we didn't know we were missing.",
    author: "Sarah T.",
    role: "Head of Marketing",
    company: "LUXE BRANDS CO.",
  },
  {
    quote: "From brief to final delivery in 6 days. The jingle was catchy, on-brand, and our ad performance jumped 55% after launch.",
    author: "Daniel K.",
    role: "Founder",
    company: "NOVA EATS",
  },
  {
    quote: "Their 3D visuals for our product launch were cinematic. Every frame looked like it cost 10x what we paid.",
    author: "Priya M.",
    role: "Creative Director",
    company: "ORION TECH",
  },
  {
    quote: "The team understood our vision instantly. The background score they made turned a simple ad into an emotional story.",
    author: "Carlos V.",
    role: "CEO",
    company: "WAVE MEDIA GROUP",
  },
  {
    quote: "We've worked with 3 audio studios before. Pulse & Frame is in a completely different league. Unmatched quality and professionalism.",
    author: "Aisha R.",
    role: "Brand Manager",
    company: "ZENITH RETAIL",
  },
];

const STARS = Array.from({ length: 5 });

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(slideNext, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section 
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#0a0a0a] relative overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative h-[450px] sm:h-[400px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4"
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1.5 mb-8">
              {STARS.map((_, i) => (
                <svg key={i} viewBox="0 0 16 16" className="h-5 w-5 text-primary fill-current shadow-[0_0_10px_rgba(255,42,42,0.3)]" aria-hidden>
                  <path d="M8 1l1.796 3.638 4.019.584-2.907 2.832.686 3.998L8 10.117l-3.594 1.935.686-3.998L2.185 5.222l4.019-.584z" />
                </svg>
              ))}
            </div>

            {/* Quote Icon */}
            <div aria-hidden className="font-display text-[8rem] sm:text-[10rem] font-bold text-primary/10 leading-none select-none mb-[-2rem] sm:mb-[-3.5rem] mt-[-2rem]">
              &ldquo;
            </div>

            {/* Quote Text */}
            <blockquote className="relative text-xl sm:text-2xl md:text-[1.75rem] font-medium text-white/95 leading-[1.6] italic mb-10 font-serif tracking-tight">
              {TESTIMONIALS[currentIndex].quote}
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <div className="text-[16px] font-bold text-white mb-1.5 tracking-wide">
                {TESTIMONIALS[currentIndex].author}
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-bold">
                <span className="text-white/40 font-normal mr-2">/</span>
                {TESTIMONIALS[currentIndex].role}
                <span className="mx-2 text-white/20">·</span>
                {TESTIMONIALS[currentIndex].company}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={slidePrev}
          className="absolute left-0 sm:left-4 z-20 p-2 text-white/20 hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button
          onClick={slideNext}
          className="absolute right-0 sm:right-4 z-20 p-2 text-white/20 hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          aria-label="Next testimonial"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8 sm:mt-12 relative z-20">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`h-[2px] transition-all duration-500 rounded-full ${
              i === currentIndex ? "w-12 bg-primary" : "w-6 bg-white/10 hover:bg-white/30"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
