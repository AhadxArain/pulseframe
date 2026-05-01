import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-24 md:py-28 lg:py-32 relative bg-background overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-5 sm:mb-6">
              <div className="w-10 sm:w-12 h-[1px] bg-primary" />
              <span className="font-display tracking-widest text-primary uppercase text-xs sm:text-sm font-semibold">The Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6 sm:mb-8">
              Artist driven creative.<br />
              <span className="text-muted-foreground">Commercial execution.</span>
            </h2>

            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Pulse & Frame was born from a simple observation: most commercial audio and video is forgettable. Brands spend millions on campaigns that sound like stock music and look like templates.
              </p>
              <p>
                We operate differently. We are an independent, artist-led studio that brings genuine creative vision to commercial projects. Think of us as a high-end recording studio crossed with a boutique film post-house.
              </p>
              <p>
                From custom cinematic soundtracks to immersive 3D motion design, we handle end-to-end production. No middlemen, no safe choices just uncompromising quality that makes your audience feel something.
              </p>
            </div>

            <div className="mt-10 sm:mt-12 flex items-center gap-6 sm:gap-8 flex-wrap">
              <div>
                <p className="text-3xl sm:text-4xl font-display font-bold text-white mb-1 sm:mb-2">12+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-[1px] h-10 sm:h-12 bg-white/10" />
              <div>
                <p className="text-3xl sm:text-4xl font-display font-bold text-white mb-1 sm:mb-2">200+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] max-h-[70vh] lg:max-h-none relative bg-card/20 rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src="/about-studio.png"
                alt="Pulse and Frame Recording Studio"
                loading="lazy"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />

              {/* Overlaid Badge */}
              <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-20 bg-background/80 backdrop-blur-md border border-white/10 p-4 sm:p-6 max-w-[180px] sm:max-w-[200px]">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse mb-3 sm:mb-4 shadow-[0_0_10px_rgba(255,42,42,0.8)]" />
                <p className="text-xs sm:text-sm font-display text-white uppercase tracking-wider mb-1">State of the Art</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">Analog warmth meets digital precision.</p>
              </div>
            </div>

            {/* Red accent frame */}
            <div className="hidden sm:block absolute -inset-4 border border-primary/20 -z-10 translate-x-6 translate-y-6 lg:translate-x-8 lg:translate-y-8" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
