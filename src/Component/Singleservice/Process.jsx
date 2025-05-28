import React from "react";
import Processcard from "../../Utilites/Processcard";
import { data } from "../../Store/Processdata";

function Process() {
  return (
    <>
      <div className="bg-[#f2f2f2] py-20 my-20 max-sm:px-2 lg:p-2">
        <div className="container mx-auto">
          <h1 className="text-[3rem] text-[#1b1b1b] font-bold leading-tight max-sm:text-3xl">
            The process behind
            <br />
            our UI UX design
          </h1>

          <ul className=" flex overflow-hidden justify-between mt-10 gap-5">
            {data.map((item, index) => (
              <Processcard key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Process;
