import { useRoutes } from "react-router-dom";

const Router = ({ allRoutes }) => {
  const route = useRoutes(allRoutes);

  return route;
};

export default Router;
