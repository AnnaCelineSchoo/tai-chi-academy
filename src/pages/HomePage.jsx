import React, { Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Home = React.lazy(() => import("../components/Home"));

function Homepage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title Optimization */}
        <title>Taijiquan Academy - Lessen en Workshops in Apeldoorn</title>

        {/* Meta Description with More Context and Keywords */}
        <meta
          name="description"
          content="Taijiquan Academy biedt professionele Taijiquan lessen en workshops in Apeldoorn. Leer de kunst van Taijiquan met ervaren instructeurs in een rustgevende omgeving."
        />

        {/* Meta Keywords (secondary, less important now but still useful) */}
        <meta
          name="keywords"
          content="Taijiquan, Taijiquan lessen, Taijiquan workshops, Apeldoorn, Taijiquan Academy, Tai Chi, gezondheid, vechtsport"
        />

        {/* Canonical Link for SEO */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Taijiquan Academy - Lessen en Workshops in Apeldoorn"
        />
        <meta
          property="og:description"
          content="Leer Taijiquan bij Taijiquan Academy in Apeldoorn. Professionele lessen en workshops voor alle niveaus."
        />
        <meta property="og:url" content="https://www.taijiquanacademy.nl/" />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Taijiquan Academy",
            url: "https://www.taijiquanacademy.nl/",
            logo: "https://www.taijiquanacademy.nl/images/logos/Taiji-logo-blauw-zwart.png",
            sameAs: [
              "https://www.youtube.com/@tai_chi_apeldoorn",
              "https://www.facebook.com/tai.chi.apeldoorn.hyg/",
              "https://www.tiktok.com/tag/heyonggan",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              telephone: "+31-123-456-789",
              areaServed: "NL",
              availableLanguage: "Dutch",
            },
          })}
        </script>
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </HelmetProvider>
  );
}

export default Homepage;
