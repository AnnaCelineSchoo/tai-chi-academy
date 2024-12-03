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

      {/* Subsections */}
      <div className="container my-5">
        <h2 className="text-center mb-5 mt-5">Soorten Lespakketten</h2>
        <div className="row text-center mb-5">
          <div className="col-md-6 mb-4">
            <h3>Losse groepsles</h3>
            <p>
              Bij ons kun je een losse groepsles kopen als je nog niet zeker
              weet hoe vaak je wilt trainen of of je de uitdaging op de lange
              termijn wilt aangaan. Dit geeft je de flexibiliteit om de les
              eerst te ervaren zonder een langdurige verplichting. Je kunt de
              les dan eenmalig volgen op de datum die voor jou het beste
              uitkomt.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Groepslessen</h3>
            <p>
              Bij ons kun je groepslessen volgen op maandag, dinsdag en vrijdag.
              Hieronder kun je kiezen hoe vaak je wilt trainen. Daarnaast worden
              er vrije trainingen aangeboden op zondag en woensdag op een
              externe locatie. Met de verschillende groepsleslidmaatschappen ben
              je ook welkom bij deze trainingen.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Wedstrijd begeleiding</h3>
            <p>
              Sommige leden willen een stapje verder gaan en nemen deel aan
              wedstrijden. Onze wedstrijdbegeleiding biedt professionele
              ondersteuning voor deelnemers die zich voorbereiden op competitie.
              Dit omvat begeleiding tijdens de wedstrijd zelf, waarbij je ter
              plaatse wordt ondersteund door een coach die je helpt met
              strategieën en je mentaal voorbereidt. Vervoer naar de locatie
              wordt samen met andere deelnemers geregeld, zodat je je geen
              zorgen hoeft te maken over de logistiek. Daarnaast bieden we
              gerichte tips en extra aandacht tijdens de trainingen, specifiek
              gericht op het verbeteren van je prestaties voor aankomende
              wedstrijden.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Privé lessen</h3>
            <p>
              Onze privélessen bieden de mogelijkheid voor persoonlijke training
              op maat, waarbij we volledig inspelen op jouw behoeften en doelen.
              Of je nu specifieke technieken wilt verbeteren of meer
              persoonlijke aandacht nodig hebt, een privéles biedt de ideale
              omgeving om je vaardigheden snel te ontwikkelen. De lessen kunnen
              in blokken van minimaal 2 uur en maximaal 4 uur worden geboekt,
              zodat je de tijd hebt om intensief te trainen en optimaal te
              profiteren van de begeleiding.
            </p>
          </div>
        </div>
      </div>

      <section id="pricing" className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">1 Groepsles</h5>
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
                  <h5 className="card-title">1 Groepsles per Week</h5>
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

            {/* <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">2 Groepslessen per week</h5>
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
                  <h5 className="card-title">Onbeperkt Groepslessen</h5>
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
                    Onpekert Groepslessen en wedstrijd begeleiding
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
            </div> */}

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
