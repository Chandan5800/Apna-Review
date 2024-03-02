import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
// import FormLayout from "../Pages/FormLayouts/FormLayouts";
// import Dashboard1 from "../Pages/dashboards/Dashboard1";
// import FullLayout from "../Pages/FullLayout/FullLayout";

const FullLayout = lazy(() => import("../components/AdminPage/FullLayout"));
/****End Layouts*****/

/*****Pages******/
const Dashboard = lazy(() => import("../components/AdminPage/Dashboard1"));

// add product
const AddProduct = lazy(() => import("..//components/AdminPage/AddProduct"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/admin-dashboard",
    element: <FullLayout />,
    children: [
      { path: "admin-dashboard", element: <Navigate to="dashboards" /> },
      { path: "dashboards", element: <Dashboard /> },
      { path: "add-product", element: <AddProduct /> },
    ],
  },
];

export default ThemeRoutes;
