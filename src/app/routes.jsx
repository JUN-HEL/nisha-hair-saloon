import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Pages
import HomePage from "../pages/Home/HomePage";
import BoysPage from "../pages/Boys/BoysPage";
import GirlsPage from "../pages/Girls/GirlsPage";
import Services from "../pages/Services/Services";
import GalleryPage from "../pages/Gallery/GalleryPage";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import FAQPage from "../pages/FAQ/FAQ"; // ✅ New

// Service Sections
import Boys from "../pages/Services/sections/Boys";
import Girls from "../pages/Services/sections/Girls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "boys",
        element: <BoysPage />,
      },

      {
        path: "girls",
        element: <GirlsPage />,
      },

      // Services
      {
        path: "services",
        element: <Services />,
      },

      {
        path: "services/boys",
        element: <Boys />,
      },

      {
        path: "services/girls",
        element: <Girls />,
      },

      // Gallery
      {
        path: "gallery",
        element: <GalleryPage />,
      },

      // FAQ
      {
        path: "faq",
        element: <FAQPage />,
      },

      // Other Pages
      {
        path: "about",
        element: <AboutPage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router; 