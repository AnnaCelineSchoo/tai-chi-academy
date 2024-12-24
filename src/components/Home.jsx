// import { Link } from "react-router-dom";

// import { HashLink } from "react-router-hash-link";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {" "}
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">Taijiquan Academy</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Empowering Mind, Body, and Spirit Through the Art of taijiquan
              </h2>
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("meerInformatie")}
              >
                Meer Informatie
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="about-section text-center" id="meerInformatie">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Welkom bij taijiquan Academy</h2>
              <p className="text-white-50">
                Bij taijiquan Academie bevorderen we gezondheid, innerlijke rust
                en vitaliteit door de oude kunst van taijiquan. Of je nu begint
                om balans te vinden of je praktijk wilt verdiepen, wij bieden
                een gastvrije ruimte voor iedereen. taijiquan combineert zachte
                bewegingen, ademhaling en mindfulness om stress te verminderen,
                de gezondheid te verbeteren en de energie van je lichaam te
                versterken. Onze ervaren instructeur begeleid je in zowel
                beginners- als gevorderdenlessen. Sluit je aan bij onze
                holistische gemeenschap en ontdek de diepere filosofie van Tai
                Chi. Begin je reis naar rust en energie bij de taijiquan
                Academie.
              </p>
            </div>
          </div>
          <div className="image-wrapper">
            <img
              className="img-fluid"
              src="images/logos/Taiji-logo-blauw-zwart.png"
              alt="meditating monk"
            />
          </div>
        </div>
        <div className="container my-5 ">
          {/* Embedded YouTube Video */}
          <div className="text-center mb-5">
            <h2 className="text-white">Ervaar taijiquan Academy</h2>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/3pNW8sTTxhI?si=V1CgKG0JM-S2hcXb"
                title="taijiquan Event Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section class="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="images/D.Wolff_.jpg"
                alt="..."
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>De Instructeur</h4>
                <p className="text-black-50 mb-0">
                  Jarenlang heb ik met plezier verschillende vechtsporten
                  beoefend. Tegenwoordig richt ik mij met passie op het
                  verspreiden van taijiquan in het midden van Nederland. Ik
                  beschouw taijiquan als een perfecte balans tussen kracht en
                  elegantie. Het verbetert zowel het fysieke als het mentale
                  welzijn door langzame, gecontroleerde bewegingen die de geest
                  tot rust brengen en het lichaam versterken. taijiquan is voor
                  mij niet alleen een fysieke beoefening, maar ook een
                  levenswijze die, net als bij elke andere discipline, continu
                  kan worden verdiept. Het proces van leren stopt nooit, zolang
                  er maar passie, motivatie en toewijding zijn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
