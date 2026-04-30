import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Services", href: "#services", id: "services" },
  { name: "Work", href: "#portfolio", id: "portfolio" },
  { name: "Studio", href: "#about", id: "about" },
  { name: "Process", href: "#process", id: "process" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy active link tracking
  useEffect(() => {
    const ids = ["hero", ...navItems.map((i) => i.id), "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${
        isScrolled
          ? "bg-background/75 backdrop-blur-xl border-white/5 py-3 sm:py-4 shadow-[0_8px_40px_-12px_rgba(255,42,42,0.12)]"
          : "bg-transparent border-transparent py-5 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-display font-bold text-base sm:text-xl tracking-wider uppercase cursor-pointer relative group"
          onClick={() => scrollTo("#hero")}
        >
          <span className="text-white group-hover:text-primary transition-colors duration-300">Pulse</span>
          <span className="text-primary group-hover:text-white transition-colors duration-300 mx-1">&</span>
          <span className="text-white group-hover:text-primary transition-colors duration-300">Frame</span>
          <div className="absolute -inset-2 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-500 rounded-full" />
          {/* Subtle accent dot that pulses on scroll */}
          <span
            aria-hidden
            className={`absolute -right-3 -top-1 w-1.5 h-1.5 rounded-full bg-primary transition-opacity duration-500 ${
              isScrolled ? "opacity-100 shadow-[0_0_8px_hsl(var(--primary))]" : "opacity-0"
            }`}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7 lg:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                      isActive ? "text-white" : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span
                      aria-hidden
                      className={`absolute bottom-[-4px] left-0 h-[1px] bg-primary transition-all duration-500 ease-out ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                    <span
                      aria-hidden
                      className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary transition-opacity duration-300 ${
                        isActive ? "opacity-100 shadow-[0_0_6px_hsl(var(--primary))]" : "opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          <Button
            onClick={() => scrollTo("#contact")}
            className="btn-magnetic font-display font-medium uppercase tracking-wider text-xs rounded-none bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[60px] sm:top-[72px] bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 w-full px-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.name} className="w-full max-w-xs">
                <button
                  onClick={() => scrollTo(item.href)}
                  className={`w-full min-h-[56px] text-2xl font-display font-medium transition-colors duration-300 py-3 ${
                    isActive ? "text-primary" : "text-white hover:text-primary"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
        <Button
          onClick={() => scrollTo("#contact")}
          className="btn-magnetic mt-4 font-display font-medium uppercase tracking-wider text-sm rounded-none bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 px-10 py-6 min-h-[52px]"
        >
          Get a Quote
        </Button>
      </div>
    </header>
  );
}
