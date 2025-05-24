import React from "react";

function Logocard({ item, index }) {
  return (
    <li className=" mx-10">
      <img src={item.img} alt="" className="h-9" srcset="" />
    </li>
  );
}

export default Logocard;
