import PageLayout from "@/components/layout/PageLayout";
import Services from "@/components/sections/Services";
import ServiceDetailRows from "@/components/sections/ServiceDetailRows";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CtaBanner from "@/components/sections/CtaBanner";

export default function ServicesPage() {
  return (
    <PageLayout title="Pulse & Frame — Services">
      <Services />
      <ServiceDetailRows />
      <WhyChooseUs />
      <CtaBanner />
    </PageLayout>
  );
}
