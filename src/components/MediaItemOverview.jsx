import { Link } from "react-router-dom";
function MediaItemOverview({ mediaItem }) {
  return (
    <>
      {/* {introduction section} */}
      <section className="about-section text-center" id="pricing">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              {mediaItem.title && (
                <h2 className="text-white mb-4">{mediaItem.title}</h2>
              )}
              {mediaItem.date && (
                <p className="text-white-50">{mediaItem.date}</p>
              )}
              {mediaItem.description && (
                <p className="text-white-50">{mediaItem.description}</p>
              )}
              <Link className="btn btn-primary" to="/media">
                terug naar media
              </Link>
              {mediaItem.image && (
                <img className="img-fluid mt-5" src={mediaItem.image} alt="" />
              )}
            </div>
          </div>
        </div>
      </section>

      {mediaItem.videoUrl && (
        <div className="container my-5">
          <div className="text-center mb-5">
            <h2 className="text-gray mb-5">Hoe hebben wij het gehad?</h2>
            <div className="video-container">
              <iframe
                src={mediaItem.videoUrl}
                title="taijiquan Event Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MediaItemOverview;
