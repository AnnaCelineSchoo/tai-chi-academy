import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import MediaItemOverview from "../components/MediaItemOverview";

function MediaItemPage() {
  const { id } = useParams();
  const [MediaItem, SetMediaItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}media/media.json`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Media Item", result[id]);
        SetMediaItem(result[id]);
      } catch (error) {
        console.error("Error fetching data:", error);
        SetMediaItem({});
      }
    };
    fetchData();
  }, [id]);

  if (MediaItem) {
    return (
      <HelmetProvider>
        <Helmet>
          {/* Title for SEO */}
          <title>{`${MediaItem.title} - Taijiquan Academy`}</title>

          {/* Meta Description */}
          <meta
            name="description"
            content={`Bekijk het media-item: ${MediaItem.title} bij Taijiquan Academy. Leer meer over Taijiquan en onze evenementen, lessen, en workshops.`}
          />

          {/* Keywords (adjust based on the media content) */}
          <meta
            name="keywords"
            content={`Taijiquan, Tai Chi, media, video, evenement, les, workshop, Apeldoorn, ${MediaItem.title}`}
          />

          {/* Canonical Link */}
          <link
            rel="canonical"
            href={`https://www.taijiquanacademy.nl/media/${id}`}
          />

          {/* Open Graph Tags for Social Media Sharing */}
          <meta
            property="og:title"
            content={`${MediaItem.title} - Taijiquan Academy`}
          />
          <meta
            property="og:description"
            content={`Bekijk het media-item: ${MediaItem.title} bij Taijiquan Academy. Leer meer over Taijiquan en onze evenementen, lessen, en workshops.`}
          />
          <meta
            property="og:url"
            content={`https://www.taijiquanacademy.nl/media/${id}`}
          />
          <meta property="og:type" content="website" />

          {/* Structured Data (JSON-LD) for Search Engines */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "${MediaItem.title}",
              "description": "Bekijk het media-item: ${MediaItem.title} bij Taijiquan Academy. Leer meer over Taijiquan en onze evenementen, lessen, en workshops.",
              "thumbnailUrl": "${MediaItem.thumbnail}",
              "contentUrl": "${MediaItem.mediaUrl}",
              "uploadDate": "${MediaItem.uploadDate}",
              "duration": "PT1H",  // Example, change according to the media length
              "url": "https://www.taijiquanacademy.nl/media/${id}"
            }
            `}
          </script>
        </Helmet>

        {/* Media Item Component */}
        <MediaItemOverview mediaItem={MediaItem} />
      </HelmetProvider>
    );
  }

  return <div>Loading...</div>;
}

export default MediaItemPage;
