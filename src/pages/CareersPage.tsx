import CareersHero from "../components/sections/CareersHero";
import CareersOpenRoles from "../components/sections/CareersOpenRoles";
import CareersCulture from "../components/sections/CareersCulture";
import CareersCTA from "../components/sections/CareersCTA";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function CareersPage() {
  return (
    <>
      <CareersHero />

      <ScrollReveal>
        <CareersOpenRoles />
      </ScrollReveal>

      <ScrollReveal>
        <CareersCulture />
      </ScrollReveal>

      <ScrollReveal>
        <CareersCTA />
      </ScrollReveal>
    </>
  );
}
