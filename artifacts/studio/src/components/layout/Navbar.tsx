import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, inViewOnce } from "@/lib/motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Studio", path: "/studio" },
  { name: "Process", path: "/process" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b will-change-[transform,background-color,padding] ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md sm:backdrop-blur-xl border-white/5 py-3 sm:py-4 shadow-[0_8px_40px_-12px_rgba(255,42,42,0.12)]"
            : "bg-transparent border-transparent py-5 sm:py-6"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className="font-display font-bold text-base sm:text-xl tracking-wider uppercase cursor-pointer relative group inline-flex items-center">
              <span className="text-white group-hover:text-primary transition-colors duration-300">Pulse</span>
              <span className="text-primary group-hover:text-white transition-colors duration-300 mx-1">&amp;</span>
              <span className="text-white group-hover:text-primary transition-colors duration-300">Frame</span>
              <span aria-hidden className="absolute -inset-2 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-500 rounded-full" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7 lg:gap-8">
              {navItems.map((item) => {
                const isActive = location === item.path;
                return (
                  <li key={item.name}>
                    <Link href={item.path}>
                      <span
                        className={`text-[12px] uppercase font-bold tracking-[0.15em] transition-colors duration-300 relative py-1 cursor-pointer ${
                          isActive ? "text-white" : "text-white/50 hover:text-white"
                        }`}
                      >
                        {item.name}
                        <span
                          aria-hidden
                          className={`absolute bottom-[-4px] left-0 h-[1px] bg-primary transition-all duration-500 ease-out ${
                            isActive ? "w-full opacity-100" : "w-0 opacity-0"
                          }`}
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact">
              <Button className="btn-premium px-6 py-2 rounded-none">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white hover:text-primary transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 z-[100]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-3xl flex flex-col md:hidden overflow-hidden"
          >
            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            {/* Menu Header (Logo) */}
            <div className="container mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
              <Link href="/">
                <span className="font-display font-bold text-xl tracking-wider uppercase text-white">
                  Pulse<span className="text-primary mx-0.5">&amp;</span>Frame
                </span>
              </Link>
            </div>

            {/* Main Navigation Items (Centered Vertically) */}
            <div className="flex-1 flex flex-col justify-center items-center px-8">
              <motion.ul 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center gap-6 sm:gap-8 w-full"
              >
                {navItems.map((item) => {
                  const isActive = location === item.path;
                  return (
                    <motion.li 
                      key={item.name}
                      variants={fadeInUp}
                      className="w-full text-center"
                    >
                      <Link href={item.path}>
                        <span
                          className={`inline-block py-2 text-3xl sm:text-4xl font-display font-black uppercase tracking-[0.05em] transition-all duration-300 cursor-pointer ${
                            isActive ? "text-primary scale-110" : "text-white hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>

            {/* Bottom Section (CTA Section) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 pb-16 sm:pb-20 flex flex-col items-center gap-6 w-full"
            >
              <div className="w-full h-[1px] bg-white/5 mb-2" />
              
              <Link href="/contact" className="w-full max-w-sm">
                <Button className="btn-premium w-full py-8 text-sm sm:text-base rounded-none shadow-[0_0_30px_rgba(255,42,42,0.3)]">
                  Get a Quote
                </Button>
              </Link>
              
              <Link href="/contact">
                <span className="group flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/50 hover:text-primary transition-colors cursor-pointer">
                  Initiate Project
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
