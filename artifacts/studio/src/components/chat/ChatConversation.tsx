import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, Send, X } from "lucide-react";
import type { ChatView } from "./ChatWindow";

interface Props {
  onClose: () => void;
  onNavigate: (next: ChatView, thread?: string) => void;
  threadTitle?: string;
}

interface Msg {
  id: number;
  from: "bot" | "user";
  text: string;
  time: string;
}

const SEED: Msg[] = [
  {
    id: 1,
    from: "bot",
    text: "Hey there — welcome to Pulse & Frame. I'm EchoFrame, the studio assistant.",
    time: "Now",
  },
  {
    id: 2,
    from: "bot",
    text: "Tell me a little about your project — what are you trying to make people feel?",
    time: "Now",
  },
];

export default function ChatConversation({ onClose, onNavigate, threadTitle }: Props) {
  const [messages, setMessages] = useState<Msg[]>(SEED);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  const send = (e: FormEvent) => {
    e.preventDefault();
    const value = draft.trim();
    if (!value) return;
    setMessages((m) => [
      ...m,
      { id: Date.now(), from: "user", text: value, time: "Now" },
    ]);
    setDraft("");
  };

  return (
    <>
      <div className="relative flex items-center gap-3 px-3 sm:px-3 pt-[max(env(safe-area-inset-top),0.75rem)] sm:pt-3 pb-3 border-b border-white/[0.06]">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          aria-label="Back"
          className="h-9 w-9 grid place-items-center rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="relative h-9 w-9 grid place-items-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-white text-xs font-semibold ring-1 ring-primary/30">
          EF
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0a]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-semibold text-white truncate leading-none">
            {threadTitle ?? "EchoFrame Assistant"}
          </div>
          <div className="text-[11px] text-emerald-400/80 mt-1 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Online · typically replies in minutes
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="h-9 w-9 grid place-items-center rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="relative flex-1 min-h-0 overflow-y-auto px-4 sm:px-5 py-5 space-y-3"
      >
        {messages.map((m) => (
          <MessageBubble key={m.id} msg={m} />
        ))}
      </div>

      <form
        onSubmit={send}
        className="relative px-3 sm:px-3 pt-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] sm:pb-3 border-t border-white/[0.06] bg-black/40 backdrop-blur-sm"
      >
        <div className="flex items-end gap-2">
          <div className="flex-1 flex items-center rounded-full bg-white/[0.05] border border-white/10 focus-within:border-primary/50 focus-within:bg-white/[0.07] transition-colors">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none"
              aria-label="Message"
            />
          </div>
          <button
            type="submit"
            disabled={!draft.trim()}
            aria-label="Send message"
            className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-primary text-white shadow-[0_4px_20px_-4px_rgba(255,42,42,0.6)] disabled:opacity-40 disabled:shadow-none enabled:hover:scale-105 active:scale-95 transition-transform"
          >
            <Send className="h-4 w-4" strokeWidth={2.25} />
          </button>
        </div>
        <div className="text-[10px] text-white/30 text-center mt-2">
          Conversations are reviewed by our team
        </div>
      </form>
    </>
  );
}

function MessageBubble({ msg }: { msg: Msg }) {
  const isBot = msg.from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div className={`flex flex-col ${isBot ? "items-start" : "items-end"} max-w-[85%]`}>
        <div
          className={
            isBot
              ? "px-4 py-2.5 rounded-2xl rounded-bl-md bg-white/[0.06] text-white/90 text-[14px] leading-relaxed border border-white/[0.06]"
              : "px-4 py-2.5 rounded-2xl rounded-br-md bg-primary text-white text-[14px] leading-relaxed shadow-[0_4px_16px_-6px_rgba(255,42,42,0.5)]"
          }
        >
          {msg.text}
        </div>
        <div className="text-[10px] text-white/30 mt-1 px-1">
          {isBot ? "EchoFrame · " : "You · "}
          {msg.time}
        </div>
      </div>
    </div>
  );
}
