import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [hasPulsed, setHasPulsed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHasPulsed(true), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && <ChatWindow onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className={`fixed z-[60] bottom-5 right-5 sm:bottom-6 sm:right-6 h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full bg-primary text-white place-items-center shadow-[0_8px_30px_-4px_rgba(255,42,42,0.55)] ring-1 ring-white/10 hover:shadow-[0_10px_40px_-4px_rgba(255,42,42,0.75)] transition-shadow ${open ? "hidden sm:grid" : "grid"}`}
      >
        {!hasPulsed && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping [animation-delay:400ms]" />
          </>
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
