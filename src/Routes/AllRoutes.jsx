import React from "react";
import { Routes, Route } from "react-router-dom";
import Formheader from "../Components/Formheader";
import HomepageRoute from "./HomepageRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomepageRoute />}></Route>
        <Route path="/quetion" element={<Formheader />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
