import { ArrowLeft, MessageCircle, X } from "lucide-react";
import type { ChatView } from "./ChatWindow";

interface Props {
  onClose: () => void;
  onNavigate: (next: ChatView, thread?: string) => void;
}

const THREADS = [
  {
    id: "1",
    title: "Brand jingle for spring campaign",
    preview: "Thanks — let's lock the tempo at 112 bpm and revisit on Friday.",
    when: "2 hours ago",
    unread: true,
  },
  {
    id: "2",
    title: "Reel scoring estimate",
    preview: "Sounds great. We'll send the deck and a draft moodboard.",
    when: "Yesterday",
    unread: false,
  },
  {
    id: "3",
    title: "3D product visualization",
    preview: "Got it — render queue is open Monday morning.",
    when: "3 days ago",
    unread: false,
  },
  {
    id: "4",
    title: "Podcast intro & sting pack",
    preview: "Files delivered. Let us know how the mix sits in your DAW.",
    when: "Last week",
    unread: false,
  },
];

export default function ChatHistory({ onClose, onNavigate }: Props) {
  return (
    <>
      <div className="relative flex items-center gap-2 px-3 sm:px-3 pt-[max(env(safe-area-inset-top),0.75rem)] sm:pt-3 pb-3 border-b border-white/[0.06]">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          aria-label="Back"
          className="h-9 w-9 grid place-items-center rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1">
          <div className="text-[15px] font-semibold text-white leading-none">Conversations</div>
          <div className="text-[11px] text-white/45 mt-1">{THREADS.length} previous chats</div>
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

      <div className="relative flex-1 min-h-0 overflow-y-auto">
        <ul className="divide-y divide-white/[0.05]">
          {THREADS.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => onNavigate("conversation", t.title)}
                className="group w-full flex items-start gap-3 px-4 sm:px-5 py-4 text-left hover:bg-white/[0.03] transition-colors min-h-[64px]"
              >
                <div className="relative h-9 w-9 mt-0.5 grid place-items-center rounded-full bg-white/[0.06] text-white/70 group-hover:bg-primary/15 group-hover:text-primary transition-colors shrink-0">
                  <MessageCircle className="h-4 w-4" />
                  {t.unread && (
                    <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-[#0a0a0a]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="text-[14px] font-medium text-white truncate">{t.title}</div>
                    <div className="text-[11px] text-white/40 shrink-0">{t.when}</div>
                  </div>
                  <div className="text-[12.5px] text-white/55 line-clamp-2 mt-0.5 leading-relaxed">
                    {t.preview}
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
