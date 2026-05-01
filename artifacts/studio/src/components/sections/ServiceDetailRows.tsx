import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AudioWaveform, Film, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { easeExpo } from "@/lib/motion";

const rows = [
  {
    id: "audio",
    heading: "Your Brand Has a Sound.",
    body: "Jingles, sonic logos, and personalized soundtracks crafted for commercials, social media, and in-store experiences.",
    Icon: AudioWaveform,
    flip: false,
  },
  {
    id: "video",
    heading: "Visuals That Command Attention.",
    body: "4K cinematic shoots with actors, advanced 3D motion graphics, and high-end color grading for impactful visuals.",
    Icon: Film,
    flip: true,
  },
  {
    id: "campaign",
    heading: "From Audio to Billboard.",
    body: "End-to-end campaign production including radio ads, digital marketing content, and large-scale billboard advertising.",
    Icon: Megaphone,
    flip: false,
  },
];

function DetailRow({
  row,
  index,
}: {
  row: (typeof rows)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { heading, body, Icon, flip } = row;

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: flip ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: easeExpo, delay: 0.1 }}
      className="flex flex-col justify-center py-10 sm:py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-12 lg:px-16"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-display font-bold text-white leading-tight mb-4 sm:mb-5">
        {heading}
      </h3>
      <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-md mb-6 sm:mb-8">
        {body}
      </p>
      <Link href="/contact">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all duration-300 cursor-pointer group">
          Get a Quote
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </Link>
    </motion.div>
  );

  const visualBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: easeExpo, delay: 0.25 }}
      className="relative flex items-center justify-center bg-[#0a0a0a] min-h-[220px] sm:min-h-[280px] md:min-h-[320px]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center gap-4 p-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-none border border-primary/30 bg-background flex items-center justify-center shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)]">
          <Icon className="w-9 h-9 sm:w-11 sm:h-11 text-primary" />
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="block w-[2px] bg-primary/60 rounded-full"
              style={{
                height: `${14 + (i % 3) * 10}px`,
                animation: `waveform-bar 1.4s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="border-t border-primary/20 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {flip ? (
          <>
            <div className="order-2 md:order-1 border-b md:border-b-0 md:border-r border-white/5">
              {visualBlock}
            </div>
            <div className="order-1 md:order-2">{textBlock}</div>
          </>
        ) : (
          <>
            <div className="md:border-r border-white/5">{textBlock}</div>
            <div className="border-t md:border-t-0 border-white/5">{visualBlock}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ServiceDetailRows() {
  return (
    <div className="w-full">
      {rows.map((row, i) => (
        <DetailRow key={row.id} row={row} index={i} />
      ))}
    </div>
  );
}
