import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import TarievenPage from "./pages/TarievenPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import LessenPage from "./pages/LessenPage.jsx";

// todo:
// achtergrond contact niet goed
// vertaal alles naar Nederlands
// make repeatable component for media (json?)
// make page to show full media
// maak agenda met lestijden en eventuele wokshops die gepland zijn
// maak functionaliteit om voor workshop in te schrijven
// add some security for bots in the form upload

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/lessen" element={<LessenPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/tarieven" element={<TarievenPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
