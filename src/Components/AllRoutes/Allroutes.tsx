import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Create from "../Auth/Create/Create";
import Homescreen from "../Homescreen/Homescreen";
import Dashboard from "../DashBoard/Dashboard";
import SavingsDashboard from "../SavingsDashboard/SavingsDashboard";
import Piggybank from "../SavingsDashboard/Piggybank";
import Flex from "../SavingsDashboard/Flex";
import Safelock from "../SavingsDashboard/Safelock";
import Target from "../SavingsDashboard/Target";

const Allroutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/register",
      element: <Create />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return element;
};

export default Allroutes;
