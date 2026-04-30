import { motion } from "framer-motion";
import { easeExpo } from "@/lib/motion";

export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative h-px w-full overflow-hidden bg-white/5"
    >
      <motion.span
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2.4, ease: easeExpo }}
        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
    </div>
  );
}
