import OurWayHero from "../components/sections/OurWayHero";
import DayInLife from "../components/sections/DayInLife";
import ValuesGrid from "../components/sections/ValuesGrid";
import StatsCounter from "../components/sections/StatsCounter";
import OurWayCTA from "../components/sections/OurWayCTA";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function OurWayOfLivingPage() {
  return (
    <>
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
