// AppWrapper.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";

const AppWrapper = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("id");
  alert(userName)

  return (
    <Routes>
      <Route path="/*" element={<Home userName={userName} />} />
    </Routes>
  );
};

export default AppWrapper;
