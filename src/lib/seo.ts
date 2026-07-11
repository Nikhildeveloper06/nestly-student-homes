export const SITE_NAME = "Nestly Student Homes";
export const SITE_URL = "https://nestly.example";
export const DEFAULT_OG_IMAGE = SITE_URL + "/images/hero/Hero-img1.webp";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    description:
      "Nestly offers fully furnished, all-inclusive student accommodation designed for real student life, with community living spaces and transparent pricing.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "customer service",
      email: "hello@nestly.example",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: SITE_URL + "/faq?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(function (item, i) {
      return {
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: SITE_URL + item.path,
      };
    }),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(function (f) {
      return {
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      };
    }),
  };
}

export function jobPostingSchema(role: {
  title: string;
  location: string;
  type: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    datePosted: "2026-01-01",
    employmentType: role.type.toUpperCase().includes("PART")
      ? "PART_TIME"
      : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: role.location,
        addressCountry: "IN",
      },
    },
  };
}

export function blogPostingSchema(article: {
  title: string;
  excerpt: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}
