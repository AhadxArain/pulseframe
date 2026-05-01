import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easeExpo } from "@/lib/motion";

const features = [
  {
    title: "100% Custom-Made",
    sub: "Every deliverable is built from scratch — no templates, no stock.",
  },
  {
    title: "No Middlemen",
    sub: "You work directly with our artists and directors, start to finish.",
  },
  {
    title: "Fast Turnaround",
    sub: "Streamlined production workflow without sacrificing quality.",
  },
  {
    title: "US-Based, Global Reach",
    sub: "Headquartered in LA, available for projects worldwide.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="py-20 sm:py-24 md:py-28 lg:py-32 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easeExpo }}
          className="mb-12 sm:mb-16 lg:mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <div className="w-10 sm:w-12 h-[1px] bg-primary" />
            <span className="font-display tracking-widest text-primary uppercase text-xs sm:text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            <span className="text-white">Not a Template.</span>
            <br />
            <span className="text-muted-foreground">Never a Compromise.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easeExpo, delay: 0.1 + i * 0.1 }}
              className="relative bg-card/40 border border-white/5 border-l-2 border-l-primary pl-5 pr-5 sm:pr-6 py-5 sm:py-6 flex flex-col gap-2"
            >
              <h4 className="text-sm sm:text-base font-display font-bold text-white tracking-wide">
                {feat.title}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                {feat.sub}
              </p>
              <div aria-hidden className="absolute top-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-transparent transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
