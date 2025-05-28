import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Component/Home/Nav";
import Footer from "../Component/Home/Footer";
function Mainlayput() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Mainlayput;
