import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-video w-full overflow-hidden rounded-xl bg-card/20 cursor-pointer ring-1 ring-white/5 transition-all duration-500 hover:ring-primary/40 hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)]"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying ? (
        <>
          <img
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 group-hover:from-black/70 group-hover:via-black/10 group-hover:to-black/0 transition-colors duration-500 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8">
            <div className="flex justify-end">
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_28px_hsl(var(--primary)/0.7)] transition-all duration-500">
                <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-display text-xl md:text-2xl font-bold tracking-tight">
                {video.title}
              </h3>
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
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 sm:py-24 md:py-28 lg:py-32 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10 mb-12 sm:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
