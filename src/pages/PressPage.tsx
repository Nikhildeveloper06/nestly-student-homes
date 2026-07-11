import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import PressHero from "../components/sections/PressHero";
import PressMentions from "../components/sections/PressMentions";
import PressReleases from "../components/sections/PressReleases";
import NewsletterSignup from "../components/ui/NewsletterSignup";
import ScrollReveal from "../components/ui/ScrollReveal";
import { breadcrumbSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Press", path: "/press" },
];

export default function PressPage() {
  return (
    <>
      <Seo
        title="Press - Nestly News, Coverage & Media Resources"
        description="Media coverage, press releases, and resources for journalists covering Nestly's student housing and community living model."
        path="/press"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <PressHero />

      <ScrollReveal>
        <PressMentions />
      </ScrollReveal>

      <ScrollReveal>
        <PressReleases />
      </ScrollReveal>

      <ScrollReveal>
        <section className="mt-4">
          <Link
            to="/contact"
            className="bg-nestly-orange rounded-full py-5 px-6 md:px-10 flex items-center justify-center gap-2 hover:bg-nestly-orange/90 transition-colors"
          >
            <span className="font-display font-bold text-black text-base md:text-lg text-center">
              Working on a story about student housing? Get in touch with
              our team.
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

          <div className="mt-4">
            <NewsletterSignup />
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
