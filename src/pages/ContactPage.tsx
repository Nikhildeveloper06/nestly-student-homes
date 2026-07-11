import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ContactSection from "../components/sections/ContactSection";
import ContactNewsletter from "../components/sections/ContactNewsletter";
import { breadcrumbSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Nestly - Get in Touch About Student Accommodation"
        description="Have questions about booking a unit or life at Nestly? Reach our team by form, phone, or email - we typically respond within 48 hours."
        path="/contact"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <ContactSection />
      <ContactNewsletter />
    </>
  );
}
