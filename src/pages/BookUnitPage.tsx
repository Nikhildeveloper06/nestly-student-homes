import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import BookingHero from "../components/sections/BookingHero";
import BookingFlow from "../components/sections/BookingFlow";
import WhatsIncluded from "../components/sections/WhatsIncluded";
import ScrollReveal from "../components/ui/ScrollReveal";
import { breadcrumbSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Book a Unit", path: "/book-unit" },
];

export default function BookUnitPage() {
  return (
    <>
      <Seo
        title="Book a Unit - Reserve Your Nestly Student Home"
        description="Reserve your Nestly student accommodation in minutes. Choose your unit tier, move-in date, and confirm your booking online."
        path="/book-unit"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="page-enter mt-4 flex flex-col gap-4 lg:h-[calc(100vh-2rem)]">
        <BookingHero />
        <BookingFlow />
      </div>

      <ScrollReveal>
        <WhatsIncluded />
      </ScrollReveal>
    </>
  );
}
