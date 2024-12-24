import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Lessen from "../components/Lessen";

function LessenPage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title for SEO */}
        <title>Lessen - Taijiquan Academy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Bekijk de Taijiquan lessen van Taijiquan Academy. Leer de kunst van Taijiquan met ervaren instructeurs in Apeldoorn. Geschikt voor alle niveaus."
        />

        {/* Keywords (less important but still useful for SEO) */}
        <meta
          name="keywords"
          content="Taijiquan, Taijiquan lessen, Tai Chi, Apeldoorn, Taijiquan Academy, Taijiquan voor beginners, gevorderden, Tai Chi lessen"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/lessen" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Lessen - Taijiquan Academy" />
        <meta
          property="og:description"
          content="Bekijk de Taijiquan lessen van Taijiquan Academy. Leer de kunst van Taijiquan met ervaren instructeurs in Apeldoorn. Geschikt voor alle niveaus."
        />
        <meta
          property="og:url"
          content="https://www.taijiquanacademy.nl/lessen"
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Search Engines */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Lessen - Taijiquan Academy",
            "url": "https://www.taijiquanacademy.nl/lessen",
            "description": "Bekijk de Taijiquan lessen van Taijiquan Academy. Leer de kunst van Taijiquan met ervaren instructeurs in Apeldoorn. Geschikt voor alle niveaus.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.taijiquanacademy.nl/lessen"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Lessen Component */}
      <Lessen />
    </HelmetProvider>
  );
}

export default LessenPage;
