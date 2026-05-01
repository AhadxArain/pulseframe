import PageLayout from "@/components/layout/PageLayout";
import Portfolio from "@/components/sections/Portfolio";
import TrustedBy from "@/components/sections/TrustedBy";
import Testimonials from "@/components/sections/Testimonials";

export default function WorkPage() {
  return (
    <PageLayout title="Pulse & Frame — Work">
      <Portfolio />
      <TrustedBy />
      <Testimonials />
    </PageLayout>
  );
}
