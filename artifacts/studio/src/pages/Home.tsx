import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/sections/Hero";
import StatsTickerBar from "@/components/sections/StatsTickerBar";
import ServicesSnapshot from "@/components/sections/ServicesSnapshot";
import FeaturedWork from "@/components/sections/FeaturedWork";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <PageLayout title="Pulse & Frame — Sound That Sells. Visuals That Stick.">
      <Hero />
      <StatsTickerBar />
      <ServicesSnapshot />
      <FeaturedWork />
      <TestimonialCarousel />
      <CtaBanner />
    </PageLayout>
  );
}
