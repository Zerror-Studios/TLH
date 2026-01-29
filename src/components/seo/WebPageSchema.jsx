import React from "react";
import { Const } from "@/utils/Constants";

const WebPageSchema = ({ name, description, url, image }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: name,
    headline: name, // ✅ added for better SEO
    description: description,
    url: url,
    inLanguage: "en-IN", // ✅ adjust if multi-language
    primaryImageOfPage: image
      ? {
          "@type": "ImageObject",
          url: image,
        }
      : undefined,
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: ["//title", "//meta[@name='description']/@content"],
    },
    publisher: {
      "@type": "Organization",
      name: Const.Brand,
      logo: {
        "@type": "ImageObject",
        url: `${Const.ClientLink}/logo-og.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default WebPageSchema;
