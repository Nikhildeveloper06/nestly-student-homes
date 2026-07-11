import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import LegalSection from "../components/ui/LegalSection";
import { breadcrumbSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Learn what information Nestly collects, how it's used, and how you can control your personal data."
        path="/privacy-policy"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="page-enter mt-4">
        <div className="bg-nestly-blue rounded-3xl p-6 md:p-10 text-center">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
            Privacy Policy
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-6 leading-tight">
            Your privacy, plainly explained.
          </h1>
          <p className="mt-4 text-black/80 text-sm md:text-base max-w-xl mx-auto">
            Last updated: January 2026. This policy explains what
            information Nestly collects, why we collect it, and how you
            can control it.
          </p>
        </div>
      </section>

      <section className="mt-4 flex flex-col gap-4">
        <LegalSection title="Information we collect" color="bg-nestly-blue">
          <p>
            When you inquire, book a unit, or contact our team, we
            collect information you provide directly - such as your
            name, email, phone number, and details related to your
            housing request. We also collect basic usage data when you
            browse our website, like pages visited and general device
            information.
          </p>
        </LegalSection>

        <LegalSection title="How we use your information" color="bg-nestly-orange">
          <p>
            We use your information to process bookings, respond to
            inquiries, send relevant updates about your stay, and
            improve our website experience. We do not sell your personal
            information to third parties.
          </p>
        </LegalSection>

        <LegalSection title="Sharing your information" color="bg-nestly-red">
          <p>
            We share information only where necessary - with property
            teams to coordinate your booking, with payment processors to
            handle transactions securely, or where required by law. Any
            third party we work with is required to protect your data to
            the same standard we do.
          </p>
        </LegalSection>

        <LegalSection title="Cookies and tracking" color="bg-nestly-green">
          <p>
            We use cookies to keep the website functioning smoothly and
            to understand how visitors use our site. For full details,
            see our{" "}
            <a href="/cookies-policy" className="underline font-medium">
              Cookies Policy
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Your rights" color="bg-nestly-purple">
          <p>
            You can request access to, correction of, or deletion of
            your personal information at any time by contacting our team
            at hello@nestly.example. We will respond to verified requests
            within a reasonable timeframe.
          </p>
        </LegalSection>

        <LegalSection title="Data retention" color="bg-nestly-blue">
          <p>
            We retain your information only as long as necessary to
            fulfil the purposes outlined in this policy, or as required
            by applicable law, after which it is securely deleted.
          </p>
        </LegalSection>

        <LegalSection title="Contact us" color="bg-nestly-orange">
          <p>
            If you have questions about this policy or how your data is
            handled, reach out to us at hello@nestly.example or +91
            98765 43210.
          </p>
        </LegalSection>
      </section>
    </>
  );
}
