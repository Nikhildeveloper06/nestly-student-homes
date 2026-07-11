import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import OurWayHero from "../components/sections/OurWayHero";
import DayInLife from "../components/sections/DayInLife";
import ValuesGrid from "../components/sections/ValuesGrid";
import StatsCounter from "../components/sections/StatsCounter";
import OurWayCTA from "../components/sections/OurWayCTA";
import ScrollReveal from "../components/ui/ScrollReveal";
import { breadcrumbSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Our Way of Living", path: "/our-way-of-living" },
];

export default function OurWayOfLivingPage() {
  return (
    <>
      <Seo
        title="Our Way of Living - The Nestly Philosophy"
        description="See what a day in student living at Nestly actually looks like, and the values - simplicity, flexibility, and balance - behind every unit."
        path="/our-way-of-living"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <OurWayHero />

      <ScrollReveal>
        <DayInLife />
      </ScrollReveal>

      <ScrollReveal>
        <ValuesGrid />
      </ScrollReveal>

      <ScrollReveal>
        <StatsCounter />
      </ScrollReveal>

      <ScrollReveal>
        <OurWayCTA />
      </ScrollReveal>
    </>
  );
}
