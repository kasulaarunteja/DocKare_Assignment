import React from "react";
import { Routes, Route } from "react-router-dom";
import FormRoues from "./FormRoues";
import HomepageRoute from "./HomepageRoute";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomepageRoute />}></Route>
        <Route path="/form/:id" element={<FormRoues/>}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
