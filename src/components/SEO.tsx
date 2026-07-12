import { Helmet } from "react-helmet-async";

const SITE_NAME = "Securiq";
const SITE_URL = "https://securiq.co";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  /** Page title WITHOUT the site name suffix — it's appended automatically. */
  title: string;
  description: string;
  /** Path only, e.g. "/pricing". Defaults to "/" (homepage). */
  path?: string;
  /** Set true only on pages that should NOT be indexed (e.g. internal app views). */
  noindex?: boolean;
  ogImage?: string;
  /** Optional JSON-LD structured data object(s) for this specific page. */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({
  title,
  description,
  path = "/",
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
  structuredData,
}: SEOProps) {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const schemaEntries = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemaEntries.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
