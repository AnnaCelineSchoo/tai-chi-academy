function Agenda() {
  return (
    <>
      {/* {introduction section} */}
      <section className="about-section text-center" id="pricing">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Agenda</h2>
              <p className="text-white-50">
                Bekijk hieronder de actuele trainingsagenda met data en tijden
                van onze lessen en workshops, georganiseerd door Taijiquan
                Academy. Onze reguliere lessen vinden meestal plaats op
                vrijdagavond van 20:00 tot 23:00. Raadpleeg de agenda voor
                specifieke details en eventuele wijzigingen.
              </p>
              {/* <Link className="btn btn-primary" to="#about">
                Ervaringen
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      <div className="video-container">
        <iframe
          src={import.meta.env.VITE_AGENDA_URL}
          width="800"
          height="600"
          framebBorder="0"
        ></iframe>
      </div>
    </>
  );
}

export default Agenda;
