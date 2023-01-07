import React from "react";
import Homepage from "../Components/Homepage";
import Navbar from "../Components/Navbar";
import Template from "../Components/Template";

const HomepageRoute = () => {
  return (
    <>
      <Navbar />
      <Template />
      <Homepage />
    </>
  );
};

export default HomepageRoute;
