import React, { Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Home = React.lazy(() => import("../components/Home"));

function Homepage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title Optimization */}
        <title>
          Tai Chi Academie Apeldoorn - Volg traditionele Lessen en Workshops in
          Apeldoorn - schrijf je in voor een gratis proefles! - Taijiquan
          Academy Apeldoorn
        </title>

        {/* Meta Description with More Context and Keywords */}
        <meta
          name="description"
          content="Taijiquan Academy in Apeldoorn biedt professionele Taijiquan (Tai Chi), Qi Gong, Push Hands, Zelfverdediging en Meditatie lessen, workshops en privélessen. Verbeter je gezondheid, focus en energie met ervaren instructeurs in een rustige en inspirerende omgeving."
        />

        {/* Meta Keywords (secondary, less important now but still useful) */}
        <meta
          name="keywords"
          content="Tai Chi Apeldoorn, Taijiquan Apeldoorn, Tai Chi lessen, Taijiquan workshops, Qi Gong training, Push Hands lessen, Zelfverdediging Apeldoorn, meditatie cursussen, Chinese martial arts, traditionele vechtkunst, gezondheid verbeteren, balans oefeningen, stressmanagement, innerlijke rust, flexibiliteit vergroten, Tai Chi voor beginners, gevorderde Tai Chi, workshops en evenementen Apeldoorn"
        />

        {/* Canonical Link for SEO */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Taijiquan Academy Apeldoorn - Tai Chi, Qi Gong, Push Hands,
          Zelfverdediging en Meditatie Lessen en Workshops in Apeldoorn - volg
          een gratis proefles! - Tai Chi Academie Apeldoorn"
        />
        <meta
          property="og:description"
          content="Leer Taijiquan (Tai Chi), Qi Gong, Push Hands, Zelfverdediging en Meditatie bij Taijiquan Academy in Apeldoorn. Professionele lessen, privélessen en workshops voor alle niveaus."
        />
        <meta property="og:url" content="https://www.taijiquanacademy.nl/" />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Taijiquan Academy- Tai Chi Academie",
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
              telephone: "",
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
