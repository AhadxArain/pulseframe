import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easeExpo, inViewOnce } from "@/lib/motion";

const STARS = Array.from({ length: 5 });

export default function FeaturedTestimonial() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, inViewOnce);

  return (
    <section ref={ref} className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.9, ease: easeExpo }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-1.5 mb-8">
            {STARS.map((_, i) => (
              <svg key={i} viewBox="0 0 16 16" className="h-5 w-5 text-primary fill-current" aria-hidden>
                <path d="M8 1l1.796 3.638 4.019.584-2.907 2.832.686 3.998L8 10.117l-3.594 1.935.686-3.998L2.185 5.222l4.019-.584z" />
              </svg>
            ))}
          </div>

          <div aria-hidden className="font-display text-[9rem] sm:text-[11rem] font-bold text-primary/15 leading-none select-none mb-[-2rem] sm:mb-[-3rem]">
            &ldquo;
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, ease: easeExpo, delay: 0.2 }}
          >
            <blockquote className="relative text-xl sm:text-2xl md:text-[1.65rem] font-medium text-white/90 leading-[1.65] italic mb-10">
              Pulse &amp; Frame completely transformed how our brand sounds. The jingle they created
              for our campaign was immediately recognizable. We saw a 40% increase in brand recall
              within the first month.
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease: easeExpo, delay: 0.4 }}
          >
            <div className="text-[15px] font-semibold text-white mb-1">Marcus J.</div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-primary/80 font-medium">
              CEO, Vertx Agency
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
