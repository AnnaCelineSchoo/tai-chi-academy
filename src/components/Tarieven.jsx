import { Link } from "react-router-dom";

function Tarieven() {
  return (
    <>
      <section className="about-section text-center" id="pricing">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Tarieven</h2>
              <p className="text-white-50">
                Ontgrendel je potentieel met onze op maat gemaakte
                trainingsplannen. Waar je ook staat in je fitnessreis, wij
                hebben iets voor jou. Van losse lessen tot langdurige trajecten,
                onze transparante prijzen zorgen voor flexibiliteit en waarde
                voor iedereen. Doe met ons mee en ervaar deskundige coaching,
                motiverende groepssessies en een plan dat met je meegroeit. Zet
                vandaag de eerste stap en kies de optie die bij jouw doelen
                past. Of het nu gaat om incidentele training of onbeperkte
                toegang, wij staan voor je klaar!
              </p>
              <Link className="btn btn-primary" to="/contact">
                Gratis proefles
              </Link>
              {/* <p className="text-white-50">
                Unlock your potential with our tailored training plans. No
                matter where you are in your fitness journey, we’ve got
                something for you. From single lessons to long-term commitments,
                our transparent pricing ensures flexibility and value for
                everyone. Join us to experience expert coaching, motivating
                group sessions, and a plan that grows with you. Take the first
                step today, and choose the option that fits your goals. Whether
                it's occasional training or unlimited access, we’ve got you
                covered!
              </p> */}
            </div>
          </div>
          {/* <img
            class="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmZToyr41om8dizd72xZPgvNVxL0YgPONig&s"
            alt="meditating monk"
          /> */}
        </div>
      </section>

      <section id="pricing" className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">1 Groupsles</h5>
                  <h2 className="card-price">
                    €9,99<span className="text-muted fs-6">/les</span>
                  </h2>
                  <p className="card-text">
                    Perfect voor als je nog niet zeker weet hoe veel tijd je
                    hebt om te trainen.
                  </p>
                  <ul className="list-unstyled">
                    <li>1 Les</li>
                    <li>Dag naar keuze</li>
                    <li>Deelname aan 1 groepstraining</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">
                    1 Groepsles per Week per Kwartaal
                  </h5>
                  <h2 className="card-price">
                    €79,99<span className="text-muted fs-6">/kwartaal</span>
                  </h2>
                  <p className="card-text">
                    Geweldig voor routine en scherp geprijsd, voor wanneer je
                    zeker weet dat je regelmatig wilt trainen.
                  </p>
                  <ul className="list-unstyled">
                    <li>1 les per week</li>
                    <li>Groepstraining</li>
                    <li>
                      Toegang tot 1 groepstraining per week voor een kwartaal
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Twee Groepslessen per week per Kwartaal
                  </h5>
                  <h2 className="card-price">
                    €99,99<span className="text-muted fs-6">/kwartaal</span>
                  </h2>
                  <p className="card-text">
                    Geweldig voor routine en scherp geprijsd, voor wanneer je
                    zeker weet dat je twee keer per week wilt trainen.
                  </p>
                  <ul className="list-unstyled">
                    <li>2 lessen per week</li>
                    <li>Groepstraining</li>
                    <li>
                      Toegang tot 2 groepstrainingen per week voor een kwartaal
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Onbeperkt Groepslessen per Kwartaal
                  </h5>
                  <h2 className="card-price">
                    €119,99<span className="text-muted fs-6">/kwartaal</span>
                  </h2>
                  <p className="card-text">
                    Perfect voor wie onbeperkt wil trainen en zijn vaardigheden
                    continu wil verbeteren.
                  </p>
                  <ul className="list-unstyled">
                    <li>Onbeperkt</li>
                    <li>Groepstraining</li>
                    <li>
                      Onbeperkte toegang tot groepstrainingen voor een kwartaal
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Onpekert wedstrijd per Kwartaal
                  </h5>
                  <h2 className="card-price">
                    €179,99<span className="text-muted fs-6">/kwartaal</span>
                  </h2>
                  <p className="card-text">
                    Ideaal voor wie onbeperkt wil trainen en professionele
                    begeleiding zoekt voor wedstrijden en competities.
                  </p>
                  <ul className="list-unstyled">
                    <li>Onbeperkt volgen van lessen</li>
                    <li>persoonelijke begeleiding voor wedstrijden</li>
                    <li>
                      Onbeperkte toegang tot groepstrainingen voor een kwartaal
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">Privé Les</h5>
                  <h2 className="card-price">
                    €29,99
                    <span className="text-muted fs-6">/uur</span>
                  </h2>
                  <p className="card-text">
                    Ideaal voor persoonlijke aandacht, voor trainingssessies op
                    maat van jouw behoeften.
                  </p>
                  <ul className="list-unstyled">
                    <li>1 uur privé les</li>
                    <li>Persoonlijke aandacht</li>
                    <li>Les op maat, afgestemd op jouw behoeften.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tarieven;
