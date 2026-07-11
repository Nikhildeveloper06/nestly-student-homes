import CommunityHero from "../components/sections/CommunityHero";
import EventsHorizontalScroll from "../components/sections/EventsHorizontalScroll";
import CommunitySpacesSection from "../components/sections/CommunitySpacesSection";
import CommunityCTA from "../components/sections/CommunityCTA";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />

      <EventsHorizontalScroll />

      <ScrollReveal>
        <CommunitySpacesSection />
      </ScrollReveal>

      <ScrollReveal>
        <CommunityCTA />
      </ScrollReveal>
    </>
  );
}
