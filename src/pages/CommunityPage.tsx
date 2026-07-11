import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import CommunityHero from "../components/sections/CommunityHero";
import FeatureGrid from "../components/sections/FeatureGrid";
import CommunityLivingSpaces from "../components/sections/CommunityLivingSpaces";
import CommunityCTA from "../components/sections/CommunityCTA";
import ScrollReveal from "../components/ui/ScrollReveal";
import { breadcrumbSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Community", path: "/community" },
];

export default function CommunityPage() {
  return (
    <>
      <Seo
        title="Community Living at Nestly - Shared Spaces & Real Connection"
        description="Discover how community living at Nestly brings students together through shared spaces, everyday moments, and events designed around student life."
        path="/community"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

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
