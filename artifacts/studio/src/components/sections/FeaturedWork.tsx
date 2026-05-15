import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";
import { fadeInUp, inViewOnce, staggerContainer } from "@/lib/motion";

const WORKS = [
  { id: "uw4OjKOMp-k", title: "Blackout Anthem", category: "Audio Branding", label: "01" },
  { id: "nMpmMhUcsuY", title: "Vertx Visuals", category: "Video & 3D", label: "02" },
  { id: "Z989xTasigg", title: "Pulse Campaign", category: "Billboard & Campaign", label: "03" },
];

function FeaturedWorkCard({ work, index }: { work: typeof WORKS[0]; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative aspect-[4/3] bg-[#111] overflow-hidden cursor-pointer h-full border border-white/5 hover:border-primary/30 transition-all duration-500"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <img
            src={`https://i.ytimg.com/vi/${work.id}/hqdefault.jpg`}
            alt={work.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.08] transition-transform duration-[1400ms] ease-out opacity-60"
          />
          
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-primary/[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
            <span className="font-display font-bold text-[3.5rem] sm:text-[4rem] tracking-[0.25em] text-white/[0.04] uppercase">
              P&amp;F
            </span>
          </div>

          {/* Corner index */}
          <div className="absolute top-4 left-4 text-[11px] font-bold text-white/30 font-display tracking-widest">
            {work.label}
          </div>

          {/* Play icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-14 w-14 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
              <Play className="h-5 w-5 text-white fill-white ml-0.5" />
            </div>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 inset-x-0 p-5 group-hover:translate-y-0 transition-transform duration-300">
            <div className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold mb-1.5">
              {work.category}
            </div>
            <div className="text-[16px] font-bold text-white font-display tracking-wide">
              {work.title}
            </div>
          </div>

          {/* Hover red wash */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${work.id}?autoplay=1&rel=0&modestbranding=1`}
          title={work.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </motion.div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <div className="w-10 sm:w-12 h-[1px] bg-primary" />
            <span className="font-display tracking-widest text-primary uppercase text-xs sm:text-sm font-semibold">Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Proof of <br />
            <span className="text-muted-foreground">Impact.</span>
          </h2>
        </motion.div>

        {/* Work Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {WORKS.map((work, i) => (
            <FeaturedWorkCard key={work.id} work={work} index={i} />
          ))}
        </motion.div>

        {/* Footer link */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-8 flex justify-center sm:justify-end"
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
