import React from "react";
import Uicard from "../../Utilites/Uicard";
import { data } from "../../Store/Uidata";
import { useStore } from "../../Store/Store";
import { useParams } from "react-router-dom";

function UiServices() {

  const { servicesdata } = useStore();
  const { service } = useParams();

  const item = servicesdata[service].uixu; 

console.log(item);
  return (
    <>
      <div className="container mx-auto mb-10   max-sm:p-2 lg:p-2 relative overflow-hidden">
        <h1 className="text-[3rem] text-[#1b1b1b] font-bold leading-tight max-md:text-3xl">
         {item.head}
         
        </h1>
      </div>
      <ul className="  servs  ">
        
         {
          item.card.map((item, index) =>(
            <Uicard item={item} />
          ))
         }
        
       
      </ul>
    </>
  );
}

export default UiServices;
