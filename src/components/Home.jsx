import { Link } from "react-router-dom";

//import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <>
      {" "}
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">Tai Chi Academy</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Empowering Mind, Body, and Spirit Through the Art of Tai Chi
              </h2>
              <Link className="btn btn-primary" to="/Lessen">
                Meer Informatie
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Welkom bij Tai Chi Academy</h2>
              <p className="text-white-50">
                Bij Tai Chi Academie bevorderen we gezondheid, innerlijke rust
                en vitaliteit door de oude kunst van Tai Chi. Of je nu begint om
                balans te vinden of je praktijk wilt verdiepen, wij bieden een
                gastvrije ruimte voor iedereen. Tai Chi combineert zachte
                bewegingen, ademhaling en mindfulness om stress te verminderen,
                de gezondheid te verbeteren en de energie van je lichaam te
                versterken. Onze ervaren instructeur begeleid je in zowel
                beginners- als gevorderdenlessen. Sluit je aan bij onze
                holistische gemeenschap en ontdek de diepere filosofie van Tai
                Chi. Begin je reis naar rust en energie bij de Tai Chi Academie.
              </p>

              {/* <h2 class="text-white mb-4">Welcome to the Tai Chi Academy</h2> */}
              {/* <p className="text-white-50">
                At the Tai Chi Academy, we are dedicated to promoting health,
                inner peace, and vitality through the ancient art of Tai Chi.
                Whether you're a beginner seeking balance and relaxation or an
                advanced practitioner looking to deepen your understanding, our
                academy offers a welcoming space for everyone. Why Choose Tai
                Chi? Tai Chi is a time-honored practice that harmonizes body,
                mind, and spirit. It combines gentle, flowing movements with
                focused breathing and mindfulness, providing benefits such as:
                Stress Reduction: Achieve calmness and clarity in your daily
                life. Improved Health: Boost flexibility, balance, and
                circulation. Energy Flow: Enhance your body's natural energy, or
                "Qi." What We Offer Expert Instructors: Guided by skilled
                teachers with years of experience. Comprehensive Classes: From
                beginner fundamentals to advanced techniques. Workshops &
                Events: Explore specialized forms and Tai Chi philosophy.
                Holistic Community: Join a supportive group of like-minded
                individuals. Whether you're here to nurture your health, find
                inner peace, or explore the deeper philosophy of Tai Chi, the
                Tai Chi Academy is the perfect place to begin or continue your
                journey. Step into a world of tranquility and energy. Let’s
                move, breathe, and grow together. Welcome to the Tai Chi
                Academy.
              </p> */}
            </div>
          </div>
          <img
            className="img-fluid"
            src="images/taichilogo-removebg-preview.png"
            alt="meditating monk"
          />
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
                  verspreiden van Tai Chi in het midden van Nederland. Ik
                  beschouw Tai Chi als een perfecte balans tussen kracht en
                  elegantie. Het verbetert zowel het fysieke als het mentale
                  welzijn door langzame, gecontroleerde bewegingen die de geest
                  tot rust brengen en het lichaam versterken. Tai Chi is voor
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
