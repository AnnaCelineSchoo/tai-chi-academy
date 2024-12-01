import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure this is the first CSS import
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure for interactive components
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/index.css"; // Your custom styles should come last
// import "./assets/styles/navbar.css";
// import "./assets/styles/homepage.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
