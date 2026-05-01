import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, inViewOnce, staggerParent } from "@/lib/motion";

const STARS = Array.from({ length: 5 });

const REVIEWS = [
  {
    quote:
      "We commissioned a 30-second jingle for our regional TV spots and the results blew us away. Brand recall jumped 40% in post-campaign surveys. The team understood our voice from day one — no revisions needed.",
    name: "Marcus T.",
    role: "VP Marketing",
    company: "NEXUS MEDIA",
  },
  {
    quote:
      "Our documentary trailer scored over 2 million views in the first week. Half the comments were about the music. Pulse & Frame delivered something cinematic and completely on-brand. I've already referred three peers.",
    name: "Dana Reyes",
    role: "Executive Producer",
    company: "BLACKOUT FILMS",
  },
  {
    quote:
      "We needed a full sonic identity — logo sting, hold music, presentation bumpers — for a Fortune 500 pitch. Pulse & Frame turned it around in 72 hours and we won the account. That ROI speaks for itself.",
    name: "James K.",
    role: "Creative Director",
    company: "VERTX AGENCY",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1 mb-5">
      {STARS.map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="h-4 w-4 text-primary fill-current" aria-hidden>
          <path d="M8 1l1.796 3.638 4.019.584-2.907 2.832.686 3.998L8 10.117l-3.594 1.935.686-3.998L2.185 5.222l4.019-.584z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, inViewOnce);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-[10px] tracking-[0.22em] uppercase text-primary font-semibold mb-4">
            What Clients Say
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight">
            <span className="text-white">Results That Speak.</span>
            <br />
            <span className="text-white/45">For themselves.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {REVIEWS.map((r) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              className="group relative flex flex-col p-6 sm:p-7 bg-[#1a1a1a] border border-white/[0.07] border-l-[2px] border-l-primary hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(255,42,42,0.25)] transition-all duration-500"
            >
              <StarRow />
              <blockquote className="flex-1 text-[14.5px] leading-[1.8] text-white/75 mb-6">
                "{r.quote}"
              </blockquote>
              <div>
                <div className="text-[14px] font-semibold text-white">{r.name}</div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-primary/80 mt-0.5">
                  {r.role} · {r.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
