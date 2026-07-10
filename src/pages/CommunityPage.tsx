import CommunityHero from "../components/sections/CommunityHero";
import FeatureGrid from "../components/sections/FeatureGrid";
import CommunityLivingSpaces from "../components/sections/CommunityLivingSpaces";
import CommunityCTA from "../components/sections/CommunityCTA";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />

      <ScrollReveal>
        <FeatureGrid />
      </ScrollReveal>

      <ScrollReveal>
        <CommunityLivingSpaces />
      </ScrollReveal>

      <ScrollReveal>
        <CommunityCTA />
      </ScrollReveal>
    </>
  );
}
