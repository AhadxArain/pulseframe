import { Instagram, Youtube, Video, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display font-bold text-2xl tracking-wider uppercase mb-2">
              <span className="text-white">Pulse</span>
              <span className="text-primary mx-1">&</span>
              <span className="text-white">Frame</span>
            </div>
            <p className="text-muted-foreground text-sm font-light">Sound That Sells. Visuals That Stick.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Video className="w-5 h-5" />
              <span className="sr-only">Vimeo</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Pulse & Frame Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
