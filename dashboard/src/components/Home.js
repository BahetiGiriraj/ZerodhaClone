import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useLocation } from "react-router-dom";

const Home = ({userName}) => {
    
  return (
    <>
      <TopBar uName={userName}/>
      <Dashboard />
    </>
  );
};

export default Home;
