import { HelmetProvider, Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

function ContactPage() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Title for SEO */}
        <title>Contact - Taijiquan Academy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Neem contact op met Taijiquan Academy in Apeldoorn voor vragen over Tai Chi, Qi Gong, Meditatie en zelfverdediging lessen, workshops, of algemene informatie. Wij staan klaar om te helpen!"
        />

        {/* Keywords (adjust based on your contact and services) */}
        <meta
          name="keywords"
          content="contact, Taijiquan, Taijiquan Academy, Tai Chi, Tai Chi Apeldoorn, Apeldoorn, Tai Chi, lessen, workshops, contactformulier, Qi Gong, Meditatie, zelfverdediging lessen"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.taijiquanacademy.nl/contact" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Contact - Taijiquan Academy -  Tai Chi Academie"
        />
        <meta
          property="og:description"
          content="Neem contact op met Taijiquan Academy in Apeldoorn voor vragen over Tai Chi, Qi Gong, Meditatie en zelfverdediging lessen, workshops, of algemene informatie. Wij staan klaar om te helpen!"
        />
        <meta
          property="og:url"
          content="https://www.taijiquanacademy.nl/contact"
        />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) for Search Engines */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Contact - Taijiquan Academy",
            "url": "https://www.taijiquanacademy.nl/contact",
            "description": "Neem contact op met Taijiquan Academy in Apeldoorn voor vragen over Tai Chi, Qi Gong, Meditatie en zelfverdediging lessen, workshops, of algemene informatie. Wij staan klaar om te helpen!",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.taijiquanacademy.nl/contact"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Contact Component */}
      <Contact />
    </HelmetProvider>
  );
}

export default ContactPage;
