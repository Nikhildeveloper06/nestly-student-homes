import AboutHero from "../components/sections/AboutHero";
import AboutStory from "../components/sections/AboutStory";
import AboutValues from "../components/sections/AboutValues";
import AboutCTA from "../components/sections/AboutCTA";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <>
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
