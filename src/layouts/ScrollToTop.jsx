import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation(); // Now useLocation works as it's inside the Router

  useEffect(() => {
    // Scroll to the top of the page every time the route changes
    window.scrollTo(0, 0);
  }, [location]); // Triggered when location changes

  return null; // No UI for this component
}

export default ScrollToTop;
