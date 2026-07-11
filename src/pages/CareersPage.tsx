import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import CareersHero from "../components/sections/CareersHero";
import CareersOpenRoles, { roles } from "../components/sections/CareersOpenRoles";
import CareersCulture from "../components/sections/CareersCulture";
import CareersCTA from "../components/sections/CareersCTA";
import ScrollReveal from "../components/ui/ScrollReveal";
import { breadcrumbSchema, jobPostingSchema } from "../lib/seo";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
];

export default function CareersPage() {
  const jobSchemas = roles.map(function (role) {
    return jobPostingSchema(role);
  });

  return (
    <>
      <Seo
        title="Careers at Nestly - Join Our Student Housing Team"
        description="Explore open roles at Nestly across property operations, community management, sales, support, and marketing - building the future of student living."
        path="/careers"
        jsonLd={[breadcrumbSchema(breadcrumbItems), ...jobSchemas]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <CareersHero />

      <ScrollReveal>
        <CareersOpenRoles />
      </ScrollReveal>

      <ScrollReveal>
        <CareersCulture />
      </ScrollReveal>

      <ScrollReveal>
        <CareersCTA />
      </ScrollReveal>
    </>
  );
}
