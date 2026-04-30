import { ArrowRight, Clock, MessageSquarePlus, X } from "lucide-react";
import type { ChatView } from "./ChatWindow";

interface Props {
  onClose: () => void;
  onNavigate: (next: ChatView, thread?: string) => void;
}

export default function ChatHome({ onClose, onNavigate }: Props) {
  return (
    <>
      <div className="relative flex items-start justify-between px-5 sm:px-6 pt-[max(env(safe-area-inset-top),1.25rem)] sm:pt-7 pb-2">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/60 font-medium">
              We're online
            </span>
          </div>
          <h2 className="text-2xl sm:text-[26px] font-semibold leading-tight text-white">
            How can we help?
          </h2>
          <p className="text-sm text-white/55 mt-2 max-w-[280px] leading-relaxed">
            Ask about projects, pricing, or production timelines. Our team replies in minutes.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="shrink-0 -mr-2 -mt-1 h-9 w-9 grid place-items-center rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 overflow-y-auto px-5 sm:px-6 pb-5 sm:pb-6 mt-4">
        <button
          type="button"
          onClick={() => onNavigate("conversation", "New conversation")}
          className="group w-full flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-primary/40 transition-all text-left min-h-[64px]"
        >
          <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
            <MessageSquarePlus className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-medium text-white">Start a conversation</div>
            <div className="text-xs text-white/50 mt-0.5">Typically replies within a few minutes</div>
          </div>
          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
        </button>

        <button
          type="button"
          onClick={() => onNavigate("history")}
          className="group mt-3 w-full flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/25 transition-all text-left min-h-[64px]"
        >
          <div className="h-10 w-10 grid place-items-center rounded-lg bg-white/[0.06] text-white/80 group-hover:bg-white/[0.1] transition-colors">
            <Clock className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-medium text-white">View previous chats</div>
            <div className="text-xs text-white/50 mt-0.5">Pick up where you left off</div>
          </div>
          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
        </button>

        <div className="mt-6 p-4 rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.02] to-transparent">
          <div className="text-[11px] uppercase tracking-[0.16em] text-white/40 font-medium mb-2">
            Studio hours
          </div>
          <div className="text-sm text-white/75">Mon – Fri · 9:00 – 19:00 EST</div>
          <div className="text-xs text-white/45 mt-1">Average reply time: under 5 minutes</div>
        </div>
      </div>

      <div className="relative px-5 sm:px-6 py-3 border-t border-white/[0.06] bg-black/40 backdrop-blur-sm">
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/35 text-center">
          Powered by <span className="text-primary/80">Pulse &amp; Frame</span>
        </div>
      </div>
    </>
  );
}
