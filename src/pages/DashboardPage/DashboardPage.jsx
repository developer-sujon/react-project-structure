//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const Dashboard = lazy(() => import("../../components/Dashboard/Dashboard"));

const DashboardPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Dashboard />
    </Suspense>
  );
};

export default DashboardPage;
