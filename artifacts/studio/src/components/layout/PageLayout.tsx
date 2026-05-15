import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Grain from "@/components/effects/Grain";
import ChatLauncher from "@/components/chat/ChatLauncher";
import SmoothScroll from "@/components/SmoothScroll";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: Props) {
  const [location] = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white font-sans">
        <Grain />
        <Navbar />
        <motion.main
          key={location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {children}
        </motion.main>
        <Footer />
        <ChatLauncher />
      </div>
    </SmoothScroll>
  );
}
