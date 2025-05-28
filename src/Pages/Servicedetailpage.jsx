import React from "react";
import Banner from "../Component/Singleservice/Banner";
import Logo from "../Component/Home/Logo";
import Goals from "../Component/Singleservice/Goals";
import Deliver from "../Component/Singleservice/Deliver";
import UiServices from "../Component/Singleservice/UiServices";
import Process from "../Component/Singleservice/Process";
import Contact from "../Component/Home/Contact"
function Servicedetailpage() {
  return (
    <>
      <Banner />
      <Logo />
      <Goals />
      <Deliver />
      <UiServices />
      <Process />
      <Contact/>
    </>
  );
}

export default Servicedetailpage;
