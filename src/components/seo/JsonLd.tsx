import { SITE, FAQ_ITEMS, SERVICES } from "@/constants/content";

function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    foundingDate: "2025",
    areaServed: "KR",
    knowsAbout: [
      "AEO (Answer Engine Optimization)",
      "GEO (Generative Engine Optimization)",
      "SEO (Search Engine Optimization)",
      "AI 검색 최적화",
    ],
  };
}

function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "ko",
  };
}

function generateFAQPageSchema() {
  return {
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function generateServiceSchemas() {
  return SERVICES.map((service) => ({
    "@type": "Service",
    name: `${service.title} - ${service.subtitle}`,
    serviceType: service.title,
    description: service.benefit,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  }));
}

export function JsonLd() {
  const graph = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateFAQPageSchema(),
    ...generateServiceSchemas(),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
