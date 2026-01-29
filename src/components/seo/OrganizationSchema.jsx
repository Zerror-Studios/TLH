import React from "react";
import { Const } from "@/utils/Constants";

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: Const.Brand,
    url: Const?.ClientLink || "",
    logo: {
      "@type": "ImageObject",
      url: `${Const?.ClientLink || ""}/logo-og.png`,
      width: 160,
      height: 90,
    },
    description:"We craft pristine garments that earn admiration back, with freshness. Full-service laundry experts specializing in premium dry cleaning, specialized restoration & garment care excellence.",
    sameAs: [
      " https://youtube.com/@thelaundryhouse?si=lAIxfghsNDfOKH1x",
      "https://www.instagram.com/the_laundry_house_official?igsh=MW53bXZld2ZxcW0wMw==",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8800020002",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default OrganizationSchema;
