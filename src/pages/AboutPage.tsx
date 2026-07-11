import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import AboutHero from "../components/sections/AboutHero";
import AboutStory from "../components/sections/AboutStory";
import AboutValues from "../components/sections/AboutValues";
import AboutCTA from "../components/sections/AboutCTA";
import ScrollReveal from "../components/ui/ScrollReveal";
import { breadcrumbSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Nestly - Our Story and Mission"
        description="Learn how Nestly grew from a single property into a network of student homes built around simplicity, transparency, and real community."
        path="/about-us"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <AboutHero />

      <ScrollReveal>
        <AboutStory />
      </ScrollReveal>

      <ScrollReveal>
        <AboutValues />
      </ScrollReveal>

      <ScrollReveal>
        <AboutCTA />
      </ScrollReveal>
    </>
  );
}
