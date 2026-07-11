import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import LegalSection from "../components/ui/LegalSection";
import { breadcrumbSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Cookies Policy", path: "/cookies-policy" },
];

export default function CookiesPolicyPage() {
  return (
    <>
      <Seo
        title="Cookies Policy"
        description="How Nestly uses cookies to keep the website functioning and to understand how visitors use our site."
        path="/cookies-policy"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="page-enter mt-4">
        <div className="bg-nestly-orange rounded-3xl p-6 md:p-10 text-center">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
            Cookies Policy
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-6 leading-tight">
            How we use cookies.
          </h1>
          <p className="mt-4 text-black/80 text-sm md:text-base max-w-xl mx-auto">
            Last updated: January 2026. A plain-language breakdown of the
            cookies this website uses and why.
          </p>
        </div>
      </section>

      <section className="mt-4 flex flex-col gap-4">
        <LegalSection title="What are cookies" color="bg-nestly-orange">
          <p>
            Cookies are small text files stored on your device when you
            visit a website. They help the site remember your
            preferences and understand how it's being used.
          </p>
        </LegalSection>

        <LegalSection title="Essential cookies" color="bg-nestly-blue">
          <p>
            These cookies are required for the website to function
            correctly - for example, remembering your progress through
            the booking flow. The site cannot function properly without
            these.
          </p>
        </LegalSection>

        <LegalSection title="Analytics cookies" color="bg-nestly-red">
          <p>
            We use analytics cookies to understand how visitors use our
            site - which pages are popular, how people navigate, and
            where improvements are needed. This data is aggregated and
            does not identify you personally.
          </p>
        </LegalSection>

        <LegalSection title="Managing cookies" color="bg-nestly-green">
          <p>
            Most browsers let you control cookies through their settings,
            including blocking or deleting them. Note that disabling
            essential cookies may affect how parts of the website
            function, such as the booking flow.
          </p>
        </LegalSection>

        <LegalSection title="Changes to this policy" color="bg-nestly-purple">
          <p>
            We may update this policy occasionally to reflect changes in
            our practices. Any updates will be posted on this page with
            a revised "last updated" date.
          </p>
        </LegalSection>

        <LegalSection title="Contact us" color="bg-nestly-blue">
          <p>
            Questions about our use of cookies? Reach out at
            hello@nestly.example.
          </p>
        </LegalSection>
      </section>
    </>
  );
}
