import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const portfolioItems = [
  {
    id: "dQw4w9WgXcQ",
    title: "Aurora — National TV Spot",
    category: "Commercial Production",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "ScMzIvxBSi4",
    title: "Halcyon — Brand Anthem",
    category: "Audio Branding",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
  },
  {
    id: "9bZkp7q19f0",
    title: "Velocity — Product Launch",
    category: "Video & 3D Content",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
  },
  {
    id: "6stlCkUDG_s",
    title: "Neon Echoes — Experiential",
    category: "Custom Projects",
    thumbnail: "https://img.youtube.com/vi/6stlCkUDG_s/maxresdefault.jpg",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Midnight Drive — Automotive",
    category: "Soundtrack",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Prism — Fashion Campaign",
    category: "Commercial Production",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
  },
];

function PortfolioItem({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-video w-full overflow-hidden bg-card/20 cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying ? (
        <>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
            <div className="flex justify-end">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <Play className="w-4 h-4 text-white ml-1" />
              </div>
            </div>
            <div>
              <p className="text-primary font-display text-xs tracking-widest uppercase mb-2">
                {item.category}
              </p>
              <h3 className="text-white font-display text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          </div>
          <img
            src={item.thumbnail}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1`}
          title={item.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-display tracking-widest text-primary uppercase text-sm font-semibold">Selected Works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Proof of <br />
            <span className="text-muted-foreground">Impact.</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
