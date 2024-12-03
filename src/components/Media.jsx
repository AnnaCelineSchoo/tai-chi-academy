import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MediaEventCard from "./MediaEventCard";

function Media() {
  const [MediaData, setMediaData] = useState([]);
  const [showAllMedia, setShowAllMedia] = useState(
    JSON.parse(localStorage.getItem("showAllMedia")) || false // Retrieve state from localStorage
  );

  const location = useLocation(); // React Router hook to access location

  // Fetch data
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
        setMediaData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMediaData([]);
      }
    };
    fetchData();
  }, []);

  // Handle scrolling when data is loaded and hash changes
  useEffect(() => {
    if (MediaData.length > 0 && location.hash) {
      const id = location.hash.substring(1); // Remove the '#' from the hash
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [MediaData, location.hash]); // Re-run when data is loaded or hash changes

  // Store the "Show All" state in localStorage
  const handleShowAllToggle = () => {
    const newState = !showAllMedia;
    setShowAllMedia(newState);
    localStorage.setItem("showAllMedia", JSON.stringify(newState)); // Save to localStorage
  };

  return (
    <>
      {/* {introduction section} */}
      <section className="about-section text-center" id="pricing">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Media</h2>
              <p className="text-white-50">
                Welkom op onze Media-pagina, waar je alles kunt vinden over de
                spannende wereld van taijiquan evenementen! Hier delen we
                informatie over aankomende competities, workshops, demonstraties
                en andere speciale evenementen. Of je nu een beginnende
                beoefenaar bent die zijn vaardigheden wil verbeteren of een
                ervaren taijiquan-liefhebber die op zoek is naar nieuwe
                uitdagingen, deze pagina biedt jou de laatste updates. We
                moedigen iedereen aan om deel te nemen, te leren en zich te
                verdiepen in de rijke traditie van taijiquan door middel van
                hands-on ervaring. Van regionale competities tot internationale
                workshops, blijf op de hoogte van de mogelijkheden om je kennis
                en praktijk te verdiepen en deel uit te maken van onze groeiende
                taijiquan-gemeenschap.
              </p>
              {/* <Link className="btn btn-primary" to="#about">
                Ervaringen
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        {/* Embedded YouTube Video */}
        <div className="text-center mb-5">
          <h2 className="text-gray">Ervaar taijiquan Academy</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/3pNW8sTTxhI?si=V1CgKG0JM-S2hcXb"
              title="taijiquan Event Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Subsections */}
        <h2 className="text-center mb-5">taijiquan Evenementen</h2>
        <div className="row text-center mb-5">
          <div className="col-md-6 mb-4">
            <h3>Competities</h3>
            <p>
              Ontdek de kunst van taijiquan door middel van nationale en
              internationale competities, waar de beste beoefenaars samenkomen
              om hun vaardigheden te meten.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Workshops</h3>
            <p>
              Neem deel aan workshops onder leiding van wereldberoemde Tai
              Chi-meesters en verdiep je begrip van deze eeuwenoude kunst.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Extra Trainingen</h3>
            <p>
              Versterk kennis met extra trainingen die gericht zijn op
              persoonlijke begeleiding, zodat je je vaardigheden verder kunt
              verfijnen.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Prestaties in het Verleden</h3>
            <p>
              Verken ons archief van eerdere taijiquan-toernooien, workshops en
              evenementen die in de loop der jaren zijn gevierd.
            </p>
          </div>
        </div>
        {/* activity secction */}
        <div className="row">
          {/* Render media items */}
          {(showAllMedia ? MediaData : MediaData.slice(0, 3)).map(
            (mediaItem, index) => (
              <MediaEventCard
                id={`mediaitem-${mediaItem.id}`}
                key={mediaItem.id}
                mediaItem={mediaItem}
                mediaItemIndex={index}
              />
            )
          )}
        </div>

        <div className="text-center mt-5">
          {/* Toggle button to show all or some items */}
          <button onClick={handleShowAllToggle} className="btn btn-primary">
            {showAllMedia ? "Minder" : "Meer"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Media;
