import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Concept & Strategy",
    description: "We don't start with recording; we start with understanding. We define the emotional core of your project, align it with your brand goals, and develop a concrete creative treatment.",
  },
  {
    number: "02",
    title: "Production & Creation",
    description: "Our artists get to work. Whether it's composing an original score, directing a shoot, or building 3D assets, this is where raw ideas become high-fidelity reality in our studio.",
  },
  {
    number: "03",
    title: "Post & Delivery",
    description: "The polish. Color grading, sound mixing, mastering, and final exports. We deliver broadcast-ready assets tailored for every platform your campaign demands.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="process" ref={sectionRef} className="py-32 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-display tracking-widest text-primary uppercase text-sm font-semibold">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              A refined approach <br />
              <span className="text-muted-foreground">to complex creative.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm font-light">
            We've engineered our process to remove friction, keeping the focus entirely on crafting exceptional work.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[4rem] right-[4rem] h-[1px] bg-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Number Circle */}
                <div className="w-24 h-24 rounded-full bg-background border border-primary/30 flex items-center justify-center mb-8 relative group">
                  <div className="absolute inset-0 bg-primary/5 rounded-full transition-colors duration-300 group-hover:bg-primary/20" />
                  <span className="text-2xl font-display font-bold text-primary">{step.number}</span>
                  {/* Glowing dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(255,42,42,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
