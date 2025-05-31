import React from "react";

import Logo from "../Component/Home/Logo";
import Goals from "../Component/Singleservice/Goals";
import Deliver from "../Component/Singleservice/Deliver";
import UiServices from "../Component/Singleservice/UiServices";
import Process from "../Component/Singleservice/Process";
import Contact from "../Component/Home/Contact";
import Uibnr from "../Component/Singleservice/Uibnr";
import { useStore } from "../Store/Store";
import { useParams } from "react-router-dom";
function Servicedetailpage() {
  const { servicesdata } = useStore();
  const { service } = useParams();

  const serviceData = servicesdata[service];

  if (serviceData === null) {
    return <div> page 404 </div>;
  }

  return (
    <>
      <Uibnr />

      <Logo />
      <Goals />
      <Deliver />
      <UiServices />
      <Process />
      <Contact />
    </>
  );
}

export default Servicedetailpage;
