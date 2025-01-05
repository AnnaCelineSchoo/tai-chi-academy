import { HelmetProvider, Helmet } from "react-helmet-async";
import Tarieven from "../components/Tarieven";

function TarievenPage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title for SEO */}
        <title>
          Tarieven - Prijzen - Contributie - Taijiquan Academy Apeldoorn - Tai
          Chi Academie Apeldoorn
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Bekijk de tarieven voor Tiajiquan (Tai Chi), Qi Gong, Meditatie, push hands en zelfverdediging lessen, evenementen en workshops bij Tai Chi Academie in Apeldoorn. Transparante prijzen voor zowel beginners als gevorderden."
        />

        {/* Keywords (adjust based on pricing and services) */}
        <meta
          name="keywords"
          content="Tarieven, Prijzen, Kosten, contributie, Tai Chi Apeldoorn, Taijiquan Apeldoorn, Tai Chi lessen, Taijiquan workshops, Qi Gong training, Push Hands lessen, Zelfverdediging Apeldoorn, meditatie cursussen, Chinese martial arts, traditionele vechtkunst, gezondheid verbeteren, balans oefeningen, stressmanagement, innerlijke rust, flexibiliteit vergroten, Tai Chi voor beginners, gevorderde Tai Chi, workshops en evenementen Apeldoorn"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/tarieven" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Tarieven - Taijiquan Academy - Tai Chi Academie"
        />
        <meta
          property="og:description"
          content="Bekijk de tarieven voor Tai Chi (taijiquan), Qi Gong, Meditatie en zelfverdediging lessen, evenementen en workshops bij Taijiquan Academy in Apeldoorn. Transparante prijzen voor zowel beginners als gevorderden."
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
            "name": "Tarieven - Taijiquan Academy - Tai Chi Academie",
            "url": "https://www.taijiquanacademy.nl/tarieven",
            "description": "Bekijk de tarieven voor Tai Chi (taijiquan), Qi Gong, Meditatie en zelfverdediging lessen, evenementen en workshops bij Taijiquan Academy in Apeldoorn. Transparante prijzen voor zowel beginners als gevorderden."
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
