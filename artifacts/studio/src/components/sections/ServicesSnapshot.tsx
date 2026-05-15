import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { fadeInUp, inViewOnce, staggerContainer } from "@/lib/motion";

const ROWS = [
  {
    num: "01",
    title: "Audio Branding",
    desc: "Jingles, sonic logos, custom soundtracks built for your brand.",
  },
  {
    num: "02",
    title: "Video & 3D Production",
    desc: "Cinematic visuals, 4K actor shoots, motion graphics.",
  },
  {
    num: "03",
    title: "Billboard & Campaign",
    desc: "Full-scale marketing from audio to outdoor advertising.",
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        {/* Header (Static) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mb-12 sm:mb-16"
        >
          <p className="text-[10px] tracking-[0.22em] uppercase text-primary font-semibold mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight">
            <span className="text-white">Every Brand Deserves</span>
            <br />
            <span className="text-white/40">A Signature Sound.</span>
          </h2>
        </motion.div>

        {/* Service Rows (Static) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="border-t border-white/10"
        >
          {ROWS.map((row, i) => (
            <Link key={row.num} href="/services">
              <motion.div
                variants={fadeInUp}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6 sm:py-7 border-b border-white/10 hover:border-primary/30 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[13px] font-bold text-primary font-display tracking-wider shrink-0 w-8">
                  {row.num}
                </span>
                <span className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-white font-display tracking-wide group-hover:text-white transition-colors sm:w-[260px] md:w-[300px] shrink-0">
                  {row.title}
                </span>
                <span className="text-[14px] text-white/55 leading-relaxed flex-1">
                  {row.desc}
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Footer link (Static) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-8 flex justify-center sm:justify-end"
        >
          <Link href="/services">
            <span className="group inline-flex items-center gap-2 text-[13px] font-semibold text-primary tracking-wider uppercase cursor-pointer hover:gap-3 transition-all duration-300">
              View All Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
