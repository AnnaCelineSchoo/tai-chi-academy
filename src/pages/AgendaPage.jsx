import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Agenda from "../components/Agenda";

function AgendaPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* Title for SEO */}
          <title>Agenda - Taijiquan Academy</title>

          {/* Meta Description */}
          <meta
            name="description"
            content="Bekijk de agenda van Taijiquan Academy voor de komende Tai Chi, Qi Gong, Meditatie en zelfverdediging lessen, evenementen en workshops in Apeldoorn."
          />

          {/* Keywords (less important but still useful for SEO) */}
          <meta
            name="keywords"
            content="Tai Chi, Taijiquan, Taijiquan lessen, Taijiquan evenementen, Taijiquan workshops,Tai Chi lessen, Tai Chi evenementen, Tai Chi workshops, agenda, Apeldoorn, Tai Chi"
          />

          {/* Canonical Link */}
          <link rel="canonical" href="https://www.taijiquanacademy.nl/agenda" />

          {/* Open Graph Tags for Social Media Sharing */}
          <meta
            property="og:title"
            content="Agenda - Taijiquan Academy - Tai Chi Academie"
          />
          <meta
            property="og:description"
            content="Bekijk de agenda van Taijiquan Academy voor de komende tai chi, Qi Gong, Meditatie en zelfverdediging lessen, evenementen en workshops in Apeldoorn."
          />
          <meta
            property="og:url"
            content="https://www.taijiquanacademy.nl/agenda"
          />
          <meta property="og:type" content="website" />

          {/* Structured Data (JSON-LD) for Search Engines */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Agenda - Taijiquan Academy",
              "url": "https://www.taijiquanacademy.nl/agenda",
              "description": "Bekijk de agenda van Taijiquan Academy voor de komende komende tai chi, Qi Gong, Meditatie en zelfverdediging lessen, evenementen en workshops in Apeldoorn.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.taijiquanacademy.nl/agenda"
              }
            }
            `}
          </script>
        </Helmet>

        {/* Agenda Component */}
        <Agenda />
      </HelmetProvider>
    </>
  );
}

export default AgendaPage;
