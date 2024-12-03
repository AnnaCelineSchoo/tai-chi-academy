import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    // Navbar shrink function
    const navbarShrink = () => {
      const navbarCollapsible = document.querySelector("#mainNav");
      if (!navbarCollapsible) return;

      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    // Add scroll event listener for navbar shrink
    document.addEventListener("scroll", navbarShrink);

    // Collapse responsive navbar when a nav link is clicked
    const navbarToggler = document.querySelector(".navbar-toggler");
    const responsiveNavItems = document.querySelectorAll(
      "#navbarResponsive .nav-link"
    );
    responsiveNavItems.forEach((item) =>
      item.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      })
    );

    // Initial check for navbar shrink
    navbarShrink();

    // Cleanup event listeners
    return () => {
      document.removeEventListener("scroll", navbarShrink);
      responsiveNavItems.forEach((item) =>
        item.removeEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        })
      );
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <img
          className="navbar-logo"
          src="images/taichilogo-removebg-preview.png"
          alt="taichi Academy Logo"
        />
        <Link className="navbar-brand" to="/">
          Taijiquan Academy
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lessen">
                Lessen
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/media">
                Media
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                Agenda
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/tarieven">
                Tarieven
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
