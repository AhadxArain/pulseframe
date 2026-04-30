import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white font-sans">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
