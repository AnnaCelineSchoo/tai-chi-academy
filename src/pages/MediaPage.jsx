import { HelmetProvider, Helmet } from "react-helmet-async";
import Media from "../components/Media";

function MediaPage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title for SEO */}
        <title>
          Media - Taijiquan Academy Apeldoorn - Tai Chi Academie Apeldoorn
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Bekijk de media van Taijiquan Academy, inclusief video's, afbeeldingen en andere media over Tiajiquan (Tai Chi), Qi Gong, Meditatie, push hands en zelfverdediging lessen, evenementen en workshops in Apeldoorn."
        />

        {/* Keywords (adjust based on your media content) */}
        <meta
          name="keywords"
          content="Media, Tai Chi Apeldoorn, Taijiquan Apeldoorn, Tai Chi lessen, Taijiquan workshops, Qi Gong training, Push Hands lessen, Zelfverdediging Apeldoorn, meditatie cursussen, Chinese martial arts, traditionele vechtkunst, gezondheid verbeteren, balans oefeningen, stressmanagement, innerlijke rust, flexibiliteit vergroten, Tai Chi voor beginners, gevorderde Tai Chi, workshops en evenementen Apeldoorn"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/media" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Media - Taijiquan Academy - Tai Chi Academie"
        />
        <meta
          property="og:description"
          content="Bekijk de media van Taijiquan Academy, inclusief video's, afbeeldingen en andere media over Tai Chi (taijiquan), Qi Gong, Meditatie en zelfverdediging lessen, evenementen en workshops in Apeldoorn."
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
            "name": "Media - Taijiquan Academy - Tai Chi Academie",
            "url": "https://www.taijiquanacademy.nl/media",
            "description": "Bekijk de media van Taijiquan Academy, inclusief video's, afbeeldingen en andere media over Tai Chi (taijiquan), Qi Gong, Meditatie en zelfverdediging lessen, evenementen en workshops in Apeldoorn.",
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
