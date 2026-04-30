import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/effects/Grain";
import SectionDivider from "@/components/effects/SectionDivider";
import ChatLauncher from "@/components/chat/ChatLauncher";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white font-sans">
        <Grain />
        <Navbar />
        <main>
          <Hero />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <Portfolio />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Process />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
        <ChatLauncher />
      </div>
    </SmoothScroll>
  );
}
