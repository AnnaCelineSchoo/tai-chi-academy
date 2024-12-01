import { Link } from "react-router-dom";

function MediaEventCard({ mediaItem, mediaItemIndex }) {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card border-0 shadow-sm">
          <img
            src={mediaItem.image}
            className="card-img-top"
            alt="Activity 1"
          />
          <div className="card-body">
            <h5 className="card-title">{mediaItem.title}</h5>
            <p className="card-text">
              {mediaItem.description.substring(0, 80) + "..."}
            </p>
            <Link
              className="btn btn-outline-dark"
              to={`/mediaItem/${mediaItemIndex}`}
            >
              lees Meer
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaEventCard;
