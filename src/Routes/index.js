import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import privateRoutes from "./privateRoutes";

const ProtectRoute = ({ r, children }) => {
  const { UserDetails } = useSelector((state) => state.User);

  if (UserDetails) {
    if (r.roles === UserDetails.roles || r.roles === "all") {
      return children;
    } else {
      return <Navigate to="/dashboard/not-access" replace />;
    }
  } else {
    return <Navigate to="/login" replace />;
  }
};

const getRoute = () => {
  const filterRoute = [];
  privateRoutes.map((r) => {
    r.element = <ProtectRoute r={r}>{r.element}</ProtectRoute>;
    filterRoute.push(r);
  });

  return {
    path: "/dashboard",
    element: <Layout />,
    children: filterRoute,
  };
};

export default getRoute;
