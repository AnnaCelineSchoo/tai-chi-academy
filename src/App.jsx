import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import TarievenPage from "./pages/TarievenPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import LessenPage from "./pages/LessenPage.jsx";
import MediaItemPage from "./pages/MediaItemPage.jsx";
import ScrollToTop from "./layouts/ScrollToTop.jsx";
import AgendaPage from "./pages/AgendaPage.jsx";

const isDevelopment = import.meta.env.DEV; // Check if in development mode
const basename = isDevelopment ? "/" : "/tai-chi-academy/";

// todo:
// achtergrond contact niet goed
// maak agenda met lestijden en eventuele wokshops die gepland zijn
// maak functionaliteit om voor workshop in te schrijven
// add some security for bots in the form upload

function App() {
  console.log("Environment:", import.meta.env);
  console.log("Using basename:", basename);
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="lessen" element={<LessenPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="tarieven" element={<TarievenPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="mediaItem/:id" element={<MediaItemPage />} />
          <Route path="agenda" element={<AgendaPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
