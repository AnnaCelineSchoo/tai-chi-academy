import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      } catch {
        console.error("Error fetching data:", error);
        setExcerssetMediaDataises([]);
      }
    };
    fetchData();
  }, []);

  if (MediaItem) {
    return (
      <>
        <MediaItemOverview mediaItem={MediaItem} />
      </>
    );
  }
}

export default MediaItemPage;
