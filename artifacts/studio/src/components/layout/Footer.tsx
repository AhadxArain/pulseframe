import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";

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
              <span className="text-white/40 ml-2">Studio</span>
            </div>
            <p className="text-muted-foreground text-sm font-light">Sound That Sells. Visuals That Stick.</p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="https://www.youtube.com/@OZZYRA" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube" 
              className="text-muted-foreground hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://soundcloud.com/ozzyra" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="SoundCloud" 
              className="text-muted-foreground hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <svg 
                role="img" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current" 
                aria-hidden="true"
              >
                <path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Instagram className="w-5 h-5" />
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
