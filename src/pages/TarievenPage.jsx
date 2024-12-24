import { HelmetProvider, Helmet } from "react-helmet-async";
import Tarieven from "../components/Tarieven";

function TarievenPage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title for SEO */}
        <title>Tarieven - Taijiquan Academy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Bekijk de tarieven voor Taijiquan lessen en workshops bij Taijiquan Academy in Apeldoorn. Transparante prijzen voor zowel beginners als gevorderden."
        />

        {/* Keywords (adjust based on pricing and services) */}
        <meta
          name="keywords"
          content="Tarieven, Taijiquan, Tai Chi, lessen, workshops, Apeldoorn, prijzen, abonnementen, Taijiquan Academy"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/tarieven" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Tarieven - Taijiquan Academy" />
        <meta
          property="og:description"
          content="Bekijk de tarieven voor Taijiquan lessen en workshops bij Taijiquan Academy in Apeldoorn. Transparante prijzen voor zowel beginners als gevorderden."
        />
        <meta
          property="og:url"
          content="https://www.taijiquanacademy.nl/tarieven"
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Search Engines */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Tarieven - Taijiquan Academy",
            "url": "https://www.taijiquanacademy.nl/tarieven",
            "description": "Bekijk de tarieven voor Taijiquan lessen en workshops bij Taijiquan Academy in Apeldoorn. Transparante prijzen voor zowel beginners als gevorderden."
          }
          `}
        </script>
      </Helmet>

      {/* Tarieven Component */}
      <Tarieven />
    </HelmetProvider>
  );
}

export default TarievenPage;
