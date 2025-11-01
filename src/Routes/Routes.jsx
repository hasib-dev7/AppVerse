import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import MobileApps from "../Pages/MobileApps";
import AppsDetailsPages from "../Pages/AppsDetailsPages";
import Installation from "../Pages/Installation";
import AllError from "../Pages/ErrorPages/AllError";
import LoadingSpinner from "../Component/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <AllError></AllError>,
    hydrateFallbackElement: (
      <p>
        <LoadingSpinner></LoadingSpinner>
      </p>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <MobileApps></MobileApps>,
      },
      {
        path: "/mobileapps/:id",
        element: <AppsDetailsPages></AppsDetailsPages>,
        
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
    ],
  },
]);
export default router;
