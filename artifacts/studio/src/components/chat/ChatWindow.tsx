import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatHome from "./ChatHome";
import ChatHistory from "./ChatHistory";
import ChatConversation from "./ChatConversation";

export type ChatView = "home" | "history" | "conversation";

interface Props {
  onClose: () => void;
}

export default function ChatWindow({ onClose }: Props) {
  const [view, setView] = useState<ChatView>("home");
  const [activeThread, setActiveThread] = useState<string | null>(null);

  const goTo = (next: ChatView, thread?: string) => {
    if (thread) setActiveThread(thread);
    setView(next);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="fixed z-[59] inset-0 sm:inset-auto sm:bottom-[88px] sm:right-6 sm:w-[380px] sm:h-[560px] sm:max-h-[calc(100vh-120px)] flex flex-col bg-[#0a0a0a] sm:rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden font-sans"
      style={{ originX: 1, originY: 1 }}
      role="dialog"
      aria-label="Chat panel"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent" />
      <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-primary/20 blur-[40px] sm:blur-[80px]" />

      <div className="relative flex-1 flex flex-col min-h-0">
        <AnimatePresence mode="wait">
          {view === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col min-h-0"
            >
              <ChatHome onClose={onClose} onNavigate={goTo} />
            </motion.div>
          )}
          {view === "history" && (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col min-h-0"
            >
              <ChatHistory onClose={onClose} onNavigate={goTo} />
            </motion.div>
          )}
          {view === "conversation" && (
            <motion.div
              key="conversation"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col min-h-0"
            >
              <ChatConversation
                onClose={onClose}
                onNavigate={goTo}
                threadTitle={activeThread ?? undefined}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
