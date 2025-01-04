import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Lessen from "../components/Lessen";

function LessenPage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title for SEO */}
        <title>
          Lessen - Taijiquan Academy Apeldoorn - Tai Chi Academie Apeldoorn
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Bekijk de Tai Chi lessen van Taijiquan Academy. Leer de kunst van Taijiquan (Tai Chi), Qi Gong, Push Hands, Zelfverdediging en Meditatie met ervaren instructeurs in Apeldoorn. Geschikt voor alle niveaus."
        />

        {/* Keywords (less important but still useful for SEO) */}
        <meta
          name="keywords"
          content="lessen, gratis proefles, Tai Chi Apeldoorn, Taijiquan Apeldoorn, Tai Chi lessen, Taijiquan workshops, Qi Gong training, Push Hands lessen, Zelfverdediging Apeldoorn, meditatie cursussen, Chinese martial arts, traditionele vechtkunst, gezondheid verbeteren, balans oefeningen, stressmanagement, innerlijke rust, flexibiliteit vergroten, Tai Chi voor beginners, gevorderde Tai Chi, workshops en evenementen Apeldoorn"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/lessen" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Lessen - Taijiquan Academy - Tai Chi Academie"
        />
        <meta
          property="og:description"
          content="Bekijk de Tai Chi lessen van Taijiquan Academy. Leer de kunst van Taijiquan (Tai Chi), Qi Gong, Push Hands, Zelfverdediging en Meditatie  met ervaren instructeurs in Apeldoorn. Geschikt voor alle niveaus."
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
            "name": "Lessen - Taijiquan Academy -  Tai Chi Academie",
            "url": "https://www.taijiquanacademy.nl/lessen",
            "description": "Bekijk de Taijiquan lessen van Taijiquan Academy. Leer de kunst van Tai Chi (taijiquan), Qi Gong, Meditatie en zelfverdediging met ervaren instructeurs in Apeldoorn. Geschikt voor alle niveaus.",
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
