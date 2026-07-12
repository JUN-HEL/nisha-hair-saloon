import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const BoysPage = lazy(() => import("../pages/Boys/BoysPage"));
const GirlsPage = lazy(() => import("../pages/Girls/GirlsPage"));
const Services = lazy(() => import("../pages/Services/Services"));
const GalleryPage = lazy(() => import("../pages/Gallery/GalleryPage"));
const AboutPage = lazy(() => import("../pages/About/AboutPage"));
const ContactPage = lazy(() => import("../pages/Contact/ContactPage"));

const Loader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#b58fa2] border-t-transparent" />
  </div>
);

const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: "boys",
        element: withSuspense(BoysPage),
      },
      {
        path: "girls",
        element: withSuspense(GirlsPage),
      },
      {
        path: "services",
        element: withSuspense(Services),
      },
      {
        path: "gallery",
        element: withSuspense(GalleryPage),
      },
      {
        path: "about",
        element: withSuspense(AboutPage),
      },
      {
        path: "contact",
        element: withSuspense(ContactPage),
      },
    ],
  },
]);

export default router;