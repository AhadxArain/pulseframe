import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AudioWaveform, Film, MonitorPlay, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: AudioWaveform,
    title: "Audio Branding",
    description: "Custom jingles, sonic logos, and signature soundtracks that make your brand instantly recognizable.",
  },
  {
    icon: Film,
    title: "Commercial Production",
    description: "High-end audio and visual post-production for national TV spots, radio, and digital campaigns.",
  },
  {
    icon: MonitorPlay,
    title: "Video & 3D Content",
    description: "Cinematic visuals, dynamic 3D motion graphics, and premium color grading that commands attention.",
  },
  {
    icon: Sparkles,
    title: "Custom Projects",
    description: "Bespoke immersive experiences, experiential installations, and artist-driven creative collaborations.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-200 ease-out will-change-transform h-full"
      >
        <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 p-8 rounded-none overflow-hidden group-hover:border-primary/50 transition-colors duration-500 flex flex-col items-start gap-6">
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" />
          
          <div className="p-4 rounded-none bg-background border border-white/10 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(255,42,42,0.3)] transition-all duration-500 relative z-10">
            <service.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-500" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              {service.description}
            </p>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="services" ref={sectionRef} className="py-32 relative bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 md:mb-32 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-display tracking-widest text-primary uppercase text-sm font-semibold">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Sonic & Visual <br />
            <span className="text-muted-foreground">Excellence.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
