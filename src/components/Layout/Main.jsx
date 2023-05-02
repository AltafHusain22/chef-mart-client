/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Nav from "../shared/Header/nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
