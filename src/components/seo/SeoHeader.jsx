import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Const } from "@/utils/Constants";
import WebPageSchema from "@/components/seo/WebPageSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const SeoHeader = ({ meta = {}, type = "website" }) => {
  const router = useRouter();

  // ✅ canonical: ensure no trailing double slashes
  const canonical = `${Const.ClientLink}${router.asPath === "/" ? "" : router.asPath}`;
  const Logo = `${Const.ClientLink}/logo-og.png`;

  return (
    <Head>
      {/* Title & Description */}
      <title>{meta?.title || "The Laundry House - Premium Garment Care"}</title>
      <meta
        name="description"
        content={
          meta?.description ||
          "We craft pristine garments that earn admiration back, with freshness. Full-service laundry experts specializing in premium dry cleaning, specialized restoration & garment care excellence."
        }
      />
      {meta?.keywords && <meta name="keywords" content={meta.keywords} />}
      {meta?.author && <meta name="author" content={meta.author} />}

      {/* Robots (fix: fallback to index,follow instead of undefined) */}
      <meta
        name="robots"
        content={`${meta?.robots || "index,follow"}, max-image-preview:large`}
      />

      {/* Publisher */}
      <meta name="publisher" content={Const.Brand} />

      {/* Canonical */}
      <link rel="canonical" href={meta?.canonical || canonical} />

      {/* Open Graph (Facebook / LinkedIn) */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={meta?.og?.title || meta?.title || ""} />
      <meta
        property="og:description"
        content={meta?.og?.description || meta?.description || ""}
      />
      <meta property="og:url" content={meta?.canonical || canonical} />
      <meta property="og:site_name" content={Const.Brand} />
      <meta property="og:image" content={meta?.og?.image || Logo} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={meta?.twitter?.card || "summary_large_image"}
      />
      <meta
        name="twitter:title"
        content={meta?.twitter?.title || meta?.title || ""}
      />
      <meta
        name="twitter:description"
        content={meta?.twitter?.description || meta?.description || ""}
      />
      <meta name="twitter:image" content={meta?.twitter?.image || Logo} />

      {/* Basic HTML Meta */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicons */}
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon.ico"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon-32x32.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="DISRPTVE" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* Hreflang */}
      <link
        rel="alternate"
        hrefLang="en-in"
        href={meta?.canonical || canonical}
      />

      {/* Structured Data */}
      <WebPageSchema
        name={meta?.title || ""}
        description={meta?.description || ""}
        url={meta?.canonical || canonical}
      />
      <OrganizationSchema />
    </Head>
  );
};

export default SeoHeader;
