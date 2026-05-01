import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";
import { easeExpo, inViewOnce } from "@/lib/motion";

const WORKS = [
  { title: "Blackout Anthem", category: "Audio Branding", label: "01" },
  { title: "Vertx Visuals", category: "Video & 3D", label: "02" },
  { title: "Pulse Campaign", category: "Billboard & Campaign", label: "03" },
];

export default function FeaturedWork() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, inViewOnce);

  return (
    <section ref={ref} className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: easeExpo }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[10px] tracking-[0.22em] uppercase text-primary font-semibold mb-4">
            Selected Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight">
            <span className="text-white">Proof of</span>
            <br />
            <span className="text-white/40">Impact.</span>
          </h2>
        </motion.div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {WORKS.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.8, ease: easeExpo, delay: 0.1 + i * 0.1 }}
              className="group relative aspect-[4/3] bg-[#111] overflow-hidden cursor-pointer"
            >
              {/* Cinematic dark placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-primary/[0.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Watermark text */}
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <span className="font-display font-bold text-[3.5rem] sm:text-[4rem] tracking-[0.25em] text-white/[0.04] uppercase">
                  P&amp;F
                </span>
              </div>

              {/* Corner index */}
              <div className="absolute top-4 left-4 text-[11px] font-bold text-white/30 font-display tracking-widest">
                {work.label}
              </div>

              {/* Play icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-14 w-14 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                  <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 inset-x-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold mb-1.5">
                  {work.category}
                </div>
                <div className="text-[16px] font-bold text-white font-display tracking-wide">
                  {work.title}
                </div>
              </div>

              {/* Hover red wash */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: easeExpo, delay: 0.5 }}
          className="mt-8 flex justify-end"
        >
          <Link href="/work">
            <span className="group inline-flex items-center gap-2 text-[13px] font-semibold text-primary tracking-wider uppercase cursor-pointer hover:gap-3 transition-all duration-300">
              View All Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
