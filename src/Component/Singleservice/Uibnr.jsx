import React from "react";
import Uibnrcard from "../../Utilites/Uibnrcard";
import { Uibnrdata } from "../../Store/Uibnrdata";
import { useStore } from "../../Store/Store";
import { useParams } from "react-router-dom";

function Uibnr() {
  const { servicesdata } = useStore();
  const { service } = useParams();

  const item = servicesdata[service].bnr;

  return (
    <div classname=" ">
      <Uibnrcard item={item} />
    </div>
  );
}

export default Uibnr;
