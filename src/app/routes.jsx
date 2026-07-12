import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";
import BoysPage from "../pages/Boys/BoysPage";
import GirlsPage from "../pages/Girls/GirlsPage";
import Services from "../pages/Services/Services";
import GalleryPage from "../pages/Gallery/GalleryPage";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "boys", element: <BoysPage /> },
      { path: "girls", element: <GirlsPage /> },

      { path: "services", element: <Services /> },

      { path: "gallery", element: <GalleryPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;