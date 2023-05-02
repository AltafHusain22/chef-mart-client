/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const chefDetalslayout = () => {
  return (
    <div>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default chefDetalslayout;
