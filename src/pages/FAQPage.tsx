import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import FAQHero from "../components/sections/FAQHero";
import FAQs, { faqs } from "../components/sections/FAQs";
import NewsletterSignup from "../components/ui/NewsletterSignup";
import ScrollReveal from "../components/ui/ScrollReveal";
import { breadcrumbSchema, faqPageSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function FAQPage() {
  return (
    <>
      <Seo
        title="FAQs - Booking, Pricing and Living at Nestly"
        description="Answers to common questions about booking a unit, all-inclusive pricing, moving in and out, and life at Nestly student accommodation."
        path="/faq"
        jsonLd={[breadcrumbSchema(breadcrumbItems), faqPageSchema(faqs)]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <FAQHero />

      <ScrollReveal>
        <FAQs />
      </ScrollReveal>

      <ScrollReveal>
        <section className="mt-4">
          <Link
            to="/contact"
            className="bg-nestly-black rounded-full py-5 px-6 md:px-10 flex items-center justify-center gap-2 hover:bg-nestly-black/90 transition-colors"
          >
            <span className="font-display font-bold text-white text-base md:text-lg text-center">
              Didn't find what you were looking for? Get in touch with
              our team.
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
