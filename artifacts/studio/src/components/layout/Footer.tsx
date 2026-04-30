import { Instagram, Youtube, Video, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-10 sm:mb-12">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display font-bold text-xl sm:text-2xl tracking-wider uppercase mb-2">
              <span className="text-white">Pulse</span>
              <span className="text-primary mx-1">&</span>
              <span className="text-white">Frame</span>
            </div>
            <p className="text-muted-foreground text-sm font-light">Sound That Sells. Visuals That Stick.</p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Vimeo" className="text-muted-foreground hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Video className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 border-t border-white/5 text-xs text-muted-foreground text-center md:text-left">
          <p>&copy; {currentYear} Pulse & Frame Studio. All rights reserved.</p>
          <div className="flex gap-5 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors py-2">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors py-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
