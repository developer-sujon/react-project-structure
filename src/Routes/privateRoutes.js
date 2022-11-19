import Error from "../pages/Error";
import NotAccess from "../pages/NotAccess";
import Dashboard from "../pages/Private/Dashboard";
import Product from "../pages/Private/Product";
import Sell from "../pages/Private/Sell";
import User from "../pages/Private/User";

const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    roles: "all",
  },
  {
    path: "user",
    element: <User />,
    roles: "all",
  },
  {
    path: "product",
    element: <Product />,
    roles: "manager",
  },
  {
    path: "sell",
    element: <Sell />,
    roles: "sellar",
  },
  {
    path: "not-access",
    element: <NotAccess />,
    roles: "all",
  },
  {
    path: "*",
    element: <Error />,
    roles: "all",
  },
];

export default privateRoutes;
