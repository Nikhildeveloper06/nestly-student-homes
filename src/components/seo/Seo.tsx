import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "../../lib/seo";

export default function Seo({
  title,
  description,
  path,
  image,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object | object[];
}) {
  const fullTitle = title + " | " + SITE_NAME;
  const url = SITE_URL + path;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
        </script>
      )}
    </Helmet>
  );
}
