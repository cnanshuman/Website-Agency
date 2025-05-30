import React from "react";
import Uicard from "../../Utilites/Uicard";
import { data } from "../../Store/Uidata";

function UiServices() {
  return (
    <>
      <div className="container mx-auto mb-10   max-sm:p-2 lg:p-2 relative overflow-hidden">
        <h1 className="text-[3rem] text-[#1b1b1b] font-bold leading-tight max-md:text-3xl">
          Our core UI/UX services
          <br />
          for B2B to SaaS
        </h1>
      </div>
      <ul className="  servs  ">
        {data.map((item, index) => (
          <Uicard Key={index} item={item} />
        ))}
       
      </ul>
    </>
  );
}

export default UiServices;
