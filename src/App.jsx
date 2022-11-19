//External Lib Import
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

//Internal Lib Import
import getRoute from "./Routes";
import publicRoutes from "./Routes/publicRoutes";
import Router from "./Routes/Router";

const App = () => {
  const [allRoute, setAllRoute] = useState([...publicRoutes]);

  useEffect(() => {
    const route = getRoute();
    setAllRoute([...allRoute, route]);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Router allRoutes={allRoute} />
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
