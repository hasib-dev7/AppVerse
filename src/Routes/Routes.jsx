import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import MobileApps from "../Pages/MobileApps";
import AppsDetailsPages from "../Pages/AppsDetailsPages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
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
    ],
  },
]);
export default router;
