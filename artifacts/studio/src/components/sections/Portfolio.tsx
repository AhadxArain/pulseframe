import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { easeExpo, fadeInUp, inViewOnce } from "@/lib/motion";

type Video = {
  id: string;
  title: string;
};

const videos: Video[] = [
  { id: "uw4OjKOMp-k", title: "Project 1" },
  { id: "nMpmMhUcsuY", title: "Project 2" },
  { id: "Z989xTasigg", title: "Project 3" },
  { id: "cR6Y5uNzcA8", title: "Project 4" },
  { id: "v4RNEQ2uZ8I", title: "Project 5" },
  { id: "6dqgzx-Bgso", title: "Project 6" },
];

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease: easeExpo }}
      className="group relative aspect-video w-full overflow-hidden rounded-xl bg-card/20 cursor-pointer ring-1 ring-white/5 transition-all duration-700 hover:ring-primary/50 hover:shadow-[0_24px_60px_-20px_hsl(var(--primary)/0.55)]"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail with subtle zoom */}
          <img
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.08] transition-transform duration-[1400ms] ease-out will-change-transform"
          />

          {/* Base contrast gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 transition-opacity duration-700 z-10" />

          {/* Hover crimson wash */}
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_60%,hsl(var(--primary)/0.22),transparent_70%)] mix-blend-screen pointer-events-none" />

          {/* Corner accent */}
          <div aria-hidden className="absolute top-3 left-3 z-20 flex items-center gap-1.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            <span className="text-[10px] font-display tracking-[0.2em] text-primary uppercase">{String(index + 1).padStart(2, "0")}</span>
          </div>

          {/* Play button — center, with pulse rings */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="relative pulse-ring">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_44px_hsl(var(--primary)/0.7)] transition-all duration-500">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Title block — slides up subtly on hover */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 md:p-8 flex items-end justify-between gap-4">
            <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-1">
              <h3 className="text-white font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                {video.title}
              </h3>
              <div className="overflow-hidden mt-1 h-[14px]">
                <span className="block text-[10px] font-display tracking-[0.25em] uppercase text-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  Watch Reel
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
          title={video.title}
          loading="lazy"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, inViewOnce);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 sm:py-24 md:py-28 lg:py-32 relative bg-background">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10 mb-12 sm:mb-16 lg:mb-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-2xl"
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
      </div>

      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
