import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">
          Taijiquan Academy &copy;{currentYear}
        </div>
        <div className="social d-flex justify-content-center">
          <Link
            className="mx-2 social-icon"
            to="https://www.youtube.com/@tai_chi_apeldoorn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </Link>
          <Link
            className="mx-5 social-icon"
            to="https://www.facebook.com/tai.chi.apeldoorn.hyg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            className="mx-2 social-icon"
            to="https://www.tiktok.com/tag/heyonggan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </Link>
        </div>

        <div className="image-wrapper-footer">
          <img
            className="img-fluid"
            src="/images/logos/Taiji-logo-rood.png"
            alt="meditating monk"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
