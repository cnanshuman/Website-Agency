import React from "react";
import Goalcard from "../../Utilites/Goalcard";
import { data } from "../../Store/Goaldata";

function Goals() {
  return (
    <>
      <div className="container mx-auto max-sm:p-2 max-md:p-2 lg:p-2">
        <div className="flex justify-between">
          {data.map((item, index) =>
            <Goalcard key={index} item={item} />            
          )}
        </div>
      </div>
    </>
  );
}

export default Goals;
