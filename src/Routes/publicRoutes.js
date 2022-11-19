import Error from "../pages/Error";
import Login from "../pages/Public/Login";
import Register from "../pages/Public/Register";

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default publicRoutes;
