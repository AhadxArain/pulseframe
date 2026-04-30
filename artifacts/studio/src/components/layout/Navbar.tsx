import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Studio", href: "#about" },
  { name: "Process", href: "#process" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4 shadow-[0_0_30px_rgba(255,42,42,0.05)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-display font-bold text-xl tracking-wider uppercase cursor-pointer relative group"
          onClick={() => scrollTo("#hero")}
        >
          <span className="text-white group-hover:text-primary transition-colors duration-300">Pulse</span>
          <span className="text-primary group-hover:text-white transition-colors duration-300 mx-1">&</span>
          <span className="text-white group-hover:text-primary transition-colors duration-300">Frame</span>
          <div className="absolute -inset-2 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-500 rounded-full" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => scrollTo("#contact")}
            className="font-display font-medium uppercase tracking-wider text-xs rounded-none bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
          >
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-2xl font-display font-medium text-white hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => scrollTo("#contact")}
          className="mt-4 font-display font-medium uppercase tracking-wider text-sm rounded-none bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6"
        >
          Get a Quote
        </Button>
      </div>
    </header>
  );
}
