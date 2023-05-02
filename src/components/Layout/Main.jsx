/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Nav from "../shared/Header/nav";

const Main = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
