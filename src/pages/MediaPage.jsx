import { HelmetProvider, Helmet } from "react-helmet-async";
import Media from "../components/Media";

function MediaPage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title for SEO */}
        <title>Media - Taijiquan Academy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Bekijk de media van Taijiquan Academy, inclusief video's, afbeeldingen en andere media over Taijiquan lessen en workshops in Apeldoorn."
        />

        {/* Keywords (adjust based on your media content) */}
        <meta
          name="keywords"
          content="media, Taijiquan, Taijiquan Academy, Apeldoorn, Tai Chi, video's, afbeeldingen, Taijiquan lessen, workshops"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/media" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Media - Taijiquan Academy" />
        <meta
          property="og:description"
          content="Bekijk de media van Taijiquan Academy, inclusief video's, afbeeldingen en andere media over Taijiquan lessen en workshops in Apeldoorn."
        />
        <meta
          property="og:url"
          content="https://www.taijiquanacademy.nl/media"
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Search Engines */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Media - Taijiquan Academy",
            "url": "https://www.taijiquanacademy.nl/media",
            "description": "Bekijk de media van Taijiquan Academy, inclusief video's, afbeeldingen en andere media over Taijiquan lessen en workshops in Apeldoorn.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.taijiquanacademy.nl/media"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Media Component */}
      <Media />
    </HelmetProvider>
  );
}

export default MediaPage;
